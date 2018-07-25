package com.shopcar.service.catelogies.impl;

import com.shopcar.model.TypeCar;
import com.shopcar.repository.TypeCarRepository;
import com.shopcar.service.catelogies.TypeCarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TypeCarServiceImpl implements TypeCarService {

    @Autowired
    TypeCarRepository typeCarRepository;

    @Override
    public List<TypeCar> findAll() {
        return (List<TypeCar>) typeCarRepository.findAll();
    }

    @Override
    public TypeCar findById(long id) {
        return typeCarRepository.findById(id);
    }

    @Override
    public void addTypeCar(String name, String description) {
        TypeCar newType = new TypeCar();
        newType.setName(name);
        newType.setDescription(description);

        typeCarRepository.save(newType);
    }
}
