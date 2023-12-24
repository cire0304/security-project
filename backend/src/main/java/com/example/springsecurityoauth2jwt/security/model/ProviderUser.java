package com.example.springsecurityoauth2jwt.security.model;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.Map;

// 유저에 대한 정보를 담고 있는 객체
public interface ProviderUser {

    String getId();
    String getUsername();
    String getPassword();
    String getProvider();
    List<? extends GrantedAuthority> getAuthorities();
    Map<String, Object> getAttributes();

}
