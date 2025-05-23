import type { CollectionConfig } from "payload";

export const Staff: CollectionConfig = {
  slug: "staff",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "title", "updatedAt"],
    description: "Manage school staff members.",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      label: "Full Name",
    },
    {
      name: "title",
      type: "text",
      required: true,
      label: "Job Title (e.g., Math Teacher, Principal)",
      localized: true,
    },
    {
      name: "bio",
      type: "richText",
      label: "Biography",
      localized: true,
    },
    {
      name: "photo",
      type: "upload",
      relationTo: "media",
      label: "Staff Photo",
    },
    {
      name: "email",
      type: "email",
      label: "Email Address (Optional)",
    },
    {
      name: "order", // For custom sorting if needed
      type: "number",
      label: "Sort Order",
      admin: {
        step: 1,
        description: "A smaller number will appear higher in sorted lists.",
      },
    },
    {
      name: "associatedLevels",
      type: "relationship",
      relationTo: "levels",
      hasMany: true,
      label: "Associated School Levels (Optional)",
      admin: {
        description:
          "If this staff member is primarily associated with specific levels (e.g., Primaire, Collège).",
      },
    },
  ],
};
