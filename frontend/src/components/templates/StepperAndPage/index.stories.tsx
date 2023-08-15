import { Box } from "@mui/material";
import { StepperAndPageTemplate, StepperAndPageTemplateProps } from ".";
import { StoryFn, Meta } from "@storybook/react";
import { theme } from "../../../theme/theme";
import { BUTTON_TEXTS, STEPPER_LABELS } from "../../../constants";
const meta: Meta = {
  title: "Templates/StepperAndPageTemplate",
  component: StepperAndPageTemplate,
  parameters: {
    layout: "fullscreen",
    visualViewport: "PocketPay"
  }
};
export default meta;

const boxStyles = {
  height: "80vh",
  width: "516px",
  background: "#e5e5e5",
  borderRadius: "0.5rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: `2px solid ${theme.palette.textColor.lowEmphasis}`
};

const Template: StoryFn<StepperAndPageTemplateProps> = (args) => (
  <StepperAndPageTemplate {...args} />
);
export const Default = Template.bind({});
Default.args = {
  labels: STEPPER_LABELS[0],
  activeStep: 2,
  children: <Box sx={boxStyles}>Body</Box>,
  displayClose: true,
  buttonText: BUTTON_TEXTS.confirm,
  displayBack: true
};
