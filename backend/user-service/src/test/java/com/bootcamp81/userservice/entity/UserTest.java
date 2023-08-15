package com.bootcamp81.userservice.entity;


import org.junit.Rule;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnit;
import org.mockito.junit.MockitoRule;


import static org.junit.Assert.*;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

 class UserTest {

     @Rule
     public MockitoRule mockitoRule= MockitoJUnit.rule();

     @BeforeEach
     public void setup() throws Exception{
         user = new User();
         MockitoAnnotations.initMocks(this);
     }

     private User user;


    @Test
    void testAllArgsConstructor() {
        User user = new User(1, "John", "Doe", "password", "123 Main St", 12345,
                "john@example.com", "2000-01-01", "City", "1234567890", "Country");

        assertEquals(1, user.getId());
        assertEquals("John", user.getFirstName());
        assertEquals("Doe", user.getLastName());
        assertEquals("password", user.getPassword());
        assertEquals("123 Main St", user.getAddress());
        assertEquals(12345, user.getPincode());
        assertEquals("john@example.com", user.getEmail());
        assertEquals("2000-01-01", user.getDateOfBirth());
        assertEquals("City", user.getCity());
        assertEquals("1234567890", user.getPhoneNumber());
        assertEquals("Country", user.getCountry());
    }
    @Test
    void testToString() {
        user.setId(1);
        user.setFirstName("John");
        user.setLastName("Doe");
        user.setEmail("john@example.com");
        user.setPassword("password123");
        user.setAddress("123 Main St");
        user.setPincode(12345);
        user.setDateOfBirth("1990-01-01");
        user.setCity("New York");
        user.setPhoneNumber("1234567890");
        user.setCountry("United States");

        String expectedToString = "User(id=1, firstName=John, lastName=Doe, password=password123, address=123 Main St, pincode=12345, email=john@example.com, dateOfBirth=1990-01-01, city=New York, phoneNumber=1234567890, country=United States)";
        assertEquals(expectedToString, user.toString());
    }

    @Test
     void testUser() {
        assertNotNull(user);
    }

    @Test
     void testId() {
        user.setId(1);
        assertEquals(1, user.getId());
    }

    @Test
     void testFirstName() {
        user.setFirstName("John");
        assertEquals("John", user.getFirstName());
    }

    @Test
     void testLastName() {
        user.setLastName("Doe");
        assertEquals("Doe", user.getLastName());
    }

    @Test
     void testPassword() {
        user.setPassword("password123");
        assertEquals("password123", user.getPassword());
    }

    @Test
     void testAddress() {
        user.setAddress("123 Main St");
        assertEquals("123 Main St", user.getAddress());
    }

    @Test
    void testPincode() {
        user.setPincode(12345);
        assertEquals(12345, user.getPincode());
    }

    @Test
     void testEmail() {
        user.setEmail("john@example.com");
        assertEquals("john@example.com", user.getEmail());
    }

    @Test
    void testDateOfBirth() {
        user.setDateOfBirth("1990-01-01");
        assertEquals("1990-01-01", user.getDateOfBirth());
    }

    @Test
   void testCity() {
        user.setCity("New York");
        assertEquals("New York", user.getCity());
    }

    @Test
    void testPhoneNumber() {
        user.setPhoneNumber("1234567890");
        assertEquals("1234567890", user.getPhoneNumber());
    }

    @Test
    void testCountry() {
        user.setCountry("United States");
        assertEquals("United States", user.getCountry());
    }
    @Test
    void testDefaultConstructor() {
        User user = new User();
        assertNotNull(user);
        assertEquals(0, user.getId());

    }
    @Test
  void testSetters() {
        user.setId(1);
        user.setFirstName("John");

        assertEquals(1, user.getId());
        assertEquals("John", user.getFirstName());

    }
    @Test
     void testGetters() {
        assertEquals(0, user.getId());
        assertEquals(null, user.getFirstName());
    }


//

}


