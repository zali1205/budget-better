package com.budgetbetter.backendapi.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.budgetbetter.backendapi.entity.PaymentEntity;
import com.budgetbetter.backendapi.entity.UserEntity;

@Repository
public interface PaymentRepository extends JpaRepository<PaymentEntity, Long> {
    public Optional<PaymentEntity> findByAppUserAndId(UserEntity appUser, Long id);
}
