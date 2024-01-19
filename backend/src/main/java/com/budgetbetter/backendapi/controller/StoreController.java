package com.budgetbetter.backendapi.controller;

import java.util.List;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.budgetbetter.backendapi.entity.StoreEntity;
import com.budgetbetter.backendapi.model.AddStoreRequest;
import com.budgetbetter.backendapi.security.UserPrincipal;
import com.budgetbetter.backendapi.service.StoreService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class StoreController {
    
    private final StoreService storeService;

    @GetMapping("/stores")
    public List<StoreEntity> getStores(@AuthenticationPrincipal UserPrincipal principal) {
        List<StoreEntity> stores = storeService.getStores(principal.getUserId());
        return stores;
    }

    @PostMapping("/store")
    public void addStore(@AuthenticationPrincipal UserPrincipal principal, @RequestBody @Validated AddStoreRequest request) {
        storeService.addStore(principal.getUserId(), request.getStoreName());
    }
}
