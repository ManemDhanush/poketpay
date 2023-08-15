package com.bootcamp81.businessservice.service;

import com.bootcamp81.businessservice.entity.BusinessUser;
import com.bootcamp81.businessservice.repository.BusinessUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BusinessUserServiceImpl implements BusinessUserService{

    @Autowired
    BusinessUserRepository businessUserRepository;

    @Override
    public BusinessUser save(BusinessUser businessUser) {
        return businessUserRepository.save(businessUser);
    }
}
