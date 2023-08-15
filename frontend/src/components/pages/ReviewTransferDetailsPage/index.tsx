import { StepperAndPageTemplate } from "../../templates/StepperAndPage";
import { Stack, styled } from "@mui/material";
import { HEADERSTEPPERMENU3 } from "../../../constants";
import { ReviewTransferDetailsCard } from "../../organisms/ReviewTransferDetailsCard";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes";

const ReviewTransferDetailsPage = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(ROUTES.VERIFICATION_STEP.businessOwners);
  };
  const StyledStack = styled(Stack)({
    flexDirection: "column",
    "@media (min-width: 1200px)": {},
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

  return (
    <div>
      <StepperAndPageTemplate
        labels={HEADERSTEPPERMENU3}
        activeStep={5}
        displayClose
        displayBack
        handleBackFn={handleBack}
      >
        <StyledStack>
          <ReviewTransferDetailsCard />
        </StyledStack>
      </StepperAndPageTemplate>
    </div>
  );
};

export default ReviewTransferDetailsPage;
