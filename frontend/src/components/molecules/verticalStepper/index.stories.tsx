import VerticalStepper from ".";
import { StoryFn, Meta } from "@storybook/react";
import { VerticalStepperProps } from "./verticalStepperHelper";
import { steps } from "./verticalStepperConstants";
const meta: Meta = {
  title: "Molecules/VerticalStepper",
  component: VerticalStepper,
  parameters: {
    layout: "centered",
    visualViewport: "PocketPay"
  }
};
export default meta;

const Template: StoryFn<VerticalStepperProps> = (args) => (
  <VerticalStepper {...args} />
);
export const Default = Template.bind({});
Default.args = {
  steps,
  activeStep: 3
};
export const StepperTwo = Template.bind({});
StepperTwo.args = {
  steps,
  activeStep: 2
};
