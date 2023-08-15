import { Stack, styled } from "@mui/material";
import { HEADERSTEPPERMENU3 } from "../../../constants";
import { StepperAndPageTemplate } from "../../templates/StepperAndPage";
import { TransferDetailsCard } from "../../organisms/TransferDetailsCard";
import { ROUTES } from "../../../routes";
import { useNavigate } from "react-router-dom";

const StyledStack = styled(Stack)({
  flexDirection: "column",
  marginTop: "55px",
  "@media (min-width: 1200px)": {
    width: "516px"
  },
  "@media (max-width: 700px)": {
    width: "100%"
  }
});
export const EnterTransferAmount = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(ROUTES.SEND_MONEY);
  };
  return (
    <>
      <StepperAndPageTemplate
        labels={HEADERSTEPPERMENU3}
        activeStep={1}
        displayBack
        handleBackFn={handleBack}
      >
        <StyledStack>
          <TransferDetailsCard />
        </StyledStack>
      </StepperAndPageTemplate>
    </>
  );
};

