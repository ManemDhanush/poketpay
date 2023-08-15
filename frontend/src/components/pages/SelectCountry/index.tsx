import { StepperAndPageTemplate } from "../../templates/StepperAndPage";
import { Box, Stack, styled } from "@mui/material";
import TypographyComponent from "../../atoms/Typography";
import { Dropdown } from "../../atoms/dropdown";
import { CONTINUE, STEPPER_LABELS } from "../../../constants";
import { SelectCountryConsts } from "./SelectCountryConstants";
import { theme } from "../../../theme/theme";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes";
import ButtonComponent from "../../atoms/Button";
import { useState } from "react";

const StyledStack = styled(Stack)({
  flexDirection: "column",
  "@media (min-width: 1200px)": {
    width: "516px"
  },
  "@media (max-width: 700px)": {
    width: "100%"
  },
  "& .MuiSelect-select.MuiSelect-outlined": {
    "& img": {
      display: "none"
    },
    "& .code": {
      display: "none"
    }
  },
  "& .code": {
    display: "none"
  }
});
const ButtonBox = styled(Box)(`
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
  pointer-events:none;
}
`);

const SelectCountry = () => {
  const [selectedDropdownValue, setSelectedDropdownValue] = useState("");
  const handleDropdown = (value: string) => {
    if (value === "United Kingdom") setSelectedDropdownValue(value);
  };

  const navigate = useNavigate();

  return (
    <div>
      <StepperAndPageTemplate
        labels={STEPPER_LABELS[0]}
        activeStep={3}
        displayClose
        displayBack
        handleBackFn={() => {
          navigate(ROUTES.CHOOSE_ACCOUNT_TYPE);
        }}
      >
        <StyledStack>
          <TypographyComponent
            variant="h1"
            color={theme.palette.textColor.highEmphasis}
            sx={{ marginBottom: "44px" }}
          >
            {SelectCountryConsts.heading}
          </TypographyComponent>

          <Dropdown
            dataId="select1"
            menu={SelectCountryConsts.DROPDOWN_OPTIONS}
            labelText={SelectCountryConsts.label}
            formControlsx={{ maxWidth: "516px" }}
            displayIcon
            icons={SelectCountryConsts.Dropdowncontent}
            handleChange={handleDropdown}
            value={selectedDropdownValue}
          />
        </StyledStack>
        <ButtonBox className="confirm-btn-container">
          <ButtonComponent
            variant="contained"
            className={
              selectedDropdownValue === ""
                ? " disable confirm-button"
                : "confirm-button"
            }
            data-testid="confirm"
            onClick={() => navigate(ROUTES.TWO_FACTOR)}
          >
            <TypographyComponent variant="body2">
              {CONTINUE}
            </TypographyComponent>
          </ButtonComponent>
        </ButtonBox>
      </StepperAndPageTemplate>
    </div>
  );
};

export default SelectCountry;
