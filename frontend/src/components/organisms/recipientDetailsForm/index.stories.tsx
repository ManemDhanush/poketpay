import { RecipientDetailsForm } from ".";
import { StoryFn, Meta } from "@storybook/react";
const meta: Meta = {
  title: "Organisms/RecipientDetailsForm",
  component: RecipientDetailsForm,
  parameters: {
    layout: "centered",
    visualViewport: "PocketPay"
  }
};
export default meta;

const Templete: StoryFn<{}> = (args) => <RecipientDetailsForm {...args} />;
export const Default = Templete.bind({});
