package com.shopcar.api;

import com.shopcar.payload.*;
import com.shopcar.security.JwtTokenProvider;
import com.shopcar.service.user.UserService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import javax.validation.Valid;
import com.shopcar.payload.HttpStatus;

import static com.shopcar.message.ErrorMessage.EMAIL_IS_EXISTED;

@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/api/v1/auth")
public class AuthApi {
    private static final String REQUEST_SIGNUP = "/signup";
    private static final String REQUEST_LOGIN = "/login";

    @Autowired
    private UserService userService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenProvider jwtProvider;

    @PostMapping(REQUEST_SIGNUP)
    public ApiResponse signUp(@Valid @RequestBody SignupRequest request) {
        if (userService.isExistedEmail(request.getEmail()))
            return new ApiResponse(HttpStatus.BAD_REQUEST, new MessagePayload(EMAIL_IS_EXISTED));
        userService.createNewUser(request);
        AuthenticationPayload jwt = getJwt(request.getEmail(), request.getPassword());
        return new ApiResponse(HttpStatus.OK, jwt);
    }

    @PostMapping(REQUEST_LOGIN)
    public ApiResponse login(@Valid @RequestBody LoginRequest request) {
        AuthenticationPayload jwt = getJwt(request.getEmail(), request.getPassword());
        return new ApiResponse(HttpStatus.OK, jwt);
    }

    private AuthenticationPayload getJwt(String email, String password) {
        Authentication authentication = authenticationManager
                .authenticate(
                        new UsernamePasswordAuthenticationToken(email, password));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = jwtProvider.generateToken(authentication);
        return new AuthenticationPayload(token);
    }
}
