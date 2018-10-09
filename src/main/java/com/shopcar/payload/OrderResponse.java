package com.shopcar.payload;

import com.shopcar.model.CarInfor.CarGeneralInfor;
import com.shopcar.model.Order;

public class OrderResponse {
    private Long orderId;
    private CarGeneralInfor car;
    private int quantity;
    private long totalPrice;
    private int status;

    public OrderResponse(Order order) {
        this.orderId = order.getId();
        this.car = new CarGeneralInfor();
        this.car.getInforFrom(order.getOrderDetail().getCar());
        this.quantity = order.getOrderDetail().getQuantity();
        this.totalPrice = order.getOrderDetail().getTotalPrice();
        this.status = order.getStatus();
    }

    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public CarGeneralInfor getCar() {
        return car;
    }

    public void setCar(CarGeneralInfor car) {
        this.car = car;
    }

    public long getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(long totalPrice) {
        this.totalPrice = totalPrice;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }
}
