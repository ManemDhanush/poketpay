import React from "react";
import { Box, styled } from "@mui/material";
import PocketPayIcon from "../../../../public/assets/images/pocketpaylogo.svg";
import Close from "../../../../public/assets/images/close.svg";
import { Image } from "../../atoms/image";
import { Stepper } from "../../molecules/stepper";
import BackArrow from "../../../../public/assets/images/leftarrow.svg";
import { theme } from "../../../theme/theme";

export interface PaymentPageTemplateProps {
  labels?: string[];
  activeStep?: number;
  children: React.ReactNode;
  displayClose?: boolean;
  displayBack?: boolean;
  handleBackFn?: () => void;
}

const Wrapper = styled(Box)(`
  width: 100vw;
  height: 100vh;
  position: relative;
  padding: 24px 80px;
  .btn {
    cursor: pointer;
  }

  .back-btn {
    position: absolute;
    top: 107px;
    left: 330px;
  }

  @media (min-width: 1920px) {
    .back-btn {
      left: 570px;
    }
  }

  & .hide {
    visibility: hidden;
  }

  .confirm-button {
    width: 135px;
    height: 56px;
    border-radius: 56px;
    box-shadow: 0px 8px 24px rgba(85, 51, 255, 0.24);
  }

  .confirm-btn-container {
    position: absolute;
    left: 70%;
    top: 89.6%;
  }

  @media (min-width: 1920px) {
    .confirm-btn-container {
      left: 80%;
    }
  }
`);

const Header = styled(Box)(`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .avatar-bar-container {
    display: flex;
    align-items: center;
    margin-left: auto;
  }

  .avatar-bar-container > div {
    margin-right: 10px;
  }

  .close-icon {
    margin-left: 5px;
  }
`);

const Body = styled(Box)(`
  display: flex;
  justify-content: center;
  margin-top: 90px;
  height: auto;
  max-height: 580px;
  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`);

const barStyle = {
  height: "24px",
  width: "1px",
  backgroundColor: `${theme.palette.textColor.lowEmphasis}`
};

export const PaymentPageTemplate = ({
  labels,
  activeStep,
  displayBack,
  displayClose,
  handleBackFn,
  children
}: PaymentPageTemplateProps) => {
  return (
    <Wrapper>
      <Header>
        <Box className="btn">
          <Image src={PocketPayIcon} alt={"Payment"} />
        </Box>
        {labels && (
          <Box marginLeft={"auto"}>
            <Stepper labels={labels} defaultValue={activeStep} />
          </Box>
        )}
        <Box className={displayClose ? "btn" : "btn hide close-icon"}>
          <Image src={Close} alt={"Close"} />
        </Box>
      </Header>
      <Body>{children}</Body>
      <Box
        className={displayBack ? "btn back-btn" : "hide btn back-btn"}
        onClick={handleBackFn}
        data-testid="back"
      >
        <Image src={BackArrow} alt={"Back"} />
      </Box>
    </Wrapper>
  );
};
