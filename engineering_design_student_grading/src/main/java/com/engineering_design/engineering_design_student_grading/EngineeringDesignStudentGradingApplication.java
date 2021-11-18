package com.engineering_design.engineering_design_student_grading;

import com.ulisesbocchio.jasyptspringboot.annotation.EnableEncryptableProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EnableEncryptableProperties
public class EngineeringDesignStudentGradingApplication {

	public static void main(String[] args) {
		SpringApplication.run(EngineeringDesignStudentGradingApplication.class, args);
	}

}
