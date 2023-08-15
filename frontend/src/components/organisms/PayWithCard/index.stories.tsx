import { Meta, StoryFn } from "@storybook/react";
import { PayWithCard } from ".";

export default {
  title: "organisms/PayWithCard",
  component: PayWithCard
} as Meta<typeof PayWithCard>;

const Template: StoryFn<typeof PayWithCard> = () => <PayWithCard />;
export const Default = Template.bind({});
