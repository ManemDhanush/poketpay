import { StepperAndPageTemplate } from "../../templates/StepperAndPage";
import { Stack, styled } from "@mui/material";
import { PocketPayPurpose } from "../../organisms/pocketPayPurpose";
import { HEADERSTEPPERMENU3 } from "../../../constants";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes";

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

const SelectRecipient = () => {
  const navigate = useNavigate();
  return (
    <div>
      <StepperAndPageTemplate
        labels={HEADERSTEPPERMENU3}
        activeStep={3}
        displayClose
        displayBack
        handleBackFn={() => navigate(ROUTES.ENTER_AMOUNT)}
      >
        <StyledStack>
          <PocketPayPurpose />
        </StyledStack>
      </StepperAndPageTemplate>
    </div>
  );
};

export default SelectRecipient;
