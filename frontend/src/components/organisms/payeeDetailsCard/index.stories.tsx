import { PayeeDetailsCard } from ".";
import { StoryFn, Meta } from "@storybook/react";
import { PayeeDetailsProps } from "./payeeDetailsHelper";
import { PAYEE_DETAILS_CONTENT } from "./payeeDetailsConstants";
const meta: Meta = {
  title: "Organisms/PayeeDetailsCard",
  component: PayeeDetailsCard,
  parameters: {
    layout: "centered",
    visualViewport: "PocketPay"
  }
};
export default meta;

const Template: StoryFn<PayeeDetailsProps> = (args) => (
  <PayeeDetailsCard {...args} />
);
export const Default = Template.bind({});
Default.args = {
  values: PAYEE_DETAILS_CONTENT.contentValues
};
