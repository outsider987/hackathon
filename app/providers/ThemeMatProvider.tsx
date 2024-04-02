"use client";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../style";

const ThemeMatProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeMatProvider;
