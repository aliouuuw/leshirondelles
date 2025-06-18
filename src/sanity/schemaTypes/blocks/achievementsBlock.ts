import { defineType, defineField } from "sanity";
import { FaTrophy } from "react-icons/fa";

export default defineType({
  name: "block.achievements",
  title: "Achievements Block",
  type: "object",
  icon: FaTrophy,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      description: "Optional title for this section (e.g., Our Key Stats).",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "achievements",
      type: "array",
      title: "Achievements",
      of: [
        {
          type: "object",
          name: "achievement",
          fields: [
            defineField({
              name: "icon",
              type: "string",
              title: "Icon",
              description: "You can use an emoji as the icon.",
            }),
            defineField({
              name: "title",
              type: "string",
              title: "Title",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              type: "string",
              title: "Description",
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: "title",
      achievements: "achievements",
    },
    prepare({ title, achievements }) {
      return {
        title: title || "Achievements Block",
        subtitle: `${achievements.length} achievement(s)`,
      };
    },
  },
});
 