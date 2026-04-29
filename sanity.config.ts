import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemaTypes";

export default defineConfig({
  name: "default",
  title: "Elvis Njomo",
  projectId: "mokhd6fe",
  dataset: "production",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Site settings")
              .id("siteSettings")
              .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
            ...S.documentTypeListItems().filter(
              (listItem) => listItem.getId() !== "siteSettings",
            ),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
