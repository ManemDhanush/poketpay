import { StoryFn } from "@storybook/react";
import { IconTypo, IconTypoProps } from ".";
import img1 from "./../../../../public/assets/images/businessicon.svg"
import img2 from "./../../../../public/assets/images/someoneelseicon.svg"
import img3 from "./../../../../public/assets/images/charityicon.svg"

export default {
  title: "Molecules/IconTypo",
  component: IconTypo,
};

const Template: StoryFn<IconTypoProps> = (args) => <IconTypo {...args} />;

export const Business = Template.bind({});
Business.args = {
  icon: img1,
  text: "My business",
  textVariant: "body2",
  iconAlt: "BusinessIcon",
  iconwidth: "28.33px",
  iconheight: "26.92px",
  borderState:true,
};

export const Someone = Template.bind({});
Someone.args = {
  icon: img2,
  text: "Someone else",
  iconAlt: "Icon",
  textVariant: "body2",
  iconwidth: "22.67px",
  iconheight: "21.99px",
  borderState:true,
};

export const Charity = Template.bind({});
Charity.args = {
    icon: img3,
    text: "Business or Charity",
    iconAlt: "Icon",
    textVariant: "body2",
    iconwidth: "28.33px",
    iconheight: "28.33px",
    borderState:true,
  };