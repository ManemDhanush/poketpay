// BusinessRepository
package com.bootcamp81.businessservice.repository;

import com.bootcamp81.businessservice.entity.Business;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BusinessRepository extends JpaRepository<Business, Integer> {
    List<Business> findBySenderId(int senderId);
    Business findBySenderIdAndId(int senderId, int businessId);
}
