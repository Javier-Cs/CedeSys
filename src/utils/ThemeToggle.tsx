import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setDark(isDark);
  }, []);

  function toggleTheme() {
    const newTheme = !dark;

    setDark(newTheme);

    document.documentElement.classList.toggle("dark", newTheme);

    localStorage.setItem("theme", newTheme ? "dark" : "light");
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Cambiar tema"
      className={`
        group
        relative
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-xl
        border
        border-slate-200
        dark:border-slate-700
        bg-white/80
        dark:bg-slate-900/70
        shadow-sm
        backdrop-blur-md
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-md
        active:scale-95
        ${className}
      `}
    >
      <Sun
        size={20}
        className={`
          absolute
          transition-all
          duration-500
          ${
            dark
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100 text-amber-500"
          }
        `}
      />

      <Moon
        size={20}
        className={`
          absolute
          transition-all
          duration-500
          ${
            dark
              ? "rotate-0 scale-100 opacity-100 text-blue-400"
              : "-rotate-90 scale-0 opacity-0"
          }
        `}
      />
    </button>
  );
}