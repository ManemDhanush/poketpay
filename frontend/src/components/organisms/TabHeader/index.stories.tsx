import { StoryFn, Meta } from "@storybook/react";
import TabHeader from ".";

export default {
  title: "Organisms/TabHeader",
  component: TabHeader
} as Meta;

const Template: StoryFn = (args) => <TabHeader {...args} />;

export const Default = Template.bind({});
Default.args = {};
