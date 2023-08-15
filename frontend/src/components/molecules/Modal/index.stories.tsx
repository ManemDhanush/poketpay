import { StoryFn, Meta } from "@storybook/react";
import ModalWindow from ".";

export default {
  title: "molecules/Modal",
  component: ModalWindow,
  argTypes: {
    cardWidth: {
      control: { type: "text" }
    },
    cardHeight: {
      control: { type: "text" }
    },
    top: {
      control: { type: "text" }
    },
    left: {
      control: { type: "text" }
    },
    borderRadius: {
      control: { type: "text" }
    },
    needCloseButton: {
      control: { type: "boolean" }
    }
  }
} as Meta<typeof ModalWindow>;

const Template: StoryFn<typeof ModalWindow> = (args: any) => (
  <ModalWindow {...args} />
);

export const Default = Template.bind({});
Default.args = {
  cardHeight: "300px",
  cardWidth: "512px",
  top: "30%",
  left: "30%",
  needCloseButton: true,
  borderRadius: "8px",
  
};

