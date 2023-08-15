import Button from "../../atoms/Button";
import TypographyComponent from "../../atoms/Typography";
import { Grid, Stack } from "@mui/material";
import image from "./../../../../public/assets/images/Logos.svg";
import { theme } from "../../../theme/theme";
import { BankAccountconstants } from "./BankAccountConstants";
import { BankAccountProps } from "./BankAccountUtils";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes";

const BankAccount = (props: BankAccountProps) => {
  const navigate = useNavigate();
  return (
    <Grid
      container
      style={{ width: "516px", height: "596px" }}
      border="1px solid #E4E4E5"
      borderRadius="16px"
      paddingLeft="32px"
      paddingRight="32px"
      paddingBottom="32px"
      paddingTop="48px"
      direction="column"
      alignItems="center"
    >
      <TypographyComponent
        variant="body3"
        sx={{ marginBottom: "24px" }}
        color={theme.palette.textColor.mediumEmphasis}
      >
        {BankAccountconstants.message[0]}{" "}
        <span style={{ color: "black" }}>{props.bankAccountType}</span>{" "}
        {BankAccountconstants.message[1]}{" "}
        <span style={{ color: "black" }}>{props.currencyValue}</span>{" "}
        {BankAccountconstants.message[2]}
      </TypographyComponent>

      <TypographyComponent variant="body1" sx={{ paddingRight: "290px" }}>
        {BankAccountconstants.securemessage[0]}
      </TypographyComponent>

      <ul
        style={{
          paddingLeft: "30px",
          color: theme.palette.textColor.mediumEmphasis
        }}
      >
        <li>
          <TypographyComponent
            variant="body3"
            color={theme.palette.textColor.mediumEmphasis}
          >
            {BankAccountconstants.securemessage[1]}
          </TypographyComponent>
        </li>
        <li>
          <TypographyComponent
            variant="body3"
            color={theme.palette.textColor.mediumEmphasis}
          >
            {BankAccountconstants.securemessage[2]}
          </TypographyComponent>
        </li>
      </ul>

      <Stack
        direction="row"
        spacing={2}
        sx={{
          justifyContent: "center",
          paddingBottom: "40px"
        }}
      >
        <img src={image} alt="Secure Image" />
      </Stack>
      <Button
        variant="contained"
        color="primary"
        sx={{
          width: "218px",
          height: "56px",
          borderRadius: "56px"
        }}
        onClick={() => navigate(ROUTES.PAYEE_DETAILS)}
      >
        <TypographyComponent variant="body2" sx={{ textTransform: "none" }}>
          {BankAccountconstants.button[0]}
        </TypographyComponent>
      </Button>

      <Button
        variant="outlined"
        sx={{
          width: "218px",
          height: "56px",
          borderRadius: "56px",
          color: "primary.main",
          marginTop: "20px"
        }}
        onClick={() => {}}
      >
        <TypographyComponent variant="body2" sx={{ textTransform: "none" }}>
          {BankAccountconstants.button[1]}
        </TypographyComponent>
      </Button>
    </Grid>
  );
};

export default BankAccount;
