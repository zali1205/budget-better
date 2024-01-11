package com.budgetbetter.backendapi.entity;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "app_user", uniqueConstraints = {
    @UniqueConstraint(name = "app_user_email_unique", columnNames = "email")
})
public class UserEntity {
  
    @Id
    @SequenceGenerator(name = "app_user_sequence", sequenceName = "app_user_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "app_user_sequence")
    @Column(name = "id", updatable = false, nullable = false)
    private Long id;
    
    @Column(name = "first_name", updatable = true, nullable = false)
    private String firstName;

    @Column(name = "last_name", updatable = true, nullable = false)
    private String lastName;

    @Column(name = "email", updatable = true, nullable = false)
    private String email;

    @JsonIgnore
    @Column(name = "password", updatable = true, nullable = false)
    private String password;
    
    @Column(name = "role", updatable = false, nullable = false)
    private String role;

    @OneToMany(mappedBy = "appUser", orphanRemoval = true)
    private List<StoreEntity> stores = new ArrayList<>();

}
