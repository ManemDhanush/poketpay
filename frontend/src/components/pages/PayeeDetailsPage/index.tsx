import React from "react";
import { StepperAndPageTemplate } from "../../templates/StepperAndPage";
import { STEPPER_LABELS, useAppContext } from "../../../constants";
import { PayeeDetailsCard } from "../../organisms/payeeDetailsCard";
import { PAYEE_DETAILS_CONTENT } from "../../organisms/payeeDetailsCard/payeeDetailsConstants";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes";

export const PayeeDetailsPage = () => {
  const { transaction } = useAppContext();
  const navigate = useNavigate();
  const valuesArr = [...PAYEE_DETAILS_CONTENT.contentValues];
  valuesArr[0] = `${transaction?.recipient.firstName} ${transaction?.recipient.lastName}`;
  valuesArr[2] = `${transaction?.amount} ${transaction?.fromCurrency}`;
  return (
    <StepperAndPageTemplate
      labels={STEPPER_LABELS[2]}
      activeStep={6}
      displayBack
      displayClose
      handleBackFn={() => navigate(ROUTES.BANK_ACCOUNT)}
    >
      <PayeeDetailsCard values={valuesArr} />
    </StepperAndPageTemplate>
  );
};
