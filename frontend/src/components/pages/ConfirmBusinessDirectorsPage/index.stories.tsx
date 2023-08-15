import { StoryFn, Meta } from "@storybook/react";
import ConfirmBusinessDirectorsPage from ".";

export default {
  title: "Pages/ConfirmBusinessDirectorsPage",
  component: ConfirmBusinessDirectorsPage,
} as Meta;

const Template: StoryFn = () => <ConfirmBusinessDirectorsPage/>;

export const Default = Template.bind({});
Default.args = {};
