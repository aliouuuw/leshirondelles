import type { Block, CollectionConfig } from "payload";

// Define Block Types

const HeroBlock: Block = {
  slug: "hero", // name as it appears in the admin UI
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "subtitle",
      type: "text",
      localized: true,
    },
    {
      name: "backgroundImage",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "buttons",
      type: "array",
      fields: [
        {
          name: "label",
          type: "text",
          required: true,
          localized: true,
        },
        {
          name: "link",
          type: "text", // Could be an internal or external link
          required: true,
        },
      ],
    },
  ],
};

const RichTextBlock: Block = {
  slug: "richText",
  fields: [
    {
      name: "content",
      type: "richText",
      required: true,
      localized: true,
    },
  ],
};

const ImageBlock: Block = {
  slug: "imageBlock",
  fields: [
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "caption",
      type: "text",
      localized: true,
    },
  ],
};

const CallToActionBlock: Block = {
  slug: "callToAction",
  labels: {
    singular: "Call to Action",
    plural: "Call to Actions Blocks",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      localized: true,
    },
    {
      name: "subtext",
      type: "textarea",
      localized: true,
    },
    {
      name: "buttons",
      type: "array",
      minRows: 1,
      fields: [
        {
          name: "label",
          type: "text",
          required: true,
          localized: true,
        },
        {
          name: "linkType",
          type: "radio",
          options: [
            { label: "Internal Link", value: "internal" },
            { label: "External URL", value: "external" },
          ],
          defaultValue: "internal",
          required: true,
        },
        {
          name: "internalLink",
          label: "Internal Page",
          type: "relationship",
          relationTo: "pages",
          required: true,
          admin: {
            condition: (_, siblingData) => siblingData.linkType === "internal",
          },
        },
        {
          name: "externalUrl",
          label: "External URL",
          type: "text",
          required: true,
          admin: {
            condition: (_, siblingData) => siblingData.linkType === "external",
          },
        },
        {
          name: "style",
          type: "select",
          options: [
            { label: "Primary", value: "primary" },
            { label: "Secondary", value: "secondary" },
          ],
          defaultValue: "primary",
        },
      ],
    },
  ],
};

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
    description:
      "Individual pages for the website, built using content blocks.",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: {
        description:
          'The URL-friendly identifier for this page (e.g., "about-us").',
        position: "sidebar",
      },
    },
    {
      name: "parentLevel",
      label: "Parent Level (Optional)",
      type: "relationship",
      relationTo: "levels",
      hasMany: false, // A page can belong to one primary level
      admin: {
        position: "sidebar",
        description:
          'Associate this page with a specific school level (e.g., "Primaire").',
      },
    },
    {
      name: "layout",
      label: "Page Content",
      type: "blocks",
      minRows: 1,
      blocks: [HeroBlock, RichTextBlock, ImageBlock, CallToActionBlock],
      localized: true,
    },
    {
      name: "seo",
      label: "SEO Settings",
      type: "group",
      admin: {
        position: "sidebar",
        description: "Settings for search engine optimization.",
      },
      fields: [
        {
          name: "metaTitle",
          label: "Meta Title",
          type: "text",
          localized: true,
          admin: {
            description:
              "Optimal length: 50-60 characters. Displayed in search results and browser tabs.",
          },
        },
        {
          name: "metaDescription",
          label: "Meta Description",
          type: "textarea",
          localized: true,
          admin: {
            description:
              "Optimal length: 150-160 characters. A brief summary for search engine results.",
          },
        },
        {
          name: "metaImage",
          label: "Meta Image (Open Graph)",
          type: "upload",
          relationTo: "media",
          admin: {
            description:
              "Image used when sharing the page on social media (e.g., Facebook, Twitter). Recommended size: 1200x630px.",
          },
        },
      ],
    },
  ],
};
