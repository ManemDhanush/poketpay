import { StoryFn, Meta } from "@storybook/react";
import NavBar from ".";

export default {
  title: "Organisms/NavBar",
  component: NavBar,
} as Meta;

const Template: StoryFn = (args) => <NavBar {...args} />;

export const Default = Template.bind({});
Default.args = {};
