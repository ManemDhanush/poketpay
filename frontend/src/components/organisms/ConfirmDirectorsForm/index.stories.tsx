import { StoryFn, Meta } from "@storybook/react";
import ConfirmDirectorsForm from ".";
import { CONFIRMDIRECTORSFORMCONTENT } from "../../../constants";
const meta: Meta = {
  title: "Organisms/ConfirmDirectorsForm",
  component: ConfirmDirectorsForm,
  parameters: {
    layout: "centered",
    visualViewport: "PocketPay"
  }
};
export default meta;

const Templete: StoryFn<{}> = (args) => (
  <ConfirmDirectorsForm detailsProps={{
    heading: CONFIRMDIRECTORSFORMCONTENT.title,
    caption: CONFIRMDIRECTORSFORMCONTENT.content,
    type: CONFIRMDIRECTORSFORMCONTENT.formTitle,
    addAnotherText: CONFIRMDIRECTORSFORMCONTENT.addDirector
  }}  />
);
export const Default = Templete.bind({});
