import { StoryFn, Meta } from "@storybook/react";
import SelectRecipient from ".";

export default {
  title: "Pages/SelectRecipient",
  component: SelectRecipient,
} as Meta;

const Template: StoryFn = () => <SelectRecipient/>;

export const Default = Template.bind({});
Default.args = {};
