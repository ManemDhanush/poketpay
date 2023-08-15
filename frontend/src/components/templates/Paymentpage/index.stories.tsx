import { PaymentPageTemplate, PaymentPageTemplateProps } from ".";
import { StoryFn, Meta } from "@storybook/react";
const meta: Meta = {
  title: "Templates/PaymentPageTemplate",
  component: PaymentPageTemplate,
  parameters: {
    layout: "fullscreen",
    visualViewport: "PocketPay"
  }
};
export default meta;
const Template: StoryFn<PaymentPageTemplateProps> = (args) => (
  <PaymentPageTemplate {...args} />
);
export const Default = Template.bind({});
Default.args = {
  labels: ["Amount", "You", "Recipient", "Verification,", "Review", "Pay"],
  activeStep: 3,
  displayClose: true,
  displayBack: true
};
