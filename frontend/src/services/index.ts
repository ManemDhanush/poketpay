import { Transaction } from "../components/pages/LandingPage/landingPageUtils";
import { Business } from "../utils";
import { UserDetails } from "../utils";
import API from "./API";
export const getTransactions = async (userId: number) => {
  const response = await API.get(`/transactions?userId=${userId}`);
  return response.data;
};
export const updateTransactions = async (data: Transaction, userId: number) => {
  const response = await API.put(`/transactions?userId=${userId}`, data);
  return response.data;
};
export const postTransactions = async (data: Transaction, userId: number) => {
  const response = await API.post(`/transactions?userId=${userId}`, data);
  return response.data;
};
export const postBusinesses = async (data: Business, userId: number) => {
  const response = await API.post(`/business?userId=${userId}`, data);
  return response.data;
};

export const getBusinesses = async () => {
  const response = await API.get(`/business`);
  return response.data;
};

export const updateBusinesses = async (id: number, data: Business) => {
  const response = await API.put(`/business/${id}`, data);
  return response.data;
};
export const postUsers = async (data: UserDetails) => {
  const response = await API.post(`users`, data);
  return response.data;
};
export const getByEmail = async (email: string) => {
  const response = await API.get(`/users/email?email=${email}`);
  return response.data;
};
