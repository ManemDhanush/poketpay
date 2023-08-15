import { Box, styled } from "@mui/material";
import React, { useState } from "react";
import TypographyComponent from "../../atoms/Typography";
import {
  CONTINUE,
  RECIPIENT_FORM_CONTENT,
  useAppContext
} from "../../../constants";
import { InputField } from "../../atoms/inputField";
import { theme } from "../../../theme/theme";
import { CheckboxTypo } from "../../molecules/CheckboxTypo";
import { Dropdown } from "../../atoms/dropdown";
import ButtonComponent from "../../atoms/Button";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes";
import { WelcomeBackConstants } from "../WelcomeBack/WelcomeBackConstants";
import { ACCNO_HELPER, IFSC_HELPER } from "./recipientDetailsFormConstants";

const CardWrapper = styled(Box)(`
    width:38vw;
    min-width:245px;
    max-width:516px;
    & .form-con{
        margin-top:44px;
    }
    & .checkbox{
        margin-left:5px;
    }
    & .recipient-details{
        margin-top:40px;
        & .MuiTypography-root{
            display:block;
        }
        & .input{
            margin-bottom:28px;
        }
    }
    & .subtitle{
      margin-bottom:24px;
    }

`);
const Wrapper = styled(Box)(`
    width:651px;
    & .btn{
      position:absolute;
      border-radius:56px;
      height:56px;
      width:135px;
      bottom:5%;
      left:80%;
    }
    & .confirm-button{
      width:135px;
      height:56px;
      border-radius:56px;
      box-shadow: 0px 8px 24px ${theme.palette.structural.btnShadow};
    }
    & .confirm-btn-container{
      position:absolute;
      left:70%;
      top:89.6%;
    }
    .disable{
      pointer-events:none !important;
    }
    & input[type="number"]::-webkit-outer-spin-button,
    & input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
`);

interface FormValuesType {
  email: string;
  accNumber: string;
  firstName: string;
  lastName: string;
  bankIFSCCode: string;
  isKnown: boolean;
  bankAccountType: string;
  [key: string]: string | boolean;
}

