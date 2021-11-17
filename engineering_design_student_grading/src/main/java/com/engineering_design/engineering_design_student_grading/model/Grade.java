package com.engineering_design.engineering_design_student_grading.model;

import javax.persistence.*;

@Entity
public class Grade {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) //DB가 PK를 알아서 생성.
    private Long id;
    private Long studentNumber;
    private String team;
    private int aPoint;
    private int bPoint;
    private int cPoint;
    private int dPoint;

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

    public int getaPoint() {
        return aPoint;
    }

    public void setaPoint(int aPoint) {
        this.aPoint = aPoint;
    }

    public int getbPoint() {
        return bPoint;
    }

    public void setbPoint(int bPoint) {
        this.bPoint = bPoint;
    }

    public int getcPoint() {
        return cPoint;
    }

    public void setcPoint(int cPoint) {
        this.cPoint = cPoint;
    }

    public int getdPoint() {
        return dPoint;
    }

    public void setdPoint(int dPoint) {
        this.dPoint = dPoint;
    }
}
