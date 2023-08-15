import { CheckboxProps, FormControlLabel } from "@mui/material";
import CheckboxAtom from "../../atoms/CheckBox";
import TypographyComponent from "../../atoms/Typography";

export interface CheckboxTypoProps extends CheckboxProps {
  text: string;
  labelVariant?: any;
  textColor?: string;
  checkboxsize?: "small" | "medium";
  handleClick?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const CheckboxTypo = (props: CheckboxTypoProps) => {
  return (
    <FormControlLabel
      control={
        <CheckboxAtom
          size={props.checkboxsize ?? "medium"}
          handleClick={props.handleClick}
        />
      }
      label={
        <TypographyComponent
          color={props.textColor}
          variant={props.labelVariant ?? "body3"}
        >
          {props.text}
        </TypographyComponent>
      }
      labelPlacement="end"
    />
  );
};
