package com.budgetbetter.backendapi.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(uniqueConstraints = {
    @UniqueConstraint(name = "user_entity_email_unique", columnNames = "email")
})
public class UserEntity {
  
    @Id
    @SequenceGenerator(name = "user_sequence", sequenceName = "user_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_sequence")
    @Column(name = "id", updatable = false)
    private Long id;
    
    @Column(name = "email", updatable = true, nullable = false)
    private String email;

    @JsonIgnore
    @Column(name = "password", updatable = true, nullable = false)
    private String password;
    
    @Column(name = "role", updatable = false, nullable = false)
    private String role;

}
