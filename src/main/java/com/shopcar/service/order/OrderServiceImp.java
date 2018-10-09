package com.shopcar.service.order;

import com.shopcar.exception.CarNotAvailableException;
import com.shopcar.model.Car;
import com.shopcar.model.Order;
import com.shopcar.model.OrderDetail;
import com.shopcar.model.User;
import com.shopcar.payload.OrderRequest;
import com.shopcar.repository.CarRepository;
import com.shopcar.repository.OrderDetailRepository;
import com.shopcar.repository.OrderRepository;
import com.shopcar.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.shopcar.constant.OrderStatus.*;

@Service
public class OrderServiceImp implements OrderService {
    @Autowired
    UserRepository userRepository;

    @Autowired
    CarRepository carRepository;

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    OrderDetailRepository orderDetailRepository;

    @Override
    public Order findById(Long orderId) {
        return orderRepository.findById(orderId).get();
    }

    @Override
    public List<Order> findOrdersByUser(User user) {
        return orderRepository.findByUser(user);
    }

    @Override
    public boolean addOrder(User user, OrderRequest orderRequest)  {
        try {
            OrderDetail orderDetail = createOrderDetailFromRequest(orderRequest);
            orderDetailRepository.save(orderDetail);
            Order order = new Order(orderDetail);
            updateOrderWithState(order, ORDER_PROCESSING);
            order.setUser(user);
            orderRepository.save(order);
            List<Order> orders = user.getOrders();
            orders.add(order);
            user.setOrders(orders);
            userRepository.save(user);
            return true;
        }
        catch (CarNotAvailableException notAvailableException) {
            return false;
        }
    }

    private OrderDetail createOrderDetailFromRequest(OrderRequest request) throws CarNotAvailableException {
        Car car = carRepository.findById(request.getCarId()).get();
        if (!isAvailable(car, request.getQuantity()))
            throw new CarNotAvailableException("Not enough cars in the inventory");
        return new OrderDetail(car,
                request.getQuantity(),
                request.getTotalPrice(),
                request.getAddress()
        );
    }

    @Override
    public boolean isAvailable(Car car, int quantityOrder) {
        boolean result = true;
        int quantityInStock = car.getQuantity();
        if (quantityInStock < quantityOrder) result = false;
        return result;
    }

    private void updateOrderWithState(Order order, int state) {
        order.setStatus(state);
        if (state == ORDER_PAID) return;
        Car car = order.getOrderDetail().getCar();
        int quantity = order.getOrderDetail().getQuantity();
        if (state == ORDER_PROCESSING) {
            quantity = 0 - quantity;
        }
        car.addQuantity(quantity);
        carRepository.save(car);
    }

    @Override
    public void updateOrderWithState(Long orderId, int state) {
        Order order = orderRepository.findById(orderId).get();
        this.updateOrderWithState(order, state);
    }

    @Override
    public void deleteOrder(Long orderId) {
        orderRepository.deleteById(orderId);
    }
}
