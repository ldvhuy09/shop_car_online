package com.shopcar.service.car.impl;


import com.shopcar.model.BrandCar;
import com.shopcar.model.Car;
import com.shopcar.model.CarInfor.CarDetailInfor;
import com.shopcar.model.CarInfor.CarGeneralInfor;
import com.shopcar.model.TypeCar;
import com.shopcar.repository.BrandCarRepository;
import com.shopcar.repository.CarRepository;
import com.shopcar.repository.TypeCarRepository;
import com.shopcar.service.car.CarMangementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CarMangementServiceImpl implements CarMangementService {
    @Autowired
    CarRepository carRepository;

    @Autowired
    BrandCarRepository brandCarRepository;

    @Autowired
    TypeCarRepository typeCarRepository;

    @Override
    public CarDetailInfor getById(long id) {
        Car car = carRepository.findById(id);
        return this.getDetailInfor(car);
    }

    private CarDetailInfor getDetailInfor(Car car) {
        CarDetailInfor carDetailInfor = new CarDetailInfor();
        carDetailInfor.getInforFrom(car);
        return carDetailInfor;
    }

    @Override
    public Page<CarGeneralInfor> getAll(Pageable pageable) {
        Page<Car> carsPage = carRepository.findAll(pageable);
        return carsPage.map(this::getGeneralInfor);
    }

    private CarGeneralInfor getGeneralInfor(Car car) {
        CarGeneralInfor carGeneralInfor = new CarGeneralInfor();
        carGeneralInfor.getInforFrom(car);
        return carGeneralInfor;
    }

    @Override
    public Page<CarGeneralInfor> getByType(String typeName, Pageable pageable) {
        TypeCar typeCar = typeCarRepository.findByName(typeName);
        Page<Car> carsPage = carRepository.findByType(typeCar, pageable);
        return carsPage.map(this::getGeneralInfor);
    }

    @Override
    public Page<CarGeneralInfor> getByBrand(String brandName, Pageable pageable) {
        BrandCar brandCar = brandCarRepository.findByName(brandName);
        Page<Car> carsPage = carRepository.findByBrand(brandCar, pageable);
        return null;
    }
}