export const RecipientDetailsForm = () => {
  const { transaction, setTransaction } = useAppContext();
  const formInitialState = {
    email: transaction?.recipient.email,
    accNumber: transaction?.recipient.account,
    firstName: transaction?.recipient.firstName,
    lastName: transaction?.recipient.lastName,
    bankIFSCCode: transaction?.recipient.bankIFSCCode,
    bankAccountType: transaction?.recipient.bankAccountType,
    isKnown: false
  };

  const [formValues, setFormValues] =
    useState<FormValuesType>(formInitialState);

  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const navigate = useNavigate();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "checkbox-atom") {
      setFormValues((prev) => ({
        ...prev,
        isKnown: event.target.checked
      }));
    } else if (event.target.name === "email") {
      const newEmail = event.target.value;
      setFormValues((prev) => ({
        ...prev,
        [event.target.name]: event.target.value
      }));
      setIsEmailValid(validateEmail(newEmail));
    } else if (
      event.target.name === "accNumber" ||
      event.target.name === "bankIFSCCode"
    ) {
      if (event.target.value.length <= 10) {
        setFormValues((prev) => ({
          ...prev,
          [event.target.name]: event.target.value
        }));
      }
    } else
      setFormValues((prev) => ({
        ...prev,
        [event.target.name]: event.target.value
      }));
  };

  const handleDropdown = (value: string) => {
    if (value === "Checking")
      setFormValues((prev) => ({ ...prev, bankAccountType: value }));
  };

  const updateContext = () => {
    const {
      accNumber,
      firstName,
      lastName,
      email,
      bankIFSCCode,
      bankAccountType
    } = formValues;
    setTransaction((prev) => ({
      ...prev,
      recipient: {
        ...prev.recipient,
        email,
        firstName,
        lastName,
        account: accNumber,
        bankIFSCCode,
        bankAccountType
      }
    }));
  };
  const enableButton = () => {
    let buttonState = true;
    Object.entries(formValues).forEach(([key, value]) => {
      if (
        typeof value === "string" &&
        (key === "accNumber" || key === "ifsc")
      ) {
        if (value.length < 10) buttonState = false;
      } else if (value === "" || value === false) {
        buttonState = false;
      }
    });
    return buttonState;
  };
  const handleKeyDown = (evt: React.KeyboardEvent<HTMLDivElement>) => {
    if (evt.key === "e" || evt.key === "+" || evt.key === "-") {
      evt.preventDefault();
    }
  };
  return (
    <Wrapper>
      <CardWrapper>
        <TypographyComponent
          variant="h1"
          color={theme.palette.textColor.highEmphasis}
        >
          {RECIPIENT_FORM_CONTENT.title}
        </TypographyComponent>
        <Box className="form-con">
          <InputField
            label={RECIPIENT_FORM_CONTENT.emailLabel}
            fullWidth
            name="email"
            value={formValues.email}
            onChange={handleChange}
            error={!isEmailValid}
          />
          {!isEmailValid && (
            <TypographyComponent
              variant="caption"
              sx={{ color: "error.main", marginBottom: "12px" }}
            >
              {WelcomeBackConstants.Validation}
            </TypographyComponent>
          )}
          <br></br>
          <CheckboxTypo
            text={RECIPIENT_FORM_CONTENT.checkboxTitle}
            textColor={theme.palette.textColor.mediumEmphasis}
            className="checkbox"
            name="isKnown"
            value={formValues.isKnown}
            handleClick={(e) => handleChange(e)}
          />
          <Box className="recipient-details">
            <TypographyComponent
              variant="body3"
              color={theme.palette.textColor.highEmphasis}
              className="subtitle"
            >
              {RECIPIENT_FORM_CONTENT.recipientDetails}
            </TypographyComponent>
            {RECIPIENT_FORM_CONTENT.inputLabels.map((item, index) => (
              <Box key={item.name}>
                {index < 4 ? (
                  <InputField
                    label={item.label}
                    fullWidth
                    name={item.name}
                    className="input"
                    onChange={handleChange}
                    value={formValues[item.name]}
                    type={item?.type}
                    error={
                      (item?.type === "number" &&
                        formValues.accNumber?.length > 0 &&
                        formValues.accNumber?.length < 10) ||
                      (item.name === "bankIFSCCode" &&
                        formValues.bankIFSCCode?.length > 0 &&
                        formValues.bankIFSCCode?.length < 10)
                    }
                    helperText={
                      (item?.type === "number" &&
                      formValues.accNumber?.length > 0 &&
                      formValues.accNumber?.length < 10
                        ? ACCNO_HELPER
                        : "") ||
                      (item.name === "bankIFSCCode" &&
                      formValues.bankIFSCCode?.length > 0 &&
                      formValues.bankIFSCCode?.length < 10
                        ? IFSC_HELPER
                        : "")
                    }
                    onKeyDown={
                      item?.type === "number"
                        ? (e) => handleKeyDown(e)
                        : () => {}
                    }
                  />
                ) : (
                  <Dropdown
                    menu={RECIPIENT_FORM_CONTENT.bankAccountTypeOptions}
                    labelText={RECIPIENT_FORM_CONTENT.bankAccountTypeLabel}
                    name={item.name}
                    handleChange={handleDropdown}
                    formControlsx={{ width: "516px" }}
                    dataId="select1"
                    value={formValues["bankAccountType"]}
                  />
                )}
              </Box>
            ))}
          </Box>
        </Box>
      </CardWrapper>
      <Box
        className="confirm-btn-container"
        onClick={() => {
          if (enableButton()) {
            updateContext();
            navigate(ROUTES.VERIFICATION_STEP.pocketPayPurpose);
          }
        }}
      >
        <ButtonComponent variant="contained" className={"confirm-button"}>
          <TypographyComponent variant="body2">{CONTINUE}</TypographyComponent>
        </ButtonComponent>
      </Box>
    </Wrapper>
  );
};
