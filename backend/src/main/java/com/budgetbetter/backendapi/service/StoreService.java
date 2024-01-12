package com.budgetbetter.backendapi.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.budgetbetter.backendapi.entity.StoreEntity;
import com.budgetbetter.backendapi.entity.UserEntity;
import com.budgetbetter.backendapi.repository.StoreRepository;
import com.budgetbetter.backendapi.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class StoreService {
    
    private final StoreRepository storeRepository;
    private final UserRepository userRepository;

    public List<StoreEntity> getStores(Long appUserId) {
        UserEntity appUser = (UserEntity) userRepository.findById(appUserId).get();
        List<StoreEntity> listOfStores = appUser.getStores();
        return listOfStores;
    }

    public void addStore(Long appUserId, String storeName) {
        UserEntity appUser = (UserEntity) userRepository.findById(appUserId).get();
        StoreEntity store = new StoreEntity();
        store.setAppUser(appUser);
        store.setStoreName(storeName);
        storeRepository.save(store);
    }

}
