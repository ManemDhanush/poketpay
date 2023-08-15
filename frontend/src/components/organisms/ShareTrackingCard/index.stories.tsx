import  ShareTrackingCard  from ".";
import { StoryFn, Meta } from "@storybook/react";
const meta: Meta = {
  title: "Organisms/ShareTrackingCard",
  component: ShareTrackingCard,
  parameters: {
    layout: "centered",
    visualViewport: "PocketPay"
  }
};
export default meta;

const Templete: StoryFn<{}> = (args) => (
  <ShareTrackingCard {...args} />
);
export const Default = Templete.bind({});