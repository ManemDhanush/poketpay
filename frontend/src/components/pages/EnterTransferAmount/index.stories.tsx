import { Meta, StoryFn } from "@storybook/react";
import { EnterTransferAmount } from ".";

export default {
  title: "pages/EnterTransferAmount",
  component: EnterTransferAmount,  
 
} as Meta<typeof EnterTransferAmount>;

const Template: StoryFn<typeof EnterTransferAmount> = () => (
  <EnterTransferAmount  />
);
export const Primary = Template.bind({});
