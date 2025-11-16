import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/my-portfolio/",   // IMPORTANT: required for GitHub Pages
  plugins: [react()],

  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },

  // 🔥 Prevent browser caching old icons / JS bundles
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name]-[hash].js`,
        chunkFileNames: `assets/[name]-[hash].js`,
        assetFileNames: `assets/[name]-[hash].[ext]`,
      },
    },
  },
});
