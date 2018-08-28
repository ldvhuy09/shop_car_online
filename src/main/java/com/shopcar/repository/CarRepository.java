package com.shopcar.repository;

import com.shopcar.model.Car;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface CarRepository extends PagingAndSortingRepository<Car, Long>, JpaSpecificationExecutor<Car> {
    Car findById(long id);
    Page<Car> findAll(Pageable pageable);
    Page<Car> findAll(Specification<Car> spec, Pageable pageable);
}
