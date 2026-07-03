import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// implementacion de tailwindcss
import tailwindcss from "@tailwindcss/vite";

// importamos el modulo path para poder usar alias en vite
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  // Configuración de alias para Vite
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
