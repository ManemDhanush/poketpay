package com.bootcamp81.transactionservice.service;

import com.bootcamp81.transactionservice.dto.TransactionDTO;
import com.bootcamp81.transactionservice.entity.Recipient;
import com.bootcamp81.transactionservice.entity.Transaction;
import com.bootcamp81.transactionservice.repository.TransactionRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class TransactionServiceImpl implements TransactionService {

    @Autowired
    TransactionRepository transactionRepository;

    @Autowired
    RecipientService recipientService;

    @Override
    public TransactionDTO save(TransactionDTO theTransaction) {
        Transaction convertedTransaction = TransactionDTO.convertDTOtoEntity(theTransaction);
        Recipient theRecipient = recipientService.save(convertedTransaction.getRecipient());
        convertedTransaction.setRecipient(theRecipient);
        Transaction saveTransaction = transactionRepository.save(convertedTransaction);
        return TransactionDTO.convertEntityToDTO(saveTransaction);
    }

    @Override
    public List<Transaction> getTransactions(int theSenderId) {
        return transactionRepository.findBySenderId(theSenderId);
    }
}
