package com.shopcar.api;

import org.springframework.data.domain.Page;
import com.shopcar.api.header.ResponseConfig;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;
import com.shopcar.model.CarInfor.CarDetailInfor;
import com.shopcar.model.CarInfor.CarGeneralInfor;
import com.shopcar.service.car.CarManagementService;
import org.springframework.beans.factory.annotation.Autowired;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping("/api/v1/cars")
public class CarAPI {
    private static final String REQUEST_CARS = "";
    private static final String REQUEST_DETAIL_CAR = "/{id}";
    private static final String REQUEST_SEARCH_CARS = "/search";

    @Autowired
    CarManagementService carManagementService;

    @RequestMapping(value = REQUEST_CARS, method = RequestMethod.GET)
    public ResponseEntity<Page<CarGeneralInfor>> getCars(Pageable pageable) {
        Page<CarGeneralInfor> cars = carManagementService.getAll(pageable);
        return new ResponseEntity<>(cars, HttpStatus.OK);
    }

    @RequestMapping(value = REQUEST_SEARCH_CARS, method = RequestMethod.GET)
    public ResponseEntity<Page<CarGeneralInfor>> getCars(@RequestParam(name = "search") String search, Pageable pageable) {
        Page<CarGeneralInfor> cars = carManagementService.search(search, pageable);
        return new ResponseEntity<>(cars, HttpStatus.OK);
    }

    @RequestMapping(value = REQUEST_DETAIL_CAR, method = RequestMethod.GET)
    public ResponseEntity<CarDetailInfor> getDetailCar(@PathVariable("id") long id) {
        CarDetailInfor car = carManagementService.getById(id);
        return new ResponseEntity<>(car, HttpStatus.OK);
    }
}

