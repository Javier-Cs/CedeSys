import { useState } from "react";

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className }: ThemeToggleProps) {
  const [dark, setDark] = useState<boolean>(true);

  function toggleTheme() {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  }

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 border border-gray-500 rounded ${className}`}
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
}
