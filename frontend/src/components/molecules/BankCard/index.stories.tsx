import { Meta,StoryFn } from "@storybook/react";
import { BankCard } from ".";
import { BankCardProps } from ".";
import Card from "../../../../public/assets/images/bankCardbg.svg"
import Bank  from "../../../../public/assets/images/bank.svg"
import { BANK_TRANSFER, CARDTEXT, TRANSFER_FROM_BANK_ACCOUNT } from "../../../constants";
import { CARDSUBTEXT1 } from "../../../constants";
import { CARDSUBTEXT2 } from "../../../constants";

export default {
  title: "molecules/BankCard",
  component: BankCard,
} as Meta<typeof BankCard>;

const Template:StoryFn<BankCardProps>=(args) => <BankCard {...args} />

export const DebitCard=Template.bind({});
export const BankTransfer=Template.bind({});
DebitCard.args={
    image: Card,
    transferType: CARDTEXT,
    transferDescription: CARDSUBTEXT1,
    transferArrival:CARDSUBTEXT2
}

BankTransfer.args={
  image:Bank,
  transferType:BANK_TRANSFER,
  transferDescription:TRANSFER_FROM_BANK_ACCOUNT,
  transferArrival:CARDSUBTEXT2
}
