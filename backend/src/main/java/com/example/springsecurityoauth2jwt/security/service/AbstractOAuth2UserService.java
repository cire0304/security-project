package com.example.springsecurityoauth2jwt.security.service;

import com.example.springsecurityoauth2jwt.repository.UserRepository;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

@Service
@Getter
public class AbstractOAuth2UserService {

    @Autowired
    private UserRepository userRepository;

    protected void providerUser(ClientRegistration clientRegistration, OAuth2User oAuth2User) {

        String registrationId =  clientRegistration.getRegistrationId();
        if (registrationId.equals("kakao")) {

        } else {

        }

    }

//    @Autowired
//    private ProviderUserConvter<ProviderUserRequest, ProviderUser> providerUserConvter;

//    protected void register(ProviderUser providerUser, OAuth2UserRequest userRequest) {
//        User user = userRepository.findByUsername(providerUser.getUserName());
//
//        if (user == null) {
//            userService.register(userRequest.getClientRegistration().getRegistrationId(), providerUser);
//        } else {
//            System.out.println("user = " + user);
//        }
//
//    }

//    protected ProviderUser providerUser(ProviderUserRequest providerUserRequest) {
//        return providerUserConvter.converter(providerUserRequest);
//    }

}
