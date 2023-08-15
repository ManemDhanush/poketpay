import { StepperAndPageTemplate } from "../../templates/StepperAndPage";
import { Stack, styled } from "@mui/material";
import { CONFIRMDIRECTORSFORMCONTENT, HEADERSTEPPERMENU3 } from "../../../constants";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes";
import ConfirmDirectorsForm from "../../organisms/ConfirmDirectorsForm";

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

const ConfirmBusinessDirectorsPage = () => {
  const navigate=useNavigate();

  const handleClick=()=>{
    navigate(ROUTES.VERIFICATION_STEP.businessOwners)
  }
  return (
    <div>
      <StepperAndPageTemplate
        labels={HEADERSTEPPERMENU3}
        activeStep={4}
        displayClose
        displayBack
        buttonText="Continue"
        handleBackFn={() => navigate(ROUTES.VERIFICATION_STEP.pocketPayPurpose)}
        handleConfirmFn={handleClick}
      >
        <StyledStack>
        <ConfirmDirectorsForm detailsProps={{
            heading: CONFIRMDIRECTORSFORMCONTENT.title,
            caption: CONFIRMDIRECTORSFORMCONTENT.content,
            type: CONFIRMDIRECTORSFORMCONTENT.formTitle,
            addAnotherText: CONFIRMDIRECTORSFORMCONTENT.addDirector
          }} />
        </StyledStack>
      </StepperAndPageTemplate>
    </div>
  );
};

export default ConfirmBusinessDirectorsPage;

