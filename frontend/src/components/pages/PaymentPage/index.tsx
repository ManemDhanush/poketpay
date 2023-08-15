import React, { useState } from "react";
import { StepperAndPageTemplate } from "../../templates/StepperAndPage";
import { Box, styled } from "@mui/material";
import {
  BANK_TRANSFER,
  STEPPER_LABELS,
  useAppContext
} from "../../../constants";
import { TransferTypeCard } from "../../organisms/TransferTypeCard";
import TransferRecipientDetailsCard from "../../organisms/TransferReceipientDetailsCard";
import { PayWithCard } from "../../organisms/PayWithCard";
import { ConfirmPurchase } from "../../organisms/ConfirmPurchase";
import { Image } from "../../atoms/image";
import BackArrow from "../../../../public/assets/images/backArrow.svg";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes";

const Wrapper = styled(Box)(`
  .back-btn{
      position:absolute;
      top:132px;
      left:80px;
      width:32px;
      height:32px;
      display:flex;
      justify-content:center;
      align-items:center;
      border-radius:100%; 
      cursor:pointer;
    }
    & .hide-buttons{
      & .MuiButtonBase-root{
        visibility:hidden;
      }
    }
`);

export const PaymentPage = () => {
  const [cnt, setCnt] = useState<number>(1);
  const [selectCard, setSelectCard] = useState<string>(BANK_TRANSFER);
  const navigate = useNavigate();
  const { transaction } = useAppContext();
  const incrementCnt = () => {
    setCnt((prev) => ++prev);
  };
  const decrementCnt = () => {
    setEnable(() => {
      if (cnt === 2) return true;
      else return false;
    });
    if (cnt === 1) navigate(ROUTES.REVIEW_TRANSFER_DETAILS);
    else setCnt((prev) => --prev);
  };
  const handleSetSelectedCard = (str: string) => {
    setSelectCard(str);
  };
  const transactionData = {
    fee: `00.00 ${transaction?.toCurrency}`,
    amount: `77.74 ${transaction?.fromCurrency}`,
    rate: `1 ${transaction?.fromCurrency} = 1.14 ${transaction?.toCurrency}`,
    name: `${transaction?.recipient.firstName} ${transaction?.recipient.lastName}`,
    email: transaction?.recipient.email,
    accountno: transaction?.recipient.account,
    bankAccountType: transaction?.recipient.bankAccountType,
    sendcurrency: `${transaction?.amount} ${transaction?.fromCurrency}`,
    getcurrency: `${transaction?.amountConverted?.toFixed(2)} ${
      transaction?.toCurrency
    }`
  };

  const [enable, setEnable] = useState<boolean>(true);
  const handleEnable = (enable: boolean) => {
    setEnable(enable);
  };

  return (
    <StepperAndPageTemplate
      labels={STEPPER_LABELS[2]}
      activeStep={6}
      displayClose
    >
      <Wrapper>
        <Box display={"flex"}>
          <Box marginRight={"1.75vw"}>
            {cnt === 1 && (
              <TransferTypeCard handleRadioChange={handleSetSelectedCard} />
            )}
            {cnt === 2 && <PayWithCard handleEnable={handleEnable} />}
            {cnt === 3 && (
              <ConfirmPurchase
                amount={`${transaction?.amount}`}
                country={`${transaction?.fromCurrency}`}
              />
            )}
          </Box>
          <Box className={cnt === 3 ? "hide-buttons" : ""}>
            <TransferRecipientDetailsCard
              data={transactionData}
              handleContinuePay={() => {
                if (selectCard === BANK_TRANSFER) {
                  navigate(ROUTES.CHOOSE_BANK);
                } else if (enable) {
                  incrementCnt();
                  handleEnable(!enable);
                }
              }}
            />
          </Box>
        </Box>
        <Box className="back-btn" onClick={decrementCnt} data-testid="back1">
          <Image src={BackArrow} alt={"Back1"} />
        </Box>
      </Wrapper>
    </StepperAndPageTemplate>
  );
};
