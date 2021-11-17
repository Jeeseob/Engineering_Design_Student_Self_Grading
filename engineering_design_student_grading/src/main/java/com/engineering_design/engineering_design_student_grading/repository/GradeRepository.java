package com.engineering_design.engineering_design_student_grading.repository;

import com.engineering_design.engineering_design_student_grading.model.Grade;

import java.util.List;
import java.util.Optional;

public interface GradeRepository {
    Grade save(Grade grade);
    void update(Grade grade, Long studentNumber, String team);
    Optional<Grade> findByStudentNumberAndTeam(Long studentNumber, String Team);
    List<Grade> findAll();
}
