package com.budgetbetter.backendapi.controller;

import java.util.List;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.budgetbetter.backendapi.entity.PaymentEntity;
import com.budgetbetter.backendapi.model.AddPaymentRequest;
import com.budgetbetter.backendapi.security.UserPrincipal;
import com.budgetbetter.backendapi.service.PaymentService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class PaymentController {
    
    private final PaymentService paymentService;

    @GetMapping("/payments")
    public List<PaymentEntity> getPayments(@AuthenticationPrincipal UserPrincipal principal) {
        List<PaymentEntity> payments = paymentService.getPayments(principal.getUserId());
        return payments;
    }

    @PostMapping("/payment")
    public void addPayment(@AuthenticationPrincipal UserPrincipal principal, @RequestBody @Validated AddPaymentRequest request) {
        paymentService.addPayment(principal.getUserId(), request.getPaymentType(), request.getPaymentLastFourDigits());
    }

}
