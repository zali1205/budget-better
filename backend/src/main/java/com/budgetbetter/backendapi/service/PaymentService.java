package com.budgetbetter.backendapi.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.budgetbetter.backendapi.entity.PaymentEntity;
import com.budgetbetter.backendapi.entity.UserEntity;
import com.budgetbetter.backendapi.repository.PaymentRepository;
import com.budgetbetter.backendapi.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PaymentService {
    
    private final PaymentRepository paymentRepository;
    private final UserRepository userRepository;

    public List<PaymentEntity> getPayments(Long appUserId) {
        UserEntity appUser = userRepository.findById(appUserId).get();
        List<PaymentEntity> payments = appUser.getPayments();
        return payments;
    }

    public void addPayment(Long appUserId, String paymentType, String paymentLastFourDigits) {
        UserEntity appUser = userRepository.findById(appUserId).get();
        PaymentEntity newPayment = new PaymentEntity();
        newPayment.setAppUser(appUser);
        newPayment.setPaymentType(paymentType);
        newPayment.setPaymentLastFourDigits(paymentLastFourDigits);
        paymentRepository.save(newPayment);
    }

}
