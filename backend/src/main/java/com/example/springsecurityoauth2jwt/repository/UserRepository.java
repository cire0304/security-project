package com.example.springsecurityoauth2jwt.repository;

import com.example.springsecurityoauth2jwt.domain.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<Account, Long> {

    Optional<Account> findByUsername(String username);

    boolean existsAccountByUsername(String username);

}
