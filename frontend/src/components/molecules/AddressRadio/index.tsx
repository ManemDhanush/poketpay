import { Radio, FormControlLabel, Grid } from "@mui/material";
import TypographyComponent from "../../atoms/Typography";

export interface RadioTypoProps {
  address: string;
  addressNo: string | number;
  value?: string;
  className?: string;
  sx?: React.CSSProperties;
}

export const AddressRadio = (props: RadioTypoProps) => {
  return (
    <FormControlLabel
      control={<Radio />}
      sx={props.sx}
      value={props.value}
      className={props.className}
      label={
        <Grid container direction="column" spacing={3} paddingLeft={3}>
          <Grid item>
            <TypographyComponent variant="body2" color="textSecondary">
              {`Address ${props.addressNo}`}
            </TypographyComponent>
          </Grid>
          <Grid item>
            <TypographyComponent variant="body2">
              {props.address}
            </TypographyComponent>
          </Grid>
        </Grid>
      }
    />
  );
};
