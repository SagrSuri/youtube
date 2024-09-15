import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import replace from '@rollup/plugin-replace';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export default defineConfig({
  plugins: [
    react(),
    replace({
      // eslint-disable-next-line no-undef
      'process.env.VITE_API_KEY': JSON.stringify(process.env.VITE_API_KEY),
    }),
  ],
  base: "/youtube/",
});
