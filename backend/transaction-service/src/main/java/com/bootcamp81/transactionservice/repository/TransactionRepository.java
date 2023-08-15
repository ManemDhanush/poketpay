package com.bootcamp81.transactionservice.repository;

import com.bootcamp81.transactionservice.entity.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TransactionRepository extends JpaRepository<Transaction,Integer> {
    List<Transaction> findBySenderId(int theId);
}
