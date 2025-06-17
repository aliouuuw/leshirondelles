import { defineField, defineType } from "sanity";

export default defineType({
  name: "author",
  type: "document",
  title: "Author",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Author Name",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Author Image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "bio",
      title: "Biography",
      type: "array",
      of: [
        {
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
            annotations: [],
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
