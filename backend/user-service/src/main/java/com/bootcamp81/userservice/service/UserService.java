package com.bootcamp81.userservice.service;

import com.bootcamp81.userservice.dto.UserDTO;
import com.bootcamp81.userservice.entity.User;

import java.util.List;

public interface UserService {
    public List<User> findAll();

    public UserDTO saveUser(UserDTO userDTO);

    public User getUserById(int theId);

    public void updateUser(int theId, UserDTO userDTO);
    public void deleteUser(int theId);
    UserDTO getUserByEmail(String email);
}
