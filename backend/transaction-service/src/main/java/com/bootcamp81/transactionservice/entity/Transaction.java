package com.bootcamp81.transactionservice.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name="transactionDetails")
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "from_currency")
    private String fromCurrency;

    @Column(name = "to_currency")
    private String toCurrency;

    @OneToOne
    @JoinColumn(name = "recipient_id", referencedColumnName = "id")
    private Recipient recipient;

    @Column(name = "sender_id")
    private int senderId;

    @Column(name = "amount")
    private double amount;

    @Column(name = "amount_converted")
    private double amountConverted;

    @Column(name = "status")
    private String status;

    @Column(name = "purpose")
    private String purpose;

    public Recipient getRecipient() {
        return recipient;
    }
    public void setRecipient(Recipient theRecipient){
        this.recipient = theRecipient;
    }
}
