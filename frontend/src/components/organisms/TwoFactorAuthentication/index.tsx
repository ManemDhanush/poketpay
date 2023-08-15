import React, { useState } from "react";
import TypographyComponent from "../../atoms/Typography";
import { InputField } from "../../atoms/inputField";
import { Box, styled } from "@mui/material";
import { TwoFactorAuthenticationConstants } from "./TwoFactorAuthenticationConstants";
import { theme } from "../../../theme/theme";
import arrow from "../../../../public/assets/images/rightArrow.svg";
import { Image } from "../../atoms/image";
import ButtonComponent from "../../atoms/Button";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes";
import { useAppContext } from "../../../constants";

const Wrapper = styled(Box)(`
width: 100%;
max-width: 652px;
`);
const InnerWrapper = styled(Box)(`
width: 100%;
max-width: 516px;
  & .form{
    margin-top:15px;
  }
  & span{
    display:block;
  }
  & .input{
    width: 100%;
    height:60px;
    margin-top:44px;
  }
  & .subtitle{
    margin-top:12px;
    color:${theme.palette.textColor.mediumEmphasis};
  }
  & .linkText{
    margin-top:20px;
    color:${theme.palette.primary.primary500};
  }
  & .caption{
    margin-left:20px;
    margin-top:15px;
  }
  & .btn{
    position:absolute;
    left:70%;
    top:89.6%;
    width:135px;
    height:56px;
    border-radius:56px;
    box-shadow: 0px 8px 24px ${theme.palette.structural.btnShadow};
  }
  .disable{
    opacity:0.3;
    pointer-events:none;
  }
  & input[type="number"]::-webkit-outer-spin-button,
    & input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
`);

const StyledBox = styled(Box)(`
width:100%;
max-width:516px;
height:50px;
display:flex;
flex-direction:row;
&:hover {
  background:${theme.palette.structural.cardHover};
}
@media screen and (max-width: 768px) {
  flex-direction: column;
  align-items: flex-start;
  text-align: center;
}
`);
export const TwoFactorAuthentication = () => {
  const navigate = useNavigate();
  const { user } = useAppContext();
  const [showVerifyAnotherWay, setShowVerifyAnotherWay] =
    useState<boolean>(false);
  const handleLinkTextClick = () => {
    setShowVerifyAnotherWay(true);
  };
  const [otpNumber, setOtpNumber] = useState("");
  const handleSetOtpNumber = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const input = e.target.value;
    if (input.length <= 6) {
      setOtpNumber(input);
    }
  };
  const handleKeyDown = (evt: React.KeyboardEvent<HTMLDivElement>) => {
    if (evt.key === "e" || evt.key === "+" || evt.key === "-") {
      evt.preventDefault();
    }
  };

  return (
    <Wrapper>
      {!showVerifyAnotherWay ? (
        <InnerWrapper>
          <TypographyComponent variant="h1">
            {TwoFactorAuthenticationConstants.EnterCode.title}
          </TypographyComponent>
          <TypographyComponent variant="body3" className="subtitle">
            {`${TwoFactorAuthenticationConstants.EnterCode.subtitle} ${user?.phoneNumber}`}
          </TypographyComponent>
          <InputField
            label={TwoFactorAuthenticationConstants.EnterCode.label}
            className="input"
            type="number"
            value={otpNumber}
            onChange={handleSetOtpNumber}
            onKeyDown={(e) => handleKeyDown(e)}
          ></InputField>
          <TypographyComponent
            variant="linkText"
            className="linkText"
            onClick={handleLinkTextClick}
            sx={{ marginTop: "32px" }}
          >
            {TwoFactorAuthenticationConstants.EnterCode.linkText}
          </TypographyComponent>
          <ButtonComponent
            className={
              otpNumber && otpNumber.length === 6 ? "btn" : "btn disable"
            }
            variant="contained"
            data-testid="confirm"
            onClick={() => navigate(ROUTES.CREATE_PASSWORD)}
          >
            <TypographyComponent variant="body2">
              {TwoFactorAuthenticationConstants.btnText}
            </TypographyComponent>
          </ButtonComponent>
        </InnerWrapper>
      ) : (
        <InnerWrapper>
          <TypographyComponent variant="h1">
            {TwoFactorAuthenticationConstants.VerifyAnotherWay.title}
          </TypographyComponent>
          <TypographyComponent variant="body3" className="subtitle">
            {TwoFactorAuthenticationConstants.VerifyAnotherWay.subtitle}
          </TypographyComponent>
          <StyledBox sx={{ marginTop: "32px" }}>
            <TypographyComponent variant="caption1" className="caption">
              {TwoFactorAuthenticationConstants.VerifyAnotherWay.sendSMSText}
            </TypographyComponent>
            <Image
              src={arrow}
              alt={"right-arrow"}
              style={{ marginLeft: "325px" }}
            ></Image>
          </StyledBox>
          <StyledBox sx={{ marginTop: "16px" }}>
            <TypographyComponent variant="caption1" className="caption">
              {TwoFactorAuthenticationConstants.VerifyAnotherWay.voiceCallText}
            </TypographyComponent>
            <Image
              src={arrow}
              alt={"right-arrow"}
              style={{ marginLeft: "306px" }}
            ></Image>
          </StyledBox>
          <TypographyComponent
            variant="linkText"
            className="linkText"
            onClick={() => navigate(ROUTES.TWO_FACTOR)}
          >
            {TwoFactorAuthenticationConstants.VerifyAnotherWay.phoneNo}
          </TypographyComponent>
        </InnerWrapper>
      )}
    </Wrapper>
  );
};
