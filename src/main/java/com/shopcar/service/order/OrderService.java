package com.shopcar.service.order;

import com.shopcar.model.Car;
import com.shopcar.model.Order;
import com.shopcar.model.User;
import com.shopcar.payload.OrderRequest;

import java.util.List;

public interface OrderService {
    public Order findById(Long orderId);
    public List<Order> findOrdersByUser(User user);
    public boolean isAvailable(Car car, int quantity);
    public boolean addOrder(User user, OrderRequest orderRequest);
    public void updateOrderWithState(Long orderId, int state);
    public void deleteOrder(Long orderId);
}
