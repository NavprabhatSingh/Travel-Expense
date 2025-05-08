import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  base: '/Travel-Expense/',  // ⚠️ This must match your GitHub repo name exactly
  plugins: [
    react(),
    tailwindcss(),
  ],
});
