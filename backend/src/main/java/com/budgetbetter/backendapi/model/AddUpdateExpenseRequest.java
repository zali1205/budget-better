package com.budgetbetter.backendapi.model;

import java.time.LocalDate;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class AddUpdateExpenseRequest {
    
    private LocalDate date;
    private Boolean reocurring;
    private String description;
    private Double totalCost;
    private String expenseType;
    private Long paymentId;
    private Long storeId;

}
