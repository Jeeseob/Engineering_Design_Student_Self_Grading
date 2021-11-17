package com.engineering_design.engineering_design_student_grading.repository;

import com.engineering_design.engineering_design_student_grading.model.Student;

import java.util.List;
import java.util.Optional;

public interface StudentRepository {
    Student save(Student student);
    Optional<Student> findByStudentNumber(Long studentNumber);
    List<Student> findAll();
}
