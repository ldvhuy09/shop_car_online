package com.shopcar.service.catelogies;

import com.shopcar.model.BrandCar;
import com.shopcar.repository.BrandCarRepository;
import com.shopcar.service.catelogies.BrandCarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BrandCarServiceImpl implements BrandCarService {
    @Autowired
    BrandCarRepository brandCarRepository;

    @Override
    public List<BrandCar> findAll() {
        return (List<BrandCar>) brandCarRepository.findAll();
    }

    @Override
    public BrandCar findById(long id) {
        return brandCarRepository.findById(id);
    }

    @Override
    public void addBrandCar(String name, String code, String description) {
        BrandCar newBrandCar = new BrandCar();
        newBrandCar.setName(name);
        newBrandCar.setCode(code);
        newBrandCar.setDescription(description);

        brandCarRepository.save(newBrandCar);
    }
}
