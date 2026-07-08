import {createContext} from "react";
import type {Theme} from "@/types/theme";

export type ThemeContextType = {
    theme: Theme;
    isDark: boolean;
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);
