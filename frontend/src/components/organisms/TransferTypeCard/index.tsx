import React, { useState } from "react";
import { Stack } from "@mui/material";
import { BankCard } from "../../molecules/BankCard";
import Card from "../../../../public/assets/images/bankCardbg.svg";
import BankIcon from "../../../../public/assets/images/bank.svg";
import SwiftIcon from "../../../../public/assets/images/swift.svg";
import {
  CREDIT_CARD,
  LOW_COST_TRANSFER,
  ADVANCE_TRANSFER,
  SWIFT_TRANSFER,
  SWIFT_TRANSFER_DESCRIPTION,
  CHOOSE_BANK_TYPE,
  FAST_AND_EASY_TRANSFER
} from "./TransferTypeCardConstants";
import TypographyComponent from "../../atoms/Typography";
import { theme } from "../../../theme/theme";
import {
  BANK_TRANSFER,
  CARD,
  CARDSUBTEXT1,
  CARDSUBTEXT2,
  CARDTEXT,
  TRANSFER_FROM_BANK_ACCOUNT
} from "../../../constants";
import { TransferTypeCardProps } from "./transferTypeUtils";

export const TransferTypeCard = ({
  handleRadioChange
}: TransferTypeCardProps) => {
  const [selectCard, setSelectCard] = useState<string>(BANK_TRANSFER);

  const handleCardSelection = (cardType: string) => {
    setSelectCard(cardType);
    handleRadioChange(cardType);
  };

  return (
    <Stack
      sx={{
        "@media (min-width: 1200px)": {
          width: "auto"
        },
        "@media (max-width: 700px)": {
          width: "100%"
        }
      }}
    >
      <TypographyComponent variant="h1" sx={{ mb: "32px" }}>
        {CHOOSE_BANK_TYPE}
      </TypographyComponent>
      <TypographyComponent
        variant="caption1"
        sx={{ mb: "26px" }}
        color={theme.palette.textColor.mediumEmphasis}
      >
        {FAST_AND_EASY_TRANSFER}
      </TypographyComponent>
      <Stack spacing={4}>
        <BankCard
          image={Card}
          transferType={CARDTEXT}
          transferDescription={CARDSUBTEXT1}
          transferArrival={CARDSUBTEXT2}
          checked={selectCard === CARD}
          onChange={() => handleCardSelection(CARD)}
         
        />
        <BankCard
          image={Card}
          transferType={CREDIT_CARD}
          transferDescription={CARDSUBTEXT1}
          transferArrival={CARDSUBTEXT2}
          checked={selectCard === CREDIT_CARD}
         
        />
      </Stack>
      <TypographyComponent
        variant="caption1"
        sx={{ m: "20px 0px 12px 0px" }}
        color={theme.palette.textColor.mediumEmphasis}
      >
        {LOW_COST_TRANSFER}
      </TypographyComponent>
      <BankCard
        image={BankIcon}
        transferType={BANK_TRANSFER}
        transferDescription={TRANSFER_FROM_BANK_ACCOUNT}
        transferArrival={CARDSUBTEXT2}
        checked={selectCard === BANK_TRANSFER}
        onChange={() => handleCardSelection(BANK_TRANSFER)}
        iconHeight="19px"
      />
      <TypographyComponent
        variant="caption1"
        sx={{ m: "20px 0px 12px 0px" }}
        color={theme.palette.textColor.mediumEmphasis}
      >
        {ADVANCE_TRANSFER}
      </TypographyComponent>
      <BankCard
        image={SwiftIcon}
        transferType={SWIFT_TRANSFER}
        transferDescription={SWIFT_TRANSFER_DESCRIPTION}
        transferArrival={CARDSUBTEXT2}
        checked={selectCard === SWIFT_TRANSFER}
        iconHeight="20px"
      />
    </Stack>
  );
};
