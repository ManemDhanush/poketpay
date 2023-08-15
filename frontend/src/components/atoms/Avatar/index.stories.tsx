import Avatars from ".";
import { Meta, StoryFn } from "@storybook/react";
import Profile from "./../../../../public/assets/images/avatarimg.svg";
import Flag from "./../../../../public/assets/images/ukflag.svg";

export default {
  title: "Atoms/Avatar",
  component: Avatars,
  argTypes: {
    src: {
      control: { type: "radio" },
      options: [
        `${Profile}`,
        `${Flag}`
      ],
    },
    size: {
      control: { type: "text" },
    },
    variant: {
      control: { type: "radio" },
      options: ["circular", "square", "rounded"],
    },
    onClick: {action: "clicked"},
  },
  onClick: {action: "clicked"}
} as Meta<typeof Avatars>;

const Template: StoryFn<typeof Avatars> = (args) => (
  <Avatars {...args}/>
);

export const User = Template.bind({});
User.args = {
  src: Profile,
  alt: "profile",
  size: "28px",
  variant: "circular",
};

export const Country = Template.bind({});
Country.args = {
  src: Flag,
  alt: "flag",
  size: "24px",
  variant: "circular",

};
