package com.bootcamp81.transactionservice.controller;

import com.bootcamp81.transactionservice.dto.TransactionDTO;
import com.bootcamp81.transactionservice.entity.Transaction;
import com.bootcamp81.transactionservice.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/transactions")
public class TransactionController {

    @Autowired
    TransactionService transactionService;

    @PostMapping("")
    public TransactionDTO saveTransaction(@RequestParam int userId, @RequestBody TransactionDTO transactionDTO){
        transactionDTO.setSenderId(userId);
        return transactionService.save(transactionDTO);
    }

    @GetMapping("")
    public List<Transaction> getTransactions(@RequestParam int userId){
        return transactionService.getTransactions(userId);
    }

    @PutMapping("")
    public TransactionDTO updateTransaction(@RequestBody TransactionDTO transactionDTO){
        return transactionService.save(transactionDTO);
    }
}
