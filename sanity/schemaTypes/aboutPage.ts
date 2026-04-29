import { defineField, defineType } from "sanity";

const defaultBody = `njomotionpictures is a photography business based in New York. I specialize in capturing wildlife, sports, street, and landscape photography. With 6 months of experience, I primarily focus on selling prints of my captivating photographs. My business aims to capture and preserve special moments through professional photography services, with a focus on creativity and attention to detail. I offer a range of photography services, including specific packages tailored to your needs. I take pride in delivering high-quality, personalized services to my clients. I am dedicated to ensuring your satisfaction and capturing your vision. Let me help you create lasting memories through my photography services.`;

export const aboutPageType = defineType({
  name: "aboutPage",
  title: "About page",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "About Us",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body",
      title: "Body text",
      type: "text",
      rows: 14,
      description: "Bio shown beside the portrait image.",
      initialValue: defaultBody,
    }),
    defineField({
      name: "image",
      title: "Portrait image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});
