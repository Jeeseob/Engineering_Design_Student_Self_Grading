package com.engineering_design.engineering_design_student_grading.model;

import javax.persistence.*;

@Entity
public class Grade {

    @Id 
    private Long id;
    private Long studentNumber;
    private String team;
    private int aPoint1_1;
    private int bPoint1_1;
    private int cPoint1_1;
    private int dPoint1_1;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getStudentNumber() {
        return studentNumber;
    }

    public void setStudentNumber(Long studentNumber) {
        this.studentNumber = studentNumber;
    }

    public String getTeam() {
        return team;
    }

    public void setTeam(String team) {
        this.team = team;
    }

    public int getaPoint1_1() {
        return aPoint1_1;
    }

    public void setaPoint1_1(int aPoint1_1) {
        this.aPoint1_1 = aPoint1_1;
    }

    public int getbPoint1_1() {
        return bPoint1_1;
    }

    public void setbPoint1_1(int bPoint1_1) {
        this.bPoint1_1 = bPoint1_1;
    }

    public int getcPoint1_1() {
        return cPoint1_1;
    }

    public void setcPoint1_1(int cPoint1_1) {
        this.cPoint1_1 = cPoint1_1;
    }

    public int getdPoint1_1() {
        return dPoint1_1;
    }

    public void setdPoint1_1(int dPoint1_1) {
        this.dPoint1_1 = dPoint1_1;
    }
}
