package com.shopcar.service.user;

import com.shopcar.model.Role;
import com.shopcar.model.RoleName;
import com.shopcar.model.User;
import com.shopcar.payload.SignupRequest;
import com.shopcar.repository.RoleRepository;
import com.shopcar.repository.UserRepository;
import com.shopcar.security.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class UserServiceImp implements UserService{
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private RoleRepository roleRepository;

    @Override
    public User getUserFromUserPrincipal(UserPrincipal userPrincipal) {
        Long userId = userPrincipal.getId();
        return userRepository.findById(userId).get();
    }

    @Override
    public User findById(Long userId) {
        return userRepository.findById(userId).get();
    }

    @Override
    public void createNewUser(SignupRequest request) {
        User user = new User(request.getEmail(), request.getPassword(), request.getName());
        String hashedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(hashedPassword);
        Role role = roleRepository.findByName(RoleName.ROLE_USER);
        user.setRoles(Collections.singleton(role));
        userRepository.save(user);
    }

    @Override
    public boolean isExistedEmail(String email) {
        return userRepository.existsByEmail(email);
    }
}
