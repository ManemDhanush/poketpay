import { Box, styled } from "@mui/material";
import React from "react";
import { StepperAndPageTemplate } from "../../templates/StepperAndPage";
import { STEPPER_LABELS } from "../../../constants";
import { ConfirmBusinessDetailsCard } from "../../organisms/confirmBusinessDetailsCard";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes";

const Wrapper = styled(Box)(``);

export const ConfirmBusinessPage = () => {
  const navigate = useNavigate();
  return (
    <StepperAndPageTemplate
      labels={STEPPER_LABELS[1]}
      activeStep={1}
      displayBack
      handleBackFn={() => navigate(ROUTES.YOUR_BUSINESS.search)}
      displayClose
    >
      <ConfirmBusinessDetailsCard />
    </StepperAndPageTemplate>
  );
};
