import { defineType, defineField } from "sanity";
import { FaFolderOpen } from "react-icons/fa";

export default defineType({
  name: "block.tabbedContent",
  title: "Tabbed Content",
  type: "object",
  icon: FaFolderOpen,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      description:
        "Optional title for this section (e.g., Extracurricular Activities).",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "tabs",
      type: "array",
      title: "Tabs",
      of: [
        {
          type: "object",
          name: "tab",
          fields: [
            defineField({
              name: "title",
              type: "string",
              title: "Tab Title",
              description: "e.g., Clubs Scientifiques, Arts & Culture",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "content",
              title: "Content",
              type: "array",
              of: [{ type: "string" }],
              description: "List of items for this tab.",
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
      tabs: "tabs",
    },
    prepare({ title, tabs }) {
      return {
        title: title || "Tabbed Content",
        subtitle: `${tabs.length} tab(s)`,
      };
    },
  },
});
 