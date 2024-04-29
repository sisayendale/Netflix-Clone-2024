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
      "process.env": JSON.stringify(process.env),
      "process.env.REACT_APP_API_KEY": JSON.stringify(
        process.env.REACT_APP_API_KEY
      ),
      preventAssignment: true,
    }),
  ],
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import envcomatible from "vite-plugin-env-compatible";
// import replace from "@rollup/plugin-replace";

// // https://vitejs.dev/config/
// export default defineConfig({
//   envPrefix: "REACT_APP_",
//   plugins: [
//      react(),
//   envcomatible(),
// replace({
//   "process.env.REACT_APP_API_KEY": JSON.stringify(
//     process.env.REACT_APP_API_KEY
//   ),
// }),
// replace({
//   "process.env": JSON.stringify(process.env),
//   preventAssignment: true, // Explicitly set preventAssignment to true
// }),
//   ],
// });

// import replace from '@rollup/plugin-replace';

// export default {
//   plugins: [
//     replace({
//       'process.env.REACT_APP_API_KEY': JSON.stringify(process.env.REACT_APP_API_KEY)
//     })
//   ]
// };
