import { Meta, StoryFn } from "@storybook/react";
import SearchForBusiness from ".";

export default {
  title: "organisms/SearchForBusiness",
  component: SearchForBusiness
} as Meta<typeof SearchForBusiness>;

const Template: StoryFn<typeof SearchForBusiness> = () => <SearchForBusiness />;
export const SearchBusinessCard = Template.bind({});
