// BusinessDTO
package com.bootcamp81.businessservice.dto;

import com.bootcamp81.businessservice.entity.Business;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BusinessDTO {
    private int id;
    private String name;
    private String registerNumber;
    private String registerAddress;
    private int senderId;
    private String sizeOfBusiness;
    private String category;
    private String subCategory;
//    private List<TradingAddressDTO> tradingAddresses;

    private static ModelMapper modelMapper;

    static {
        modelMapper = new ModelMapper();
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.LOOSE);
    }

    public static Business convertDTOtoEntity(BusinessDTO businessDTO) {
        return modelMapper.map(businessDTO, Business.class);
    }

    public static BusinessDTO convertEntityToDTO(Business business) {
        return modelMapper.map(business, BusinessDTO.class);
    }
}
