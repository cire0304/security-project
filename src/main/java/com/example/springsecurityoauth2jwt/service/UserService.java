package com.example.springsecurityoauth2jwt.service;

import com.example.springsecurityoauth2jwt.domain.entity.Account;
import com.example.springsecurityoauth2jwt.domain.entity.Role;
import com.example.springsecurityoauth2jwt.repository.RoleRepository;
import com.example.springsecurityoauth2jwt.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.NoSuchElementException;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

    @Transactional
    public void createUser(Account account) {
        Role role = roleRepository.findRoleByRoleName("ROLE_USER")
                .orElseThrow(() -> new NoSuchElementException());
        Set<Role> roles = new HashSet<>();
        roles.add(role);
        account.setUserRoles(roles);
        userRepository.save(account);
    }

    @Transactional
    public Account findAccount(String username) {
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new NoSuchElementException());
    }

}
