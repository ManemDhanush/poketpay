import IconInput from ".";
import { Meta, StoryFn } from "@storybook/react";
import flagIcon from "../../../../public/assets/images/ukflag.svg";

export default {
  title: "molecules/IconInputField",
  component: IconInput,
  argTypes: {}
} as Meta<typeof IconInput>;

const Template: StoryFn<typeof IconInput> = (args) => <IconInput {...args} />;

export const MobileNumber = Template.bind({});
MobileNumber.args = {
  icon: flagIcon,
  alt: "Flag-icon",
  label: "Mobile number",
  defaultValue: "+44 020 7947 6330"
};
