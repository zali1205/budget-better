package com.budgetbetter.backendapi.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class AddStoreRequest {
    private String storeName;

    public AddStoreRequest(String storeName) {
        this.storeName = storeName;
    }
}
