export interface Card1 {
  id: string;
  fourDigitText: string;
  fourDigits: string;
  expiryDateText: string;
  expiryDate: string;
  cardNumber: string;
}

export interface PayWithCardProps {
  handleEnable?: (enable: boolean) => void;
}
