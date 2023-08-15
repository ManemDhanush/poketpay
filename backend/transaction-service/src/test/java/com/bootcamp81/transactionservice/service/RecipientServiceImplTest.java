package com.bootcamp81.transactionservice.service;

import com.bootcamp81.transactionservice.entity.Recipient;
import com.bootcamp81.transactionservice.repository.RecipientRepository;
import org.junit.Rule;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnit;
import org.mockito.junit.MockitoRule;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

class RecipientServiceImplTest {
    @Rule
    public MockitoRule mockitoRule= MockitoJUnit.rule();

    @Mock
    private RecipientRepository recipientRepository;

    @Mock
    private RecipientService recipientService;

    @InjectMocks
    RecipientServiceImpl recipientServiceImpl;


    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testSaveRecipient() {
        Recipient recipient = new Recipient();
        recipient.setEmail("test@example.com");
        recipient.setFirstName("John");
        recipient.setLastName("Doe");

        when(recipientRepository.save(recipient)).thenReturn(recipient);

        Recipient savedRecipient = recipientServiceImpl.save(recipient);

        assertEquals(recipient, savedRecipient);
        verify(recipientRepository, times(1)).save(recipient);
    }
}