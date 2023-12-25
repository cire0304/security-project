package com.example.springsecurityoauth2jwt.core.user.api.dto;

import lombok.Data;

@Data
public class AccountDto {

    private String username;
    private String password;
    private String role;

}
