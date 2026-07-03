import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// importamos el modulo path para poder usar alias en vite
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // Configuración de alias para Vite
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      /* 
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@componentes": path.resolve(__dirname, "./src/componentes"),
      "@context": path.resolve(__dirname, "./src/context"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@layouts": path.resolve(__dirname, "./src/layouts"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@router": path.resolve(__dirname, "./src/router"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@types": path.resolve(__dirname, "./src/types"),
      "@utils": path.resolve(__dirname, "./src/utils"),*/
      
    }
  }
});
