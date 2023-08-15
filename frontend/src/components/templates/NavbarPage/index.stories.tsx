import { Box } from "@mui/material";
import { NavbarPageTemplate } from ".";
import { StoryFn, Meta } from "@storybook/react";
import { theme } from "../../../theme/theme";
const meta: Meta = {
  title: "Templates/NavbarPageTemplate",
  component: NavbarPageTemplate,
  parameters: {
    layout: "fullscreen",
    visualViewport: "PocketPay"
  }
};
export default meta;

const NavBarStyles = {
  width: "230px",
  height: "768px",
  background: theme.palette.structural.white,
  justifyContent: "center",
  alignItems: "center"
};
const BoxStyles = {
  width: "1072px",
  height: "557px",
  background: theme.palette.structural.white,
  justifyContent: "center",
  alignItems: "center"
};

const Template: StoryFn<typeof NavbarPageTemplate> = (args) => (
  <NavbarPageTemplate {...args} />
);
export const Default = Template.bind({});
Default.args = {
  navbar: <Box sx={NavBarStyles}>NavBar</Box>,
  children: <Box sx={BoxStyles}>Body</Box>
};
