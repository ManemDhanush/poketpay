import { styled, Stack, Grid } from "@mui/material";
import TypographyComponent from "../../atoms/Typography";
import { Image } from "../../atoms/image";
import { theme } from "../../../theme/theme";

export interface IconTypoProps {
  icon: string;
  text: string;
  textVariant?: any;
  textColor?: string;
  iconAlt: string;
  iconwidth?: string;
  iconheight?: string;
  borderState?:boolean;
}

export const IconTypoStyledGrid = styled(Grid)<{ borderState?: boolean }>(
  ({ borderState }) => ({
    height: "60px",
    width: "516px",
    borderRadius: "8px",
    position: "absolute",
    textAlign: "center",
    display: "flex",
    border: borderState ? `1px solid ${theme.palette.greyColors.stroke}` : "none",
    paddingLeft: borderState ? "20px" : "0"
  })
);

export const IconTypo = (props: IconTypoProps) => {
  return (
    <IconTypoStyledGrid borderState={props.borderState}>
       <Stack direction={"row"} gap={"14px"} alignItems="center">
        <Image
          alt={props.iconAlt}
          src={props.icon}
          style={{ height: props.iconheight, width: props.iconwidth }}
        />
        <TypographyComponent variant={props.textVariant} color={props.textColor} >{props.text}</TypographyComponent>
      </Stack> 
    </IconTypoStyledGrid>
  );
};



