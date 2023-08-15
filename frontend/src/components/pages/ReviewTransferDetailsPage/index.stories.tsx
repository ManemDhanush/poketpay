import { StoryFn, Meta } from "@storybook/react";
import ReviewTransferDetailsPage from ".";

export default {
  title: "Pages/ReviewTransferDetailsPage",
  component: ReviewTransferDetailsPage
} as Meta;

const Template: StoryFn = () => <ReviewTransferDetailsPage />;

export const Default = Template.bind({});
Default.args = {};
