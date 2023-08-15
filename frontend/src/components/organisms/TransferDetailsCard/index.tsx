import { Box, styled } from "@mui/material";
import React, { useState } from "react";
import TypographyComponent from "../../atoms/Typography";
import { theme } from "../../../theme/theme";
import {
  TRANSFER_DETAILS,
  countryCodeObj,
  iconsTypo,
  options
} from "./transferDetailsTextConstants";
import { InputField } from "../../atoms/inputField";
import { AvatarTypography } from "../../molecules/AvatarText";
import DownArrow from "../../../../public/assets/images/dropdown.svg";
import { Image } from "../../atoms/image";
import RateConfirmationModal from "../../molecules/RateConfirmationModal";
import { Dropdown } from "../../atoms/dropdown";
import { removeSpacesAndConvertToLower } from "./transferDetailsHelper";
import { CONTINUE, useAppContext } from "../../../constants";
import ButtonComponent from "../../atoms/Button";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes";

const Wrapper = styled(Box)(`
    width:37.75vw;
    min-width:420px;
    max-width:516px;
    & .inputs{
      & .MuiInputBase-root.MuiOutlinedInput-root{
        margin-bottom:28px;
      }
    }
    & .content-item{
      display:flex;
      align-items:center;
      justify-content:space-between;
      width:100%;
      margin-top:20px;
    }
    & .ruler{
      width:20px;
      flex-grow:1;
      height:1px;
      background:${theme.palette.greyColors.stroke};
      margin:0 3px;
    }
    & .MuiButton-root{
      min-width:0;
    }
    & .dropdown-icon{
      cursor:pointer;
      display:flex;
      align-items:center;
    }
    & .MuiTypography-root.MuiTypography-body1{
      width:32px;
      display:flex;
      justify-content:center;
    }
    & input[type="number"] {
      -moz-appearance: textfield;
    }

    & input[type="number"]::-webkit-outer-spin-button,
    & input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    .confirm-button{
      width:135px;
      height:56px;
      border-radius:56px;
      box-shadow: 0px 8px 24px ${theme.palette.structural.btnShadow};
    }
    .confirm-btn-container{
      position:absolute;
      left:70%;
      top:89.6%;
    }
    .disable{
      opacity:0.3;
      
    }
    .disable-click{
      pointer-events:none !important;
    }
`);

const InnerWrapper = styled(Box)(`
margin-top:52px;
height:315px;
`);

export const TransferDetailsCard = () => {
  const countryInitialState = [iconsTypo[1], iconsTypo[2]];
  const { setTransaction } = useAppContext();
  const [displayDropdown, setDisplayDropdown] = useState<boolean>(false);
  const [currentDropdown, setCurrentDropdown] = useState<number>(-1);
  const [country, setCountry] = useState(countryInitialState);
  const [inputValues, setInputValues] = useState<string[]>(["", ""]);
  const navigate = useNavigate();

  const updateContext = () => {
    setTransaction((prev) => ({
      ...prev,
      fromCurrency: country[0].code,
      toCurrency: country[1].code,
      amount: parseFloat(inputValues[0]),
      amountConverted: parseFloat(parseFloat(inputValues[1]).toFixed(2))
    }));
  };

  const handleSetDisplayDropdown = (id = -1) => {
    setDisplayDropdown((prev) => !prev);
    setCurrentDropdown(id);
  };
  const handleDropdownChange = (value: string) => {
    handleSetDisplayDropdown();
    handleSetCountry(value);
  };
  const handleSetCountry = (country: string) => {
    const value = removeSpacesAndConvertToLower(country);
    setCountry((prev) => {
      prev[currentDropdown] = countryCodeObj[value];
      return prev;
    });
  };
  const handleFormValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = parseInt(e.target.name);
    const newValue = e.target.value;
    setInputValues((prev) => {
      const updatedValues = [...prev];
      updatedValues[index] = newValue;
      if (index === 0) {
        const convertedAmt = (parseFloat(newValue) * 1.1398).toFixed(2);
        updatedValues[1] = convertedAmt.toString();
      }
      return updatedValues;
    });
  };

  return (
    <Wrapper>
      <TypographyComponent
        variant="h1"
        color={theme.palette.textColor.highEmphasis}
      >
        {TRANSFER_DETAILS.title}
      </TypographyComponent>
      <InnerWrapper>
        {!displayDropdown && (
          <Box className="inner-content">
            <Box className="inputs">
              {TRANSFER_DETAILS.labels.map((item, index) => (
                <InputField
                  fullWidth
                  label={item}
                  key={item}
                  onChange={handleFormValues}
                  name={index.toString()}
                  value={inputValues[index]}
                  type="number"
                  readOnly={index === 1 ? true : false}
                  endAdornment={
                    <>
                      <AvatarTypography
                        avatarAndTextGap="10px"
                        avatar={country[index].flag}
                        avatarSize={"24px"}
                        text={country[index].code}
                        textVariant={"body1"}
                      />
                      <Box
                        className="dropdown-icon"
                        data-testid="open-dropdown"
                        onClick={() => handleSetDisplayDropdown(index)}
                      >
                        <Image
                          src={DownArrow}
                          alt={TRANSFER_DETAILS.downArrowAlt}
                          style={{ marginLeft: "12px" }}
                        />
                      </Box>
                    </>
                  }
                />
              ))}
            </Box>
            <Box className="content">
              {TRANSFER_DETAILS.content.map((item, index) => (
                <Box className="content-item" key={item.leftContent}>
                  <TypographyComponent
                    variant="body3"
                    color={theme.palette.textColor.lowEmphasis}
                  >
                    {item.leftContent}
                  </TypographyComponent>
                  <Box className="ruler"></Box>
                  <TypographyComponent
                    variant="body3"
                    color={
                      index === 1
                        ? theme.palette.primary.primary300
                        : theme.palette.textColor.lowEmphasis
                    }
                  >
                    {item.rightContent}
                  </TypographyComponent>
                  {index === 1 ? (
                    <RateConfirmationModal
                      text={TRANSFER_DETAILS.modal.text}
                      label={TRANSFER_DETAILS.modal.label}
                    />
                  ) : (
                    <Image src={item.src} alt={item.src} />
                  )}
                </Box>
              ))}
            </Box>
          </Box>
        )}
        {displayDropdown && (
          <Box>
            <Dropdown
              menu={options}
              labelText={TRANSFER_DETAILS.dropdownLabel}
              formControlsx={{ minWidth: "516px" }}
              displayIcon
              icons={iconsTypo}
              defaultOpen
              displayEmpty
              handleChange={handleDropdownChange}
            />
          </Box>
        )}
      </InnerWrapper>
      <Box
        className={
          inputValues[0]
            ? "confirm-btn-container"
            : "disable-click confirm-btn-container"
        }
        onClick={() => {
          updateContext();
          navigate(ROUTES.SENDING_TO);
        }}
      >
        <ButtonComponent
          variant="contained"
          className={
            inputValues[0] ? "confirm-button" : "disable confirm-button"
          }
        >
          <TypographyComponent variant="body2">{CONTINUE}</TypographyComponent>
        </ButtonComponent>
      </Box>
    </Wrapper>
  );
};
