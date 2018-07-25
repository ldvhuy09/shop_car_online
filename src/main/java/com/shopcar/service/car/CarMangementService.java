package com.shopcar.service.car;

import com.shopcar.model.BrandCar;
import com.shopcar.model.Car;
import com.shopcar.model.CarInfor.CarDetailInfor;
import com.shopcar.model.CarInfor.CarGeneralInfor;
import com.shopcar.model.TypeCar;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface CarMangementService {
    CarDetailInfor getById(long id);

    Page<CarGeneralInfor> getAll(Pageable pageable);

    Page<CarGeneralInfor> getByType(String typeName, Pageable pageable);

    Page<CarGeneralInfor> getByBrand(String brandName, Pageable pageable);
}
