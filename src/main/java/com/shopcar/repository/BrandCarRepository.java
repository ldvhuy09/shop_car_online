package com.shopcar.repository;

import com.shopcar.model.BrandCar;
import org.springframework.data.repository.CrudRepository;

public interface BrandCarRepository extends CrudRepository<BrandCar, Long> {
    BrandCar findById(long id);
    BrandCar findByName(String name);
}
