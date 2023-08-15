import { StepperAndPageTemplate } from "../../templates/StepperAndPage";
import { Stack, styled } from "@mui/material";
import { RecipientDetailsForm } from "../../organisms/recipientDetailsForm";
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
  }
});

const RecipientDetailsPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(ROUTES.SENDING_TO);
  };
  return (
    <>
      <StepperAndPageTemplate
        labels={HEADERSTEPPERMENU3}
        activeStep={3}
        displayClose
        displayBack
        handleBackFn={handleBack}
      >
        <StyledStack>
          <RecipientDetailsForm />
        </StyledStack>
      </StepperAndPageTemplate>
    </>
  );
};

export default RecipientDetailsPage;
