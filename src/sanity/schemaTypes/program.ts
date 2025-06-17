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
      name: "highlights",
      title: "Key Highlights",
      type: "array",
      of: [{ type: "string" }],
      description: "List of key features or highlights of this program.",
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
      name: "body",
      title: "Program Details",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H1", value: "h1" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "URL",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                  },
                ],
              },
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
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
