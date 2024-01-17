package com.budgetbetter.backendapi.entity;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "payment")
public class PaymentEntity {
    
    @Id
    @SequenceGenerator(name = "payment_sequence", sequenceName = "payment_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "payment_sequence")
    @Column(name = "id", updatable = false, nullable = false)
    private Long id;


    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "app_user_id", updatable = false ,nullable = false)
    private UserEntity appUser;

    @Column(name = "payment_type", updatable = false, nullable = false)
    private String paymentType;

    @Column(name = "payment_last_four_digits", updatable = false, nullable = false)
    private String paymentLastFourDigits;

    @JsonIgnore
    @OneToMany(mappedBy = "payment", orphanRemoval = true)
    private List<ExpenseEntity> expenses = new ArrayList<>();
}
