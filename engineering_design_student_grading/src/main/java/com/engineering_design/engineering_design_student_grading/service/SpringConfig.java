package com.engineering_design.engineering_design_student_grading.service;

import com.engineering_design.engineering_design_student_grading.controller.Controller;
import com.engineering_design.engineering_design_student_grading.model.Student;
import com.engineering_design.engineering_design_student_grading.repository.CheckStudentRepository;
import com.engineering_design.engineering_design_student_grading.repository.GradeRepository;
import com.engineering_design.engineering_design_student_grading.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SpringConfig {
    private StudentRepository studentRepository;
    private GradeRepository gradeRepository;
    private CheckStudentRepository checkStudentRepository;

    @Autowired
    public SpringConfig(StudentRepository studentRepository, GradeRepository gradeRepository, CheckStudentRepository checkStudentRepository) {
        this.studentRepository = studentRepository;
        this.gradeRepository = gradeRepository;
        this.checkStudentRepository = checkStudentRepository;
    }


    @Bean
    public StudentService studentService() {
        return new StudentService(studentRepository);
    }

    @Bean
    public GradeService gradeService() {
        return new GradeService(gradeRepository);
    }

    @Bean
    public CheckStudentService checkStudentService() {
        return new CheckStudentService(checkStudentRepository);
    }
}
