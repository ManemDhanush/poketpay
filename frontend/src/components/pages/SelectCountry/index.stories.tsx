import { StoryFn, Meta } from "@storybook/react";
import SelectCountry from ".";

export default {
  title: "Pages/SelectCountry",
  component: SelectCountry,
} as Meta;

const Template: StoryFn = () => <SelectCountry/>;

export const Default = Template.bind({});
Default.args = {};
