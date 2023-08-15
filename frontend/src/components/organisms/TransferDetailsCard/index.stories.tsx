import { TransferDetailsCard } from ".";
import { StoryFn, Meta } from "@storybook/react";
const meta: Meta = {
  title: "Organisms/TransferDetailsCard",
  component: TransferDetailsCard,
  parameters: {
    layout: "centered",
    visualViewport: "PocketPay"
  }
};
export default meta;

const Template: StoryFn<{}> = (args) => <TransferDetailsCard {...args} />;
export const Default = Template.bind({});
