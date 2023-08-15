import TransferRecipientDetailsCard from ".";
import { TransferRecpDetailsCardProps } from "./TransferReceipientDetailsCardUtils";
import { StoryFn, Meta } from "@storybook/react";

const Template: StoryFn<TransferRecpDetailsCardProps> = (args) => (
  <TransferRecipientDetailsCard {...args} />
);

const Default = Template.bind({});
Default.args = {
  data: {
    fee: "00.00GBP",
    amount: "77.74 GBP",
    rate: "1GBP = 1.14 EUR",
    name: "Mario Gabriel",
    email: "mario@gmail.com",
    accountno: "365314322223",
    bankAccountType: "Checking",
    sendcurrency: "100.00 GBP",
    getcurrency: "114.68 EUR"
  }
};
export default {
  title: "Organisms/TransferRecipientDetailsCard",
  component: TransferRecipientDetailsCard
} as Meta;

export { Default };
