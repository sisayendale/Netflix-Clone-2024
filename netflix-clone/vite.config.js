import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import replace from "@rollup/plugin-replace";
import envcomatible from "vite-plugin-env-compatible";
import { VitePWA } from "vite-plugin-pwa";
import { VitePluginGhPages } from "vite-plugin-gh-pages";

export default defineConfig({
  envPrefix: "REACT_APP_", // Keep for clarity
  plugins: [
    react(),
    VitePWA(),
    VitePluginGhPages({
      branch: "gh-pages",
      dir: "dist",
    }),
    envcomatible(),
    replace({
      "process.env.REACT_APP_API_KEY": JSON.stringify(
        process.env.REACT_APP_API_KEY
      ),
    }),
  ],
});
