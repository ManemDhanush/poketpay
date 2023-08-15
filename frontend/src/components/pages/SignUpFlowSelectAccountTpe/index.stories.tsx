import { Meta, StoryFn } from "@storybook/react";
import { SelectAccountType } from ".";

export default {
  title: "pages/SelectAccountType",
  component: SelectAccountType,  
 
} as Meta<typeof SelectAccountType>;

const Template: StoryFn<typeof SelectAccountType> = () => (
  <SelectAccountType  />
);
export const Primary = Template.bind({});
