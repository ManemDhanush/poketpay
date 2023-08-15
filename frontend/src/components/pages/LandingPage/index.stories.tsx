import { LandingPage } from ".";
import { StoryFn, Meta } from "@storybook/react";
const meta: Meta = {
  title: "Pages/LandingPage",
  component: LandingPage,
  parameters: {
    layout: "fullscreen",
    visualViewport: "PocketPay"
  }
};
export default meta;

const Template: StoryFn<{}> = (args) => <LandingPage {...args} />;
export const Default = Template.bind({});
