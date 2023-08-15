import React from "react";
import BankAccount from "../../organisms/BankAccount";
import { StepperAndPageTemplate } from "../../templates/StepperAndPage";
import { STEPPER_LABELS } from "../../../constants";
import TypographyComponent from "../../atoms/Typography";
import { theme } from "../../../theme/theme";
import { TITLE } from "./bankAccountPageContants";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes";
import { BankAccountconstants } from "../../organisms/BankAccount/BankAccountConstants";

export const BankAccountPage = () => {
  const navigate = useNavigate();
  return (
    <StepperAndPageTemplate
      labels={STEPPER_LABELS[2]}
      activeStep={6}
      displayClose
      displayBack
      handleBackFn={() => navigate(ROUTES.CHOOSE_BANK)}
    >
      <TypographyComponent
        variant="h1"
        color={theme.palette.textColor.highEmphasis}
        marginBottom={"32px"}
      >
        {TITLE}
      </TypographyComponent>
      <BankAccount
        bankAccountType={BankAccountconstants.bankAccountType}
        currencyValue={BankAccountconstants.amount}
      />
    </StepperAndPageTemplate>
  );
};
