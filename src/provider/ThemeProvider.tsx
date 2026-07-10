import { useCallback, useEffect, useMemo, useState, type PropsWithChildren } from "react";
import type {Theme} from "@/types/theme";
import {THEME_STORAGE_KEY} from "@/constante/themecons";
import {ThemeContext} from "@/context/ThemeContext";



export function ThemeProvider({children}: PropsWithChildren) {


    // creacion de un estado para el tema, con valor inicial "system"
    const [theme, setTheme] = useState<Theme>(() => {
        const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
        return savedTheme ?? "system";
    });

    useEffect(() => {
        console.log("Theme:", theme);
    }, [theme]);


    // funcion para obtener el tema del sistema operativo
    function getSystemDark() { 
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    

    // funcion para obtener el tema del localStorage
    const isDark = 
        theme === "dark" || 
        (theme === "system" && getSystemDark());


    // funcion para aplicar el tema dark o light al html
    const applyTheme = useCallback(() =>{
        document.documentElement.classList.toggle("dark", isDark);

        ///////////--------------------
    }, [isDark]);
    

    // creacion de toggleTheme para cambiar el tema de light a dark y viceversa
    const toggleTheme = useCallback(() => {
        console.log("toggle", theme);
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



    useEffect(() => {
        if(theme !== "system") return;
        const media = window.matchMedia("(prefers-color-scheme: dark)");

        const handleChange = () => {
            document.documentElement.classList.toggle(
                "dark",
                getSystemDark()
            );
            applyTheme();
        };

        media.addEventListener("change", handleChange);

        return () => {
            media.removeEventListener("change", handleChange);
        };
    }, [theme, applyTheme]);


    // valor que se pasa al contexto, memoizado para evitar renderizados innecesarios
    const value = useMemo(
        () => ({
            theme,
            isDark,
            setTheme,
            toggleTheme
        }), 
        [theme, isDark, toggleTheme]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
    
}

// creacion del contexto con valor inicial null
//export const ThemeContext = createContext<ThemeContextType | null>(null);

