import { Meta, StoryFn } from "@storybook/react";
import { BusinessActivity } from ".";

export default {
  title: "pages/BusinessActivity",
  component: BusinessActivity,  
 
} as Meta<typeof BusinessActivity>;

const Template: StoryFn<typeof BusinessActivity> = () => (
  <BusinessActivity  />
);
export const Primary = Template.bind({});
