package com.bootcamp81.transactionservice.service;

import com.bootcamp81.transactionservice.dto.TransactionDTO;
import com.bootcamp81.transactionservice.entity.Recipient;
import com.bootcamp81.transactionservice.entity.Transaction;
import com.bootcamp81.transactionservice.repository.TransactionRepository;
import org.junit.Rule;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnit;
import org.mockito.junit.MockitoRule;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.verify;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class TransactionServiceImplTest {
    @Rule
    public MockitoRule mockitoRule= MockitoJUnit.rule();

    @Mock
    private TransactionRepository transactionRepository;

    @Mock
    private RecipientService recipientService;

    @Mock
    private Recipient recipient;

    @InjectMocks
    private TransactionServiceImpl transactionServiceImpl;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }


    @Test
    void testSaveTransaction() {

        TransactionDTO transactionDTOMock = new TransactionDTO(1,"INR","UK",recipient,1,100,200,"sending","payment");
        Transaction transaction = TransactionDTO.convertDTOtoEntity(transactionDTOMock);
        TransactionDTO transactionDTO = TransactionDTO.convertEntityToDTO(transaction);


        when(recipientService.save(any(Recipient.class))).thenReturn(recipient);
        when(transactionRepository.save(any(Transaction.class))).thenReturn(transaction);

        TransactionDTO savedTransactionDTO = transactionServiceImpl.save(transactionDTO);

        verify(recipientService, times(1)).save(recipient);
    }

    @Test
    void testGetTransactions() {
        int senderId = 1;
        List<Transaction> transactions = new ArrayList<>();


        when(transactionRepository.findBySenderId(senderId)).thenReturn(transactions);

        List<Transaction> retrievedTransactions = transactionServiceImpl.getTransactions(senderId);

        assertEquals(transactions, retrievedTransactions);
        verify(transactionRepository, times(1)).findBySenderId(senderId);
    }

}