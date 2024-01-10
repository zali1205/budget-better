package com.budgetbetter.backendapi.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.budgetbetter.backendapi.entity.UserEntity;
import com.budgetbetter.backendapi.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {
    
    private final UserRepository userRepository;

    public Optional<UserEntity> findByEmail(String email) {
        var user = userRepository.findByEmail(email);
        if (user == null) {
            return Optional.empty();
        } 
        return Optional.of(user);
    }

}
