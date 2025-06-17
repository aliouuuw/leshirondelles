import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  type: "document",
  title: "Site Settings",
  // This document will be a singleton, meaning only one instance of it can exist
  // in the studio. This is often achieved with a custom structure builder.
  // For now, we define it as a regular document.
  fields: [
    defineField({
      name: "siteTitle",
      type: "string",
      title: "Site Title",
      description: "The main title of the website (e.g., Les Hirondelles).",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "logo",
      type: "image",
      title: "Site Logo",
      description: "The main logo for the website.",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "defaultOgImage",
      type: "image",
      title: "Default Open Graph Image",
      description:
        "Default image used for social media sharing (e.g., Facebook, Twitter).",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "mainNavigation",
      title: "Main Navigation Links",
      type: "array",
      of: [
        {
          type: "object",
          name: "navItem",
          fields: [
            defineField({
              name: "label",
              type: "string",
              title: "Navigation Label",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "slug",
              type: "string",
              title: "Link Path (e.g., /about, /programs)",
              description: "Relative path to the page.",
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "footerText",
      type: "text",
      title: "Footer Text",
      rows: 3,
      description: "Text displayed in the website footer.",
    }),
    defineField({
      name: "socialMediaLinks",
      title: "Footer Social Media Links",
      type: "array",
      of: [
        {
          type: "object",
          name: "socialLink",
          fields: [
            defineField({
              name: "platform",
              type: "string",
              title: "Social Media Platform",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "url",
              type: "url",
              title: "Profile URL",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "icon",
              type: "string", // Consider a more robust icon solution later (e.g., FaFacebook)
              title: "Icon Name/Class",
              description: "e.g., FaFacebook, fa-twitter, or an emoji",
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "siteTitle",
      media: "logo",
    },
    prepare({ title, media }) {
      return {
        title: title || "Site Settings",
        media,
      };
    },
  },
});
