package com.budgetbetter.backendapi.model;

import java.util.Date;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class AddExpenseRequest {
    
    private Date date;
    private Boolean reocurring;
    private String description;
    private Double totalCost;
    private String expenseType;
    private Long paymentId;
    private Long storeId;

}
