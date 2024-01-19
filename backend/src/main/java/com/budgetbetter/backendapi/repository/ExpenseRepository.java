package com.budgetbetter.backendapi.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.budgetbetter.backendapi.entity.ExpenseEntity;
import com.budgetbetter.backendapi.entity.UserEntity;

@Repository
public interface ExpenseRepository extends JpaRepository<ExpenseEntity, Long> {
    public Optional<ExpenseEntity> findByAppUserAndId(UserEntity appUser, Long id);
}
