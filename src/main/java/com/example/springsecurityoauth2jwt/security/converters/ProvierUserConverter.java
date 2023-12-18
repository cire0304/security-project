package com.example.springsecurityoauth2jwt.security.converters;

public interface ProvierUserConverter <T, R>{

    R converter(T t);

}
