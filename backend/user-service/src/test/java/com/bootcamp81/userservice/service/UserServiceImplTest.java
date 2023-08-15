package com.bootcamp81.userservice.service;

import com.bootcamp81.userservice.dto.UserDTO;
import com.bootcamp81.userservice.entity.User;
import com.bootcamp81.userservice.exceptions.UserNotFoundException;
import com.bootcamp81.userservice.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertThrows;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class UserServiceImplTest {
    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserServiceImpl userService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testFindAll() {
        List<User> userList = new ArrayList<>();
        userList.add(new User(1, "John", "Doe", "password", "123 Main Street", 12345, "johndoe@example.com",
                "1985-10-15", "New York", "1234567890", "United States"));
        when(userRepository.findAll()).thenReturn(userList);

        List<User> result = userService.findAll();

        verify(userRepository, times(1)).findAll();

        assertEquals(userList.size(), result.size());
        assertEquals(userList.get(0), result.get(0));
    }

    @Test
    void testSaveUser() {
        User user = new User(1, "John", "Doe", "password", "123 Main Street", 12345, "johndoe@example.com",
                "1985-10-15", "New York", "1234567890", "United States");
        UserDTO userDTO = UserDTO.convertEntityToDto(user);


        when(userRepository.save(any(User.class))).thenReturn(UserDTO.convertDtoToEntity(userDTO));
        UserDTO userDTO1 = userService.saveUser(userDTO);


        verify(userRepository, times(1)).save(any(User.class));
    }

    @Test
    void testGetUserById_UserFound() {
        int userId = 1;
        User user = new User(userId, "John", "Doe", "password", "123 Main Street", 12345, "johndoe@example.com",
                "1985-10-15", "New York", "1234567890", "United States");

        when(userRepository.findById(userId)).thenReturn(Optional.of(user));


        User result = userService.getUserById(userId);


        verify(userRepository, times(1)).findById(userId);

        assertNotNull(result);
        assertEquals(user, result);
    }

    @Test
    void testGetUserById_UserNotFound() {
        int userId = 1;

        // Mock the userRepository.findById() method
        when(userRepository.findById(userId)).thenReturn(Optional.empty());

        // Call the service method and verify the UserNotFoundException is thrown
        assertThrows(UserNotFoundException.class, () -> userService.getUserById(userId));

        // Verify the userRepository.findById() method was called
        verify(userRepository, times(1)).findById(userId);
    }

    @Test
    void testUpdateUser_UserFound() {
        int userId = 1;
        UserDTO userDTO = new UserDTO();
        userDTO.setFirstName("John");
        userDTO.setLastName("Doe");
        userDTO.setPassword("newpassword");
        userDTO.setAddress("123 Main Street");
        userDTO.setPincode(12345);
        userDTO.setEmail("johndoe@example.com");
        userDTO.setDateOfBirth("1985-10-15");
        userDTO.setCity("New York");
        userDTO.setPhoneNumber("123-456-7890");
        userDTO.setCountry("United States");

        User existingUser = new User(userId, "John", "Doe", "password", "123 Main Street", 12345, "johndoe@example.com",
                "1985-10-15", "New York", "1234567890", "United States");
        when(userRepository.findById(userId)).thenReturn(Optional.of(existingUser));

        userService.updateUser(userId, userDTO);


        verify(userRepository, times(1)).findById(userId);

        verify(userRepository, times(1)).save(any(User.class));

        assertEquals(userId, existingUser.getId());
        assertEquals(userDTO.getFirstName(), existingUser.getFirstName());
        assertEquals(userDTO.getLastName(), existingUser.getLastName());
        assertEquals(userDTO.getPassword(), existingUser.getPassword());
        assertEquals(userDTO.getAddress(), existingUser.getAddress());
        assertEquals(userDTO.getPincode(), existingUser.getPincode());
        assertEquals(userDTO.getEmail(), existingUser.getEmail());
        assertEquals(userDTO.getDateOfBirth(), existingUser.getDateOfBirth());
        assertEquals(userDTO.getCity(), existingUser.getCity());
        assertEquals(userDTO.getPhoneNumber(), existingUser.getPhoneNumber());
        assertEquals(userDTO.getCountry(), existingUser.getCountry());
    }

    @Test
    void testUpdateUser_UserNotFound() {
        int userId = 1;
        UserDTO userDTO = new UserDTO();
        userDTO.setFirstName("John");
        userDTO.setLastName("Doe");
        userDTO.setPassword("newpassword");
        userDTO.setAddress("123 Main Street");
        userDTO.setPincode(12345);
        userDTO.setEmail("johndoe@example.com");
        userDTO.setDateOfBirth("1985-10-15");
        userDTO.setCity("New York");
        userDTO.setPhoneNumber("123-456-7890");
        userDTO.setCountry("United States");


        when(userRepository.findById(userId)).thenReturn(Optional.empty());

        assertThrows(UserNotFoundException.class, () -> userService.updateUser(userId, userDTO));

        verify(userRepository, times(1)).findById(userId);

        verify(userRepository, times(0)).save(any(User.class));
    }

    @Test
    void testDeleteUser() {
        int userId = 1;

        // Call the service method
        userService.deleteUser(userId);

        // Verify the userRepository.deleteById() method was called
        verify(userRepository, times(1)).deleteById(userId);
    }
    @Test
    void testGetUserByEmail_UserExists_ReturnUserDTO() {
        // Given
        String email = "test@example.com";
        User user = new User();
        user.setEmail(email);
        when(userRepository.findByEmail(email)).thenReturn(Optional.of(user));

        // When
        UserDTO userDTO = userService.getUserByEmail(email);

        // Then
        assertNotNull(userDTO);
        assertEquals(email, userDTO.getEmail());
    }
    @Test
     void testGetUserByEmail_UserDoesNotExist_ThrowUserNotFoundException() {
        // Given
        String email = "test@example.com";
        when(userRepository.findByEmail(email)).thenReturn(Optional.empty());

        // Then
        assertThrows(UserNotFoundException.class, () -> userService.getUserByEmail(email));
    }
}
