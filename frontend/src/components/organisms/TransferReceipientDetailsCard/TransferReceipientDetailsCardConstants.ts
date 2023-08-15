import { Box, styled } from "@mui/material";

export const TransferReceipientDetailsCard = {
  recipientDetails: [
    { id: "name", label: "Name" },
    { id: "email", label: "Email" },
    { id: "accountno", label: "Account number" },
    { id: "bankAccountType", label: "Account type" }
  ],
  transferDetails: [
    { id: "fee", label: "Fee" },
    { id: "amount", label: "Amount we’ll convert" },
    { id: "rate", label: "Guranteed rate" }
  ],
  headings: {
    recipientDetails: "Recipient details",
    transferDetails: "Transfer details"
  },
  buttonName: {
    b1: "Continue to Pay",
    b2: "Cancel this transfer"
  }
};

export const propsdata = {
  fee: "00.00GBP",
  amount: "77.74 GBP",
  rate: "1GBP = 1.14 EUR",
  name: "Mario Gabriel",
  email: "mario@gmail.com",
  accountno: "365314322223",
  bankAccountType: "Checking",
  sendcurrency: "100.00 GBP",
  getcurrency: "114.68 EUR"
};

export const StyledRow = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: "12px"
});
