package com.bootcamp81.businessservice.controller;

import com.bootcamp81.businessservice.entity.BusinessUser;
import com.bootcamp81.businessservice.service.BusinessUserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


class BusinessUserControllerTest {

    private MockMvc mockMvc;

    @Mock
    private BusinessUserService businessUserService;

    @InjectMocks
    private BusinessUserController businessUserController;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(businessUserController).build();
    }

    @Test
    void testSave() throws Exception {
        int recipientId = 1;
        BusinessUser businessUser = new BusinessUser();
        businessUser.setFirstName("John");
        businessUser.setLastName("Doe");

        when(businessUserService.save(any(BusinessUser.class))).thenReturn(businessUser);

        mockMvc.perform(MockMvcRequestBuilders.post("/business/ownersDirectors")
                        .param("recipientId", "1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"firstName\": \"John\", \"lastName\": \"Doe\"}"))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.firstName").value("John"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.lastName").value("Doe"));

        verify(businessUserService).save(any(BusinessUser.class));
    }
}