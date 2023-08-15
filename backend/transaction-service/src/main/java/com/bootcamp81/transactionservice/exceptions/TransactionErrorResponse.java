package com.bootcamp81.transactionservice.exceptions;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class TransactionErrorResponse {
    private int status;
    private String message;
    private long timeStamp;
}
