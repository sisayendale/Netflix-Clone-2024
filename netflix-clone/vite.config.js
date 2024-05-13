import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // envPrefix: "REACT_APP_", // Keep for clarity
  // base: "/netflix-clone/",
  plugins: [
    react(),
  ],
});
