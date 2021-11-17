package com.engineering_design.engineering_design_student_grading.repository;

import com.engineering_design.engineering_design_student_grading.model.Grade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SpringDataJpaGradeRepository extends JpaRepository<Grade, Long>, GradeRepository{

    @Override
    Optional<Grade> findByStudentNumberAndTeam(Long studentNumber, String team);

    @Modifying(clearAutomatically = true)
    @Query("UPDATE Grade g SET g.aPoint= :#{#updateGrade.aPoint}, g.bPoint= :#{#updateGrade.bPoint}, g.cPoint= :#{#updateGrade.cPoint}, g.dPoint= :#{#updateGrade.dPoint} WHERE g.studentNumber= :studentNumber AND g.team= :team ")
    void update(@Param(value = "updateGrade") Grade grade, @Param(value = "studentNumber")Long studentNumber, @Param(value = "team")String team);
}
