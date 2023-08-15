import { Slider, SliderProps, styled } from "@mui/material";
import React from "react";
import { theme } from "../../../theme/theme";

export interface StepperCompProps extends SliderProps {
  labels: string[];
}

const SliderStyled = styled(Slider)(`
    pointer-events:none;
    width: 766px;
    color: ${theme.palette.primary.main};
    & .MuiSlider-mark{
      display:none !important;
    }
    & .MuiSlider-markLabel{
      font-size:${theme.typography.linkText.fontSize};
      color:${theme.palette.textColor.mediumEmphasis};
  }
  & .MuiSlider-markLabel.MuiSlider-markLabelActive{
    color:${theme.palette.primary.primary300};
  }
  &	.MuiSlider-rail{
    background:${theme.palette.structural.blue};
    opacity:1;
    border:none;
    height:4px;
  }
  &	.MuiSlider-track{
    background:${theme.palette.primary.primary100};
    opacity:1;
    border:none;
    height:4px;
  }
  & .MuiSlider-thumb{
    background:${theme.palette.primary.primary300};
    width:8px;
    height:8px;
  }
  & .MuiSlider-valueLabelLabel{
    font-size:40px;
  }

`);

export const Stepper = ({ labels, ...props }: StepperCompProps) => {
  const getMarks = (labels: string[]) => {
    const labelsStrings: string[] = [...labels];
    const marks = labelsStrings.map((label, index) => ({
      value: index + 1,
      label
    }));
    return marks;
  };
  const marks = getMarks(labels);
  return (
    <SliderStyled
      {...props}
      marks={marks}
      min={1}
      max={marks.length}
      valueLabelDisplay="auto"
    />
  );
};
