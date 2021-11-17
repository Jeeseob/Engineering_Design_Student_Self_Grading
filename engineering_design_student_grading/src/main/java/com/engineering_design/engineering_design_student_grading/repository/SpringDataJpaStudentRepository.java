package com.engineering_design.engineering_design_student_grading.repository;

import com.engineering_design.engineering_design_student_grading.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SpringDataJpaStudentRepository extends JpaRepository<Student, Long>, StudentRepository{

    @Override
    Optional<Student> findByStudentNumber(Long studentNumber);
   }
