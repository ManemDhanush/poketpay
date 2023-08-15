package com.bootcamp81.userservice.service;

import com.bootcamp81.userservice.dto.UserDTO;
import com.bootcamp81.userservice.entity.User;
import com.bootcamp81.userservice.exceptions.UserNotFoundException;
import com.bootcamp81.userservice.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
@Service
public class UserServiceImpl implements UserService{
   private UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository theUserRepository)
    {
        userRepository=theUserRepository;
    }



    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }


    @Override
    public UserDTO saveUser(UserDTO userDTO) {
        User theUser = userRepository.save(userDTO.convertDtoToEntity(userDTO));
        return UserDTO.convertEntityToDto(theUser);
    }

    @Override
    public User getUserById(int theId) {
        Optional<User> result = userRepository.findById(theId);

        User theUser = null;

        if (result.isPresent()) {
            theUser = result.get();
        }
        else {
            throw new UserNotFoundException("Did not find user id - " + theId);
        }

        return theUser;
    }

    @Override
    public void updateUser(int theId, UserDTO userDTO) {
        Optional<User> result = userRepository.findById(theId);

        if (result.isPresent()) {
            User theUser = result.get();
            theUser.setFirstName(userDTO.getFirstName());
            theUser.setLastName(userDTO.getLastName());
            theUser.setPassword(userDTO.getPassword());
            theUser.setAddress(userDTO.getAddress());
            theUser.setPincode(userDTO.getPincode());
            theUser.setEmail(userDTO.getEmail());
            theUser.setDateOfBirth(userDTO.getDateOfBirth());
            theUser.setCity(userDTO.getCity());
            theUser.setPhoneNumber(userDTO.getPhoneNumber());
            theUser.setCountry(userDTO.getCountry());

            userRepository.save(theUser);
        } else {
            throw new UserNotFoundException("Did not find user id - " + theId);
        }
    }

    @Override
    public void deleteUser(int theId) {
        userRepository.deleteById(theId);
    }
    @Override
    @Transactional
    public UserDTO getUserByEmail(String email) {
        Optional<User> user = userRepository.findByEmail(email);
        UserDTO userDTO = null;
        if (user.isPresent()) {
            userDTO = UserDTO.convertEntityToDto(user.get());
        } else {
            throw new UserNotFoundException("Did not find user with email- " + email);
        }
        return userDTO;

    }

}
