package com.bootcamp81.transactionservice.service;

import com.bootcamp81.transactionservice.entity.Recipient;
import com.bootcamp81.transactionservice.repository.RecipientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RecipientServiceImpl implements RecipientService {

    @Autowired
    RecipientRepository recipientRepository;

    @Override
    public Recipient save(Recipient theRecipient) {
        return recipientRepository.save(theRecipient);
    }
}
