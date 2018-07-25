package com.shopcar.repository;

import com.shopcar.model.BrandCar;
import com.shopcar.model.Car;
import com.shopcar.model.TypeCar;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface CarRepository extends PagingAndSortingRepository<Car, Long> {
    Car findById(long id);
    Page<Car> findAll(Pageable pageable);
    Page<Car> findByType(TypeCar typeCar, Pageable pageable);
    Page<Car> findByBrand(BrandCar brandCar, Pageable pageable);
}
