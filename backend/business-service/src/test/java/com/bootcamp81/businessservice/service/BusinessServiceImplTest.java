package com.bootcamp81.businessservice.service;

import com.bootcamp81.businessservice.dto.BusinessDTO;
import com.bootcamp81.businessservice.entity.Business;
import com.bootcamp81.businessservice.repository.BusinessRepository;
import org.junit.Rule;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnit;
import org.mockito.junit.MockitoRule;

import java.util.ArrayList;
import java.util.List;


import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;
import static org.mockito.Mockito.any;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

class BusinessServiceImplTest {
    @Rule
    public MockitoRule mockitoRule= MockitoJUnit.rule();

    @Mock
    private BusinessRepository businessRepository;

    @Mock
    private BusinessService businessService;

    @InjectMocks
    private BusinessServiceImpl businessServiceImpl;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }


    @Test
    void testSaveBusiness() {
        int userId = 1;
        BusinessDTO businessDTOMock = new BusinessDTO(1,"John","1234","India",2,"50-100","Technology","Software");
        Business business = BusinessDTO.convertDTOtoEntity(businessDTOMock);
        BusinessDTO businessDTO = BusinessDTO.convertEntityToDTO(business);



        when(businessRepository.save(any(Business.class))).thenReturn(business);

        BusinessDTO savedBusinessDTO = businessServiceImpl.save(userId,businessDTO);
        assertNotNull(savedBusinessDTO);

    }

    @Test
    void testGetBusinesses() {
        int senderId = 1;
        List<Business> businesses = new ArrayList<>();


        when(businessRepository.findBySenderId(senderId)).thenReturn(businesses);

        List<Business> retrievedBusinesses = businessServiceImpl.getBusinesses(senderId);

        assertEquals(businesses, retrievedBusinesses);
        verify(businessRepository, times(1)).findBySenderId(senderId);
    }
    @Test
    void testGetBusinessById() {
        // Given
        int senderId = 1;
        int businessId = 1;
        Business business = new Business(1, "Business 1", "1234", "India", 2, "50-100", "Technology", "Software");
        when(businessRepository.findBySenderIdAndId(senderId, businessId)).thenReturn(business);

        // When
        Business retrievedBusiness = businessServiceImpl.getBusinessById(senderId, businessId);

        // Then
        assertNotNull(retrievedBusiness);
        assertEquals(business.getName(), retrievedBusiness.getName());
        verify(businessRepository, times(1)).findBySenderIdAndId(senderId, businessId);
    }

}