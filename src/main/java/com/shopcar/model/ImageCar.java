package com.shopcar.model;

import javax.persistence.*;

@Entity
@Table(name = "image")
public class ImageCar {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @ManyToOne(fetch = FetchType.LAZY)
    private Car car;

    private String extension;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Car getCar() {
        return car;
    }

    public void setCar(Car car) {
        this.car = car;
    }

    public String getExtension() {
        return extension;
    }

    public void setExtension(String extension) {
        this.extension = extension;
    }

    public String getFileName() {
        return String.format("%d_%d.%s", id, car.getId(), extension);
    }

    public String toString() {
        return getFileName();
    }
}
