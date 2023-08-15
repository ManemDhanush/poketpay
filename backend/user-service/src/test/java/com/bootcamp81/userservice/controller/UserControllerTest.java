package com.bootcamp81.userservice.controller;

import com.bootcamp81.userservice.dto.UserDTO;
import com.bootcamp81.userservice.entity.User;
import com.bootcamp81.userservice.exceptions.UserNotFoundException;
import com.bootcamp81.userservice.service.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.ws.rs.core.MediaType;
import org.junit.Rule;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnit;
import org.mockito.junit.MockitoRule;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.assertThrows;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class UserControllerTest {
    private MockMvc mockMvc;

    @Rule
    public MockitoRule mockitoRule= MockitoJUnit.rule();

    @Mock
    private UserService userService;

    @InjectMocks
    private UserController userController;


    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(userController).build();
    }

    @Test
    void testFindAll() throws Exception {
        List<User> userList = new ArrayList<>();
        userList.add(new User(1, "John", "Doe", "password", "123 Main Street", 12345, "johndoe@example.com",
                "1985-10-15", "New York", "1234567890", "United States"));

        when(userService.findAll()).thenReturn(userList);

        mockMvc.perform(MockMvcRequestBuilders.get("/users"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.length()").value(userList.size()));
    }



    @Test
    void testFindById() throws Exception {
        int userId = 1;
        User user = new User(userId, "John", "Doe", "password", "123 Main Street", 12345, "johndoe@example.com",
                "1985-10-15", "New York", "1234567890", "United States");

        when(userService.getUserById(userId)).thenReturn(user);


        mockMvc.perform(MockMvcRequestBuilders.get("/users/{userId}", userId))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.id").value(userId));
    }

    @Test
     void testFindById_UserNotFound() {

        int userId = 1;
        when(userService.getUserById(userId)).thenReturn(null);


        assertThrows(UserNotFoundException.class, () -> userController.findById(userId));


        verify(userService, times(1)).getUserById(userId);
    }

    @Test
    void testAddUser() throws Exception {
        UserDTO userDTO = new UserDTO();
        userDTO.setFirstName("John");
        userDTO.setLastName("Doe");
        userDTO.setPassword("password");
        userDTO.setAddress("123 Main Street");
        userDTO.setPincode(12345);
        userDTO.setEmail("johndoe@example.com");
        userDTO.setDateOfBirth("1985-10-15");
        userDTO.setCity("New York");
        userDTO.setPhoneNumber("1234567890");
        userDTO.setCountry("United States");

        ObjectMapper objectMapper = new ObjectMapper();
        String requestContent = objectMapper.writeValueAsString(userDTO);


        mockMvc.perform(MockMvcRequestBuilders.post("/users")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(requestContent))
                .andExpect(MockMvcResultMatchers.status().isOk());
    }

    @Test
    void testUpdateUser() throws Exception {
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
        userDTO.setPhoneNumber("1234567890");
        userDTO.setCountry("United States");

        ObjectMapper objectMapper = new ObjectMapper();
        String requestContent = objectMapper.writeValueAsString(userDTO);


        mockMvc.perform(MockMvcRequestBuilders.put("/users/{id}", userId)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(requestContent))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.password").value(userDTO.getPassword()));
    }

    @Test
     void testDeleteUser()
    {
        int userId = 1;
        User user = new User(userId, "John", "Doe", "password", "123 Main Street", 12345, "johndoe@example.com",
                "1985-10-15", "New York", "1234567890", "United States");

        user.setId(1);
        when(userService.getUserById(1)).thenReturn(user);
        userController.deleteUser(1);
        verify(userService,times(1)).deleteUser(1);
    }

    @Test
     void testExceptionDeletingUserIdNotFound() {
        assertThrows(RuntimeException.class, () -> {
            userController.deleteUser(-11);
        });
    }
    @Test
     void testGetUserByEmail_ValidEmail_ReturnUserDTO() {
        // Given
        String email = "test@example.com";
        UserDTO userDTO = new UserDTO();
        when(userService.getUserByEmail(email)).thenReturn(userDTO);

        // When
        UserDTO response = userController.getUserByEmail(email);

        // Then
        assertEquals(userDTO, response);
    }


}
