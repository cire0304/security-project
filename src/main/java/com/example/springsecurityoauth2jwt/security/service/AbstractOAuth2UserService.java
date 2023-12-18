package com.example.springsecurityoauth2jwt.security.service;

import com.example.springsecurityoauth2jwt.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class AbstractOAuth2UserService {

//    @Autowired
//    private UserRepository userRepository;
//    @Autowired
//    private ProviderUserConvter<ProviderUserRequest, ProviderUser> providerUserConvter;
//
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
