package com.budgetbetter.backendapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.budgetbetter.backendapi.entity.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
    public UserEntity findByEmail(String email);
}
