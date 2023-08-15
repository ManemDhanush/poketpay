import React from "react";
import { Box, styled } from "@mui/material";
import PocketPayIcon from "../../../../public/assets/images/pocketpaylogo.svg";
import Close from "../../../../public/assets/images/close.svg";
import { Image } from "../../atoms/image";
import { Stepper } from "../../molecules/stepper";
import BackArrow from "../../../../public/assets/images/backArrow.svg";
import ButtonComponent from "../../atoms/Button";
import TypographyComponent from "../../atoms/Typography";
import { theme } from "../../../theme/theme";

export interface StepperAndPageTemplateProps {
  labels: string[];
  activeStep: number;
  children: React.ReactNode;
  displayClose?: boolean;
  displayBack?: boolean;
  buttonText?: string;
  handleBackFn?: () => void;
  handleCloseFn?: () => void;
  handleConfirmFn?: () => void;
}

const Wrapper = styled(Box)(`
    width:100vw;
    height:100vh;
    min-width:800px;
    position:relative;
    padding:24px 80px;
    .btn{
      cursor:pointer;
    }
    .back-btn{
      position:absolute;
      top:13%;
      left:27.3%;
      width:32px;
      height:32px;
      display:flex;
      justify-content:center;
      align-items:center;
      border-radius:100%;
      :hover{
        background:${theme.palette.structural.cardHover};
      }
    }
    & .hide{
      visibility:hidden;
    }
    .confirm-button{
      width:135px;
      height:56px;
      border-radius:56px;
      box-shadow: 0px 8px 24px ${theme.palette.structural.btnShadow};
    }
    .confirm-btn-container{
      position:absolute;
      left:70%;
      top:89.6%;
    }
    & .body-container{
      display:flex;
      justify-content:center;
      width:100%;
    }
`);
const Header = styled(Box)(`
    display:flex;
    justify-content:space-between;
    align-items:flex-start;
   
`);
const Body = styled(Box)(`
  margin:0 auto;
  margin-top:90px;
  margin-top:11.71vh;
  min-width:516px;
  height:auto;
  max-height:75.5vh;
  overflow:auto;
  ::-webkit-scrollbar {
    display: none;
  }
`);

export const StepperAndPageTemplate = ({
  labels,
  activeStep,
  displayBack,
  displayClose,
  buttonText,
  handleBackFn,
  handleCloseFn,
  handleConfirmFn,
  children
}: StepperAndPageTemplateProps) => {
  return (
    <Wrapper>
      <Header>
        <Box className="btn">
          <Image
            src={PocketPayIcon}
            alt={"Logo"}
            style={{ width: "140px", height: "26.05px" }}
          />
        </Box>
        <Stepper
          labels={labels}
          defaultValue={activeStep}
          sx={{ width: "50vw" }}
        />
        <Box
          className={displayClose ? "btn" : "btn hide"}
          onClick={handleCloseFn}
          data-testid="close"
        >
          <Image src={Close} alt={"Close"} />
        </Box>
      </Header>
      <Box className="body-container">
        <Body>{children}</Body>
      </Box>
      <Box
        className={displayBack ? "btn back-btn" : "hide btn back-btn"}
        onClick={handleBackFn}
        data-testid="back"
      >
        <Image src={BackArrow} alt={"Back"} />
      </Box>
      {buttonText && (
        <Box className="confirm-btn-container" onClick={handleConfirmFn}>
          <ButtonComponent
            variant="contained"
            className="confirm-button"
            data-testid="button"
          >
            <TypographyComponent variant="body2">
              {buttonText}
            </TypographyComponent>
          </ButtonComponent>
        </Box>
      )}
    </Wrapper>
  );
};
