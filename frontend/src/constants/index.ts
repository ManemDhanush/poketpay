import { ICheckboxAtomProps } from "../components/atoms/CheckBox";
import Users from "../../public/assets/images/user.svg";
import Settings from "../../public/assets/images/settings.svg";
import HelpCenter from "../../public/assets/images/helpCenter.svg";
import Logout from "../../public/assets/images/logout.svg";
import Briefcase from "../../public/assets/images/businessicon.svg";
import User from "../../public/assets/images/personPurpose.svg";
import Dollar from "../../public/assets/images/charityicon.svg";
import React, { useContext } from "react";
import { Transaction } from "../components/pages/LandingPage/landingPageUtils";
import { Business } from "../utils";
import { UserDetails } from "../utils/index";

export const NAME = "New";
export const IMG_URL = "https://source.unsplash.com/random?nature";
export const PERSON = "Person";
export const SRC_IMG = "test.jpg";
export const DROPDOWN_OPTIONS = [
  ["India", "United Kingdom", "Europe"],
  ["Business", "Personal", "rent/utilities"]
];
export const PLACEHOLDERS = ["Country of residence"];
export const STEPPER_LABELS = [
  ["Email", "Account Type", "Country", "2-factor-authentication", "Password"],
  ["Your Business", "Business Activity", "Your details"],
  ["Amount", "You", "Recipient", "Verification", "Review", "Pay"]
];
export const CheckboxAtomdefaultProps: ICheckboxAtomProps = {
  label: "Checkbox",
  checked: true,
  disabled: false
};
export const BUTTON_TEXTS = {
  confirm: "Confirm",
  save: "Save",
  cancel: "Cancel"
};
export const CONTENT = {
  confirmDetailsCard: {
    title: "Confirm your business details",
    content_sole: "Sole trader, freelancer or not registered with",
    content_sole2: "Companies house?",
    content_business: "Business details",
    content_edit: "Edit",
    inputFieldLabels: [
      { id: "businessName", label: "Business name" },
      { id: "regNo", label: "Registration number" },
      { id: "regAddr", label: "Registered address" }
    ],
    inputFieldValues: {
      businessName: "Zentech Solutions Pvt Ltd",
      regNo: "2020ZEN5367GJ",
      regAddr:
        "#2097, Triveni Main Rd, Gokula 1st Stage, Nanjappa Reddy Colony, Yeswanthpur, Bengaluru, Karnataka 560054"
    }
  }
};
export const RateConfirmationText =
  "We’ll apply this rate if we receive your money today.";
export const SENDMONEY = "Send Money";
export const SUBTEXT1 = "Pay an international employee, invoice, or expense";
export const CARD = "debitcard";
export const FLAG = "ukflag";
export const CARDTEXT = "Debit Card";
export const CARDSUBTEXT1 = "Send from your Visa or Mastercard.";
export const CARDSUBTEXT2 = "Should arrive by January 28th.";
export const RECIPIENT_FORM_CONTENT = {
  title: "Send to someone",
  checkboxTitle: "I know their bank details",
  recipientDetails: "Receipient details",
  emailLabel: "Email",
  inputLabels: [
    { name: "accNumber", label: "Account Number", type: "number" },
    { name: "firstName", label: "First Name" },
    { name: "lastName", label: "Last Name" },
    { name: "bankIFSCCode", label: "The Indian Financial System Code " },
    { name: "accontType", label: "Select Account Type" }
  ],
  bankAccountTypeOptions: ["Checking", "Savings"],
  bankAccountTypeLabel: "Select Account Type"
};
export const CONTINUE = "Continue";
export const ROSSGENNER = "Ross Genner";
export const ROSSGENNERID = "P44561754";
export const MENUITEMS = [
  { id: 1, name: "Your Details", img: Users },
  { id: 2, name: "Settings", img: Settings },
  { id: 3, name: "HelpCenter", img: HelpCenter },
  { id: 4, name: "Logout", img: Logout }
];
export const POCKETPAY_PURPOSE_CONTENT = {
  title: "Who are you sending money to?",
  purposes: [
    { src: Briefcase, alt: "A briefcase", text: "My business" },
    { src: User, alt: "user", text: "Someone else" },
    { src: Dollar, alt: "coin", text: "Business or Charity" }
  ]
};

export const BANK_TRANSFER = "Transfer from your bank account";
export const TRANSFER_FROM_BANK_ACCOUNT =
  "Transfer the money using bank account";
export const FAST_AND_EASY_TRANSFER = "Fast and easy transfer";

export const NAVBARPAGETEMPLATE = {
  text: "Home",
  buttonText: "Send money"
};
export const HEADERSTEPPERMENU = [
  "Email",
  "Account-type",
  "Country",
  "2-factor-authentication",
  "Password"
];
export const HEADERSTEPPERMENU2 = [
  "Your business",
  "Buisness Details",
  "Your details"
];
export const HEADERSTEPPERMENU3 = [
  "Amount",
  "You",
  "Recipient",
  "Verification",
  "Review",
  "Pay"
];
export const AppContext = React.createContext<any>({});
export const initialTransaction = {
  amount: 0,
  amountConverted: 0,
  fromCurrency: "",
  toCurrency: "",
  recipient: {
    email: "",
    account: "",
    firstName: "",
    lastName: "",
    bankIFSCCode: "",
    bankAccountType: ""
  },
  status: "Sending",
  purpose: ""
};

export const initialBusiness = {
  name: "",
  registerNumber: "",
  registerAddress: "",
  senderId: 0,
  category: "",
  subCategory: "",
  sizeOfBusiness: ""
};
export const intialUser = {
  firstName: "",
  lastName: "",
  password: "",
  address: "",
  pincode: 0,
  email: "",
  dateOfBirth: "",
  city: "",
  phoneNumber: "",
  country: "United Kingdom"
};
interface ContextValue {
  transaction: Transaction;
  setTransaction: React.Dispatch<React.SetStateAction<Transaction>>;
  user: UserDetails;
  setUser: React.Dispatch<React.SetStateAction<UserDetails>>;
  currentUser: UserDetails;
  setCurrentUser: React.Dispatch<React.SetStateAction<UserDetails>>;
  business: Business;
  setBusiness: React.Dispatch<React.SetStateAction<Business>>;
}
export const useAppContext = () => {
  return useContext<ContextValue>(AppContext);
};
export const CONFIRMDIRECTORSFORMCONTENT = {
  title: "Confirm your business directors",
  content:
    "Please confirm these details from companies house. If anyone’s missing, add them below.",
  formTitle: "Director",
  LABELS: {
    firstName: "First name",
    lastName: "Last name",
    DOB: "Date of birth",
    country: "Country of residence"
  },
  addDirector: "Add another director",
  addIconAlt: "Add-Icon",
  continue: "Continue",
  country_menu: ["Andorra", "United Kingdom", "Austria", "India"]
};
export const CONFIRMBUSINESSOWNERSCONTENT = {
  title: "Confirm your business owners",
  content:
    "Please confirm these details from companies house. If anyone else controls more than 25% of your business, add them below.",
  formTitle: "Shareholder",
  LABELS: {
    firstName: "First name",
    lastName: "Last name",
    DOB: "Date of birth",
    country: "Country of residence"
  },
  addOwner: "Add another owner",
  addIconAlt: "Add-Icon",
  continue: "Continue",
  country_menu: ["Andorra", "United Kingdom", "Austria", "India"]
};
export const UK_CODE = "+44 ";
