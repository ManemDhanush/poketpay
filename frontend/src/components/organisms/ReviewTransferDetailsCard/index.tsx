import { Box, Stack, Typography, styled } from "@mui/material";
import { useState } from "react";
import { theme } from "../../../theme/theme";
import leftArrow from "../../../../public/assets/images/leftarrow.svg";
import { Image } from "../../atoms/image";
import TypographyComponent from "../../atoms/Typography";
import ButtonComponent from "../../atoms/Button";
import {
  AMOUNT,
  BUSINESSDETAILS,
  BusinessContent,
  CANCEL,
  CHANGE,
  CONFIRM_CONTINUE,
  CONFIRM_MESSAGE,
  EDIT,
  RECIPIENTDETAILS,
  ReviewDetailsTitle,
  SAVE,
  SCHEDULEDETAILS,
  ScheduleDetais,
  TERMS,
  TRANSFERDETAILS,
  TransferDetailsReview
} from "./ReviewTransferDetailsCardConstants";
import { FormValueType } from "./ReviewTransferDetailsCardUtils";
import { useAppContext } from "../../../constants";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes";
import { InputField } from "../../atoms/inputField";

const StyledBox = styled(Stack)(({ theme }) => ({
  width: "516px",
  [theme.breakpoints.down("sm")]: {
    width: "100%"
  }
}));

const StyledStack = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "100%"
  }
}));
const OuterBox = styled(Stack)({
  gap: "40px"
});

const StyledRow = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: "12px"
});

const StyledButton = styled(ButtonComponent)({
  borderRadius: "56px",
  marginBottom: "5px",
  width: "135px",
  height: "56px",
  marginRight: "20px",
  backgroundColor: `${theme.palette.textColor.main}`,
  boxShadow:
    "0px 8px 8px #1414140a, 0px 0px 8px #1414140a, 0px 0px 1px #1414141f ",
  color: `${theme.palette.primary.primary500}`,
  "&:hover": {
    backgroundColor: `${theme.palette.greyColors.main}`,
    color: `${theme.palette.primary.main}`
  }
});
const TextFieldStyled = styled(InputField)(` 
& input[type="number"]::-webkit-outer-spin-button,
& input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
`);

