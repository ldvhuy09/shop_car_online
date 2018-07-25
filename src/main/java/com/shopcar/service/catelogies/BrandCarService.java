package com.shopcar.service.catelogies;

import com.shopcar.model.BrandCar;

import java.util.List;

public interface BrandCarService {
    List<BrandCar> findAll();
    BrandCar findById(long id);
    void addBrandCar(String name, String code, String description);
}
