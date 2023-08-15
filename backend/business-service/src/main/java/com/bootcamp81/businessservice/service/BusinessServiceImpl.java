// BusinessServiceImpl
package com.bootcamp81.businessservice.service;

import com.bootcamp81.businessservice.dto.BusinessDTO;
import com.bootcamp81.businessservice.entity.Business;
import com.bootcamp81.businessservice.repository.BusinessRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BusinessServiceImpl implements BusinessService {

    @Autowired
    BusinessRepository businessRepository;

    @Override
    public List<Business> getBusinesses(int senderId) {
        return businessRepository.findBySenderId(senderId);
    }

    @Override
    public BusinessDTO save(int senderId, BusinessDTO businessDTO) {
        Business business = BusinessDTO.convertDTOtoEntity(businessDTO);
        business.setSenderId(senderId);
        Business savedBusiness = businessRepository.save(business);
        return BusinessDTO.convertEntityToDTO(savedBusiness);
    }

    @Override
    public Business getBusinessById(int senderId, int businessId) {
        return businessRepository.findBySenderIdAndId(senderId, businessId);
    }
}
