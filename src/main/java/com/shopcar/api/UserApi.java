package com.shopcar.api;

import com.shopcar.payload.OrderRequest;
import com.shopcar.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping("/api/v1/user")
public class UserApi {
    private static final String ADD_TO_CARD = "/order";

    @Autowired
    private UserService userService;

}
