import { Stack, Grid, GridProps, Box } from "@mui/material";
import TypographyComponent from "../../atoms/Typography";
import { theme } from "../../../theme/theme";
import { Image } from "../../atoms/image";
interface IconWithTypographyProps extends GridProps {
  icon: string;
  text: string;
  subText?: string;
  textVariant?: any;
  subTextVariant?: any;
  textColor?: string;
  subTextColor?: string;
  iconAlt: string;
  margin?: string;
  iconHeight?: string;
  iconWidth?: string;
  handleClick?: () => void;
  margintop?: string;
}
export const AccountCard = (props: IconWithTypographyProps) => {
  return (
    <Box
      sx={{
        "& :hover": {
          background: theme.palette.structural.cardHover
        }
      }}
    >
      <Grid
        sx={{
          paddingLeft: "20px",
          paddingTop: "13px",
          height: "88px",
          "@media (min-width: 1200px)": {
            width: "516px"
          },
          "@media (max-width: 700px)": {
            width: "100%"
          },
          border: `1px solid ${theme.palette.greyColors.stroke}`,
          borderRadius: "8px",
          alignItems: "center",
          marginBottom: props.margin,
          "& :hover": {
            background: theme.palette.structural.cardHover
          }
        }}
        onClick={props.handleClick}
        data-testid="iconTypo"
      >
        <Stack direction={"row"} gap={"19px"} className="account-card-custom">
          <Image
            alt={props.iconAlt}
            src={props.icon}
            style={{
              height: props.iconHeight,
              width: props.iconWidth,
              marginTop: props.margintop
            }}
          />
          <Stack gap={2}>
            <TypographyComponent
              variant={props.textVariant}
              fontSize={"17px"}
              color={props.textColor}
            >
              {props.text}
            </TypographyComponent>
            <TypographyComponent
              variant={props.subTextVariant}
              fontSize={"14px"}
              color={props.subTextColor}
            >
              {props.subText}
            </TypographyComponent>
          </Stack>
        </Stack>
      </Grid>
    </Box>
  );
};
