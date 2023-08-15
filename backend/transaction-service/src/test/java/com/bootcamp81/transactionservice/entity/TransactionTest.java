package com.bootcamp81.transactionservice.entity;

import org.junit.Rule;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnit;
import org.mockito.junit.MockitoRule;

import static org.junit.jupiter.api.Assertions.*;

class TransactionTest {
    @Rule
    public MockitoRule mockitoRule= MockitoJUnit.rule();

    @Mock
    private Recipient recipient;

    private Transaction transaction;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        transaction = new Transaction();
    }

    @Test
    void testTransactionWithNoArgs() {
        transaction.setId(1);
        transaction.setFromCurrency("USD");
        transaction.setToCurrency("EUR");
        transaction.setRecipient(recipient);
        transaction.setSenderId(2);
        transaction.setAmount(100.0);
        transaction.setAmountConverted(90.0);
        transaction.setStatus("Completed");
        transaction.setPurpose("Payment");

        assertEquals(1, transaction.getId());
        assertEquals("USD", transaction.getFromCurrency());
        assertEquals("EUR", transaction.getToCurrency());
        assertEquals(recipient, transaction.getRecipient());
        assertEquals(2, transaction.getSenderId());
        assertEquals(100.0, transaction.getAmount());
        assertEquals(90.0, transaction.getAmountConverted());
        assertEquals("Completed", transaction.getStatus());
        assertEquals("Payment", transaction.getPurpose());
    }

    @Test
    void testAllArgsConstructor() {
        // Create a Transaction object using @AllArgsConstructor
        Transaction transaction = new Transaction(
                1,
                "USD",
                "EUR",
                recipient,
                123,
                100.0,
                90.0,
                "Completed",
                "Payment"
        );

        // Verify the values using getters
        assertEquals(1, transaction.getId());
        assertEquals("USD", transaction.getFromCurrency());
        assertEquals("EUR", transaction.getToCurrency());
        assertEquals(recipient, transaction.getRecipient());
        assertEquals(123, transaction.getSenderId());
        assertEquals(100.0, transaction.getAmount(), 0.0);
        assertEquals(90.0, transaction.getAmountConverted(), 0.0);
        assertEquals("Completed", transaction.getStatus());
        assertEquals("Payment", transaction.getPurpose());
    }

}