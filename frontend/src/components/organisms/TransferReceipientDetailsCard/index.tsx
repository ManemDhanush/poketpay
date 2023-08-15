import Button from "../../atoms/Button";
import TypographyComponent from "../../atoms/Typography";
import { Box, Grid, Stack } from "@mui/material";
import { theme } from "../../../theme/theme";
import leftarrow from "./../../../../public/assets/images/leftvector.svg";
import {
  TransferReceipientDetailsCard,
  StyledRow
} from "./TransferReceipientDetailsCardConstants";
import { TransferRecpDetailsCardProps } from "./TransferReceipientDetailsCardUtils";
import { ROUTES } from "../../../routes";
import { useNavigate } from "react-router-dom";

const TransferRecipientDetailsCard = (props: TransferRecpDetailsCardProps) => {
  const navigate = useNavigate();
  return (
    <Grid
      container
      style={{
        width: "474px",
        height: "650px",
        border: `1px solid ${theme.palette.greyColors.stroke}`
      }}
      borderRadius="16px"
      paddingLeft="32px"
      paddingRight="32px"
      paddingBottom="48px"
      paddingTop="48px"
      direction="column"
    >
      <TypographyComponent
        variant="caption"
        color={theme.palette.textColor.lowEmphasis}
        marginBottom="16px"
      >
        {TransferReceipientDetailsCard.headings.transferDetails}
      </TypographyComponent>

      <Stack direction="row" spacing="10px">
        <TypographyComponent variant="body2">
          {props.data.sendcurrency}
        </TypographyComponent>
        <img src={leftarrow} width="16px" alt="left arrow" />
        <TypographyComponent variant="body2">
          {props.data.getcurrency}
        </TypographyComponent>
      </Stack>

      <Box paddingBottom="40px">
        {TransferReceipientDetailsCard.transferDetails.map((item) => {
          return (
            <StyledRow key={item.label}>
              <TypographyComponent
                variant="body2"
                color={`${theme.palette.textColor.mediumEmphasis}`}
              >
                {item.label}:
              </TypographyComponent>
              <TypographyComponent
                variant="body2"
                color={`${theme.palette.textColor.highEmphasis}`}
              >
                {props.data[item.id]}
              </TypographyComponent>
            </StyledRow>
          );
        })}
      </Box>

      <TypographyComponent
        variant="caption"
        color={theme.palette.textColor.lowEmphasis}
      >
        {TransferReceipientDetailsCard.headings.transferDetails}
      </TypographyComponent>

      <Box paddingBottom="40px">
        {TransferReceipientDetailsCard.recipientDetails.map((item) => {
          return (
            <StyledRow key={item.label}>
              <TypographyComponent
                variant="body2"
                color={`${theme.palette.textColor.mediumEmphasis}`}
              >
                {item.label}:
              </TypographyComponent>
              <TypographyComponent
                variant="body2"
                color={`${theme.palette.textColor.highEmphasis}`}
              >
                {props.data[item.id]}
              </TypographyComponent>
            </StyledRow>
          );
        })}
      </Box>

      <Grid container alignItems="center" justifyContent="center">
        <Button
          variant="contained"
          color="primary"
          sx={{
            width: "218px",
            height: "56px",
            borderRadius: "56px"
          }}
          onClick={props.handleContinuePay}
        >
          <TypographyComponent variant="body2">
            {TransferReceipientDetailsCard.buttonName.b1}
          </TypographyComponent>
        </Button>

        <Button
          variant="text"
          sx={{
            width: "218px",
            height: "56px",
            borderRadius: "56px",
            color: "primary.main",
            marginTop: "20px",
            boxShadow: `0px 8px 8px ${theme.palette.greyColors.stroke3}, 0px 0px 8px #1414140a, 0px 0px 1px ${theme.palette.greyColors.stroke4} `
          }}
          onClick={() => navigate(ROUTES.LANDING_PAGE)}
        >
          <TypographyComponent variant="body2">
            {TransferReceipientDetailsCard.buttonName.b2}
          </TypographyComponent>
        </Button>
      </Grid>
    </Grid>
  );
};

export default TransferRecipientDetailsCard;
