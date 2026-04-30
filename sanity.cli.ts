import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "mokhd6fe",
    dataset: "production",
  },
  server: {
    hostname: "localhost",
    port: 3333,
  },
});
