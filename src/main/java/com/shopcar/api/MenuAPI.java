package com.shopcar.api;

import java.util.List;
import com.shopcar.model.TypeCar;
import com.shopcar.model.BrandCar;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import com.shopcar.service.catelogies.TypeCarService;
import com.shopcar.service.catelogies.BrandCarService;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping("/api/v1/categories")
public class MenuAPI {
    private static final String REQUEST_ALL_TYPES = "/types";
    private static final String REQUEST_ALL_BRANDS = "/brands";

    @Autowired
    BrandCarService brandCarService;

    @Autowired
    TypeCarService typeCarService;

    @RequestMapping(value = REQUEST_ALL_TYPES, method = RequestMethod.GET)
    public ResponseEntity<List<TypeCar>> getAllTypeCar () {
        List<TypeCar> typesCar = typeCarService.findAll();
        return new ResponseEntity<>(typesCar, HttpStatus.OK);
    }

    @RequestMapping(value = REQUEST_ALL_BRANDS, method = RequestMethod.GET)
    public ResponseEntity<List<BrandCar>> getAllBrandCar () {
        List<BrandCar> brandsCar = brandCarService.findAll();
        return new ResponseEntity<>(brandsCar, HttpStatus.OK);
    }
}
