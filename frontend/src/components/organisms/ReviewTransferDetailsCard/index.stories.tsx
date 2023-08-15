import { Meta, StoryFn } from "@storybook/react";
import { ReviewTransferDetailsCard } from ".";

export default {
  title: "organisms/ReviewTransferDetailsCard",
  component: ReviewTransferDetailsCard,  
 
} as Meta<typeof ReviewTransferDetailsCard>;

const Template: StoryFn<typeof ReviewTransferDetailsCard> = () => (
  <ReviewTransferDetailsCard  />
);
export const Primary = Template.bind({});