import { TwoFactorAuthContactNumber } from ".";
import { StoryFn, Meta } from "@storybook/react";
import { theme } from "../../../theme/theme";
const meta: Meta = {
  title: "Pages/TwoFactorAuthContactNumber",
  component: TwoFactorAuthContactNumber,
  parameters: {
    layout: "fullscreen",
    visualViewport: "PocketPay"
  }
};
export default meta;

const boxStyles = {
  height: "80vh",
  width: "516px",
  background: "#e5e5e5",
  borderRadius: "0.5rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: `2px solid ${theme.palette.textColor.lowEmphasis}`
};

const Template: StoryFn<{}> = (args) => (
  <TwoFactorAuthContactNumber {...args} />
);
export const Default = Template.bind({});
