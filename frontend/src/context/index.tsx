import React, { useState, useMemo } from "react";
import {
  AppContext,
  initialBusiness,
  initialTransaction,
  intialUser
} from "../constants";

interface AppContextProps {
  children: React.ReactNode;
}

export const ContextProvider = ({ children }: AppContextProps) => {
  const [transaction, setTransaction] = useState(initialTransaction);
  const [business, setBusiness] = useState(initialBusiness);
  const [user, setUser] = useState(intialUser);
  const [currentUser, setCurrentUser] = useState({});
  const contextValue = useMemo(
    () => ({
      transaction,
      setTransaction,
      user,
      setUser,
      currentUser,
      setCurrentUser,
      business,
      setBusiness
    }),
    [
      transaction,
      setTransaction,
      user,
      setUser,
      currentUser,
      setCurrentUser,
      business,
      setBusiness
    ]
  );
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
