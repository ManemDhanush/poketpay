import { StoryFn, Meta } from "@storybook/react";
import ConfirmOwnersForm from ".";
import { CONFIRMBUSINESSOWNERSCONTENT } from "../../../constants";
const meta: Meta = {
  title: "Organisms/ConfirmBusinessOwners",
  component: ConfirmOwnersForm,
};
export default meta;

const Templete: StoryFn<{}> = (args) => (
  <ConfirmOwnersForm detailsProps={{
    heading: CONFIRMBUSINESSOWNERSCONTENT.title,
    caption: CONFIRMBUSINESSOWNERSCONTENT.content,
    type: CONFIRMBUSINESSOWNERSCONTENT.formTitle,
    addAnotherText: CONFIRMBUSINESSOWNERSCONTENT.addOwner
  }}  />
);
export const Default = Templete.bind({});
