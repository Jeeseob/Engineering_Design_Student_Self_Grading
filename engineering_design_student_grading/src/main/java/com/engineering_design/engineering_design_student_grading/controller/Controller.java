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

        //점수 확인 (1,3,5 중 하나여야 함)
        SetGrade setGrade = new SetGrade();
        Boolean checkGrade = true;
        grades = setGrade.setGrade(form.getGradeForms(), form.getStudentNumber());

        for (Grade grade : grades) {
            if(gradeService.checkGrade(grade)){
                result.put("result", "noPoint");
                checkGrade = false;
                break;
            }
        }

        // 학생리스트에 입력받은 학번이 존재하는 경우
        Boolean finalCheckGrade = checkGrade;
        checkStudentService.findOne(Long.parseLong(form.getStudentNumber())).ifPresentOrElse(checkStudent -> {
            // 학생 리스트의 내용과 이름, 전화번호가 일치하는 경우
            if (finalCheckGrade) {
                if (checkStudent.getName().equals(form.getName()) && checkStudent.getPhoneNumber().equals(form.getPhoneNumber())) {
                    // 이미 점수를 제출한 학생인 경우
                    if (studentService.findTrue(Long.parseLong(form.getStudentNumber()))) {
                        //update 처리
                        result.put("result", "update");
                    }
                    // add 로직
                    else {
                        // 받아온 데이터로 Student 객체에 정보 저장 후, 테이블에 매핑
                        Student student = new Student();
                        student.setStudentNumber(Long.parseLong(form.getStudentNumber()));
                        student.setName(form.getName());
                        student.setPhoneNumber(form.getPhoneNumber());

                        //SetGrade setGrade = new SetGrade();
                        grades = setGrade.setGrade(form.getGradeForms(), form.getStudentNumber());

                        studentService.addStudent(student);

                        for (Grade grade : grades) {
                            gradeService.addGrade(grade);
                        }
                        result.put("result", "success");
                    }
                }
                else {
                    // 학생리스트에 입력받은 학번은 존재하지만, 이름과, 전화번호가 일치하지 않는 경우
                    result.put("result", "noData");
                }
            }
        }, ()-> {
            // 학생리스트에 입력받은 학번이 존재하지 않는 경우
                result.put("result", "noData");
        });
        // json response result 값을 기준으로 다음 동작
        response.getWriter().println(gson.toJson(result));
    }

    @RequestMapping(value = "/grade/update", method=RequestMethod.POST)
    public void updateData(HttpServletResponse response, @RequestBody DataForm form) throws Exception {

        Gson gson = new Gson();
        Map<String, Object> result = new HashMap<String, Object>();
        result.put("studentNumber", form.getStudentNumber());

        if (studentService.findTrue(Long.parseLong(form.getStudentNumber()))) {
            //update 처리
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

//    @GetMapping("/images")
//    public ResponseEntity<Resource> image(){
//        Resource resource = new FileSystemResource("/resources/images/grading-standard.png");
//        return new ResponseEntity<Resource> (resource, new HttpHeaders(), HttpStatus.OK);
//    }

    @GetMapping("/students")
    public String list(Model model) {
        List<Student> students = studentService.findStudent();
        model.addAttribute("students", students); //model을 통째로 넘긴다.
        return "studentList";
    }

}

