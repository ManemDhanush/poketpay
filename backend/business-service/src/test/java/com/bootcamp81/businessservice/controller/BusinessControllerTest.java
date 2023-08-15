package com.bootcamp81.businessservice.controller;

import com.bootcamp81.businessservice.dto.BusinessDTO;
import com.bootcamp81.businessservice.entity.Business;
import com.bootcamp81.businessservice.service.BusinessService;
import org.junit.Assert;
import org.junit.Rule;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnit;
import org.mockito.junit.MockitoRule;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Arrays;
import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

class BusinessControllerTest {

    private MockMvc mockMvc;

    @Rule
    public MockitoRule mockitoRule = MockitoJUnit.rule();

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(businessController).build();
    }

    @Mock
    private BusinessService businessService;

    @InjectMocks
    private BusinessController businessController;

    @Test
    void testSaveBusiness() throws Exception {
        BusinessDTO businessDTO = new BusinessDTO();
        businessDTO.setSenderId(1);
        businessDTO.setName("Test Business");

        when(businessService.save(anyInt(), any(BusinessDTO.class))).thenReturn(businessDTO);

        mockMvc.perform(MockMvcRequestBuilders.post("/business")
                        .param("userId", "1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"name\": \"Test Business\"}"))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.senderId").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$.name").value("Test Business"));

        verify(businessService).save(anyInt(), any(BusinessDTO.class));
    }

    @Test
    void testGetBusinesses() throws Exception {
        Business business1 = new Business();
        business1.setId(1);
        business1.setName("Business 1");

        Business business2 = new Business();
        business2.setId(2);
        business2.setName("Business 2");

        List<Business> businesses = Arrays.asList(business1, business2);

        when(businessService.getBusinesses(anyInt())).thenReturn(businesses);

        mockMvc.perform(MockMvcRequestBuilders.get("/business")
                        .param("userId", "1"))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].id").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].name").value("Business 1"))
                .andExpect(MockMvcResultMatchers.jsonPath("$[1].id").value(2))
                .andExpect(MockMvcResultMatchers.jsonPath("$[1].name").value("Business 2"));

        verify(businessService).getBusinesses(anyInt());
    }

    @Test
    void testGetBusinessById() throws Exception {
        int userId = 1;
        int businessId = 1;
        Business business = new Business();
        business.setId(businessId);
        business.setName("Test Business");

        when(businessService.getBusinessById(userId, businessId)).thenReturn(business);

        mockMvc.perform(MockMvcRequestBuilders.get("/business/id")
                        .param("userId", "1")
                        .param("businessId", "1"))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.id").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$.name").value("Test Business"));

        verify(businessService).getBusinessById(userId, businessId);
    }

    @Test
    void testUpdateBusiness() throws Exception {
        int userId = 1;
        int businessId = 1;
        BusinessDTO businessDTO = new BusinessDTO();
        businessDTO.setId(businessId);
        businessDTO.setName("Updated Business");

        when(businessService.save(userId, businessDTO)).thenReturn(businessDTO);

        mockMvc.perform(MockMvcRequestBuilders.put("/business")
                        .param("userId", "1")
                        .param("theBusinessId", "1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"name\": \"Updated Business\"}"))
                .andExpect(status().isOk());
    }
    @Test
    void testGetBusinessById_BusinessNotFound() throws Exception {
        int userId = 1;
        int businessId = 1;

        when(businessService.getBusinessById(userId, businessId)).thenReturn(null);

        mockMvc.perform(MockMvcRequestBuilders.get("/business/id")
                        .param("userId", "1")
                        .param("businessId", "1"))
                .andExpect(status().isNotFound());

        verify(businessService).getBusinessById(userId, businessId);
    }

}