package com.shopcar.model.CarInfor;

import com.shopcar.model.BrandCar;
import com.shopcar.model.Car;
import com.shopcar.model.TypeCar;


public class CarGeneralInfor {
    private long id;
    private String name;
    private String type;
    private String brand;
    private long price;
    private long quantity;
    private String imageTopPath;

    public void getInforFrom(Car car) {
        id = car.getId();
        name = car.getName();
        price = car.getPrice();
        quantity = car.getQuantity();
        imageTopPath = car.getImages().get(0);
        setBrand(car.getBrand());
        setType(car.getType());
    }

    private void setBrand(BrandCar brandCar) {
        brand = brandCar.getName();
    }

    private void setType (TypeCar typeCar) {
        type = typeCar.getName();
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getBrand() {
        return brand;
    }

    public String getType() {
        return type;
    }

    public long getPrice() {
        return price;
    }

    public long getQuantity() {
        return quantity;
    }

    public String getImageTopPath() {
        return imageTopPath;
    }
}
