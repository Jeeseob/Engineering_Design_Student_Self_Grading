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
        gradeRepository.save(grade);
        return grade.getStudentNumber();
    }
    public void updateGrade(Grade grade, Long studentNumber, String team) {
        gradeRepository.update(grade, studentNumber, team);
        //return grade.getStudentNumber();
    }

    public Boolean checkGrade(Grade grade){
        if((grade.getaPoint() == 1 ||grade.getaPoint() == 3 ||grade.getaPoint() == 5)
            && (grade.getbPoint() == 1 ||grade.getaPoint() == 3 ||grade.getaPoint() == 5 )
                && (grade.getbPoint() == 1 ||grade.getaPoint() == 3 ||grade.getaPoint() == 5 )
                    &&(grade.getbPoint() == 1 ||grade.getaPoint() == 3 ||grade.getaPoint() == 5 )){
            return false;
        }
        return true;
    }


    public List<Grade> findGrades() {
        return gradeRepository.findAll();
    }

    public Optional<Grade> findOne(Long studentNubmer, String team) {
        return gradeRepository.findByStudentNumberAndTeam(studentNubmer, team);
    }
}
