package com.example.springsecurityoauth2jwt.security.provider;

import com.example.springsecurityoauth2jwt.security.filter.AjaxAuthenticationToken;
import com.example.springsecurityoauth2jwt.security.model.PrincipalUser;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class AjaxAuthenticationProvider implements AuthenticationProvider {

    private final UserDetailsService userDetailsService;

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {

        String loginId = authentication.getName();
        String password = (String) authentication.getCredentials();

        PrincipalUser principalUser = (PrincipalUser) userDetailsService.loadUserByUsername(loginId);

        return new AjaxAuthenticationToken(principalUser, null, principalUser.getAuthorities());
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return authentication.equals(AjaxAuthenticationToken.class);
    }

}
