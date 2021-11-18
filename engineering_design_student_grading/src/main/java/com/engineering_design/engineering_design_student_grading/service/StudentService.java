package com.engineering_design.engineering_design_student_grading.service;

import com.engineering_design.engineering_design_student_grading.model.Student;
import com.engineering_design.engineering_design_student_grading.repository.StudentRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Transactional
public class StudentService {

    private final StudentRepository studentRepository;

    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public Long addStudent(Student student) {
        studentRepository.save(student);
        return student.getStudentNumber();
    }

    public List<Student> findStudent() {
        return studentRepository.findAll();
    }

    public Optional<Student> findOne(Long StudentNumber) {
        return studentRepository.findByStudentNumber(StudentNumber);
    }

    public Boolean findTrue(Long studentNumber) {
        return studentRepository.existsByStudentNumber(studentNumber);
    }
}
