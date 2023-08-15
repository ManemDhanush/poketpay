import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";
import TypographyComponent from "../../atoms/Typography";
import { theme } from "../../../theme/theme";
import { POCKETPAY_PURPOSE_CONTENT } from "../../../constants";
import { Image } from "../../atoms/image";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes";

const Wrapper = styled(Box)(`
    width:37.77vw;
    max-width:516px;
    min-width:356px;
    & .con{
        margin-top:32px;
    }
    & .img-typo{
        border:1px solid ${theme.palette.greyColors.stroke2};
        border-radius:8px;
        cursor:pointer;
        margin-bottom:20px;
        padding:16px;
        display:flex;
        align-items:center;
        width:100%;
        height:60px;
        & .MuiTypography-root{
            margin-left:17px;
        }
        :hover{
          background:${theme.palette.structural.cardHover};
        }
    }
`);
export const PocketPayPurpose = () => {
  const navigate = useNavigate();
  const handleItemClick = (index: number) => {
    if (index === 2) {
      navigate(ROUTES.RECIPIENT_DETAILS);
    }
  };

  return (
    <Wrapper>
      <TypographyComponent
        variant="h1"
        color={theme.palette.textColor.highEmphasis}
      >
        {POCKETPAY_PURPOSE_CONTENT.title}
      </TypographyComponent>
      <Box className="con">
        {POCKETPAY_PURPOSE_CONTENT.purposes.map((item, index) => (
          <Box
            className="img-typo"
            key={item.text}
            data-testid="purpose-item"
            onClick={() => handleItemClick(index)}
          >
            <Image src={item.src} alt={item.alt} />
            <TypographyComponent
              variant="body2"
              color={theme.palette.textColor.highEmphasis}
            >
              {item.text}
            </TypographyComponent>
          </Box>
        ))}
      </Box>
    </Wrapper>
  );
};
