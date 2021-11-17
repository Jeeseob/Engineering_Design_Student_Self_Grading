package com.engineering_design.engineering_design_student_grading.controller;

import javax.xml.crypto.Data;
import com.engineering_design.engineering_design_student_grading.model.Grade;
import com.engineering_design.engineering_design_student_grading.service.GradeService;

import java.lang.reflect.Array;
import java.util.ArrayList;

public class SetGrade {
    ArrayList<Grade> grades = new ArrayList<>();

    public ArrayList<Grade> setGrade(ArrayList<GradeForm> forms, String studentNumber) {
        for(GradeForm form: forms){
            Grade grade = new Grade();
            grade.setStudentNumber(Long.parseLong(studentNumber));
            grade.setTeam(form.getTeam());
            grade.setaPoint(Integer.parseInt(form.getaPoint()));
            grade.setbPoint(Integer.parseInt(form.getbPoint()));
            grade.setcPoint(Integer.parseInt(form.getcPoint()));
            grade.setdPoint(Integer.parseInt(form.getdPoint()));
            grades.add(grade);
        }
        return grades;
    }
}
