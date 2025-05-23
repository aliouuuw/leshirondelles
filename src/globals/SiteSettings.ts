import type { GlobalConfig } from "payload";

export const SiteSettings: GlobalConfig = {
  slug: "siteSettings",
  label: "Site Settings",
  admin: {
    group: "Configuration", // Groups globals in the admin UI sidebar
    description:
      "Manage global settings for the website, like site title, logo, and footer content.",
  },
  fields: [
    {
      name: "siteTitle",
      type: "text",
      required: true,
      localized: true,
      label: "Site Title",
    },
    {
      name: "siteLogo",
      type: "upload",
      relationTo: "media", // Assuming you have a 'media' collection
      label: "Site Logo",
    },
    {
      name: "favicon",
      type: "upload",
      relationTo: "media",
      label: "Favicon (32x32 .ico or .png recommended)",
    },
    {
      name: "footerText",
      type: "richText",
      localized: true,
      label: "Footer Text (e.g., copyright information)",
    },
    {
      name: "contactEmail",
      type: "email",
      label: "Public Contact Email",
    },
    {
      name: "phoneNumber",
      type: "text",
      label: "Public Phone Number",
    },
    {
      name: "address",
      type: "textarea",
      label: "School Address",
      localized: true,
    },
    {
      name: "socialMediaLinks",
      type: "array",
      label: "Social Media Links",
      fields: [
        {
          name: "platform",
          type: "select",
          options: [
            // Add more platforms as needed
            { label: "Facebook", value: "facebook" },
            { label: "Twitter / X", value: "twitter" },
            { label: "Instagram", value: "instagram" },
            { label: "LinkedIn", value: "linkedin" },
            { label: "YouTube", value: "youtube" },
          ],
          required: true,
        },
        {
          name: "url",
          type: "text", // Changed from "url" to "text" since "url" is not a valid type
          required: true,
          label: "Profile URL",
        },
      ],
    },
  ],
};
