package com.example.springsecurityoauth2jwt.security.model;

import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.core.user.OAuth2User;

import java.util.Map;

public class GoogleUser extends OAuth2ProviderUser {


    // OAuth2User: 엑세스 토큰을 이용하여 가져온 유저에 대한 정보를 담고 있는 객체
    public GoogleUser(OAuth2User oAuth2User, ClientRegistration clientRegistration) {
        super(oAuth2User.getAttributes(), oAuth2User, clientRegistration);
    }

    @Override
    public String getId() {
        return (String) getAttributes().get("sub");
    }

    @Override
    public String getUsername() {
        return (String) getAttributes().get("sub");
    }

}
