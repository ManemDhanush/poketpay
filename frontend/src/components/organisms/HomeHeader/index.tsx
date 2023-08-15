import { Stack, Grid } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import TypographyComponent from "../../atoms/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ReactNode } from "react";
import { theme } from "../../../theme/theme";

export interface HomeHeaderProps {
  icon: string;
  name: string;
  currencysend: string;
  currencyrecieve: string;
  subTextVariant?: any;
  textColor?: string;
  subTextColor?: string;
  iconAlt?: string;
  message: string;
  children?: ReactNode;
}

export const HomeHeader = (props: HomeHeaderProps) => {
  return (
    <div>
      <Accordion sx={{ width: "100%" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          sx={{
            borderBottom: `1px solid ${theme.palette.greyColors.stroke}`,
            paddingLeft: "36px",
            paddingRight: "36px"
          }}
          id="panel1a-header"
        >
          <div style={{ width: "100%" }}>
            <Grid container direction="row" justifyContent="space-between">
              <Grid item>
                <Stack direction="row" spacing="12px">
                  <img
                    src={props.icon}
                    alt="HomeHeaderIcon"
                    style={{ width: "40px" }}
                  />
                  <Stack direction="column">
                    <TypographyComponent variant="body2">
                      {props.name}
                    </TypographyComponent>
                    <TypographyComponent
                      variant="caption1"
                      color="textSecondary"
                      textTransform={"capitalize"}
                    >
                      {props.message}
                    </TypographyComponent>
                  </Stack>
                </Stack>
              </Grid>

              <Grid item paddingRight="12px">
                <Stack direction="column" alignItems="flex-end">
                  <TypographyComponent variant="caption1">
                    {props.currencysend}
                  </TypographyComponent>
                  <TypographyComponent
                    variant="caption1"
                    color={theme.palette.textColor.mediumEmphasis}
                  >
                    {props.currencyrecieve}
                  </TypographyComponent>
                </Stack>
              </Grid>
            </Grid>
          </div>
        </AccordionSummary>
        <AccordionDetails>{props.children}</AccordionDetails>
      </Accordion>
    </div>
  );
};
