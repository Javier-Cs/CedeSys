import { useState } from "react";

export default function ThemeToggle({ className }) {

    const [dark, setDark] = useState(true);

    function toggleTheme(){
        setDark(!dark)
        document.documentElement.classList.toggle("dark");
    }

    return (
        <button 
            onClick={toggleTheme}
            className={`p-2 border border-gray-500 rounded ${className}`}>
            {dark ? "🌙" : "☀️"}
        </button>
    );


}