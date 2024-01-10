package com.budgetbetter.backendapi.controller;

import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.budgetbetter.backendapi.model.SignupRequest;
import com.budgetbetter.backendapi.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class UserController {
    
    private final UserService userService;

    @PostMapping("/user/signup")
    public void signup(@RequestBody @Validated SignupRequest request) {
        userService.signup(request.getFirstName(), request.getLastName(), request.getEmail(), request.getPassword());
    }

}
