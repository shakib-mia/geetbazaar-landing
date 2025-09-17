"use client";
import { createContext, useEffect, useState } from "react";
import useHearthMotion from "@/app/hooks/useHearthMotion";
import useLenis from "@/app/hooks/useLenis";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  //   const [user, setUser] = useState(initialUser);
  const [theme, setTheme] = useState("light"); // default value
  // useHearthMotion();
  // useLenis();

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setTheme(saved);
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
