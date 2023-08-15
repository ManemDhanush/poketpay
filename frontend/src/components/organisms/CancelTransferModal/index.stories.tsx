import { Meta, StoryFn } from "@storybook/react";
import { CancelTransferModal } from ".";


export default {
    title: "organisms/CancelTransferModal",
    component: CancelTransferModal,
} as Meta<typeof CancelTransferModal>;

const Template: StoryFn<typeof CancelTransferModal> = () => (
  <CancelTransferModal handleOpen={() => {}}   />
);
export const Primary = Template.bind({});

