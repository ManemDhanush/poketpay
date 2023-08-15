package com.bootcamp81.transactionservice.repository;

import com.bootcamp81.transactionservice.entity.Recipient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecipientRepository extends JpaRepository<Recipient,Integer> {
}
