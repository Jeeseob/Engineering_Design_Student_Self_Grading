package com.engineering_design.engineering_design_student_grading.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class CheckStudent {
    @Id
    private Long studentNumber;
    private String name;
    private String phoneNumber;

    public Long getStudentNumber() {
        return studentNumber;
    }

    public void setStudentNumber(Long studentNumber) {
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
}
