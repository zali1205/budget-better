package com.budgetbetter.backendapi.entity;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "expense")
public class ExpenseEntity {
    
    @Id
    @SequenceGenerator(name = "expense_sequence", sequenceName = "expense_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "expense_sequence")
    private Long id;

    @Column(name = "reocurring", updatable = true, nullable = false)
    private Boolean reoccuring;

    @Column(name = "description", updatable = true, nullable = false)
    private String description;

    @Column(name = "total_cost", updatable = true, nullable = false)
    private Double totalCost;

    @Column(name = "expense_type", updatable = true, nullable = false)
    private String expenseType;

    @Column(name = "date", updatable = true, nullable = false)
    @Temporal(TemporalType.DATE)
    private LocalDate date;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "app_user_id", updatable = false, nullable = false)
    private UserEntity appUser;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "store_id", updatable = true, nullable = false)
    private StoreEntity store;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "payment_id", updatable = true, nullable = false)
    private PaymentEntity payment;

}
