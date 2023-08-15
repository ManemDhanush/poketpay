import { ConfirmPurchase } from ".";
import { StoryFn, Meta } from "@storybook/react";
import { ConfirmPurchaseProps } from "./confirmPurchaseUtils";
import { CONFIRM_PURCHASE } from "./confirmPurchaseConstants";
const meta: Meta = {
  title: "Organisms/ConfirmPurchase",
  component: ConfirmPurchase,
  parameters: {
    layout: "centered",
    visualViewport: "PocketPay"
  }
};
export default meta;

const Template: StoryFn<ConfirmPurchaseProps> = (args) => (
  <ConfirmPurchase {...args} />
);
export const Default = Template.bind({});
Default.args = {
  amount: CONFIRM_PURCHASE.amount,
  country: CONFIRM_PURCHASE.country
};
