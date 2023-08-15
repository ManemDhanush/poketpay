export interface TransferRecpDetails {
  fee: string;
  amount: string;
  rate: string;
  name: string;
  email: string;
  accountno: string;
  bankAccountType: string;
  sendcurrency: string;
  getcurrency: string;
  [key: string]: string;
}

export interface TransferRecpDetailsCardProps {
  data: TransferRecpDetails;
  handleContinuePay?: () => void;
}
