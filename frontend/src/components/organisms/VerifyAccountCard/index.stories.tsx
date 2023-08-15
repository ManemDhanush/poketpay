import { Meta, StoryFn } from "@storybook/react";
import { VerifyAccountCard } from ".";

export default {
  title: "organisms/VerifyAccountCard",
  component: VerifyAccountCard
} as Meta<typeof VerifyAccountCard>;

const Template: StoryFn<typeof VerifyAccountCard> = () => <VerifyAccountCard />;
export const VerificationCard = Template.bind({});
