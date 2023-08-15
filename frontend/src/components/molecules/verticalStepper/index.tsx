import React from "react";
import { styled } from "@mui/system";
import { Box, Step, StepLabel, Stepper, Typography } from "@mui/material";
import { theme } from "../../../theme/theme";
import { VerticalStepperProps } from "./verticalStepperHelper";
const StyledStepperContainer = styled(Box)(`
  display:flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`);

const StyledStepLabelContainer = styled(Box)(`
  display:flex;
  flex-direction: column;
  align-items: center;
  text-align:center;
`);

const Circle = () => <Box className="dot"></Box>;

const VerticalStepper = ({ activeStep, steps }: VerticalStepperProps) => {
  const StepperStyled = styled(Stepper)(`
    width:500px;
    & .MuiTypography-root{
      line-height:0;
    }
    & .MuiStepConnector-line.MuiStepConnector-lineVertical{
        width:2px;
        background:${theme.palette.primary.primary500};
        height:16px;
        border-left:none;
        height:31px;
    } 
    & .MuiStepLabel-iconContainer.Mui-disabled{
        & .dot{
        background:${theme.palette.greyColors.stroke};
        }
    } 
    & .MuiStepConnector-root.MuiStepConnector-vertical.Mui-disabled{
        & span{
            background:${theme.palette.greyColors.stroke};
        }
    }
    & .MuiStepConnector-root.MuiStepConnector-vertical{
        display:flex;
        justify-content:center;
        margin-left:0;
        width:100%;
        margin:0 auto;
    }
    & .MuiStepLabel-root.MuiStepLabel-vertical{
        padding:0;
    }
    & .MuiStepLabel-iconContainer{
        padding:0;
    }
    & .MuiTypography-root{
        width:210px;
        text-align:right;
        color:${theme.palette.textColor.lowEmphasis};
    }
    & .MuiTypography-root.right-typo{
        text-align:left;
    }
    & .dot{
        border-radius:100%;
        background:${theme.palette.primary.primary500};
        width:8px;
        height:8px;
    }
    & .MuiStep-root.MuiStep-vertical.Mui-completed{
       & .MuiTypography-root{
        color:${theme.palette.textColor.highEmphasis};
        }
    }
    & .active-step .MuiTypography-root {
      color: ${theme.palette.primary.primary500};
    }

  `);

  return (
    <StepperStyled orientation="vertical" activeStep={activeStep - 1}>
      {steps.map((step, index) => (
        <Step
          key={step.labelLeft}
          className={index === activeStep - 1 ? "active-step" : ""}
        >
          <StyledStepperContainer>
            <StyledStepLabelContainer>
              <Typography variant="caption1">{step.labelLeft}</Typography>
            </StyledStepLabelContainer>
            <StepLabel StepIconComponent={Circle} />
            <StyledStepLabelContainer>
              <Typography variant="caption1" className="right-typo">
                {step.labelRight}
              </Typography>
            </StyledStepLabelContainer>
          </StyledStepperContainer>
        </Step>
      ))}
    </StepperStyled>
  );
};

export default VerticalStepper;
