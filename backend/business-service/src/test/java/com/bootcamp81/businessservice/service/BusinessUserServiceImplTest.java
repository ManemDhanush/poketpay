package com.bootcamp81.businessservice.service;

import com.bootcamp81.businessservice.entity.BusinessUser;
import com.bootcamp81.businessservice.repository.BusinessUserRepository;
import org.junit.Rule;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnit;
import org.mockito.junit.MockitoRule;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

class BusinessUserServiceImplTest {
    @Rule
    public MockitoRule mockitoRule= MockitoJUnit.rule();

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Mock
    private BusinessUserRepository businessUserRepository;

    @InjectMocks
    private BusinessUserServiceImpl businessUserService;

    @Test
    void testSaveBusinessUser() {
        BusinessUser businessUser = new BusinessUser();
        businessUser.setId(1);
        businessUser.setFirstName("John");
        businessUser.setLastName("Doe");

        when(businessUserRepository.save(businessUser)).thenReturn(businessUser);

        BusinessUser savedUser = businessUserService.save(businessUser);

        verify(businessUserRepository).save(businessUser);
        assertEquals(businessUser.getId(), savedUser.getId());
        assertEquals(businessUser.getFirstName(), savedUser.getFirstName());
        assertEquals(businessUser.getLastName(), savedUser.getLastName());
    }
}