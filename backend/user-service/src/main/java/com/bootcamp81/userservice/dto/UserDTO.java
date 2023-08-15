package com.bootcamp81.userservice.dto;


import com.bootcamp81.userservice.entity.User;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;



@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
    private int id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String address;
    private int pincode;
    private String dateOfBirth;
    private String city;
    private String phoneNumber;
    private String country;

    @Autowired
    private static ModelMapper modelMapper;

    static{
        modelMapper=new ModelMapper();
    }


    public static User convertDtoToEntity(UserDTO userDTO){
        modelMapper.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.LOOSE);
        return modelMapper.map(userDTO,User.class);
    }

    public static UserDTO convertEntityToDto(User user){
        modelMapper.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.LOOSE);
        return modelMapper.map(user, UserDTO.class);
    }

}
