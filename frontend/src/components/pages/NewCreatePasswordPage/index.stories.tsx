import { Meta, StoryFn } from "@storybook/react";
import { CreateNewPassword } from ".";

export default {
  title: "pages/CreateNewPassword",
  component: CreateNewPassword,  
 
} as Meta<typeof CreateNewPassword>;

const Template: StoryFn<typeof CreateNewPassword> = () => (
  <CreateNewPassword  />
);
export const Primary = Template.bind({});
