import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Travel-Expense/', // <-- matches your GitHub repo name
  plugins: [react()]
});
