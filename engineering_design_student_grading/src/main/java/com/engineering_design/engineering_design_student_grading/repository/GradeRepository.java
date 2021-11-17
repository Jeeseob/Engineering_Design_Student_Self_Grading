package com.engineering_design.engineering_design_student_grading.repository;

import com.engineering_design.engineering_design_student_grading.model.Grade;

import java.util.List;
import java.util.Optional;

public interface GradeRepository {
    Grade save(Grade grade);
    Optional<Grade> findByStudentNumber(Long studentNumber);
    List<Grade> findAll();
}
