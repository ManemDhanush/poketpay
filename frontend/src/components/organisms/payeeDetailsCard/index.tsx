import { Box, CircularProgress, Grid, Modal, styled } from "@mui/material";
import TypographyComponent from "../../atoms/Typography";
import { PAYEE_DETAILS_CONTENT } from "./payeeDetailsConstants";
import { theme } from "../../../theme/theme";
import { Image } from "../../atoms/image";
import Lloyds from "../../../../public/assets/images/LloydsBankLogo.svg";
import ButtonComponent from "../../atoms/Button";
import { PayeeDetailsProps } from "./payeeDetailsHelper";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes";
import { initialTransaction, useAppContext } from "../../../constants";
import { postTransactions } from "../../../services";
import { useState } from "react";

const Wrapper = styled(Box)(`
    width:38vw;
    max-width:516px;
    height:590px;
    overflow:auto;
    ::-webkit-scrollbar {
      display: none;
    }
    & .subtitle{
      display:block;
      width:124px;
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
const InnerWrapper = styled(Box)(`
    border:1px solid ${theme.palette.greyColors.stroke};
    border-radius:16px;
    margin-top:40px;
    & .underline{
      border-bottom:1px solid ${theme.palette.primary.primary300};
    }
    & .buttons{
      text-align:center;
      margin-top:30px;
      & .MuiButtonBase-root{
        display:block;
        margin:0 auto;
        width:218px;
        height:56px;
        margin-bottom:10px;
        border-radius: 56px;
      }
    }
    padding:16px 32px;
    & .img-container{
      width:100%;
      display:flex;
      justify-content:center;
      align-items:center;
      margin-bottom:16px;
    }
    & .MuiTypography-body1{
      margin-bottom:12px;
    }
    & .content{
      margin-top:27px;
      & .MuiGrid-item{
        margin-bottom:40px;
      }
      & .body{
        margin-top:8px;
      }
      & .content-item{
        width:120px;
      }
    }
`);
export const PayeeDetailsCard = ({ values }: PayeeDetailsProps) => {
  const navigate = useNavigate();
  const { currentUser, transaction, setTransaction } = useAppContext();
  const [displayLoader, setDisplayLoader] = useState<boolean>(false);
  const handlePostTransaction = () => {
    setDisplayLoader(true);
    postTransactions(transaction, currentUser?.id!)
      .then(() => {
        navigate(ROUTES.LANDING_PAGE);
        setDisplayLoader(false);
        setTransaction({ ...initialTransaction });
      })
      .catch(() => {});
  };
  return (
    <Wrapper>
      <TypographyComponent
        variant="h1"
        color={theme.palette.textColor.highEmphasis}
      >
        {PAYEE_DETAILS_CONTENT.title}
      </TypographyComponent>
      <InnerWrapper>
        <Box className="img-container">
          <Image src={Lloyds} alt={PAYEE_DETAILS_CONTENT.imgAltLlodys} />
        </Box>
        <TypographyComponent variant="body1">
          {PAYEE_DETAILS_CONTENT.sub_title}
        </TypographyComponent>
        <TypographyComponent
          variant="caption1"
          style={{ lineHeight: "0" }}
          color={theme.palette.textColor.mediumEmphasis}
        >
          {PAYEE_DETAILS_CONTENT.body}
        </TypographyComponent>
        <Grid container className="content" columnSpacing={"200px"}>
          {PAYEE_DETAILS_CONTENT.contentLabels.map((item, idx) => (
            <Grid item xs={idx === 4 ? 12 : 6} key={item}>
              <Box className="content-item">
                <TypographyComponent
                  variant="caption1"
                  color={theme.palette.textColor.lowEmphasis}
                  className="subtitle"
                >
                  {item}
                </TypographyComponent>
                <TypographyComponent
                  className="body"
                  variant="body2"
                  color={theme.palette.textColor.highEmphasis}
                >
                  {values[idx]}
                </TypographyComponent>
              </Box>
            </Grid>
          ))}
        </Grid>
        <TypographyComponent
          variant="body3"
          color={theme.palette.textColor.mediumEmphasis}
        >
          {PAYEE_DETAILS_CONTENT.onlineBanking[0]}
        </TypographyComponent>
        <TypographyComponent
          variant="body3"
          color={theme.palette.primary.primary300}
          className="underline"
        >
          {PAYEE_DETAILS_CONTENT.onlineBanking[1]}
        </TypographyComponent>
        <TypographyComponent
          variant="body3"
          color={theme.palette.textColor.mediumEmphasis}
        >
          {PAYEE_DETAILS_CONTENT.onlineBanking[2]}
        </TypographyComponent>
        <Box className="buttons">
          <ButtonComponent
            variant="contained"
            onClick={() => {
              handlePostTransaction();
            }}
          >
            <TypographyComponent variant="body2">
              {PAYEE_DETAILS_CONTENT.continue}
            </TypographyComponent>
          </ButtonComponent>
          <ButtonComponent
            variant="text"
            onClick={() => navigate(ROUTES.LANDING_PAGE)}
            sx={{
              boxShadow: `0px 8px 8px ${theme.palette.greyColors.stroke3}, 0px 0px 8px #1414140a, 0px 0px 1px ${theme.palette.greyColors.stroke4}`
            }}
          >
            <TypographyComponent variant="body2">
              {PAYEE_DETAILS_CONTENT.cancel}
            </TypographyComponent>
          </ButtonComponent>
        </Box>
      </InnerWrapper>
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
  );
};
