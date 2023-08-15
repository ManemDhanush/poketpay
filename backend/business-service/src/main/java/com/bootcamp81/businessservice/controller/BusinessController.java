package com.bootcamp81.businessservice.controller;

import com.bootcamp81.businessservice.dto.BusinessDTO;
import com.bootcamp81.businessservice.entity.Business;
import com.bootcamp81.businessservice.repository.BusinessRepository;
import com.bootcamp81.businessservice.service.BusinessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;

import java.util.List;

@RestController
@RequestMapping("/business")
public class BusinessController {

    @Autowired
    BusinessService businessService;

    @Autowired
    BusinessRepository businessRepository;

    @PostMapping("")
    public BusinessDTO saveBusiness(@RequestParam int userId, @RequestBody BusinessDTO businessDTO){
        businessDTO.setSenderId(userId);
        return businessService.save(userId, businessDTO);
    }

    @GetMapping("")
    public List<Business> getBusinesses(@RequestParam int userId){
        return businessService.getBusinesses(userId);
    }

    @GetMapping("/id")
    public ResponseEntity<Business> getBusinessById(@RequestParam int userId, @RequestParam int businessId) {
        Business business = businessService.getBusinessById(userId, businessId);
        if (business == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(business);
    }

    @PutMapping("")
    public BusinessDTO updateBusiness(@RequestParam int userId, @RequestParam int theBusinessId, @RequestBody BusinessDTO businessDTO) {
        businessDTO.setId(theBusinessId);
        businessDTO.setSenderId(userId);
        return businessService.save(userId, businessDTO);
    }


}
