import { defineField, defineType } from "sanity";

export default defineType({
  name: "program",
  type: "document",
  title: "Program",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Program Title",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "ageRange",
      type: "string",
      title: "Age Range",
      description: "e.g., 3-5 ans, 6-10 ans",
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Short Description",
      description:
        "A brief summary of the program. This is used on listing pages.",
      rows: 3,
    }),
    defineField({
      name: "highlights",
      title: "Key Highlights (for summary cards)",
      type: "array",
      of: [{ type: "string" }],
      description:
        "A few key features for display on summary cards (like on the homepage).",
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Program Image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "pageBuilder",
      type: "array",
      title: "Page Sections",
      of: [
        { type: "block.hero" },
        { type: "block.achievements" },
        { type: "block.classLevelTiers" },
        { type: "block.featureGrid" },
        { type: "block.schedule" },
        { type: "block.tabbedContent" },
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "Quote", value: "blockquote" },
          ],
        },
        { type: "image", options: { hotspot: true } },
      ],
      description: "Build the program page by adding and ordering sections.",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "ageRange",
      media: "image",
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || "Untitled Program",
        subtitle: subtitle || "",
        media,
      };
    },
  },
});
