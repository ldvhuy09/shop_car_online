package com.shopcar.model.CarInfor;

import com.shopcar.model.Car;
import java.util.Date;
import java.util.List;

public class CarDetailInfor extends CarGeneralInfor {
    private String origin;
    private Date storeDate;
    private int numOfSales;
    private int numOfViews;
    private List<String> galleryPath;

    @Override
    public void getInforFrom(Car car) {
        super.getInforFrom(car);
        this.getDetailInforFrom(car);
    }

    public void getDetailInforFrom(Car car) {
        origin = car.getOrigin();
        storeDate = car.getStoreDate();
        numOfSales = car.getNumOfSales();
        numOfViews = car.getNumOfViews();
        galleryPath = car.getImages();
    }

    public String getOrigin() {
        return origin;
    }

    public Date getStoreDate() {
        return storeDate;
    }

    public int getNumOfSales() {
        return numOfSales;
    }

    public int getNumOfViews() {
        return numOfViews;
    }

    public List<String> getGalleryPath() {
        return galleryPath;
    }
}
