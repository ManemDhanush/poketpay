import { theme } from "../../../theme/theme";
import google from "./../../../../public/assets/images/google.svg";
import fb from "./../../../../public/assets/images/facebook.svg";
import apple from "./../../../../public/assets/images/apple.svg";

export const SignUpConstants = {
  headings: {
    create: "Create your PocketPay account",
    login: "Or, log in with",
    register: [
      "By registering, you accept our",
      "Terms of use",
      "and",
      "Privacy Policy"
    ],
    loginin: ["Already have an account ?", "Log in"]
  },
  buttonName: {
    b1: "Next",
    emaillabel: "Enter your email address"
  },
  Nav: [
    { src: google, alt: "google" },
    { src: fb, alt: "fb" },
    { src: apple, alt: "apple" }
  ]
};

export const Stackstyle = {
  border: `1px solid ${theme.palette.greyColors.stroke}`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "56px",
  height: "56px",
  borderRadius: "4px",
  cursor: "pointer"
};
export const EMAILVALIDATION="Provided Email already exixts"
