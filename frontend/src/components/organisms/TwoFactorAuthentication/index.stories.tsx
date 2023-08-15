import { Meta, StoryFn } from "@storybook/react";
import { TwoFactorAuthentication } from ".";

export default {
  title: "organisms/TwoFactorAuthentication",
  component: TwoFactorAuthentication,  
 
} as Meta<typeof TwoFactorAuthentication>;

const Template: StoryFn<typeof TwoFactorAuthentication> = () => (
  <TwoFactorAuthentication  />
);
export const Default = Template.bind({});
