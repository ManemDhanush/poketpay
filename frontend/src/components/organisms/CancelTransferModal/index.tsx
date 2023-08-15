import { Box, Card, MenuItem, Select, Stack } from "@mui/material";
import TypographyComponent from "../../atoms/Typography";
import {
  CANCEL_TEXT,
  CANCEL_TRANSFER,
  DUMMY_DATA,
  EXISTING_ACCOUNT,
  MENU_ITEMS,
  NEW_ACCOUNT,
  REFUND_TEXT,
  SELECT_ACCOUNT,
  SELECT_OPTION
} from "./CancelTransferModalConstants";
import { theme } from "../../../theme/theme";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import ButtonComponent from "../../atoms/Button";

const Boxstyle = {
  width: "564px",
  height: "auto",
  bgcolor: "background.paper",
  borderRadius: "16px"
};
const Stackstyle = {
  border: `1px solid ${theme.palette.greyColors.stroke}`,
  borderRadius: "8px",
  width: "516px",
  height: "191px",
  margin: "16px 24px 11px 24px"
};
const StyledCard = {
  padding: "16px 300px 16px 18px ",
  elevation: 0,
  backgroundColor: "transparent",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: theme.palette.greyColors.stroke,
    color: theme.palette.common.white,
    cursor: "pointer"
  }
};


interface CancelTransferModalProps {
  handleOpen: () => void;
}

export const CancelTransferModal = (props: CancelTransferModalProps) => {
  const [showDropdowns, setShowDropdowns] = useState<boolean>(false);
  const [accountNo, setAccountNo] = useState<string>("");

  const handleButtonClick = () => {
    props.handleOpen();
  };

  const handleExistingCardClick = () => {
    setShowDropdowns(true);
  };
  const handleChange = (event: { target: { value: string } }) => {
    setAccountNo(event.target.value);
  };
  const renderingFunction = () => {
    const selectedAccount = MENU_ITEMS.find(
      (item) => item.cardNo === accountNo
    );
    if (selectedAccount) {
      return (
        <Box
          display="flex"
          alignItems="center"
          justifyContent={"space-between"}
        >
          <TypographyComponent
            variant="body2"
            color={theme.palette.textColor.highEmphasis}
          >
            {selectedAccount.name}
          </TypographyComponent>
          <TypographyComponent
            variant="body2"
            color={theme.palette.textColor.highEmphasis}
            sx={{ marginRight: "30px" }}
          >
            {DUMMY_DATA} {selectedAccount.cardNo.slice(-4)}
          </TypographyComponent>
        </Box>
      );
    } else {
      return (
        <TypographyComponent
          variant="body2"
          color={theme.palette.textColor.mediumEmphasis}
        >
          {SELECT_OPTION}
        </TypographyComponent>
      );
    }
  };
  return (
    <Box sx={Boxstyle}>
      <TypographyComponent
        variant="body1"
        color={theme.palette.textColor.highEmphasis}
        sx={{ margin: "24px 0px 40px 24px" }}
        data-testid="canceltext1"
      >
        {CANCEL_TEXT}
      </TypographyComponent>
      <TypographyComponent
        variant="caption1"
        color={theme.palette.textColor.mediumEmphasis}
        sx={{ marginLeft: "24px" }}
      >
        {REFUND_TEXT}
      </TypographyComponent>
      {!showDropdowns && (
        <Stack sx={Stackstyle}>
          <TypographyComponent
            variant="body2"
            color={theme.palette.textColor.mediumEmphasis}
            sx={{ margin: "20px 330px 20px 18px" }}
          >
            {SELECT_ACCOUNT}
          </TypographyComponent>
          <Card sx={StyledCard} onClick={handleExistingCardClick}>
            <TypographyComponent
              variant="body2"
              color={theme.palette.textColor.highEmphasis}
              data-testid="existingaccount"
            >
              {EXISTING_ACCOUNT}
            </TypographyComponent>
          </Card>
          <Card sx={StyledCard}>
            <TypographyComponent
              variant="body2"
              color={theme.palette.textColor.highEmphasis}
            >
              {NEW_ACCOUNT}
            </TypographyComponent>
          </Card>
        </Stack>
      )}
      {showDropdowns && (
        <Stack>
          <Select
            variant="outlined"
            sx={{ margin: "20px 18px" }}
            IconComponent={ExpandMoreIcon}
            displayEmpty
            renderValue={() => EXISTING_ACCOUNT}
          ></Select>
          <Select
            sx={{ margin: "20px 18px ", zIndex: 1 }}
            IconComponent={ExpandMoreIcon}
            displayEmpty
            value={accountNo}
            onChange={handleChange}
            MenuProps={{
              PaperProps: {
                sx: {
                  marginTop: "-90px"
                }
              }
            }}
            renderValue={() => renderingFunction()}
          >
            {MENU_ITEMS.map((item) => (
              <MenuItem value={item.cardNo} key={item.cardNo}>
                <Box flexDirection={"column"} paddingTop={"11px"}>
                  <TypographyComponent
                    variant="body2"
                    color={theme.palette.textColor.highEmphasis}
                  >
                    {item.name}
                  </TypographyComponent>
                  <TypographyComponent
                    variant="caption"
                    color={theme.palette.textColor.lowEmphasis}
                  >
                    {item.cardNo}
                  </TypographyComponent>
                </Box>
              </MenuItem>
            ))}
          </Select>
        </Stack>
      )}
      {accountNo && (
        <Box>
          <ButtonComponent
            variant="contained"
            color="primary"
            sx={{
              width: "218px",
              height: "56px",
              margin: "40px 173px 12px 173px",
              borderRadius: "56px"
            }}
            onClick={handleButtonClick}
          >
            {CANCEL_TRANSFER}
          </ButtonComponent>
        </Box>
      )}
    </Box>
  );
};
