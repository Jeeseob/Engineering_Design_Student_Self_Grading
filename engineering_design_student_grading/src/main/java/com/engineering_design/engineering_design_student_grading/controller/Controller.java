package com.engineering_design.engineering_design_student_grading.controller;

import com.engineering_design.engineering_design_student_grading.model.Student;
import com.engineering_design.engineering_design_student_grading.model.Grade;
import com.engineering_design.engineering_design_student_grading.service.CheckStudentService;
import com.engineering_design.engineering_design_student_grading.service.GradeService;
import com.engineering_design.engineering_design_student_grading.service.StudentService;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.nio.charset.StandardCharsets;
import java.util.*;

@org.springframework.stereotype.Controller
public class Controller {

    private final StudentService studentService;
    private final GradeService gradeService;
    private final CheckStudentService checkStudentService;
    ArrayList<Grade> grades;
    Boolean checkGrade;

    public Controller(StudentService studentService, GradeService gradeService, CheckStudentService checkStudentService) {
        this.studentService = studentService;
        this.gradeService = gradeService;
        this.checkStudentService = checkStudentService;
    }

    @Autowired


    @GetMapping("/")
    public String home() {
        return "home";
    }


    @RequestMapping(value = "/grade/add", method=RequestMethod.POST)
    public void addData(HttpServletResponse response, @RequestBody DataForm form) throws Exception {

        Gson gson = new Gson();
        Map<String, Object> result = new HashMap<String, Object>();
        result.put("studentNumber", form.getStudentNumber());

        //?????? ?????? (1,3,5 ??? ???????????? ???)
        SetGrade setGrade = new SetGrade();
        checkGrade = true;
        grades = setGrade.setGrade(form.getGradeForms(), form.getStudentNumber());

        for (Grade grade : grades) {
            if(gradeService.checkGrade(grade)){
                result.put("result", "noPoint");
                checkGrade = false;
                break;
            }
        }

        // ?????????????????? ???????????? ????????? ???????????? ??????
        Boolean finalCheckGrade = checkGrade;
        checkStudentService.findOne(Long.parseLong(form.getStudentNumber())).ifPresentOrElse(checkStudent -> {
            // ?????? ???????????? ????????? ??????, ??????????????? ???????????? ??????
            if (finalCheckGrade) {
                if (checkStudent.getName().equals(form.getName()) && checkStudent.getPhoneNumber().equals(form.getPhoneNumber())) {
                    // ?????? ????????? ????????? ????????? ??????
                    if (studentService.findTrue(Long.parseLong(form.getStudentNumber()))) {
                        //update ??????
                        result.put("result", "update");
                    }
                    // add ??????
                    else {
                        // ????????? ???????????? Student ????????? ?????? ?????? ???, ???????????? ??????
                        Student student = new Student();
                        student.setStudentNumber(Long.parseLong(form.getStudentNumber()));
                        student.setName(form.getName());
                        student.setPhoneNumber(form.getPhoneNumber());

                        //SetGrade setGrade = new SetGrade();
                        //grades = setGrade.setGrade(form.getGradeForms(), form.getStudentNumber());

                        studentService.addStudent(student);

                        for (Grade grade : grades) {
                            gradeService.addGrade(grade);
                        }
                        result.put("result", "success");
                    }
                }
                else {
                    // ?????????????????? ???????????? ????????? ???????????????, ?????????, ??????????????? ???????????? ?????? ??????
                    result.put("result", "noData");
                }
            }
        }, ()-> {
            // ?????????????????? ???????????? ????????? ???????????? ?????? ??????
                result.put("result", "noData");
        });
        // json response result ?????? ???????????? ?????? ??????
        response.getWriter().println(gson.toJson(result));
    }

    @RequestMapping(value = "/grade/update", method=RequestMethod.POST)
    public void updateData(HttpServletResponse response, @RequestBody DataForm form) throws Exception {

        Gson gson = new Gson();
        Map<String, Object> result = new HashMap<String, Object>();
        result.put("studentNumber", form.getStudentNumber());

        if (studentService.findTrue(Long.parseLong(form.getStudentNumber()))) {
            //update ??????
            SetGrade setGrade = new SetGrade();
            grades = setGrade.setGrade(form.getGradeForms(), form.getStudentNumber());

            for (Grade grade : grades) {
                gradeService.updateGrade(grade, Long.parseLong(form.getStudentNumber()), grade.getTeam());
            }
            result.put("result", "success");
        }
        else {
            result.put("result", "error");
        }
        response.getWriter().println(gson.toJson(result));
    }


    @GetMapping("/success")
    public String success() {
        return "result/success";
    }

    @GetMapping("/new")
    public String newGrade() {
        return "grades/grade";
    }

    @GetMapping("/students")
    public String list(Model model) {
        List<Student> students = studentService.findStudent();
        model.addAttribute("students", students); //model??? ????????? ?????????.
        return "studentList";
    }
}

