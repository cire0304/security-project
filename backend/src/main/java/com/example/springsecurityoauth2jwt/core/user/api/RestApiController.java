package com.example.springsecurityoauth2jwt.core.user.api;

import com.example.springsecurityoauth2jwt.core.user.api.dto.AccountDto;
import com.example.springsecurityoauth2jwt.core.user.entity.Account;
import com.example.springsecurityoauth2jwt.security.repository.RoleRepository;
import com.example.springsecurityoauth2jwt.core.user.repository.UserRepository;
import com.example.springsecurityoauth2jwt.security.model.PrincipalUser;
import com.example.springsecurityoauth2jwt.core.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class RestApiController {

    private final UserService userService;
    private final UserRepository userRepository;
    
    @GetMapping("/user")
    public String user(@AuthenticationPrincipal PrincipalUser principalUser) {
        String username = principalUser.getUsername();
         Account account = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("잘못된 사용자 입니다."));

        return account.getUsername();
    }

    @PostMapping("/register")
    public String createUser(@RequestBody AccountDto accountDto) {
        Account account = Account.builder()
                .username(accountDto.getUsername())
                .password(accountDto.getPassword())
                .build();

        userService.createUser(account);
        return "요청 성공";
    }

}
