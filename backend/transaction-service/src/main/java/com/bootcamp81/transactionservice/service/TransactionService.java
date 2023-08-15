package com.bootcamp81.transactionservice.service;

import com.bootcamp81.transactionservice.dto.TransactionDTO;
import com.bootcamp81.transactionservice.entity.Transaction;

import java.util.List;

public interface TransactionService {
    public TransactionDTO save(TransactionDTO theTransaction);
    public List<Transaction> getTransactions(int theSenderId);

}
