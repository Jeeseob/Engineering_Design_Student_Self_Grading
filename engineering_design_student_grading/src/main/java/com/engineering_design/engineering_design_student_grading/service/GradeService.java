package com.engineering_design.engineering_design_student_grading.service;

import com.engineering_design.engineering_design_student_grading.model.Grade;
import com.engineering_design.engineering_design_student_grading.repository.GradeRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Transactional
public class GradeService {
    private final GradeRepository gradeRepository;

    public GradeService(GradeRepository gradeRepository) {
        this.gradeRepository = gradeRepository;
    }

    public Long addGrade(Grade grade) {
        validateDuplicateGrade(grade);
        gradeRepository.save(grade);
        return grade.getStudentNumber();
    }
    private void validateDuplicateGrade(Grade grade) {
        gradeRepository.findByStudentNumber(grade.getStudentNumber())
                .ifPresent(m-> {
                    throw new IllegalStateException("이미 존재하는 회원입니다.");
                });
    }

    public List<Grade> findGrades() {
        return gradeRepository.findAll();
    }

    public Optional<Grade> findOne(Long studentNubmer) {
        return gradeRepository.findByStudentNumber(studentNubmer);
    }
}
