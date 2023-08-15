import { Meta, Story } from "@storybook/react";
import { Stepper, StepperCompProps } from ".";
import { STEPPER_LABELS } from "../../../constants";
const meta: Meta = {
  title: "Molecules/Stepper",
  component: Stepper
};
export default meta;
const Templete: Story<StepperCompProps> = (args) => <Stepper {...args} />;
export const Default = Templete.bind({});
Default.args = {
  defaultValue: 1,
  labels: STEPPER_LABELS[0],
  sx: {
    marginLeft: "3rem"
  }
};
export const StepperOne = Templete.bind({});
StepperOne.args = {
  defaultValue: 2,
  labels: STEPPER_LABELS[1],
  sx: {
    marginLeft: "3rem"
  }
};
export const StepperTwo = Templete.bind({});
StepperTwo.args = {
  defaultValue: 5,
  labels: STEPPER_LABELS[0],
  sx: {
    marginLeft: "3rem"
  }
};
