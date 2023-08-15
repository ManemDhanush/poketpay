package com.bootcamp81.businessservice.controller;

import com.bootcamp81.businessservice.entity.BusinessUser;
import com.bootcamp81.businessservice.service.BusinessUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/business")
public class BusinessUserController {

    @Autowired
    BusinessUserService businessUserService;

    @PostMapping("/ownersDirectors")
    public BusinessUser save(@RequestParam int recipientId, @RequestBody BusinessUser businessUser){
        businessUser.setRecipientId(recipientId);
        return businessUserService.save(businessUser);
    }
}