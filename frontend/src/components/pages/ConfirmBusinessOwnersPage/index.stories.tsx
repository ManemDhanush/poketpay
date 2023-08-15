import { StoryFn, Meta } from "@storybook/react";
import ConfirmBusinessOwnersPage from ".";

export default {
  title: "Pages/ConfirmBusinessOwnersPage",
  component: ConfirmBusinessOwnersPage,
} as Meta;

const Template: StoryFn = () => <ConfirmBusinessOwnersPage/>;

export const Default = Template.bind({});
Default.args = {};
