import { StoryFn, Meta } from "@storybook/react";

import WelcomeBack from ".";

export default {
  title: "Organisms/WelcomeBack",
  component: WelcomeBack
} as Meta;

const Template: StoryFn = (args) => <WelcomeBack {...args} />;

export const Default = Template.bind({});
Default.args = {};
