package com.shopcar.api.product;

import com.shopcar.model.BrandCar;
import com.shopcar.model.TypeCar;
import com.shopcar.service.catelogies.BrandCarService;
import com.shopcar.service.catelogies.TypeCarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RestController
public class CatelogiesAPI {
    @Autowired
    BrandCarService brandCarService;

    @Autowired
    TypeCarService typeCarService;

    @GetMapping("/brand/all")
    public List<BrandCar> getAllBrand() {
        return brandCarService.findAll();
    }

    @GetMapping("type/all")
    public List<TypeCar> getAllType() {
        return typeCarService.findAll();
    }

}
