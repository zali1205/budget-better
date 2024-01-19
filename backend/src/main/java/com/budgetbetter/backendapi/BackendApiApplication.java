package com.budgetbetter.backendapi;

import java.time.LocalDate;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.budgetbetter.backendapi.entity.ExpenseEntity;
import com.budgetbetter.backendapi.entity.PaymentEntity;
import com.budgetbetter.backendapi.entity.StoreEntity;
import com.budgetbetter.backendapi.entity.UserEntity;
import com.budgetbetter.backendapi.repository.ExpenseRepository;
import com.budgetbetter.backendapi.repository.PaymentRepository;
import com.budgetbetter.backendapi.repository.StoreRepository;
import com.budgetbetter.backendapi.repository.UserRepository;

@SpringBootApplication
public class BackendApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApiApplication.class, args);
	}

	@Bean
	CommandLineRunner commandLineRunner(UserRepository userRepository, StoreRepository storeRepository, PaymentRepository paymentRepository, ExpenseRepository expenseRepository) {
		return args -> {
            UserEntity user = new UserEntity();
			user.setFirstName("test");
			user.setLastName("test");
            user.setEmail("test@test.com");
            user.setPassword("$2a$12$Zk4OSv5mG8qfHR6ZsVVBYOpi2XgZNezY/Wd4bLVH03/pM20EwdZta"); // test
            user.setRole("ROLE_ADMIN");
			userRepository.save(user);

			StoreEntity store = new StoreEntity();
			store.setAppUser(user);;
			store.setStoreName("publix");
			storeRepository.save(store);

			PaymentEntity payment = new PaymentEntity();
			payment.setAppUser(user);
			payment.setPaymentLastFourDigits("4098");
			payment.setPaymentType("credit");
			paymentRepository.save(payment);

			ExpenseEntity expense = new ExpenseEntity();
			expense.setAppUser(user);
			expense.setStore(store);
			expense.setPayment(payment);
			expense.setDescription("testing");
			expense.setReoccuring(false);
			expense.setTotalCost(10.98);
			expense.setExpenseType("housing");
			expense.setDate(LocalDate.parse("2020-10-10"));
			expenseRepository.save(expense);
		};
	}

}
