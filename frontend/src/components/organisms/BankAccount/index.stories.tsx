import { StoryFn, Meta } from "@storybook/react";
import { BankAccountProps } from "./BankAccountUtils";
import BankAccount from ".";

export default {
  title: "Organisms/BankAccount",
  component: BankAccount
} as Meta;

const Template: StoryFn<BankAccountProps> = (args) => <BankAccount {...args} />;

export const Business = Template.bind({});
Business.args = {
  bankAccountType: "business",
  currencyValue: "75.38 GBP"
};

export const Charity = Template.bind({});
Charity.args = {
  bankAccountType: "charity",
  currencyValue: "7500 INR"
};
