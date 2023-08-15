import { FillDetailsCard } from ".";
import { StoryFn, Meta } from "@storybook/react";
const meta: Meta = {
  title: "Organisms/FillDetailsCard",
  component: FillDetailsCard,
  parameters: {
    layout: "centered",
    visualViewport: "PocketPay"
  }
};
export default meta;

const Templete: StoryFn<{}> = (args) => (
  <FillDetailsCard {...args} />
);
export const Default = Templete.bind({});