package com.example.springsecurityoauth2jwt.security.service;

import com.example.springsecurityoauth2jwt.domain.entity.Account;
import com.example.springsecurityoauth2jwt.repository.UserRepository;
import com.example.springsecurityoauth2jwt.security.converters.ProviderUserRequest;
import com.example.springsecurityoauth2jwt.security.converters.ProvierUserConverter;
import com.example.springsecurityoauth2jwt.security.model.PrincipalUser;
import com.example.springsecurityoauth2jwt.security.model.ProviderUser;
import com.example.springsecurityoauth2jwt.security.model.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;
    private final ProvierUserConverter<ProviderUserRequest, ProviderUser> providerUserConverter;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Account account = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("잘못된 사용자 입니다."));

        User user = User.builder()
                .id(String.valueOf(account.getId()))
                .username(account.getUsername())
                .password(account.getPassword())
                .authorities(account.getAuthorities())
                .build();

        ProviderUserRequest providerUserRequest = new ProviderUserRequest(user);
        ProviderUser providerUser = providerUserConverter.converter(providerUserRequest);

        return new PrincipalUser(providerUser);
    }
}
