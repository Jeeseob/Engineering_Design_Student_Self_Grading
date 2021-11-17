package com.engineering_design.engineering_design_student_grading.repository;

import com.engineering_design.engineering_design_student_grading.model.CheckStudent;
import com.engineering_design.engineering_design_student_grading.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SpringDataJpaCheckStudentRepository extends JpaRepository<CheckStudent, Long>, CheckStudentRepository{
    @Override
    Optional<CheckStudent> findByStudentNumber(Long studentNumber);
}
