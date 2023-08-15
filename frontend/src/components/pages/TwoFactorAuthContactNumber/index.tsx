import React from "react";
import { StepperAndPageTemplate } from "../../templates/StepperAndPage";
import { STEPPER_LABELS } from "../../../constants";
import TypographyComponent from "../../atoms/Typography";
import { theme } from "../../../theme/theme";
import { TWO_FACTOR_AUTH } from "./twoFactorAuthContactNumberConstants";
import IconInput from "../../molecules/IconInputField";
import { useNavigate } from "react-router-dom";
import { Box, styled } from "@mui/material";
import { ROUTES } from "../../../routes";
const Wrapper = styled(Box)(`
  span{
    display:block;
  }
`);

export const TwoFactorAuthContactNumber = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <StepperAndPageTemplate
        labels={STEPPER_LABELS[0]}
        activeStep={4}
        displayBack
        displayClose
        handleBackFn={() => navigate(ROUTES.CHOOSE_COUNTRY)}
      >
        <TypographyComponent
          variant="h1"
          color={theme.palette.textColor.highEmphasis}
        >
          {TWO_FACTOR_AUTH.title}
        </TypographyComponent>
        <TypographyComponent
          variant="body3"
          marginTop="12px"
          marginBottom="44px"
          color={theme.palette.textColor.mediumEmphasis}
        >
          {TWO_FACTOR_AUTH.subTitle}
        </TypographyComponent>
        <IconInput
          icon={TWO_FACTOR_AUTH.flagUrl}
          label={TWO_FACTOR_AUTH.label}
        />
      </StepperAndPageTemplate>
    </Wrapper>
  );
};
