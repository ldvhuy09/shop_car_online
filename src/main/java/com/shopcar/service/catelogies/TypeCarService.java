package com.shopcar.service.catelogies;

import com.shopcar.model.TypeCar;

import java.util.List;

public interface TypeCarService {
    List<TypeCar> findAll();
    TypeCar findById(long id);
    void addTypeCar(String name, String description);
    TypeCar findByName(String name);
}
