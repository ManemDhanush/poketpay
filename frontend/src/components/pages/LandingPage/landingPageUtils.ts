export interface Recipient {
  email: string;
  account: string;
  firstName: string;
  lastName: string;
  bankIFSCCode: string;
  bankAccountType: string;
}
export interface Transaction {
  id?: number;
  amount: number;
  amountConverted: number;
  fromCurrency: string;
  toCurrency: string;
  recipient: Recipient;
  status: string;
  purpose?: string;
}

