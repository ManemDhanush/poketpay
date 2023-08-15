package com.bootcamp81.userservice.controller;

import com.bootcamp81.userservice.dto.UserDTO;
import com.bootcamp81.userservice.entity.User;
import com.bootcamp81.userservice.exceptions.UserNotFoundException;
import com.bootcamp81.userservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;


    @GetMapping("")
    public List<User> findAll()
    {
        return userService.findAll();
    }

    //find by id
    @GetMapping("/{userId}")
    public User findById(@PathVariable int userId)
    {
        User user=userService.getUserById(userId);
        if(user==null)
            throw new UserNotFoundException("User id not found-"+userId);
        return user;
    }

    @PostMapping("")
    public UserDTO addUser(@RequestBody UserDTO theUser){
        theUser.setId(0);
        return userService.saveUser(theUser);
    }

    @PutMapping("/{id}")
    public UserDTO updateStudents(@PathVariable int id, @RequestBody UserDTO theUser) {
        theUser.setId(id);
        userService.updateUser(id, theUser);
        return theUser;
    }
    @DeleteMapping("/{userId}")
    public String deleteUser(@PathVariable int userId)
    {
        User user=userService.getUserById(userId);
        if(user==null)
            throw new UserNotFoundException("The user id is not found- "+userId);

        userService.deleteUser(userId);
        return "Deleted user  id  with :"+userId;
    }
    @GetMapping("/email")
    public UserDTO getUserByEmail(@RequestParam("email") String email){
        return userService.getUserByEmail(email);
    }
}
