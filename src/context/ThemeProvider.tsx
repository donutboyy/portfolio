import React, { useState, useEffect, useMemo } from "react";
import { ThemeContext, ThemeMode } from "./ThemeContext";

interface ThemeProviderProps {
  children: React.ReactNode;
}

function getSystemTheme(): ThemeMode {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [mode, setMode] = useState<ThemeMode>(getSystemTheme);
  const [devOverride, setDevOverride] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (event: MediaQueryListEvent) => {
      if (devOverride && import.meta.env.DEV) return;
      setMode(event.matches ? "dark" : "light");
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, [devOverride]);

  const toggleTheme = () => {
    if (!import.meta.env.DEV) return;
    setDevOverride(true);
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const value = useMemo(() => ({ mode, toggleTheme }), [mode]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
