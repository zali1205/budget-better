package com.budgetbetter.backendapi.controller;

import java.util.List;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.budgetbetter.backendapi.entity.ExpenseEntity;
import com.budgetbetter.backendapi.model.AddUpdateExpenseRequest;
import com.budgetbetter.backendapi.security.UserPrincipal;
import com.budgetbetter.backendapi.service.ExpenseService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class ExpenseController {
    
    private final ExpenseService expenseService;

    @GetMapping("/expenses")
    public List<ExpenseEntity> getExpenses(@AuthenticationPrincipal UserPrincipal principal) {
        List<ExpenseEntity> expenses = expenseService.getExpenses(principal.getUserId());
        return expenses;
    }

    @PostMapping("/expense")
    public ExpenseEntity addExpense(@AuthenticationPrincipal UserPrincipal principal, @RequestBody @Validated AddUpdateExpenseRequest request) {
        ExpenseEntity newExpense = expenseService.addExpense(principal.getUserId(), request.getStoreId(), request.getPaymentId(), request.getDate(), 
                                    request.getTotalCost(), request.getReocurring(), request.getDescription(), request.getExpenseType());
        return  newExpense;

    }

    @PutMapping("/expense/{paymentId}")
    public ExpenseEntity updateExpense(@PathVariable Integer paymentId, @AuthenticationPrincipal UserPrincipal principal, @RequestBody @Validated AddUpdateExpenseRequest request) {
        ExpenseEntity updatedExpense = expenseService.updateExpense(principal.getUserId(), paymentId, request.getStoreId(), request.getPaymentId(), request.getDate(), 
                                    request.getTotalCost(), request.getReocurring(), request.getDescription(), request.getExpenseType());
        return updatedExpense;
    }
}
