import { Meta, StoryFn } from "@storybook/react";
import { LoginScreen } from ".";

export default {
  title: "pages/LoginScreen",
  component: LoginScreen,  
 
} as Meta<typeof LoginScreen>;

const Template: StoryFn<typeof LoginScreen> = () => (
  <LoginScreen  />
);
export const Primary = Template.bind({});
