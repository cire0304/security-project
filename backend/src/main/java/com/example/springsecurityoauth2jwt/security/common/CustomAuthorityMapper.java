package com.example.springsecurityoauth2jwt.security.common;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.authority.mapping.GrantedAuthoritiesMapper;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.HashSet;

public class CustomAuthorityMapper implements GrantedAuthoritiesMapper {

    private final String ROLE_PREFIX = "ROLE_";
    private final String OAUTH_PREFIX = "OAUTH2_";

    @Override
    public Collection<? extends GrantedAuthority> mapAuthorities(Collection<? extends GrantedAuthority> authorities) {
        HashSet<GrantedAuthority> mapped = new HashSet<>(authorities.size());
        for (GrantedAuthority authority : authorities) {
            mapped.add(mapAuthority(authority.getAuthority()));
        }
        return mapped;
    }

    private GrantedAuthority mapAuthority(String name) {
        if (name.startsWith(OAUTH_PREFIX)) {
            name = name.replace(OAUTH_PREFIX, ROLE_PREFIX);
        }
        return new SimpleGrantedAuthority(name);
    }
}
