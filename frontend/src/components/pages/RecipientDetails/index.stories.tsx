import { StoryFn, Meta } from "@storybook/react";
import RecipientDetailsPage from ".";

export default {
  title: "Pages/RecipientDetailsPage",
  component: RecipientDetailsPage,
} as Meta;

const Template: StoryFn = () => <RecipientDetailsPage/>;

export const Default = Template.bind({});
Default.args = {};
