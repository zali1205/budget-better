package com.budgetbetter.backendapi.repository;

import com.budgetbetter.backendapi.entity.StoreEntity;
import com.budgetbetter.backendapi.entity.UserEntity;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StoreRepository extends JpaRepository<StoreEntity, Long> {
    public List<StoreEntity> findAllByAppUser(UserEntity appUser);
}
