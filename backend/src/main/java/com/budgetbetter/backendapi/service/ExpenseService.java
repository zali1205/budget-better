package com.budgetbetter.backendapi.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.budgetbetter.backendapi.entity.ExpenseEntity;
import com.budgetbetter.backendapi.entity.PaymentEntity;
import com.budgetbetter.backendapi.entity.StoreEntity;
import com.budgetbetter.backendapi.entity.UserEntity;
import com.budgetbetter.backendapi.exception.StoreNotFoundException;
import com.budgetbetter.backendapi.repository.ExpenseRepository;
import com.budgetbetter.backendapi.repository.PaymentRepository;
import com.budgetbetter.backendapi.repository.StoreRepository;
import com.budgetbetter.backendapi.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ExpenseService {
    
    private final UserRepository userRepository;
    private final StoreRepository storeRepository;
    private final PaymentRepository paymentRepository;
    private final ExpenseRepository expenseRepository;

    public List<ExpenseEntity> getExpenses(Long appUserId) {
        UserEntity appUser = userRepository.findById(appUserId).get();
        return appUser.getExpenses();
    }

    public ExpenseEntity addExpense(Long appUserId, Long storeId, Long paymentId, Date date, Double totalCost, Boolean reoccuring, String description, String expenseType) {
        UserEntity appUser = userRepository.findById(appUserId).get();
        Optional<StoreEntity> store = storeRepository.findByAppUserAndId(appUser, storeId);
        if (store.isEmpty()) {
            throw new StoreNotFoundException("Store with ID: " + storeId + " does not exist.");
        }
        Optional<PaymentEntity> payment = paymentRepository.findByAppUserAndId(appUser, paymentId);
        if (payment.isEmpty()) {
            throw new StoreNotFoundException("Payment with ID: " + paymentId + " does not exist.");
        }
        System.out.println(reoccuring + "*******************");
        ExpenseEntity newExpense = new ExpenseEntity();
        newExpense.setAppUser(appUser);
        newExpense.setPayment(payment.get());
        newExpense.setStore(store.get());
        newExpense.setDate(date);
        newExpense.setTotalCost(totalCost);
        newExpense.setReoccuring(reoccuring);
        newExpense.setDescription(description);
        newExpense.setExpenseType(expenseType);
        expenseRepository.save(newExpense);

        return newExpense;

    }

}
