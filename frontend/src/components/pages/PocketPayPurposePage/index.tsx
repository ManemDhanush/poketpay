import { StepperAndPageTemplate } from "../../templates/StepperAndPage";
import { Stack, styled } from "@mui/material";
import TypographyComponent from "../../atoms/Typography";
import { Dropdown } from "../../atoms/dropdown";
import { HEADERSTEPPERMENU3, useAppContext } from "../../../constants";
import { useNavigate } from "react-router-dom";
import { theme } from "../../../theme/theme";
import { POCKETPAYPURPOSE_PAGE_CONSTANTS } from "./pockeyPayPurposePageConstants";
import { ROUTES } from "../../../routes";
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

const PocketPayPurposePage = () => {
  const navigate = useNavigate();
  const { transaction, setTransaction } = useAppContext();
  const [value, setValue] = useState<string>(transaction?.purpose!);
  const handleNavigate = () => {
    setTransaction((prev) => ({ ...prev, purpose: value }));
    navigate(ROUTES.VERIFICATION_STEP.businessDirectors);
  };

  const handleBack = () => {
    navigate(ROUTES.RECIPIENT_DETAILS);
  };

  return (
    <div>
      <StepperAndPageTemplate
        labels={HEADERSTEPPERMENU3}
        activeStep={4}
        displayClose
        displayBack
        buttonText="Continue"
        handleConfirmFn={handleNavigate}
        handleBackFn={handleBack}
      >
        <StyledStack>
          <TypographyComponent
            variant="h1"
            color={theme.palette.textColor.highEmphasis}
          >
            {POCKETPAYPURPOSE_PAGE_CONSTANTS.title}
          </TypographyComponent>
          <TypographyComponent
            variant="body3"
            sx={{ marginTop: "12px", marginBottom: "44px" }}
            color={theme.palette.textColor.mediumEmphasis}
          >
            {POCKETPAYPURPOSE_PAGE_CONSTANTS.subtitle}
          </TypographyComponent>

          <Dropdown
            menu={POCKETPAYPURPOSE_PAGE_CONSTANTS.menuItems}
            labelText={POCKETPAYPURPOSE_PAGE_CONSTANTS.label}
            formControlsx={{ maxWidth: "516px" }}
            value={value}
            data-testid="dropdown"
            onChange={(e) => setValue(e.target.value as string)}
          />
        </StyledStack>
      </StepperAndPageTemplate>
    </div>
  );
};

export default PocketPayPurposePage;
