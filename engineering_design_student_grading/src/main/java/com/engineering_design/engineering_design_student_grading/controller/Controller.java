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
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@org.springframework.stereotype.Controller
public class Controller {

    private final StudentService studentService;
    private final GradeService gradeService;

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

        System.out.println(form.getStudentNumber());
        // 받아온 데이터 확인하는 로직 만들 것
        Gson gson = new Gson();

        Student student = new Student();
        Grade grade = new Grade();

        student.setStudentNumber(Long.parseLong(form.getStudentNumber()));
        student.setName(form.getName());
        student.setPhoneNumber(form.getPhoneNumber());
        studentService.addStudent(student);

        grade.setStudentNumber(Long.parseLong(form.getStudentNumber()));
        grade.setaPoint1_1( Integer.parseInt(form.getaPoint1_1()));
        grade.setbPoint1_1( Integer.parseInt(form.getbPoint1_1()));
        grade.setcPoint1_1( Integer.parseInt(form.getcPoint1_1()));
        grade.setdPoint1_1( Integer.parseInt(form.getdPoint1_1()));

        gradeService.addGrade(grade);

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

