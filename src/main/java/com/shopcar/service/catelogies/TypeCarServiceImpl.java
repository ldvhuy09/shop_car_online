package com.shopcar.service.catelogies;

import com.shopcar.model.TypeCar;
import org.springframework.stereotype.Service;
import com.shopcar.repository.TypeCarRepository;
import org.springframework.beans.factory.annotation.Autowired;

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

    @Override
    public TypeCar findByName(String name) {
        return typeCarRepository.findByName(name);
    }
}
