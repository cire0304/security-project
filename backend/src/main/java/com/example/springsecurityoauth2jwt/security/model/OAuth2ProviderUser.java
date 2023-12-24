package com.example.springsecurityoauth2jwt.security.model;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.core.user.OAuth2User;

import java.util.List;
import java.util.Map;
import java.util.UUID;

//  OAuth2 를 통해 가져온 유저에 대한 정보를 담고 있는 객체
public abstract class OAuth2ProviderUser implements ProviderUser{

    private final Map<String, Object> attributes;
    private final OAuth2User oAuth2User;
    private final ClientRegistration clientRegistration;

    // OAuth2User: 엑세스 토큰을 통해 가져온 유저에 대한 정보를 담고 있는 객체
    public OAuth2ProviderUser(Map<String, Object> attributes, OAuth2User oAuth2User, ClientRegistration clientRegistration) {
        this.attributes = attributes;
        this.oAuth2User = oAuth2User;
        this.clientRegistration = clientRegistration;
    }

    @Override
    public String getPassword() {
        return UUID.randomUUID().toString();
    }

    @Override
    public String getProvider() {
        return clientRegistration.getRegistrationId();
    }

    @Override
    public List<? extends GrantedAuthority> getAuthorities() {
        return oAuth2User.getAuthorities().stream()
                .map(authoritie -> new SimpleGrantedAuthority(authoritie.getAuthority()))
                .toList();
    }

    @Override
    public Map<String, Object> getAttributes() {
        return attributes;
    }
}
