import { createContext } from "react";

export type ThemeMode = "light" | "dark";

export interface ThemeContextType {
  mode: ThemeMode;
  toggleTheme: () => void;
}

const defaultValue: ThemeContextType = {
  mode: "dark",
  toggleTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextType>(defaultValue);
