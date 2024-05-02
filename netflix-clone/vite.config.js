import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import replace from "@rollup/plugin-replace";
import envcomatible from "vite-plugin-env-compatible";

export default defineConfig({
  envPrefix: "REACT_APP_", // Keep for clarity
  plugins: [
    react(),
    envcomatible(),
    replace({
      "process.env.REACT_APP_API_KEY": JSON.stringify(
        process.env.REACT_APP_API_KEY
      ),
    }),
 
  ],
});

