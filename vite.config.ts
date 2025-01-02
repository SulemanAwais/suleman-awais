import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/stylish-showcase//' : '/', // Replace <repository-name> with your GitHub repo name
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    outDir: "docs", // Output folder for GitHub Pages deployment from main branch
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
