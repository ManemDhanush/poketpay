import { StoryFn, Meta } from "@storybook/react";
import { MuiRadio } from ".";
export default {
  title: "Atoms/MuiRadio",
  component: MuiRadio,
  argTypes: {
    size: {
      options: ["small", "medium"],
      control: { type: "radio" }
    }
  }
} as Meta<typeof MuiRadio>;

const Template: StoryFn<typeof MuiRadio> = (args) => (
  <MuiRadio {...args} />
);

export const Radio = Template.bind({});
Radio.args = {
  checked: true,
  size: "small"
};
