package com.example.springsecurityoauth2jwt.security.handler;

import com.example.springsecurityoauth2jwt.security.model.OAuth2ProviderUser;
import com.example.springsecurityoauth2jwt.security.model.PrincipalUser;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.context.SecurityContextRepository;

import java.io.IOException;

public class OAuth2AuthenticationSuccessHandler implements AuthenticationSuccessHandler {
    private final SecurityContextRepository securityContextRepository;
    private ObjectMapper objectMapper = new ObjectMapper();

    public OAuth2AuthenticationSuccessHandler(SecurityContextRepository securityContextRepository) {
        this.securityContextRepository = securityContextRepository;
    }
    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        response.sendRedirect("https://localhost:3000/mypage");
    }
}
