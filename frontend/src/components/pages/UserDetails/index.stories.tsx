import { StoryFn, Meta } from "@storybook/react";
import { UserDetails } from ".";

export default {
  title: "Pages/UserDetails",
  component: UserDetails
} as Meta;

const Template: StoryFn = () => <UserDetails />;

export const Default = Template.bind({});
Default.args = {};
