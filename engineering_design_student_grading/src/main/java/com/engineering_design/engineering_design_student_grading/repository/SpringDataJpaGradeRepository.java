package com.engineering_design.engineering_design_student_grading.repository;

import com.engineering_design.engineering_design_student_grading.model.Grade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SpringDataJpaGradeRepository extends JpaRepository<Grade, Long>, GradeRepository{

    @Override
    Optional<Grade> findByStudentNumber(Long studentNumber);
}
