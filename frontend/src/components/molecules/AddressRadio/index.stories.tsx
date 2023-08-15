import { Meta, StoryFn } from "@storybook/react";
import { AddressRadio, RadioTypoProps } from ".";

export default {
  component: AddressRadio,
  title: "Molecules/AddressRadio",
  args: {
    sx: {
      width: "516px",
      height: "132px"
    }
  }
} as Meta;

const Template: StoryFn<RadioTypoProps> = (args) => <AddressRadio {...args} />;

export const AddressOne = Template.bind({});
AddressOne.args = {
  address:
    "#2097, Triveni Main Rd, Gokula 1st Stage, Nanjappa Reddy Colony, Yeswanthpur, Bengaluru, Karnataka 560054",
  addressNo: 1
};
export const AddressTwo = Template.bind({});
AddressTwo.args = {
  address:
    "3217, Central Avenue, 1st cross, 2nd Main Road, Unishire Victory, 2nd Main Rd, Bengaluru, Karnataka  560003",
  addressNo: 2
};
