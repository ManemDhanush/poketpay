import { StepperAndPageTemplate } from "../../templates/StepperAndPage";
import { Stack, styled } from "@mui/material";
import { CONFIRMBUSINESSOWNERSCONTENT, HEADERSTEPPERMENU3 } from "../../../constants";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes";
import ConfirmOwnersForm from "../../organisms/ConfirmBusinessOwners";
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

const ConfirmBusinessOwnersPage = () => {
  const navigate=useNavigate();

  const handleClick=()=>{
    navigate(ROUTES.REVIEW_TRANSFER_DETAILS)
  }
  return (
    <div>
      <StepperAndPageTemplate
        labels={HEADERSTEPPERMENU3}
        activeStep={4}
        displayClose
        displayBack
        buttonText="Continue"
        handleBackFn={() => {navigate(ROUTES.VERIFICATION_STEP.businessDirectors)}}
        handleConfirmFn={handleClick}
      >
        <StyledStack>
        <ConfirmOwnersForm detailsProps={{
            heading: CONFIRMBUSINESSOWNERSCONTENT.title,
            caption: CONFIRMBUSINESSOWNERSCONTENT.content,
            type: CONFIRMBUSINESSOWNERSCONTENT.formTitle,
            addAnotherText: CONFIRMBUSINESSOWNERSCONTENT.addOwner
          }} />
        </StyledStack>
      </StepperAndPageTemplate>
    </div>
  );
};

export default ConfirmBusinessOwnersPage;
