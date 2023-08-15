package com.bootcamp81.transactionservice.exceptions;

import org.junit.Rule;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnit;
import org.mockito.junit.MockitoRule;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Objects;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

class TransactionExceptionHandlerTest {
    @Rule
    public MockitoRule mockitoRule= MockitoJUnit.rule();

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Mock
    private Exception mockedException;

    @InjectMocks
    TransactionExceptionHandler exceptionHandler;

    @Test
    void testHandleException() {
        // Arrange
        TransactionExceptionHandler exceptionHandler = new TransactionExceptionHandler();
        Exception mockedException = new Exception("Test error message");
        long expectedTimeStamp = System.currentTimeMillis();
        TransactionErrorResponse expectedError = new TransactionErrorResponse(HttpStatus.BAD_REQUEST.value(), "Test error message", expectedTimeStamp);

        // Act
        ResponseEntity<TransactionErrorResponse> response = exceptionHandler.handleException(mockedException);

        // Assert
        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertEquals(expectedError.getStatus(), response.getBody().getStatus());
        assertEquals(expectedError.getMessage(), response.getBody().getMessage());
    }

}