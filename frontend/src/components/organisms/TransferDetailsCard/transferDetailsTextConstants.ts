import Info from "../../../../public/assets/images/info.svg";
import Rate from "../../../../public/assets/images/downwardarrow.svg";
import Flag from "../../../../public/assets/images/ukflag.svg";
import Europe from "../../../../public/assets/images/europeFlag.svg";
import India from "../../../../public/assets/images/indiaFlag.svg";
import Andorra from "../../../../public/assets/images/andorra.svg";
export const TRANSFER_DETAILS = {
  title: "How much would you like to transfer?",
  labels: ["You send", "Receipient gets"],
  content: [
    {
      leftContent: "Low cost transfer fee:",
      rightContent: "From 3.69GBP",
      src: Info,
      alt: "info"
    },
    {
      leftContent: "Guaranteed rate (24 hrs):",
      rightContent: "1.20048",
      src: Rate,
      alt: "rate"
    },
    {
      leftContent: "Total amount:",
      rightContent: "996.31 GBP",
      src: Info,
      alt: "info"
    }
  ],
  modal: {
    text: "We’ll apply this rate if we receive your money today.",
    label: "OK"
  },
  downArrowAlt: "downArrow",
  dropdownLabel: "Select "
};

export const iconsTypo = [
  { flag: India, code: "INR" },
  { flag: Flag, code: "GBP" },
  { flag: Europe, code: "AUD" },
  { flag: Andorra, code: "EUR" }
];
export const options = ["India", "United Kingdom", "Austria", "Andorra"];
export const countryCodeObj: { [key: string]: { flag: string; code: string } } =
  {
    india: { flag: India, code: "INR" },
    unitedkingdom: { flag: Flag, code: "GBP" },
    austria: { flag: Europe, code: "AUD" },
    andorra: { flag: Andorra, code: "EUR" }
  };
export const countryInitialState = [iconsTypo[1], iconsTypo[2]];
