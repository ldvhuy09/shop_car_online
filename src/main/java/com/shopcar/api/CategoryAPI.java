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
public class CategoryAPI {
    @Autowired
    BrandCarService brandCarService;

    @Autowired
    TypeCarService typeCarService;

    @GetMapping
    public ResponseEntity getAllTypeCar (@RequestParam("category") String category) {
        List<?> categoriesList;
        switch (category) {
            case "type":
                categoriesList = typeCarService.findAll();
                break;
            case "brand":
                categoriesList = brandCarService.findAll();
                break;
            default:
                categoriesList = null;
        }
        return new ResponseEntity<>(categoriesList, HttpStatus.OK);
    }
}
