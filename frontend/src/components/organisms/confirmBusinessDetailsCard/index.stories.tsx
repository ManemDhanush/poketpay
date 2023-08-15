import { ConfirmBusinessDetailsCard } from ".";
import { StoryFn, Meta } from "@storybook/react";
const meta: Meta = {
  title: "Organisms/ConfirmBusinessDetailsCard",
  component: ConfirmBusinessDetailsCard,
  parameters: {
    layout: "centered",
    visualViewport: "PocketPay"
  }
};
export default meta;

const Templete: StoryFn<{}> = (args) => (
  <ConfirmBusinessDetailsCard {...args} />
);
export const Default = Templete.bind({});
