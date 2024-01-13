package com.budgetbetter.backendapi.model;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class AddPaymentRequest {
    private final String paymentType;
    private final String paymentLastFourDigits;
}
