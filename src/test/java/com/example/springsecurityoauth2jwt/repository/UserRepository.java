package com.example.springsecurityoauth2jwt.repository;

import com.example.springsecurityoauth2jwt.domain.entity.Account;
import com.example.springsecurityoauth2jwt.domain.entity.Role;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.core.GrantedAuthority;

import java.util.HashSet;
import java.util.List;
import java.util.NoSuchElementException;


@SpringBootTest
@Transactional
class ShowCouponsServiceTest {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;

    @Test
    public void showCouponsService() {
        createUser();

        Account account = userRepository.findByUsername("test")
                .orElseThrow(() -> new NoSuchElementException());

        List<? extends GrantedAuthority> authorities = account.getAuthorities();
        System.out.println(authorities);
    }

    private void createUser() {
        Role role = roleRepository.findRoleByRoleName("ROLE_USER")
                .orElseThrow(() -> new NoSuchElementException());
        HashSet<Role> set = new HashSet<>();
        set.add(role);

        Account account = Account.builder()
                .username("test")
                .password("pass")
                .userRoles(set)
                .build();

        userRepository.save(account);
    }


}