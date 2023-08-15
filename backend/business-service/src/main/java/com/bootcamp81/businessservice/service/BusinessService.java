// BusinessService
package com.bootcamp81.businessservice.service;

import com.bootcamp81.businessservice.dto.BusinessDTO;
import com.bootcamp81.businessservice.entity.Business;

import java.util.List;

public interface BusinessService {
    List<Business> getBusinesses(int senderId);
    BusinessDTO save(int senderId, BusinessDTO businessDTO);
    Business getBusinessById(int senderId, int businessId);
}
