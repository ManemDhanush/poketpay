import { Box, styled } from "@mui/material";

export const CardWrapper = styled(Box)(`
  width:47.75vw;
  min-width:480px;
  max-width:652px;
`);
export const InnerWrapper = styled(Box)(`
  width:38vw;
`);

export interface Business {
  name: string;
  registerNumber: string;
  registerAddress: string;
  senderId: number;
  category: string;
  subCategory: string;
  sizeOfBusiness: string;
}
export interface UserDetails {
  id?: number;
  firstName: string;
  lastName: string;
  password: string;
  address: string;
  pincode: number;
  email: string;
  dateOfBirth: string;
  city: string;
  phoneNumber: string;
  country: string;
}
