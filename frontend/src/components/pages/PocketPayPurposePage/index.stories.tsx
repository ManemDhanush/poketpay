import { StoryFn, Meta } from "@storybook/react";
import PocketPayPurposePage from ".";

export default {
  title: "Pages/PocketPayPurposePage",
  component: PocketPayPurposePage,
} as Meta;

const Template: StoryFn = () => <PocketPayPurposePage/>;

export const Default = Template.bind({});
Default.args = {};
