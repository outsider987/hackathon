"use client";
import React, { createContext, useState, useContext } from "react";
// Create a new context
const GlobalContext = createContext({
  status: "idle",
  setStatus: (val) => {},
});

// Create a custom hook to use the context
export const useGlobalContext = () => useContext(GlobalContext);

// Create a provider component
export const GlobalProvider = ({ children }) => {
  const [status, setStatus] = useState("idle");

  return (
    <GlobalContext.Provider value={{ status, setStatus }}>
      {children}
    </GlobalContext.Provider>
  );
};
