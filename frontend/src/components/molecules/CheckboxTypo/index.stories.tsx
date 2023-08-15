import { Meta, StoryFn } from "@storybook/react";
import { CheckboxTypo, CheckboxTypoProps } from ".";

export default {
  component: CheckboxTypo,
  title: "Molecules/CheckboxTypo",
} as Meta;

const Template: StoryFn<CheckboxTypoProps> = (args) => <CheckboxTypo {...args} />;

export const Remember = Template.bind({});
Remember.args = {
  text: "Remember me",
  labelVariant: "body3",
  textColor: "#141414",
};

export const Bank = Template.bind({});
Bank.args = {
  text: "I know their bank details",
  labelVariant: "body3",
  textColor: "#141414",
};
