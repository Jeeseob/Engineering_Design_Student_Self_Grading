package com.engineering_design.engineering_design_student_grading.controller;

import com.engineering_design.engineering_design_student_grading.model.Student;
import com.engineering_design.engineering_design_student_grading.model.Grade;
import com.engineering_design.engineering_design_student_grading.service.GradeService;
import com.engineering_design.engineering_design_student_grading.service.StudentService;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import org.apache.tomcat.util.json.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@org.springframework.stereotype.Controller
public class Controller {

    private final StudentService studentService;
    private final GradeService gradeService;
    ArrayList<Grade> grades;

    @Autowired
    public Controller(StudentService studentService, GradeService gradeService) {
        this.studentService = studentService;
        this.gradeService = gradeService;
    }

    @GetMapping("/")
    public String home() {
        return "home";
    }

    //@PostMapping("/grade/add")
    @RequestMapping(value = "/grade/add", method=RequestMethod.POST)
    public void addData(HttpServletResponse response, @RequestBody DataForm form) throws Exception {

        // 받아온 데이터 확인하는 로직 만들 것

        Gson gson = new Gson();

        // 받아온 데이터로 Student 객체에 정보 저장 후, 테이블에 매핑
        Student student = new Student();
        student.setStudentNumber(Long.parseLong(form.getStudentNumber()));
        student.setName(form.getName());
        student.setPhoneNumber(form.getPhoneNumber());

        studentService.addStudent(student);

        SetGrade setGrade = new SetGrade();
        grades = setGrade.setGrade(form.getGradeForms(),form.getStudentNumber());
        for(Grade grade : grades) {
            gradeService.addGrade(grade);
        }
        Map<String, Object> result = new HashMap<String, Object>();
        result.put("result", "success");
        result.put("studentNumber", form.getStudentNumber());

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
        model.addAttribute("students", students); //model을 통째로 넘긴다.
        return "studentList";
    }

}

