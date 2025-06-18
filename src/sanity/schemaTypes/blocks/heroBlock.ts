import { defineType, defineField } from "sanity";
import { FaWindowMaximize } from "react-icons/fa";

export default defineType({
  name: "block.hero",
  title: "Hero Section",
  type: "object",
  icon: FaWindowMaximize,
  fields: [
    defineField({
      name: "subtitle",
      type: "string",
      title: "Subtitle",
      description: "e.g., 3-5 ans",
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
      rows: 3,
    }),
    defineField({
      name: "stats",
      type: "array",
      title: "Key Stats",
      of: [
        {
          type: "object",
          name: "stat",
          fields: [
            defineField({
              name: "icon",
              type: "string",
              title: "Icon (e.g., FaClock)",
            }),
            defineField({
              name: "label",
              type: "string",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "callout",
      type: "object",
      title: "Callout Box",
      fields: [
        defineField({ name: "title", type: "string" }),
        defineField({ name: "content", type: "text", rows: 2 }),
        defineField({ name: "icon", type: "string" }),
      ],
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Hero Image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: {
      subtitle: "subtitle",
      media: "image",
    },
    prepare({ subtitle, media }) {
      return {
        title: "Hero Section",
        subtitle: subtitle,
        media,
      };
    },
  },
});
