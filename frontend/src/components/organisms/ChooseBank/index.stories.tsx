import { Meta, StoryFn } from "@storybook/react";
import { ChooseBank } from ".";


export default {
  title: "organisms/ChooseBank",
  component: ChooseBank,  
 
} as Meta<typeof ChooseBank>;

const Template: StoryFn<typeof ChooseBank> = () => (
  <ChooseBank  />
);
export const Default = Template.bind({});
