package com.bootcamp81.businessservice.entity;


import org.junit.Rule;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnit;
import org.mockito.junit.MockitoRule;

import static org.junit.jupiter.api.Assertions.assertEquals;

class BusinessTest {
    @Rule
    public MockitoRule mockitoRule= MockitoJUnit.rule();



    private Business business;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        business = new Business();
    }

    @Test
    void testBusinessWithNoArgs() {
        business.setId(1);
        business.setName("John");
        business.setRegisterNumber("1234");
        business.setRegisterAddress("India");
        business.setSenderId(2);
        business.setSizeOfBusiness("50-100");
        business.setCategory("Technology");
        business.setSubCategory("Software");

        assertEquals(1, business.getId());
        assertEquals("John", business.getName());
        assertEquals("1234", business.getRegisterNumber());
        assertEquals("India", business.getRegisterAddress());
        assertEquals(2, business.getSenderId());
        assertEquals("50-100", business.getSizeOfBusiness());
        assertEquals("Technology", business.getCategory());
        assertEquals("Software", business.getSubCategory());
    }

    @Test
    void testAllArgsConstructor() {

        Business business = new Business(
                1,
                "John",
                "1234",
                "India",
                2,
                "50-100",
                "Technology",
                "Software"
        );


        assertEquals(1, business.getId());
        assertEquals("John", business.getName());
        assertEquals("1234", business.getRegisterNumber());
        assertEquals("India", business.getRegisterAddress());
        assertEquals(2, business.getSenderId());
        assertEquals("50-100", business.getSizeOfBusiness());
        assertEquals("Technology", business.getCategory());
        assertEquals("Software", business.getSubCategory());

    }

}