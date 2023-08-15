import { SendMoney } from ".";
import { StoryFn, Meta } from "@storybook/react";
const meta: Meta = {
  title: "Organisms/SendMoney",
  component: SendMoney,
  parameters: {
    layout: "centered",
    visualViewport: "PocketPay"
  }
};
export default meta;

const Template: StoryFn<{}> = (args) => <SendMoney {...args} />;
export const Default = Template.bind({});
