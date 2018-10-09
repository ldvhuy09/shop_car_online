package com.shopcar.api;

import com.shopcar.mapper.RequestParamMapper;
import com.shopcar.specification.QueryCriteria;
import org.springframework.data.domain.Page;
import com.shopcar.api.header.ResponseConfig;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.data.domain.Pageable;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import com.shopcar.model.CarInfor.CarDetailInfor;
import com.shopcar.model.CarInfor.CarGeneralInfor;
import com.shopcar.service.car.CarManagementService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/api/v1/cars")
public class CarAPI {
    private static final String REQUEST_CARS = "";
    private static final String REQUEST_DETAIL_CAR = "/{id}";
    private static final String REQUEST_SEARCH_CARS = "/search";

    @Autowired
    CarManagementService carManagementService;

    @RequestMapping(value = "/hello", method = RequestMethod.GET)
    public String handleRequest3(@RequestParam MultiValueMap<String, String> queryMap) {
        String response = "";
        List<String> itemIds = queryMap.get("id");
        for (String itemId : itemIds) {
            response += "item from map with String id " + itemId + "<br/>";
        }
        return response;
    }

    @RequestMapping(value = REQUEST_CARS, method = RequestMethod.GET)
    public ResponseEntity<Page<CarGeneralInfor>> getCars(Pageable pageable) {
        Page<CarGeneralInfor> cars = carManagementService.getAll(pageable);
        return new ResponseEntity<>(cars, HttpStatus.OK);
    }

    @RequestMapping(value = REQUEST_SEARCH_CARS, method = RequestMethod.GET)
    public ResponseEntity<Page<CarGeneralInfor>> getCars(
            @RequestParam Map<String, String> multipleParams,
            Pageable pageable) {
        List<QueryCriteria> queries = RequestParamMapper.getQueryCriteriaFromMultipleParams(multipleParams);
        Page<CarGeneralInfor> cars = carManagementService.search(queries, pageable);
        return new ResponseEntity<>(cars, HttpStatus.OK);
    }

    @RequestMapping(value = REQUEST_DETAIL_CAR, method = RequestMethod.GET)
    public ResponseEntity<CarDetailInfor> getDetailCar(@PathVariable("id") long id) {
        CarDetailInfor car = carManagementService.getById(id);
        return new ResponseEntity<>(car, HttpStatus.OK);
    }
}

