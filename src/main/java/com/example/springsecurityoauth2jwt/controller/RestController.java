package com.example.springsecurityoauth2jwt.controller;

import org.springframework.web.bind.annotation.GetMapping;

@org.springframework.web.bind.annotation.RestController
public class RestController {

    @GetMapping("/")
    public String home() {
        return "홈";
    }

    @GetMapping("/dash")
    public String dash() {
        return "대시보드";
    }

    @GetMapping("/user")
    public String user() {
        return "유저 페이지";
    }

    @GetMapping("/admin")
    public String admin() {
        return "어드민 페이지";
    }

}
