package com.budgetbetter.backendapi.model;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class SignupRequest {
    private String firstName;
    private String lastName;
    private String email;
    private String password;
}
