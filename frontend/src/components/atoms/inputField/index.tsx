import { TextField, styled } from "@mui/material";
import { TextFieldProps } from "@mui/material/TextField";
import React, { ReactNode } from "react";
import { theme } from "../../../theme/theme";
export interface InputFieldProps
  extends Omit<TextFieldProps, "startAdornment" | "endAdornment"> {
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  readOnly?: boolean;
}

const TextFieldStyled = styled(TextField)(`
  & .MuiOutlinedInput-root {
    padding-right:20px;
    &:hover fieldset {
      border: 1px solid ${theme.palette.greyColors.stroke};
    }
    &.Mui-focused fieldset {
      border: 1px solid ${theme.palette.greyColors.stroke};
      border-bottom:2px solid ${theme.palette.primary.primary500};
    }
    color:${theme.palette.textColor.highEmphasis};
    font-size:${theme.typography.body2.fontSize};
    border-radius:8px;
  }
 
  .MuiInputLabel-root{
    font-size:${theme.typography.body2.fontSize};
    color:${theme.palette.textColor.lowEmphasis};   
  }
  & .Mui-focused.MuiInputLabel-root {
    color: ${theme.palette.primary.primary500};
  }
`);

export const InputField = ({
  startAdornment,
  endAdornment,
  readOnly,
  ...props
}: InputFieldProps) => {
  return (
    <TextFieldStyled
      {...props}
      InputProps={{
        startAdornment,
        endAdornment,
        readOnly
      }}
      autoComplete="off"
    />
  );
};
