package com.bootcamp81.businessservice.entity;

import org.junit.Rule;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnit;
import org.mockito.junit.MockitoRule;

import static org.junit.jupiter.api.Assertions.assertEquals;

class BusinessUserTest {
    @Rule
    public MockitoRule mockitoRule= MockitoJUnit.rule();

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testBusinessUserAllArgsConstructor() {
        BusinessUser user = new BusinessUser(1, "John", "Doe", 123, "TypeA", "1990-01-01", "USA");
        assertEquals(1, user.getId());
        assertEquals("John", user.getFirstName());
        assertEquals("Doe", user.getLastName());
        assertEquals(123, user.getRecipientId());
        assertEquals("TypeA", user.getBusinessUserType());
        assertEquals("1990-01-01", user.getDateOfBirth());
        assertEquals("USA", user.getCountry());
    }


    @Test
    void testBusinessUserNoArgsConstructor(){
        BusinessUser user = new BusinessUser();
        user.setId(1);
        user.setFirstName("John");
        user.setLastName("Doe");
        user.setRecipientId(123);
        user.setBusinessUserType("TypeA");
        user.setDateOfBirth("1990-01-01");
        user.setCountry("USA");

        assertEquals(1, user.getId());
        assertEquals("John", user.getFirstName());
        assertEquals("Doe", user.getLastName());
        assertEquals(123, user.getRecipientId());
        assertEquals("TypeA", user.getBusinessUserType());
        assertEquals("1990-01-01", user.getDateOfBirth());
        assertEquals("USA", user.getCountry());
    }

}