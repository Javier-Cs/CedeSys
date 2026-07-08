import {createContext, useEffect, useMemo, useState, type PropsWithChildren} from "react";
import type { Theme } from "@/types/theme";
import { THEME_STORAGE_KEY } from "@/constante/themecons";

type ThemeContextType = {
    theme: Theme;
    isDark: boolean;
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
};


export function ThemeProvider({children}: PropsWithChildren) {
    const [theme, setTheme] = useState<Theme>("system");


    const getSystemDark = () =>{ 
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }


    const applyTheme = (theme: Theme)=>{
        const html = document.documentElement;
        const dark = theme === "dark" || (theme === "system" && getSystemDark());
        html.classList.toggle("dark", dark);
    }


    useEffect(() =>{
        localStorage.setItem( THEME_STORAGE_KEY, theme);
        applyTheme(theme);

    }, [theme]);

    const value = useMemo(() = {
        return {};
    }, [theme])

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
    
}

export const ThemeContext = createContext<ThemeContextType | null>(null);



