import { Box, styled } from "@mui/material";
import React from "react";
import TypographyComponent from "../../atoms/Typography";
import { SEND_MONEY } from "./sendMoneyConstants";
import { theme } from "../../../theme/theme";
import { useNavigate } from "react-router-dom";
import { AccountCard } from "../../molecules/AccountCard";
import { ROUTES } from "../../../routes";

const Wrapper = styled(Box)(`
    width:516px;
    & .content{
      margin-top:40px;
    }
    .MuiGrid-root{
      margin-bottom:20px;
    }
    & .MuiGrid-root{
        margin-bottom:20px;
        cursor:pointer;
        &:hover{
            background:${theme.palette.structural.cardHover};
        }
        align-items:self-start;
    }
    & .account-card-custom{
      align-items:self-start;
    }
`);

export const SendMoney = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <TypographyComponent
        variant="h1"
        color={theme.palette.textColor.highEmphasis}
      >
        {SEND_MONEY.title}
      </TypographyComponent>
      <Box className="content">
        {SEND_MONEY.cardsContent.map((item, index) => (
          <AccountCard
            key={item.title}
            icon={item.src}
            text={item.title}
            textColor={theme.palette.textColor.highEmphasis}
            textVariant="body2"
            subText={item.subtitle}
            subTextColor={theme.palette.textColor.lowEmphasis}
            subTextVariant="caption1"
            iconAlt={item.alt}
            handleClick={() => {
              if (index === 0) {
                navigate(ROUTES.ENTER_AMOUNT);
              } else {
                navigate(ROUTES.CHOOSE_ACCOUNT_TYPE);
              }
            }}
          />
        ))}
      </Box>
    </Wrapper>
  );
};
