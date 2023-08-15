import RateConfirmationModal from ".";
import { Meta, StoryFn } from "@storybook/react";
import { RateConfirmationText } from "../../../constants";

export default {
  title: "molecules/RateConfirmationModal",
  component: RateConfirmationModal,
  argTypes: {}
} as Meta<typeof RateConfirmationModal>;

const Template: StoryFn<typeof RateConfirmationModal> = (args) => (
  <RateConfirmationModal {...args} />
);

export const rateConfirmationModal = Template.bind({});
rateConfirmationModal.args = {
  text: RateConfirmationText,
  label: "OK"
};
