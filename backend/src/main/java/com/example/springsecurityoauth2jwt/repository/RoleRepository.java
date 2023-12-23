package com.example.springsecurityoauth2jwt.repository;

import com.example.springsecurityoauth2jwt.domain.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {

    Optional<Role> findRoleByRoleName(String roleName);
}
