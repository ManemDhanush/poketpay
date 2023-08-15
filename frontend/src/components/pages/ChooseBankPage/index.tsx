import React from "react";
import { StepperAndPageTemplate } from "../../templates/StepperAndPage";
import { STEPPER_LABELS } from "../../../constants";
import { ChooseBank } from "../../organisms/ChooseBank";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes";

export const ChooseBankPage = () => {
  const navigate = useNavigate();

  return (
    <StepperAndPageTemplate
      labels={STEPPER_LABELS[2]}
      activeStep={6}
      displayBack
      displayClose
      handleBackFn={() => navigate(ROUTES.PAYMENT)}
    >
      <ChooseBank />
    </StepperAndPageTemplate>
  );
};
