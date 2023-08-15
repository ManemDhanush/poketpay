import { Box, styled } from "@mui/material";
import React from "react";
import { StepperAndPageTemplate } from "../../templates/StepperAndPage";
import { STEPPER_LABELS } from "../../../constants";
import { ConfirmTradingAddress } from "../../organisms/ConfirmTradingAddress";

const Wrapper = styled(Box)(``);

export const ConfirmTradingAddressPage = () => {
  return (
    <StepperAndPageTemplate
      labels={STEPPER_LABELS[1]}
      activeStep={1}
      displayClose
    >
      <ConfirmTradingAddress />
    </StepperAndPageTemplate>
  );
};
