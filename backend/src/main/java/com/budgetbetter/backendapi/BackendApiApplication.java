package com.budgetbetter.backendapi;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.budgetbetter.backendapi.entity.UserEntity;
import com.budgetbetter.backendapi.repository.UserRepository;

@SpringBootApplication
public class BackendApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApiApplication.class, args);
	}

	@Bean
	CommandLineRunner commandLineRunner(UserRepository userRepository) {
		return args -> {
            UserEntity user = new UserEntity();
			user.setFirstName("test");
			user.setLastName("test");
            user.setEmail("test@test.com");
            user.setPassword("$2a$12$Zk4OSv5mG8qfHR6ZsVVBYOpi2XgZNezY/Wd4bLVH03/pM20EwdZta"); // test
            user.setRole("ROLE_ADMIN");
			userRepository.save(user);
		};
	}

}
