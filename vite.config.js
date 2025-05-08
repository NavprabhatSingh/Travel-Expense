import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Travel-Expense/', // Match GitHub repo name
  build: {
    outDir: 'docs', // 👈 GitHub Pages will serve from here
  },
  plugins: [react()],
});
