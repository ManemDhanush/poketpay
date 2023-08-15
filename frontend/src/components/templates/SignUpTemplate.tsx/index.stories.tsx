import { StoryFn, Meta } from "@storybook/react";
import { SignUpTemplate, SignUpTemplateProps } from ".";

export default {
  title: "Templates/SignUpTemplate",
  component: SignUpTemplate,
} as Meta;

const Template: StoryFn<SignUpTemplateProps> = (args) => (
  <SignUpTemplate {...args}>
    <div style={{ border: "1px solid black", padding: "16px" }}>
    Content of the SignUp Template
    </div>
  </SignUpTemplate>
);

export const Default = Template.bind({});
Default.args = {};
