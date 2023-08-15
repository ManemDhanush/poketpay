import React, { useState } from "react";
import { Box, InputAdornment, Stack, Tab, Tabs, Divider, styled } from "@mui/material";
import { PAYWITHCARDCONSTANTS } from "./PayWithCardConstants";
import TypographyComponent from "../../atoms/Typography";
import { theme } from "../../../theme/theme";
import { MuiRadio } from "../../atoms/Radio";
import { InputField } from "../../atoms/inputField";
import { Image } from "../../atoms/image";
import visaCard from "../../../../public/assets/images/visaDebitCard.svg";
import { Card1, PayWithCardProps } from "./PayWithCardUtils";

const SavedCardText = styled("span")({
  color: theme.palette.primary.primary500,
  fontSize: "21px", 
});
const SavedCardTextLabel=styled("span")({
  fontSize: theme.typography.body3.fontSize
})


export const PayWithCard = ({ handleEnable }: PayWithCardProps) => {
  const [selectedCard, setSelectedCard] = useState<string>("");
  const [cardList, setCardList] = useState<Card1[]>(
    PAYWITHCARDCONSTANTS.cardList
  );

  const handleCardChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCard(event.target.value);
  };
  const handleCardNumberChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    cardId: string
  ) => {
    const value = event.target.value.replace(/\D/g, "").slice(0, 3);
    if (value.length === 3) handleEnable!(true);
    else handleEnable!(false);
    setCardList((prevCardList) =>
      prevCardList.map((card) =>
        card.id === cardId ? { ...card, cardNumber: value } : card
      )
    );
  };
  return (
    <Box sx={{ width: "474px" }}>
      <TypographyComponent variant="h1">
        {PAYWITHCARDCONSTANTS.title}
      </TypographyComponent>
      <Box sx={{ marginTop: "42px" }}>
        <Tabs>
          <Tab
            sx={{
              marginLeft: "80px",
             borderBottom: `2px solid ${theme.palette.primary.primary500}`
            }}
            label={<SavedCardText><TypographyComponent variant="body3" width="96px" height="24px">{PAYWITHCARDCONSTANTS.savedCardText}</TypographyComponent></SavedCardText>}
          />
          <Tab sx={{ marginLeft: "107px" }} label={<SavedCardTextLabel><TypographyComponent variant="body3">{PAYWITHCARDCONSTANTS.newCardText}</TypographyComponent></SavedCardTextLabel>} disabled />
        </Tabs>
      </Box>
      <Divider sx={{ marginTop: "12px" }}></Divider>

      {cardList.map((card) => (
        <Stack direction="row" key={card.id}>
          <MuiRadio
            sx={{ marginTop: "46px", marginLeft: "22px" }}
            value={card.id}
            checked={selectedCard === card.id}
            onChange={handleCardChange}
            disabled={card.id === "card2"}
          />
          <Box sx={{ width: "308px", marginTop: "50px ", marginLeft: "42px" }}>
            <TypographyComponent variant="body2">
              {PAYWITHCARDCONSTANTS.cardName}
            </TypographyComponent>
            <TypographyComponent
              variant="body2"
              color={theme.palette.textColor.lowEmphasis}
              sx={{ marginTop: "4px" }}
            >
              {card.fourDigitText}
              <Box
                component="span"
                sx={{ color: theme.palette.textColor.highEmphasis }}
              >
                {" "}
                {card.fourDigits}{" "}
              </Box>
              {card.expiryDateText}
              <Box
                component="span"
                sx={{ color: theme.palette.textColor.highEmphasis }}
              >
                {" "}
                {card.expiryDate}{" "}
              </Box>
            </TypographyComponent>
            <InputField
              label={PAYWITHCARDCONSTANTS.label}
              sx={{ width: "308px", marginTop: "16px" }}
              endAdornment={
                <InputAdornment position="end">
                  <Image src={visaCard} alt={"visa-card-icon"} />
                </InputAdornment>
              }
              value={card.cardNumber}
              onChange={(event) => handleCardNumberChange(event, card.id)}
              error={card.cardNumber.length < 3 && card.cardNumber.length >= 1}
              data-testid={card.id}
              disabled={selectedCard !== card.id}
              helperText={
                card.cardNumber.length < 3 && card.cardNumber.length >= 1
                  ? "Should enter three digits"
                  : ""
              }
            />
          </Box>
        </Stack>
      ))}
    </Box>
  );
};
