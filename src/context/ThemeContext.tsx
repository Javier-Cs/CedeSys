import {createContext, useCallback, useEffect, useMemo, useState, type PropsWithChildren} from "react";
import type { Theme } from "@/types/theme";
import { THEME_STORAGE_KEY } from "@/constante/themecons";

type ThemeContextType = {
    theme: Theme;
    isDark: boolean;
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
};


export function ThemeProvider({children}: PropsWithChildren) {


    // creacion de un estado para el tema, con valor inicial "system"
    //const [theme, setTheme] = useState<Theme>("system");
    const [theme, setTheme] = useState(() => {
        const save = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
        return save || "system";
    });


    // funcion para obtener el tema del sistema operativo
    const getSystemDark = () =>{ 
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    

    // funcion para obtener el tema del localStorage
    const isDark = theme === "dark" || (theme === "system" && getSystemDark());


    // funcion para aplicar el tema dark o light al html
    const applyTheme = useCallback(() =>{
        document.documentElement.classList.toggle("dark", isDark);
        // html.classList.toggle("dark", isDark);
    }, [isDark]);
    

    // creacion de toggleTheme para cambiar el tema de light a dark y viceversa
    const toggleTheme = useCallback(() => {
        switch(theme){
            case "light":
                setTheme("dark");
                break;
            
            case "dark":
                setTheme("light");
                break;

            case "system":
                setTheme(getSystemDark() ? "light" : "dark");
                break;
        }
   },[theme]);


   // useEffect para aplicar el tema al cargar la pagina y guardar el tema en el localStorage
    useEffect(() =>{
        localStorage.setItem( THEME_STORAGE_KEY, theme);
        applyTheme();
    }, [theme, applyTheme]);


    // valor que se pasa al contexto, memoizado para evitar renderizados innecesarios
    const value = useMemo(() => {
        return {
            theme,
            isDark,
            setTheme,
            toggleTheme
        };
    }, [theme, isDark, toggleTheme]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
    
}

// creacion del contexto con valor inicial null
export const ThemeContext = createContext<ThemeContextType | null>(null);



