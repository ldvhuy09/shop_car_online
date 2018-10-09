package com.shopcar.service.user;

import com.shopcar.model.User;
import com.shopcar.payload.SignupRequest;
import com.shopcar.security.UserPrincipal;

public interface UserService {
    public User findById(Long userId);
    public User getUserFromUserPrincipal(UserPrincipal userPrincipal);
    public void createNewUser(SignupRequest request);
    public boolean isExistedEmail(String email);
}
