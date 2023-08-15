import { StoryFn, Meta } from "@storybook/react";
import { Chip } from ".";

export default {
  title: "Atoms/Chip",
  component: Chip,
  argTypes: {
    onClick: { action: "clicked" },
    size: {
      options: ["small", "medium"],
      control: { type: "radio" },
    }
  },
} as Meta<typeof Chip>;

const Template: StoryFn<typeof Chip> = (args) => (
  <Chip {...args} />
);

export const New = Template.bind({});
New.args = {
  label: "New",
  size:"medium",
  style:{
    backgroundColor: "#F4EFFF",
    borderRadius: "16px",
    padding: "4px 12px 2px 12px",
    justifyContent:"center" ,
    color:"#7633FF",
  }
};
