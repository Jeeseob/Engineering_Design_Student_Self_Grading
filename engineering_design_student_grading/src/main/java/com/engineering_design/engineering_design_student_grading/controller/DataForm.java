package com.engineering_design.engineering_design_student_grading.controller;

import java.util.ArrayList;

public class DataForm {
    private String studentNumber;
    private String name;
    private String phoneNumber;
    private ArrayList<GradeForm> gradeForms;

    public String getStudentNumber() {
        return studentNumber;
    }

    public void setStudentNumber(String studentNumber) {
        this.studentNumber = studentNumber;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public ArrayList<GradeForm> getGradeForms() {
        return gradeForms;
    }

    public void setGradeForms(ArrayList<GradeForm> gradeForms) {
        this.gradeForms = gradeForms;
    }
}
