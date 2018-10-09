package com.shopcar.service.car;


import com.shopcar.model.Car;
import com.shopcar.model.CarInfor.CarDetailInfor;
import com.shopcar.model.CarInfor.CarGeneralInfor;
import com.shopcar.repository.BrandCarRepository;
import com.shopcar.repository.CarRepository;
import com.shopcar.repository.TypeCarRepository;
import com.shopcar.service.car.CarManagementService;
import com.shopcar.specification.CarSpecificationBuilder;
import com.shopcar.specification.QueryCriteria;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class CarManagementServiceImpl implements CarManagementService {
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
    public Page<CarGeneralInfor> search(String search, Pageable pageable) {
        CarSpecificationBuilder builder = new CarSpecificationBuilder();
        Pattern pattern = Pattern.compile("(\\w+?)(:|!|>|<)(\\w+-\\w+|\\w+\\w?),");
        Matcher matcher = pattern.matcher(search + ",");
        while(matcher.find()) {
            builder.with(matcher.group(1), matcher.group(2), matcher.group(3));
        }

        Specification<Car> spec = builder.build();
        Page<Car> cars = carRepository.findAll(spec, pageable);
        return cars.map(this::getGeneralInfor);
    }

    @Override
    public Page<CarGeneralInfor> search(List<QueryCriteria> queries, Pageable pageable) {
        Specification<Car> spec = buildSpecification(queries);
        Page<Car> cars = carRepository.findAll(spec, pageable);
        return cars.map(this::getGeneralInfor);
    }

    private Specification<Car> buildSpecification(List<QueryCriteria> queries) {
        CarSpecificationBuilder builder = new CarSpecificationBuilder();
        for (QueryCriteria query : queries) {
            builder.with(query);
        }
        Specification<Car> spec = builder.build();
        return spec;
    }
}
