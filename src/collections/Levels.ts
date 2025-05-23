import type { CollectionConfig } from "payload";

export const Levels: CollectionConfig = {
  slug: "levels",
  admin: {
    useAsTitle: "name",
    description:
      "Collection for different school levels (e.g., Préscolaire, Primaire, Collège)",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "description",
      type: "richText",
      localized: true,
    },
    {
      name: "ageRange",
      type: "text",
      label: "Age Range (e.g., 3-5 years)",
      localized: true,
    },
    {
      name: "curriculumOverview",
      type: "richText",
      label: "Curriculum Overview",
      localized: true,
    },
    {
      name: "heroImage",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "gallery",
      type: "array",
      label: "Level Gallery",
      minRows: 1,
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
    },
    {
      name: "featuredPages",
      type: "relationship",
      relationTo: "pages",
      hasMany: true,
      label: "Featured Pages for this Level",
      admin: {
        description:
          "Select pages that are prominently featured for this school level.",
      },
    },
  ],
};
