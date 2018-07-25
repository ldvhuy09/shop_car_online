package com.shopcar.repository;

import com.shopcar.model.TypeCar;
import org.springframework.data.repository.CrudRepository;

public interface TypeCarRepository extends CrudRepository<TypeCar, Long> {
    TypeCar findById(long id);
    TypeCar findByName(String name);
}
