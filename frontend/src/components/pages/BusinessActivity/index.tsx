import {  HEADERSTEPPERMENU2 } from "../../../constants";
import { StepperAndPageTemplate } from "../../templates/StepperAndPage";
import { VerifyAccountCard } from "../../organisms/VerifyAccountCard";

export const BusinessActivity = () => {
  return (
    <>
      <StepperAndPageTemplate
        labels={HEADERSTEPPERMENU2}
        activeStep={2}
      >
        <VerifyAccountCard/>
      </StepperAndPageTemplate>
    </>
  );
};
