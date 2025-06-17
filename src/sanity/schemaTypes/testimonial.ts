import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonial",
  type: "document",
  title: "Testimonial",
  fields: [
    defineField({
      name: "quote",
      type: "text",
      title: "Quote",
      description: "The actual testimonial quote.",
      validation: (Rule) => Rule.required().min(50).max(300),
    }),
    defineField({
      name: "author",
      type: "string",
      title: "Author Name",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      type: "string",
      title: "Author Role",
      description: "e.g., Parent d'élève, Ancien élève",
    }),
    defineField({
      name: "avatar",
      type: "image",
      title: "Author Avatar",
      options: {
        hotspot: true,
      },
      description: "Image of the testimonial author.",
    }),
  ],
  preview: {
    select: {
      title: "author",
      subtitle: "role",
      media: "avatar",
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || "Untitled Testimonial",
        subtitle: subtitle || "",
        media,
      };
    },
  },
});
