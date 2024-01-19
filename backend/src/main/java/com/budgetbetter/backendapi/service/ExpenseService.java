package com.budgetbetter.backendapi.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.budgetbetter.backendapi.entity.ExpenseEntity;
import com.budgetbetter.backendapi.entity.PaymentEntity;
import com.budgetbetter.backendapi.entity.StoreEntity;
import com.budgetbetter.backendapi.entity.UserEntity;
import com.budgetbetter.backendapi.exception.EntityNotFoundException;
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

    public ExpenseEntity addExpense(Long appUserId, Long storeId, Long paymentId, LocalDate date, Double totalCost, Boolean reoccuring, String description, String expenseType) {
        UserEntity appUser = userRepository.findById(appUserId).get();
        Optional<StoreEntity> store = storeRepository.findByAppUserAndId(appUser, storeId);
        if (store.isEmpty()) {
            throw new EntityNotFoundException("Store with ID: " + storeId + " does not exist.");
        }
        Optional<PaymentEntity> payment = paymentRepository.findByAppUserAndId(appUser, paymentId);
        if (payment.isEmpty()) {
            throw new EntityNotFoundException("Payment with ID: " + paymentId + " does not exist.");
        }
        ExpenseEntity newExpense = new ExpenseEntity();
        newExpense.setAppUser(appUser);
        newExpense.setStore(store.get());
        newExpense.setPayment(payment.get());
        newExpense.setDate(date);
        newExpense.setTotalCost(totalCost);
        newExpense.setReoccuring(reoccuring);
        newExpense.setDescription(description);
        newExpense.setExpenseType(expenseType);
        expenseRepository.save(newExpense);

        return newExpense;

    }

    public ExpenseEntity updateExpense(Long appUserId, Integer expenseId, Long storeId, Long paymentId, LocalDate date, Double totalCost, Boolean reoccuring, String description, String expenseType) {
        UserEntity appUser = userRepository.findById(appUserId).get();
        Optional<ExpenseEntity> expense = expenseRepository.findByAppUserAndId(appUser, paymentId);
        if (expense.isEmpty()) {
            throw new EntityNotFoundException("Expense with ID: " + expenseId + "does not exist.");
        }
        Optional<StoreEntity> store = storeRepository.findByAppUserAndId(appUser, storeId);
        if (store.isEmpty()) {
            throw new EntityNotFoundException("Store with ID: " + storeId + " does not exist.");
        }
        Optional<PaymentEntity> payment = paymentRepository.findByAppUserAndId(appUser, paymentId);
        if (payment.isEmpty()) {
            throw new EntityNotFoundException("Payment with ID: " + paymentId + " does not exist.");
        }
        ExpenseEntity currentExpense = expense.get();
        currentExpense.setStore(store.get());
        currentExpense.setPayment(payment.get());
        System.out.println("DATE:++++++++++++++ " + date);
        currentExpense.setDate(date);
        currentExpense.setTotalCost(totalCost);
        currentExpense.setReoccuring(reoccuring);
        currentExpense.setDescription(description);
        currentExpense.setExpenseType(expenseType);
        expenseRepository.save(currentExpense);
        return currentExpense;
    }

}
