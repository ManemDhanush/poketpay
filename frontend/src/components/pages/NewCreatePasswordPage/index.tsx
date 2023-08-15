import { Box, IconButton, InputAdornment, Stack, styled } from "@mui/material";
import { CONTINUE, HEADERSTEPPERMENU, useAppContext } from "../../../constants";
import TypographyComponent from "../../atoms/Typography";
import { StepperAndPageTemplate } from "../../templates/StepperAndPage";
import { theme } from "../../../theme/theme";
import {
  ENTERYOURPASSWORD,
  PASSWORD,
  TEXT
} from "./NewCreatePasswordPageConstants";
import { InputField } from "../../atoms/inputField";
import { useState } from "react";
import VisbilityIcon from "../../../../public/assets/images/visibility.svg";
import VisibilityOffIcon from "../../../../public/assets/images/visibilityOff.svg";
import DefaultVisibilityIcon from "../../../../public/assets/images/visibiltygray.svg";
import { Image } from "../../atoms/image";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes";
import ButtonComponent from "../../atoms/Button";

const StyledStack = styled(Stack)({
  flexDirection: "column",
  marginTop: "55px",
  "@media (min-width: 1200px)": {
    width: "516px"
  },
  "@media (max-width: 700px)": {
    width: "100%"
  }
});
const TextFieldStyled = styled(InputField)(`
  & .MuiOutlinedInput-root {
    &:hover fieldset {
      border: 1px solid ${theme.palette.greyColors.stroke};
    }
    &.Mui-focused fieldset {
      border: 1px solid ${theme.palette.greyColors.stroke};
      border-bottom:1px solid ${theme.palette.greyColors.stroke};
    }
    color:${theme.palette.textColor.highEmphasis};
    font-size:${theme.typography.body2.fontSize};
    border-radius:8px;
  }
 
  .MuiInputLabel-root{
    font-size:${theme.typography.body2.fontSize};
    color:${theme.palette.textColor.lowEmphasis};
  }

  & .Mui-focused.MuiInputLabel-root {
    color: ${theme.palette.textColor.lowEmphasis};
  }
`);
const ButtonBox = styled(Box)(`
.confirm-button{
  width:135px;
  height:56px;
  border-radius:56px;
  box-shadow: 0px 8px 24px ${theme.palette.structural.btnShadow};
}
.confirm-btn-container{
  position:absolute;
  left:70%;
  top:89.6%;
}
.disable{
  opacity:0.3;
  pointer-events:none;
}
`);

export const CreateNewPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isFieldClicked, setIsFieldClicked] = useState<boolean>(false);
  const {setUser}=useAppContext()
  const handlePasswordChange = (event: { target: { value: any } }) => {
    setPassword(event.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleFieldClick = () => {
    setIsFieldClicked(true);
  };

  const isPasswordValid = password.length >= 8;
  const shouldDisplayMessage = isFieldClicked && !isPasswordValid;

  const updateContext = () => {
    setUser((prev) => ({
      ...prev,
      password:password
    }));
  };
  return (
    <>
      <StepperAndPageTemplate
        labels={HEADERSTEPPERMENU}
        activeStep={5}
        displayBack
        handleBackFn={() => navigate(ROUTES.TWO_FACTOR_OTP)}
      >
        <StyledStack>
          <TypographyComponent
            variant="h1"
            color={theme.palette.textColor.highEmphasis}
            sx={{ marginBottom: "44px" }}
            data-testid="text1"
          >
            {TEXT}
          </TypographyComponent>
          <TextFieldStyled
            label={isFieldClicked ? PASSWORD : ENTERYOURPASSWORD}
            data-testid="input1"
            onFocus={handleFieldClick}
            onChange={handlePasswordChange}
            type={showPassword ? "text" : "password"}
            endAdornment={
              isFieldClicked ? (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePasswordVisibility}>
                    <Image
                      src={showPassword ? VisbilityIcon : VisibilityOffIcon}
                      alt="Toggle Password Visibility"
                      data-testid="image"
                    />
                  </IconButton>
                </InputAdornment>
              ) : (
                <Image src={DefaultVisibilityIcon} alt="defaultVisiblity" />
              )
            }
          />
          {shouldDisplayMessage && (
            <TypographyComponent
              variant="body2"
              color={theme.palette.error.main}
              sx={{ marginTop: "8px" }}
            >
              At least 8 characters are required.
            </TypographyComponent>
          )}
          <ButtonBox className="confirm-btn-container">
            <ButtonComponent
              variant="contained"
              className={
                isPasswordValid ? "confirm-button" : "disable confirm-button"
              }
              data-testid="button-test"
              onClick={() =>{ navigate(ROUTES.SEARCH_YOUR_BUSINESS)
                updateContext()}}
            >
              <TypographyComponent variant="body2">
                {CONTINUE}
              </TypographyComponent>
            </ButtonComponent>
          </ButtonBox>
        </StyledStack>
      </StepperAndPageTemplate>
    </>
  );
};
