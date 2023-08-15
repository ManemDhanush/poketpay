import {  HEADERSTEPPERMENU2 } from "../../../constants";
import { StepperAndPageTemplate } from "../../templates/StepperAndPage";
import { FillDetailsCard } from "../../organisms/FillDetailsCard";

export const UserDetails = () => {
  return (
    <>
      <StepperAndPageTemplate
        labels={HEADERSTEPPERMENU2}
        activeStep={3}
        displayClose
      >
        <FillDetailsCard />
      </StepperAndPageTemplate>
    </>
  );
};