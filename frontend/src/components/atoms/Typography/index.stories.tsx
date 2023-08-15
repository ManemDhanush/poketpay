import { Meta, StoryFn } from "@storybook/react";
import TypographyComponent from "./index";

export default {
  title: "atoms/TypographyComponent",
  component: TypographyComponent,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "h1",
        "body1",
        "body2",
        "body3",
        "caption1",
        "lineText",
        undefined,
      ],
    },
    align: {
      control: { type: "select" },
      options: ["inherit", "center", "right", "left", "justify", undefined],
    },
    fontWeight: {
      control: { type: "number" },
    },
  },
} as Meta<typeof TypographyComponent>;

const Template: StoryFn<typeof TypographyComponent> = (args) => (
  <TypographyComponent {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  variant: "caption1",
  children: "sample text1",
  align: "center",
  fontWeight: 400,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "body1",
  children: "sample text2",
  align: "left",
  fontWeight: 400,
};
