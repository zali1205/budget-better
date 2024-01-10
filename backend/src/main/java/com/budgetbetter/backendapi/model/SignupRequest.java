package com.budgetbetter.backendapi.model;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class SignupRequest {
    private final String firstName;
    private final String lastName;
    private final String email;
    private final String password;
}
