package com.bootcamp81.transactionservice.entity;

import org.junit.Rule;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnit;
import org.mockito.junit.MockitoRule;

import static org.junit.jupiter.api.Assertions.*;

class RecipientTest {
    @Rule
    public MockitoRule mockitoRule= MockitoJUnit.rule();

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }


    @Test
    void testRecipientWithNoArgs() {
        Recipient recipient = new Recipient();
        recipient.setId(1);
        recipient.setEmail("test@example.com");
        recipient.setFirstName("John");
        recipient.setLastName("Doe");
        recipient.setBankAccountType("Savings");
        recipient.setBankIFSCCode("ABC123");

        assertEquals(1, recipient.getId());
        assertEquals("test@example.com", recipient.getEmail());
        assertEquals("John", recipient.getFirstName());
        assertEquals("Doe", recipient.getLastName());
        assertEquals("Savings", recipient.getBankAccountType());
        assertEquals("ABC123", recipient.getBankIFSCCode());
    }

    @Test
    void testRecipientWithAllArgs(){
        Recipient recipient = new Recipient(1, "recipient@example.com", "John", "Doe", "Savings", "ABC123");

        assertEquals(1, recipient.getId());
        assertEquals("recipient@example.com", recipient.getEmail());
        assertEquals("John", recipient.getFirstName());
        assertEquals("Doe", recipient.getLastName());
        assertEquals("Savings", recipient.getBankAccountType());
        assertEquals("ABC123", recipient.getBankIFSCCode());
    }

}