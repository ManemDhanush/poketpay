package com.bootcamp81.userservice.entity;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;


@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Table(name="user")
public class User {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="id")
    private int id;
    @Column(name="first_name")
    private String firstName;

    @Column(name="last_name")
    private String lastName;

    @Column(name="password")
    private String password;
    @Column(name="address")
    private String address;
    @Column(name="pincode")
    private int pincode;

    @Column(name="email")
    private String email;

    @Column(name="date_of_birth")
    private String dateOfBirth;

    @Column(name="city")
    private String city;

    @Column(name="phone_number")
    private String phoneNumber;

    @Column(name="country")
    private String country;


}
