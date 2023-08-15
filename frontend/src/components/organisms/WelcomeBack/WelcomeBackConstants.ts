import googleimg from "./../../../../public/assets/images/google.svg";
import fbimg from "./../../../../public/assets/images/facebook.svg";
import appleimg from "./../../../../public/assets/images/apple.svg";
import { theme } from "../../../theme/theme";
const detail = "password123";
export const WelcomeBackConstants = {
  headings: {
    create: "Welcome back",
    login: "Or, log in with",
    checkbox: "Remember me",
    trouble: "Trouble logging in?",
    new: "New to PocketPay ?",
    SignUp: "Sign up"
  },
  buttonName: {
    b1: "Log in",
    emaillabel: "Enter your email address",
    email: "Email"
  },
  label: "Enter your password",
  labelPassword: "Password",
  Validation: "Please enter valid email",
  PasswordValidation: "Bad credentials",
  Nav: [
    { src: googleimg, altText: "google" },
    { src: fbimg, altText: "fb" },
    { src: appleimg, altText: "apple" }
  ],
  authentication_link: `https://${process.env.DOMAIN}/authorize?response_type=token&client_id=${process.env.CLIENTID}&connection=google-oauth2&redirect_uri=${process.env.AUTH0_URI}&display=popup`
};
export const StackStyle = {
  border: `1px solid ${theme.palette.greyColors.stroke}`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "56px",
  height: "56px",
  borderRadius: "4px",
  cursor: "pointer"
};
export const MOCK_USER = {
  firstName: "Harshitha",
  lastName: "Busetti",
  password: detail,
  address: "Main1",
  pincode: 138139,
  email: "john.doe@example.com",
  dateOfBirth: "22/06/2001",
  city: "city1",
  phoneNumber: "+44 1093983498",
  country: "United Kingdom"
};
