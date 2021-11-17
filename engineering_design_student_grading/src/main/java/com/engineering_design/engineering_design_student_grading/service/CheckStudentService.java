package com.engineering_design.engineering_design_student_grading.service;


import com.engineering_design.engineering_design_student_grading.model.CheckStudent;
import com.engineering_design.engineering_design_student_grading.model.Student;
import com.engineering_design.engineering_design_student_grading.repository.CheckStudentRepository;
import com.engineering_design.engineering_design_student_grading.repository.StudentRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Transactional
public class CheckStudentService {

    private final CheckStudentRepository checkStudentRepository;

    public CheckStudentService(CheckStudentRepository checkStudentRepository) {
        this.checkStudentRepository = checkStudentRepository;
    }

    public List<CheckStudent> findCheckStudents() {
        return checkStudentRepository.findAll();
    }

    public Optional<CheckStudent> findOne(Long StudentNumber) {
        return checkStudentRepository.findByStudentNumber(StudentNumber);
    }

    public Boolean findTrue(Long studentNumber) {
        return checkStudentRepository.existsByStudentNumber(studentNumber);
    }
}

