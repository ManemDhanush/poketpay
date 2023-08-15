package com.bootcamp81.transactionservice.dto;

import com.bootcamp81.transactionservice.entity.Recipient;
import com.bootcamp81.transactionservice.entity.Transaction;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TransactionDTO {
    private int id;
    private String fromCurrency;
    private String toCurrency;
    private Recipient recipient;
    private int senderId;
    private double amount;
    private double amountConverted;
    private String status;
    private String purpose;

    @Autowired
    private static ModelMapper modelMapper;

    static{
        modelMapper=new ModelMapper();
    }

    public static Transaction convertDTOtoEntity(TransactionDTO transactionDTO){
        modelMapper.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.LOOSE);
        return modelMapper.map(transactionDTO,Transaction.class);
    }

    public static TransactionDTO convertEntityToDTO(Transaction transaction){
        modelMapper.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.LOOSE);
        return modelMapper.map(transaction,TransactionDTO.class);
    }
}
