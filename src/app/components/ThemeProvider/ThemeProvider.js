"use client";
import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  //   const [user, setUser] = useState(initialUser);
  const [theme, setTheme] = useState(localStorage?.getItem("theme"));
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
