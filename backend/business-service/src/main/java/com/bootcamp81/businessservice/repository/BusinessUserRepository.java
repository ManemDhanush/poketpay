package com.bootcamp81.businessservice.repository;


import com.bootcamp81.businessservice.entity.BusinessUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BusinessUserRepository extends JpaRepository<BusinessUser, Integer> {
}
