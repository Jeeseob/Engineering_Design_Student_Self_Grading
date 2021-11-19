package com.engineering_design.engineering_design_student_grading.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
public class WebConfig extends WebMvcConfigurerAdapter {

    @Value("images/")
    private String path;

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry
                .addResourceHandler(path + "/**") // url 접근 경로
                .addResourceLocations("file:" + path + "/"); // 디렉토리 경로 (반드시 file: 을 붙여주어야 한다.)
    }
}
