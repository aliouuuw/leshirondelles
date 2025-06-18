import { defineType, defineField } from "sanity";
import { FaLayerGroup } from "react-icons/fa";

export default defineType({
  name: "block.classLevelTiers",
  title: "Class Level Tiers",
  type: "object",
  icon: FaLayerGroup,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      description: "Optional title for this section (e.g., Our Classes).",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "levels",
      type: "array",
      title: "Class Levels",
      of: [
        {
          type: "object",
          name: "level",
          fields: [
            defineField({
              name: "image",
              type: "image",
              title: "Image",
              options: { hotspot: true },
            }),
            defineField({
              name: "title",
              type: "string",
              title: "Title",
              description: "e.g., CP, 6ème",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "ageRange",
              type: "string",
              title: "Age Range",
            }),
            defineField({
              name: "focus",
              type: "string",
              title: "Main Focus",
            }),
            defineField({
              name: "highlights",
              type: "array",
              title: "Highlights",
              of: [{ type: "string" }],
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
      levels: "levels",
    },
    prepare({ title, levels }) {
      return {
        title: title || "Class Level Tiers",
        subtitle: `${levels.length} level(s)`,
      };
    },
  },
});
 