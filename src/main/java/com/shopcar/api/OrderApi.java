package com.shopcar.api;

import com.shopcar.model.Order;
import com.shopcar.model.User;
import com.shopcar.payload.OrderRequest;
import com.shopcar.payload.OrderResponse;
import com.shopcar.security.CurrentUser;
import com.shopcar.security.UserPrincipal;
import com.shopcar.service.order.OrderService;
import com.shopcar.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.shopcar.constant.OrderStatus.*;
@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/api/v1/order")
public class OrderApi {
    private static final String CHECK_CAR_IN_STOCK = "/checkCar";
    @Autowired
    private UserService userService;

    @Autowired
    private OrderService orderService;

    @GetMapping
    public ResponseEntity getAllOrderOfUser(@CurrentUser UserPrincipal currentUser) {
        User user = userService.getUserFromUserPrincipal(currentUser);
        return ResponseEntity.ok(orderService
                .findOrdersByUser(user)
                .stream().map(this::mapToOrderResponse));
    }

    @PostMapping
    public ResponseEntity addOrder(@CurrentUser UserPrincipal currentUser,
                                   @RequestBody OrderRequest orderRequest) {
        User user = userService.getUserFromUserPrincipal(currentUser);
        if (!orderService.addOrder(user , orderRequest))
            return ResponseEntity.badRequest().build();
        return ResponseEntity.ok("Đã tạo thành công");
    }

    @GetMapping(CHECK_CAR_IN_STOCK)
    public ResponseEntity checkCarInStock(@RequestParam("id") Long carId,
                                          @RequestParam("quantity") int quantity) {
        return null;
    }

    @GetMapping("/:orderId")
    public ResponseEntity<?> getOrder(@PathVariable("orderId") Long orderId) {
        Order order = orderService.findById(orderId);
        return ResponseEntity.ok(order);
    }

    @DeleteMapping("/:orderId")
    public ResponseEntity<?> cancelOrder(@PathVariable("orderId") Long orderId) {
        orderService.updateOrderWithState(orderId, ORDER_CANCELLED);
        return ResponseEntity.ok("Đã xóa thành công");
    }

    @PutMapping(":/orderId")
    public ResponseEntity<?> doneOrder(@PathVariable("orderId") Long orderId) {
        orderService.updateOrderWithState(orderId, ORDER_PAID);
        return ResponseEntity.ok("Cập nhật thành công");
    }

    private OrderResponse mapToOrderResponse(Order order) {
        return new OrderResponse(order);
    }
}
