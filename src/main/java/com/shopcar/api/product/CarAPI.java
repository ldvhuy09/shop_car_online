package com.shopcar.api.product;



import com.shopcar.model.Car;
import com.shopcar.model.CarInfor.CarDetailInfor;
import com.shopcar.model.CarInfor.CarGeneralInfor;
import com.shopcar.service.car.CarMangementService;
import javassist.compiler.Parser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import static com.shopcar.constant.PageConfig.*;


@RestController
@RequestMapping("/car")
public class CarAPI {
    @Autowired
    CarMangementService carMangementService;

    @GetMapping("/all")
    public @ResponseBody
    Page<CarGeneralInfor> getAllCar(@RequestParam(value = "page", required = false, defaultValue = DEFAULT_PAGE_NUMBER) int pageNum,
                                    @RequestParam(value = "limit", required = false, defaultValue = DEFAULT_PAGE_SIZE) int pageSize) {
         return carMangementService.getAll(new PageRequest(pageNum, pageSize));
    }

    @GetMapping("/{id}")
    public CarDetailInfor getCarById(@PathVariable("id") long id) {
        return carMangementService.getById(id);
    }

    @GetMapping("/type/{type}")
    public Page<CarGeneralInfor> getCarByType(@PathVariable(name = "type") String type,
                                              @RequestParam(name = "page", required = false, defaultValue = DEFAULT_PAGE_NUMBER) int pageNum,
                                              @RequestParam(name = "limit", required = false, defaultValue = DEFAULT_PAGE_SIZE) int pageSize) {
        return carMangementService.getByType(type, new PageRequest(pageNum, pageSize));
    }

    @GetMapping("/brand/{brand}")
    public Page<CarGeneralInfor> getCarByBrand(@PathVariable(name = "brand") String brand,
                                               @RequestParam(name = "page", required = false, defaultValue = DEFAULT_PAGE_NUMBER) int pageNum,
                                               @RequestParam(name = "limit", required = false, defaultValue = DEFAULT_PAGE_SIZE) int pageSize) {
        return carMangementService.getByBrand(brand, new PageRequest(pageNum, pageSize));
    }

    @GetMapping("/top")
    public Page<CarGeneralInfor> getTop(@RequestParam(name = "property") String property,
                                        @RequestParam(name = "top") int top) {
        int pageDefault = Integer.parseInt(DEFAULT_PAGE_NUMBER);
        return carMangementService.getAll(new PageRequest(pageDefault, top, Sort.Direction.DESC, property));

    }

}
