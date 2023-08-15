import { Box, CircularProgress, Modal, styled } from "@mui/material";
import React, { useState } from "react";
import { CONFIRM_PURCHASE } from "./confirmPurchaseConstants";
import { Image } from "../../atoms/image";
import { theme } from "../../../theme/theme";
import TypographyComponent from "../../atoms/Typography";
import { ConfirmPurchaseProps } from "./confirmPurchaseUtils";
import ButtonComponent from "../../atoms/Button";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes";
import { postTransactions } from "../../../services";
import { initialTransaction, useAppContext } from "../../../constants";

const Wrapper = styled(Box)(`
    width:474px;
    border-radius:16px;
    border:1px solid ${theme.palette.greyColors.stroke};
    & .header{
        width:100%;
        padding:24px 32px;
        padding-bottom:8px;
        display:flex;
        justify-content:space-between;
        align-items:flex-start;
        border-bottom:1px solid ${theme.palette.greyColors.stroke};
    }
    & .content{
        padding:24px 83px;
        width:100%;
    }
    .dark{
        color:${theme.palette.textColor.highEmphasis};
    }
    .card{
        margin-left:5px;
    }
    .typo{
        margin-top:12px;
        display:block;
    }
    .btn{
      width:135px;
      margin-top:30px;
      height:56px;
      border-radius:56px;
      box-shadow: 0px 8px 24px ${theme.palette.structural.btnShadow};
    }
    .btn-container{
        text-align:center;
    }
`);
const ModalStyled = styled(Modal)(`
  & .modal{
    display:flex;
    align-items:center;
    justify-content:center;
  }
  & :focus{
    outline:none;
  }
`);

export const ConfirmPurchase = ({ ...props }: ConfirmPurchaseProps) => {
  const navigate = useNavigate();
  const { currentUser, transaction, setTransaction } = useAppContext();
  const [displayLoader, setDisplayLoader] = useState<boolean>(false);

  const handlePostTransaction = () => {
    setDisplayLoader(true);
    postTransactions(transaction, currentUser?.id!)
      ?.then(() => {
        navigate(ROUTES.LANDING_PAGE);
        setDisplayLoader(false);
        setTransaction({ ...initialTransaction });
      })
      .catch(() => {});
  };
  return (
    <>
      <TypographyComponent variant="h1" marginBottom={"19px"}>
        {CONFIRM_PURCHASE.heading}
      </TypographyComponent>
      <Wrapper>
        <Box className="header">
          {CONFIRM_PURCHASE.headerImages.map((item) => (
            <Image key={item.alt} src={item.src} alt={item.alt} />
          ))}
        </Box>
        <Box className="content">
          <TypographyComponent
            variant="body1"
            color={theme.palette.textColor.highEmphasis}
            textAlign="center"
          >
            {CONFIRM_PURCHASE.title}
          </TypographyComponent>
          <TypographyComponent
            variant="caption1"
            color={theme.palette.textColor.mediumEmphasis}
          >
            <span className="dark">{`${props.country} ${props.amount} `}</span>
            {CONFIRM_PURCHASE.typography[0]}
            <span className="dark card">{CONFIRM_PURCHASE.typography[1]}</span>
          </TypographyComponent>
          {CONFIRM_PURCHASE.typography.slice(2).map((item) => (
            <TypographyComponent
              key={item}
              variant="caption1"
              color={theme.palette.textColor.mediumEmphasis}
              className="typo"
            >
              {item}
            </TypographyComponent>
          ))}
          <Box className="btn-container">
            <ButtonComponent
              variant="contained"
              className="btn"
              onClick={() => {
                handlePostTransaction();
              }}
            >
              <TypographyComponent variant="body2">
                {CONFIRM_PURCHASE.btnText}
              </TypographyComponent>
            </ButtonComponent>
          </Box>
        </Box>
        <ModalStyled
          open={displayLoader}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Box height={"100px"} width={"100px"} className="modal">
            <CircularProgress size={"70px"} />
          </Box>
        </ModalStyled>
      </Wrapper>
    </>
  );
};
