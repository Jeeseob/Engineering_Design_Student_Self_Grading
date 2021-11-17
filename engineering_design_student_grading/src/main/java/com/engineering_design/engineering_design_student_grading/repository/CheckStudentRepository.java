package com.engineering_design.engineering_design_student_grading.repository;

import com.engineering_design.engineering_design_student_grading.model.CheckStudent;
import com.engineering_design.engineering_design_student_grading.model.Student;

import java.util.List;
import java.util.Optional;

public interface CheckStudentRepository {
    Boolean existsByStudentNumber(Long studentNumber);
    Optional<CheckStudent> findByStudentNumber(Long studentNumber);
    List<CheckStudent> findAll();
}
