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
      'process.env': JSON.stringify(process.env),
    }),
  ],
  base: "/youtube/",
});
