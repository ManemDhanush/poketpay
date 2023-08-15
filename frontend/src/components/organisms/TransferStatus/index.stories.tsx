import { TransferStatus } from ".";
import { StoryFn, Meta } from "@storybook/react";
const meta: Meta = {
  title: "Organisms/TransferStatus",
  component: TransferStatus,
  parameters: {
    layout: "centered",
    visualViewport: "PocketPay"
  }
};
export default meta;

const Template: StoryFn<{}> = (args) => <TransferStatus status="Sending" {...args} />;
export const Default = Template.bind({});
