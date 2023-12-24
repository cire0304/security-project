package com.example.springsecurityoauth2jwt.security.service;

import com.example.springsecurityoauth2jwt.repository.UserRepository;
import com.example.springsecurityoauth2jwt.security.model.GoogleUser;
import com.example.springsecurityoauth2jwt.security.model.KakaoUser;
import com.example.springsecurityoauth2jwt.security.model.ProviderUser;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

@Service
@Getter
public class AbstractOAuth2UserService {

    @Autowired
    private UserRepository userRepository;

    protected ProviderUser providerUser(ClientRegistration clientRegistration, OAuth2User oAuth2User) {

        String registrationId = clientRegistration.getRegistrationId();
        if (registrationId.equals("google")) {
            return new GoogleUser(oAuth2User, clientRegistration);
        } else if (registrationId.equals("kakao")) {
            return new KakaoUser(oAuth2User, clientRegistration);
        }
        return null;
    }

}
