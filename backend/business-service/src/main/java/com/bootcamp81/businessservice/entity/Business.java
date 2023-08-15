package com.bootcamp81.businessservice.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "business_details")
public class Business {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "register_number")
    private String registerNumber;

    @Column(name = "register_address")
    private String registerAddress;

    @Column(name = "sender_id")
    private int senderId;

    @Column(name = "size_of_business")
    private String sizeOfBusiness;

    @Column(name = "category")
    private String category;

    @Column(name = "sub_category")
    private String subCategory;
//    @OneToMany(mappedBy = "business")
//    private List<TradingAddress> tradingAddresses = new ArrayList<>();

}
