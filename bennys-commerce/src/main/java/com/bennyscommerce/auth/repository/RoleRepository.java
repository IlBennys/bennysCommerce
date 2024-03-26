package com.bennyscommerce.auth.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bennyscommerce.auth.entity.Erole;
import com.bennyscommerce.auth.entity.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {

    Optional<Role> findByErole(Erole erole);
}
