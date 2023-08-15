import Visa from "../../../../public/assets/images/visa.svg";
import BankLogo from "../../../../public/assets/images/LloydsBankLogo.svg";

export const CONFIRM_PURCHASE = {
  heading: "Pay with your card",
  title: "Confirm your purchase",
  headerImages: [
    { src: BankLogo, alt: "lloydsLogo" },
    { src: Visa, alt: "visa" }
  ],
  typography: [
    "to PocketPay using visa card ending",
    "9313",
    "Step 1: Open and confirm the push notification we sent to your mobile.",
    "Step 2: Return to this screen and press the button below to finish your purchase."
  ],
  btnText: "Complete",
  amount: "100.00",
  country: "GBP"
};
