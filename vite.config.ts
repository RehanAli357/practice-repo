/// <reference types="vitest" />

import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), viteTsconfigPaths()],
  test: {
    globals: true,
    environment: "jsdom",
    environmentMatchGlobs: [["**/*.test.tsx", "jsdom"]],
    setupFiles: "./src/testing/setup-tests.ts",
    include: ["src/**/*.test.{js,jsx,ts,tsx}"],
    coverage: {
      include: ["src/**/*"],
      reporter: ["html"],
      provider:"istanbul",
    },
    exclude: ["**/node_modules/**"],
  },
  server: {
    open: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
