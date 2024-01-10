package com.budgetbetter.backendapi.service;

// import java.util.Optional;

import org.springframework.http.HttpStatusCode;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.budgetbetter.backendapi.entity.UserEntity;
import com.budgetbetter.backendapi.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {
    
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    // public Optional<UserEntity> findByEmail(String email) {
    //     var user = userRepository.findByEmail(email);
    //     if (user == null) {
    //         return Optional.empty();
    //     } 
    //     return Optional.of(user);
    // }

    public void signup(String firstName, String lastName, String email, String password) {
        UserEntity user = userRepository.findByEmail(email);
        if (user != null) {
            throw new ResponseStatusException(HttpStatusCode.valueOf(500), "Email already exists");
        }
        UserEntity newUser = new UserEntity();
        newUser.setFirstName(firstName);
        newUser.setLastName(lastName);
        newUser.setEmail(email);
        newUser.setPassword(passwordEncoder.encode(password));
        newUser.setRole("ROLE_USER");
        userRepository.save(newUser);
    }

}