export const ReviewTransferDetailsCard = () => {
  const navigate = useNavigate();
  const { transaction, setTransaction } = useAppContext();
  const [transfervalue, setTransfer] = useState<boolean>(false);
  const [amount, setAmount] = useState<string>(`${transaction?.amount}`);
  const [recentAmount, setRecentAmount] = useState<string>(
    `${transaction?.amount}`
  );
  const businessData = {
    name: `${transaction?.recipient.firstName} ${transaction?.recipient.lastName}`,
    email: `${transaction?.recipient.email}`,
    accountno: `${transaction?.recipient.account}`,
    bankAccountType: `${transaction?.recipient.bankAccountType}`
  };
  const [formValues, setFormValues] = useState<FormValueType>(businessData);
  const [recentFormValues, setRecentFormValues] =
    useState<FormValueType>(businessData);
  const [reviewvalue, setReview] = useState<boolean>(false);
  const updateContext = () => {
    const [firstName, lastName] = formValues.name.split(" ");
    setTransaction((prev) => ({
      ...prev,
      amount: parseFloat(amount),
      amountConverted: parseFloat((parseFloat(amount) * 1.1398).toFixed(2)),
      recipient: {
        ...prev.recipient,
        firstName,
        lastName,
        account: formValues.accountno,
        bankAccountType: formValues.bankAccountType
      }
    }));
  };

  const editReviewDetails = () => {
    setReview(!reviewvalue);
  };

  const editTransferDetails = () => {
    setTransfer(!transfervalue);
  };

  const changeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleEditCancel = () => {
    setTransfer(!transfervalue);
    setAmount(recentAmount);
  };
  const handleEditSave = () => {
    setTransfer(!transfervalue);
    setRecentAmount(amount + transaction?.fromCurrency);
  };
  const handleSaveChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "accountno") {
      if (e.target.value.length <= 10)
        setFormValues((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    } else
      setFormValues((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleBusinessSaveButton = () => {
    setReview(!reviewvalue);
    setRecentFormValues(formValues);
  };
  const handleBusinessCancelButton = () => {
    setReview(!reviewvalue);
    setFormValues(recentFormValues);
  };
  const transferDetails = [
    { Fee: `00.00 ${transaction?.fromCurrency}` },
    { "Amount we’ll convert": `77.74 ${transaction?.fromCurrency}` },
    {
      "Guranteed rate": `1 ${transaction?.fromCurrency} = 1.14 ${transaction?.toCurrency}`
    }
  ];
  const enable =
    formValues.name !== "" &&
    formValues.email !== "" &&
    formValues.accountno.length === 10;
  const handleKeyDown = (evt: React.KeyboardEvent<HTMLDivElement>) => {
    if (evt.key === "e" || evt.key === "+" || evt.key === "-") {
      evt.preventDefault();
    }
  };
  return (
    <StyledStack>
      <StyledBox>
        <Typography
          variant="h1"
          color={`${theme.palette.textColor.highEmphasis}`}
          sx={{
            marginBottom: "32px"
          }}
        >
          {ReviewDetailsTitle}
        </Typography>
        {!transfervalue && !reviewvalue && (
          <OuterBox>
            <Box>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                paddingBottom={"16px"}
              >
                <Typography
                  variant="caption1"
                  color={`${theme.palette.textColor.lowEmphasis}`}
                >
                  {TRANSFERDETAILS}
                </Typography>
                <Typography
                  variant="linkText"
                  color={`${theme.palette.primary.primary500}`}
                  onClick={editTransferDetails}
                  data-testid="edit"
                  sx={{
                    textDecoration: "underline"
                  }}
                >
                  {EDIT}
                </Typography>
              </Stack>
              <Stack direction={"row"} gap={"10px"}>
                <Typography
                  variant="body2"
                  color={`${theme.palette.textColor.highEmphasis}`}
                  lineHeight={1}
                >
                  {`${amount}  ${transaction?.fromCurrency}`}
                </Typography>
                <Image src={leftArrow} alt={"leftarrow"} />
                <Typography
                  variant="body2"
                  color={`${theme.palette.textColor.highEmphasis}`}
                  lineHeight={1}
                >
                  {`${(parseFloat(amount) * 1.1398).toFixed(2)}   ${
                    transaction?.toCurrency
                  }`}
                </Typography>
              </Stack>
              {transferDetails.map((transfer) => {
                const [key, value] = Object.entries(transfer)[0];
                return (
                  <StyledRow key={value}>
                    <Typography
                      variant="body2"
                      color={`${theme.palette.textColor.mediumEmphasis}`}
                    >
                      {key}:
                    </Typography>
                    <Typography
                      variant="body2"
                      color={`${theme.palette.textColor.highEmphasis}`}
                    >
                      {value}
                    </Typography>
                  </StyledRow>
                );
              })}
            </Box>
            <Box>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                paddingBottom={"4px"}
              >
                <Typography
                  variant="caption1"
                  color={`${theme.palette.textColor.lowEmphasis}`}
                >
                  {RECIPIENTDETAILS}
                </Typography>
                <Typography
                  variant="linkText"
                  color={`${theme.palette.primary.primary500}`}
                  sx={{
                    textDecoration: "underline"
                  }}
                  onClick={editReviewDetails}
                  data-testid="change"
                >
                  {CHANGE}
                </Typography>
              </Stack>
              {BusinessContent.BusinessDetails.map((item, id) => {
                return (
                  <StyledRow key={item.label}>
                    <Typography
                      variant="body2"
                      color={`${theme.palette.textColor.mediumEmphasis}`}
                    >
                      {item.label}:
                    </Typography>
                    <Typography
                      variant="body2"
                      color={`${theme.palette.textColor.highEmphasis}`}
                    >
                      {formValues[item.id]}
                    </Typography>
                  </StyledRow>
                );
              })}
            </Box>
            <Box>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                paddingBottom={"4px"}
              >
                <Typography
                  variant="caption1"
                  color={`${theme.palette.textColor.lowEmphasis}`}
                >
                  {SCHEDULEDETAILS}
                </Typography>
                <Typography
                  variant="linkText"
                  color={`${theme.palette.primary.primary500}`}
                  sx={{
                    textDecoration: "underline"
                  }}
                >
                  {EDIT}
                </Typography>
              </Stack>
              {ScheduleDetais.map((transfer) => {
                const [key, value] = Object.entries(transfer)[0];
                return (
                  <StyledRow key={value}>
                    <Typography
                      variant="body2"
                      color={`${theme.palette.textColor.mediumEmphasis}`}
                    >
                      {key}:
                    </Typography>
                    <Typography
                      variant="body2"
                      color={`${theme.palette.textColor.highEmphasis}`}
                    >
                      {value}
                    </Typography>
                  </StyledRow>
                );
              })}
            </Box>
            <Stack alignItems={"center"} gap={theme.spacing(9)}>
              <Stack>
                <Stack alignItems={"center"}>
                  <TypographyComponent
                    variant="caption1"
                    color={theme.palette.textColor.mediumEmphasis}
                  >
                    {CONFIRM_MESSAGE}
                  </TypographyComponent>
                </Stack>
                <TypographyComponent
                  variant="caption1"
                  color={theme.palette.textColor.mediumEmphasis}
                >
                  {TERMS}
                </TypographyComponent>
              </Stack>
              <ButtonComponent
                onClick={() => {
                  navigate(ROUTES.PAYMENT);
                }}
                data-testid="confirmId"
                variant="contained"
                sx={{
                  borderRadius: "56px",
                  marginTop: "24px",
                  height: "56px",
                  width: "218px",
                  "&:hover": {
                    backgroundColor: `${theme.palette.primary.main}`
                  }
                }}
                children={
                  <TypographyComponent variant="body2">
                    {CONFIRM_CONTINUE}
                  </TypographyComponent>
                }
              />
            </Stack>
          </OuterBox>
        )}
      </StyledBox>
      {transfervalue && (
        <>
          <StyledBox spacing={theme.spacing(5)} marginBottom={"63px"}>
            <TypographyComponent
              variant="caption1"
              color={theme.palette.textColor.lowEmphasis}
              sx={{
                marginBottom: "20px"
              }}
            >
              {TRANSFERDETAILS}
            </TypographyComponent>
            <TextFieldStyled
              data-testid="Amount-input"
              variant="outlined"
              label={AMOUNT}
              defaultValue={amount}
              onChange={changeAmount}
            />
            {TransferDetailsReview.map((transfee) => {
              const [key, value] = Object.entries(transfee)[0];
              return (
                <TextFieldStyled
                  variant="outlined"
                  label={key}
                  defaultValue={value}
                  disabled
                  key={key}
                />
              );
            })}
          </StyledBox>
          <StyledStack
            direction={"row"}
            justifyContent={"flex-end"}
            spacing={theme.spacing(5)}
          >
            <StyledButton onClick={handleEditCancel}>
              <TypographyComponent>{CANCEL}</TypographyComponent>
            </StyledButton>
            <ButtonComponent
              variant="contained"
              sx={{
                borderRadius: "56px",
                width: "135px",
                height: "56px",
                "&:hover": {
                  backgroundColor: `${theme.palette.primary.main}`,
                  color: `${theme.palette.structural.main}`
                }
              }}
              onClick={handleEditSave}
            >
              <TypographyComponent variant="body2">{SAVE}</TypographyComponent>
            </ButtonComponent>
          </StyledStack>
        </>
      )}
      {reviewvalue && (
        <>
          <StyledBox spacing={theme.spacing(5)} marginBottom={"63px"}>
            <TypographyComponent
              variant="caption1"
              color={theme.palette.textColor.lowEmphasis}
              sx={{
                marginBottom: "20px"
              }}
            >
              {BUSINESSDETAILS}
            </TypographyComponent>
            {BusinessContent.BusinessDetails.slice(0, 3).map((item, id) => {
              return (
                <TextFieldStyled
                  id={item.id}
                  value={formValues[item.id]}
                  key={item.label}
                  variant="outlined"
                  label={item.label}
                  onChange={handleSaveChange}
                  type={item?.type}
                  onKeyDown={
                    item?.type === "number" ? (e) => handleKeyDown(e) : () => {}
                  }
                />
              );
            })}
            <TextFieldStyled
              variant="outlined"
              label={BusinessContent.BusinessDetails[3].label}
              defaultValue={`${transaction?.recipient.bankAccountType}`}
              disabled
              key={BusinessContent.BusinessDetails[3].label}
            />
          </StyledBox>
          <StyledStack
            direction={"row"}
            justifyContent={"flex-end"}
            spacing={theme.spacing(5)}
          >
            <StyledButton onClick={handleBusinessCancelButton}>
              <Typography variant="body2">{CANCEL}</Typography>
            </StyledButton>
            <ButtonComponent
              variant="contained"
              sx={{
                borderRadius: "56px",
                width: "135px",
                height: "56px",
                "&:hover": {
                  backgroundColor: `${theme.palette.primary.main}`,
                  color: `${theme.palette.structural.main}`
                }
              }}
              onClick={() => {
                if (enable) {
                  handleBusinessSaveButton();
                  updateContext();
                }
              }}
            >
              <Typography variant="body2">{SAVE}</Typography>
            </ButtonComponent>
          </StyledStack>
        </>
      )}
    </StyledStack>
  );
};
