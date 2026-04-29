import path from "node:path";
import { defineConfig } from "vite";

/** Not named vite.config.* so Sanity CLI won't merge it. Used only for `vite-node` during migration. */
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
