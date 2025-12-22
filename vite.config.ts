import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

dotenv.config();

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  build: {
    outDir: "./app/",
    rollupOptions: {
      output: {
        entryFileNames: "[name].[hash].js",
        chunkFileNames: "[name].[hash].js",
        assetFileNames: "[name].[hash].[ext]"
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve("./src")
    }
  },
  server: {
    host: true,
    port: 81,
    allowedHosts: true,
    proxy: {
      "/api": {
        target: process.env.BACKEND_URL,
        changeOrigin: true,
        secure: false,
      }
    }
  }
});