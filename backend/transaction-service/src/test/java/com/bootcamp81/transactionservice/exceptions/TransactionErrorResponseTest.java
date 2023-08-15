package com.bootcamp81.transactionservice.exceptions;


import org.junit.Rule;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnit;
import org.mockito.junit.MockitoRule;

import static org.junit.jupiter.api.Assertions.assertEquals;

class TransactionErrorResponseTest {

    @Rule
    public MockitoRule mockitoRule= MockitoJUnit.rule();

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testWithAllArgsConstructors() {
        int expectedStatus = 404;
        String expectedMessage = "Not Found";
        long expectedTimeStamp = System.currentTimeMillis();

        TransactionErrorResponse response = new TransactionErrorResponse(expectedStatus, expectedMessage, expectedTimeStamp);

        assertEquals(expectedStatus, response.getStatus());
        assertEquals(expectedMessage, response.getMessage());
        assertEquals(expectedTimeStamp, response.getTimeStamp());
    }

    @Test
    void testWithNoArgsConstructors() {
        TransactionErrorResponse response = new TransactionErrorResponse();
        int expectedStatus = 400;
        String expectedMessage = "Bad Request";
        long expectedTimeStamp = System.currentTimeMillis();

        response.setStatus(expectedStatus);
        response.setMessage(expectedMessage);
        response.setTimeStamp(expectedTimeStamp);

        assertEquals(expectedStatus, response.getStatus());
        assertEquals(expectedMessage, response.getMessage());
        assertEquals(expectedTimeStamp, response.getTimeStamp());
    }

}