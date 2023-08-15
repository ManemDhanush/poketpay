import { PocketPayPurpose } from ".";
import { StoryFn, Meta } from "@storybook/react";
const meta: Meta = {
  title: "Organisms/PocketPayPurpose",
  component: PocketPayPurpose,
  parameters: {
    layout: "centered",
    visualViewport: "PocketPay"
  }
};
export default meta;

const Templete: StoryFn<{}> = (args) => <PocketPayPurpose {...args} />;
export const Default = Templete.bind({});
