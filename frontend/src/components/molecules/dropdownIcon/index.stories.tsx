import { DropdownIcon, DropdownIconProps } from ".";
import { Meta, Story } from "@storybook/react";
import Flag from "../../../../public/assets/images/ukflag.svg";
import Europe from "../../../../public/assets/images/europeFlag.svg";
import India from "../../../../public/assets/images/indiaFlag.svg";
import { DROPDOWN_OPTIONS } from "../../../constants";
export default {
  title: "molecules/DropDownIcon",
  component: DropdownIcon
} as Meta<typeof DropdownIcon>;

const icons = [
  { flag: India, code: "INR" },
  { flag: Flag, code: "UK" },
  { flag: Europe, code: "EUR" }
];

const Template: Story<DropdownIconProps> = (args) => <DropdownIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  iconsTypo: icons,
  options: DROPDOWN_OPTIONS[0]
};
