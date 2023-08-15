import React from "react";
import { StepperAndPageTemplate } from "../../templates/StepperAndPage";
import { TwoFactorAuthentication } from "../../organisms/TwoFactorAuthentication";
import { STEPPER_LABELS } from "../../../constants";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes";

export const TwoFactorAuthOTP = () => {
  const navigate = useNavigate();
  return (
    <StepperAndPageTemplate
      labels={STEPPER_LABELS[0]}
      activeStep={4}
      displayBack
      displayClose
      handleBackFn={() => navigate(ROUTES.TWO_FACTOR)}
    >
      <TwoFactorAuthentication />
    </StepperAndPageTemplate>
  );
};
