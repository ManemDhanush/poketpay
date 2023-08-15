import { Image, ImageProps } from ".";
import { Meta, Story } from "@storybook/react";
import Person from "../../../../public/assets/images/person.svg";
import { IMG_URL, PERSON } from "../../../constants";
const meta: Meta = {
  title: "atoms/Image",
  component: Image
};
export default meta;
const Templete: Story<ImageProps> = (args) => <Image {...args} />;
export const Default = Templete.bind({});
Default.args = {
  src: IMG_URL,
  style: {
    height: "300px",
    width: "300px"
  }
};
export const SvgImage = Templete.bind({});
SvgImage.args = {
  src: Person,
  alt: PERSON
};
