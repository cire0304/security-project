package com.example.springsecurityoauth2jwt.security.service;

import com.example.springsecurityoauth2jwt.domain.entity.Account;
import com.example.springsecurityoauth2jwt.repository.UserRepository;
import com.example.springsecurityoauth2jwt.security.model.ProviderUser;
import com.example.springsecurityoauth2jwt.security.model.User;
import com.example.springsecurityoauth2jwt.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomOAuth2UserService extends AbstractOAuth2UserService implements OAuth2UserService<OAuth2UserRequest, OAuth2User> {

    private final UserRepository userRepository;
    private final UserService userService;

    @Override
    // OAuth2UserRequest: Access Token에 대한 정보가 포함
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        ClientRegistration clientRegistration = userRequest.getClientRegistration();

        OAuth2UserService<OAuth2UserRequest, OAuth2User> delegate = new DefaultOAuth2UserService();

        // Access Token을 사용하여 사용자 정보 가져옴
        OAuth2User oAuth2User = delegate.loadUser(userRequest);

        // 우리 서비스에 맞는 유저의 정보를 가진 객체
        ProviderUser providerUser = super.providerUser(clientRegistration, oAuth2User);

        // 처음 로그인이라면 회원가입
        if (!userRepository.existsAccountByUsername(providerUser.getUsername())) {
            Account account = Account.builder()
                    .username(providerUser.getUsername())
                    .password(providerUser.getPassword())
                    .build();
            userService.createUser(account);
        }

        return oAuth2User;
    }
}
