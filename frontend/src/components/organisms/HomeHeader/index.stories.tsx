import image from "./../../../../public/assets/images/avatarimg.svg"
import { Meta, StoryFn } from "@storybook/react";
import { HomeHeader ,HomeHeaderProps } from ".";

export default {
  title: "organisms/HomeHeader",
  component: HomeHeader,
} as Meta;

const Template: StoryFn<HomeHeaderProps> = (args) => <HomeHeader {...args} />;

export const Sending = Template.bind({});
Sending.args = {
  icon: image,
  name: "Mario Gabriel",
  currencysend: "100 GBP",
  currencyrecieve: "114.68 EUR",
  message: "Sending",
};
export const Cancelled = Template.bind({});
Cancelled.args = {
  icon: image,
  name: "Mario Gabriel",
  currencysend: "100 GBP",
  currencyrecieve: "114.68 EUR",
  message: "Cancelled",
};
