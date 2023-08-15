package com.bootcamp81.transactionservice.controller;

import com.bootcamp81.transactionservice.dto.TransactionDTO;
import com.bootcamp81.transactionservice.entity.Transaction;
import com.bootcamp81.transactionservice.service.TransactionService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Arrays;
import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

class TransactionControllerTest {

    private MockMvc mockMvc;

    @Mock
    private TransactionService transactionService;

    @InjectMocks
    private TransactionController transactionController;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(transactionController).build();
    }

    @Test
    void testSaveTransaction() throws Exception {
        int userId = 1;
        TransactionDTO transactionDTO = new TransactionDTO();
        transactionDTO.setAmount(100.0);

        when(transactionService.save(any(TransactionDTO.class))).thenReturn(transactionDTO);

        mockMvc.perform(MockMvcRequestBuilders.post("/transactions")
                        .param("userId", "1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"amount\": 100.0}"))
                .andExpect(status().isOk());

        verify(transactionService).save(any(TransactionDTO.class));
    }

    @Test
    void testGetTransactions() throws Exception {
        int userId = 1;
        Transaction transaction1 = new Transaction();
        transaction1.setId(1);
        transaction1.setAmount(100.0);

        Transaction transaction2 = new Transaction();
        transaction2.setId(2);
        transaction2.setAmount(200.0);

        List<Transaction> transactions = Arrays.asList(transaction1, transaction2);

        when(transactionService.getTransactions(anyInt())).thenReturn(transactions);

        mockMvc.perform(MockMvcRequestBuilders.get("/transactions")
                        .param("userId", "1"))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].id").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].amount").value(100.0))
                .andExpect(MockMvcResultMatchers.jsonPath("$[1].id").value(2))
                .andExpect(MockMvcResultMatchers.jsonPath("$[1].amount").value(200.0));

        verify(transactionService).getTransactions(anyInt());
    }

    @Test
    void testUpdateTransaction() throws Exception {
        TransactionDTO transactionDTO = new TransactionDTO();
        transactionDTO.setId(1);
        transactionDTO.setAmount(150.0);

        when(transactionService.save(any(TransactionDTO.class))).thenReturn(transactionDTO);

        mockMvc.perform(MockMvcRequestBuilders.put("/transactions")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"transactionId\": 1, \"amount\": 150.0}"))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.id").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$.amount").value(150.0));

        verify(transactionService).save(any(TransactionDTO.class));
    }

}
