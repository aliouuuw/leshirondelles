import { defineType, defineField } from "sanity";
import { FaRegClock } from "react-icons/fa";

export default defineType({
  name: "block.schedule",
  title: "Schedule",
  type: "object",
  icon: FaRegClock,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      description: "Optional title for this section (e.g., A Typical Day).",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "rows",
      type: "array",
      title: "Schedule Rows",
      of: [
        {
          type: "object",
          name: "scheduleRow",
          fields: [
            defineField({
              name: "label",
              type: "string",
              title: "Label",
              description: "e.g., 8h00 - 8h30, or Français",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "value",
              type: "string",
              title: "Value",
              description: "e.g., Accueil et jeux libres, or 8h",
              validation: (Rule) => Rule.required(),
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
      rows: "rows",
    },
    prepare({ title, rows }) {
      return {
        title: title || "Schedule",
        subtitle: `${rows.length} row(s)`,
      };
    },
  },
});
 