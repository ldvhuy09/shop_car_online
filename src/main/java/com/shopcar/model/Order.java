package com.shopcar.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;


import static com.shopcar.constant.OrderStatus.*;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne(targetEntity = User.class)
    @JsonIgnore
    private User user;

    @OneToOne(targetEntity = OrderDetail.class, cascade = CascadeType.ALL)
    private OrderDetail orderDetail;

    private int status;

    public Order() {
        this.status = ORDER_PROCESSING;
    }

    public Order(OrderDetail orderDetail) {
        this.orderDetail = orderDetail;
        this.status = ORDER_PROCESSING;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public OrderDetail getOrderDetail() {
        return orderDetail;
    }

    public void setOrderDetail(OrderDetail orderDetail) {
        this.orderDetail = orderDetail;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }
}
