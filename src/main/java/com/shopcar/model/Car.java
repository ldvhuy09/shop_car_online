package com.shopcar.model;


import com.shopcar.configuration.ConfigProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "Car")
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "name")
    private String name;

    @ManyToOne(fetch = FetchType.EAGER)
    private TypeCar type;

    @OneToOne(targetEntity = BrandCar.class
            , fetch = FetchType.LAZY)
    private BrandCar brand;

    @Column(name = "origin")
    private String origin;

    @Column(name = "storeDate")
    private Date storeDate;

    @Column(name = "quantity")
    private int quantity;

    @Column(name = "numOfSales")
    private int numOfSales;

    @Column(name = "numOfViews")
    private int numOfViews;

    @Column(name = "price")
    private long price;

    @OneToMany(mappedBy = "car",
            fetch = FetchType.LAZY,
            cascade = CascadeType.REMOVE)
    private List<ImageCar> images;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setType(TypeCar type) {
        this.type = type;
    }

    public TypeCar getType() {
        return type;
    }

    public BrandCar getBrand() {
        return brand;
    }

    public void setBrand(BrandCar brand) {
        this.brand = brand;
    }

    public String getOrigin() {
        return origin;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }

    public Date getStoreDate() {
        return storeDate;
    }

    public void setStoreDate(Date storeDate) {
        this.storeDate = storeDate;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public int getNumOfSales() {
        return numOfSales;
    }

    public void setNumOfSales(int numOfSales) {
        this.numOfSales = numOfSales;
    }

    public int getNumOfViews() {
        return numOfViews;
    }

    public void setNumOfViews(int numOfViews) {
        this.numOfViews = numOfViews;
    }

    public long getPrice() {
        return price;
    }

    public void setPrice(long price) {
        this.price = price;
    }

    public List<String> getImages() {
        List<String> imagePaths = new ArrayList<>();
        for (ImageCar image : this.images) {
            imagePaths.add(image.getFileName());
        }
        return imagePaths;
    }

    @Override
    public String toString() {
        return "Car{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", type='" + type + '\'' +
                ", brand=" + brand +
                ", origin='" + origin + '\'' +
                ", storeDate=" + storeDate +
                ", quantity=" + quantity +
                ", numOfSales=" + numOfSales +
                ", numOfViews=" + numOfViews +
                ", price=" + price +
                '}';
    }
}
