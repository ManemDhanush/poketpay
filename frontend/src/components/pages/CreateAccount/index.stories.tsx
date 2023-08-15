import { StoryFn, Meta } from "@storybook/react";
import CreateAccount from ".";

export default {
  component: CreateAccount,
  title: "Pages/CreateAccount",
} as Meta;

const Template: StoryFn = () => <CreateAccount />;

export const Default = Template.bind({});
Default.args = {};

