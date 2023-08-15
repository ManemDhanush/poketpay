import { Meta, StoryFn } from "@storybook/react";
import ApplicationHeader from ".";

export default {
  title: "organisms/AppliactionHeader",
  component: ApplicationHeader,  
 
} as Meta<typeof ApplicationHeader>;

const Template: StoryFn<typeof ApplicationHeader> = () => (
  <ApplicationHeader  />
);
export const Primary = Template.bind({});
