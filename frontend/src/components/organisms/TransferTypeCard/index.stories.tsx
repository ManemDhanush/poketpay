import { Meta, StoryFn } from "@storybook/react";
import { TransferTypeCard } from ".";

export default {
  title: "organisms/TransferTypeCard",
  component: TransferTypeCard,  
 
} as Meta<typeof TransferTypeCard>;

const Template: StoryFn<typeof TransferTypeCard> = () => (
  <TransferTypeCard  />
);
export const Default = Template.bind({});
