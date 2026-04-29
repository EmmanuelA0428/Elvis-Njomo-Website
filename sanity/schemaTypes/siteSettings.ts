import { defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({
      name: "homePhotosPanelImage",
      title: "Home — Photos panel image",
      type: "image",
      description:
        "Background image for the Photos tile on the homepage. If empty, the first collection cover is used.",
      options: { hotspot: true },
    }),
    defineField({
      name: "homeVideosPanelImage",
      title: "Home — Videos panel image",
      type: "image",
      description:
        "Background image for the Videos tile. If empty, the first video's YouTube thumbnail is used.",
      options: { hotspot: true },
    }),
  ],
});
