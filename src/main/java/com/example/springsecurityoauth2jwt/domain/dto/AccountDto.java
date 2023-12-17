package com.example.springsecurityoauth2jwt.domain.dto;

import lombok.Data;

@Data
public class AccountDto {

    private String username;
    private String password;
    private String role;

}
