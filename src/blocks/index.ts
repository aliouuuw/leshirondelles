import type { Block } from "payload";

export const TeacherProfileBlock: Block = {
  slug: "teacherProfile",
  labels: {
    singular: "Teacher Profile",
    plural: "Teacher Profile Blocks",
  },
  fields: [
    {
      name: "title",
      type: "text",
      localized: true,
    },
    {
      name: "description",
      type: "textarea",
      localized: true,
    },
    {
      name: "staff",
      type: "relationship",
      relationTo: "staff",
      hasMany: true,
      required: true,
    },
    {
      name: "layout",
      type: "select",
      options: [
        { label: "Grid", value: "grid" },
        { label: "List", value: "list" },
      ],
      defaultValue: "grid",
    },
  ],
};

export const SchoolLevelBlock: Block = {
  slug: "schoolLevel",
  labels: {
    singular: "School Level",
    plural: "School Level Blocks",
  },
  fields: [
    {
      name: "title",
      type: "text",
      localized: true,
    },
    {
      name: "description",
      type: "textarea",
      localized: true,
    },
    {
      name: "level",
      type: "relationship",
      relationTo: "levels",
      required: true,
    },
    {
      name: "showCurriculum",
      type: "checkbox",
      label: "Show Curriculum",
    },
    {
      name: "showGallery",
      type: "checkbox",
      label: "Show Gallery",
    },
    {
      name: "callToAction",
      type: "group",
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
          type: "relationship",
          relationTo: "pages",
          required: true,
          admin: {
            condition: (_, siblingData) => siblingData.linkType === "internal",
          },
        },
        {
          name: "externalUrl",
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

export const GalleryBlock: Block = {
  slug: "gallery",
  labels: {
    singular: "Gallery",
    plural: "Gallery Blocks",
  },
  fields: [
    {
      name: "title",
      type: "text",
      localized: true,
    },
    {
      name: "description",
      type: "textarea",
      localized: true,
    },
    {
      name: "images",
      type: "array",
      required: true,
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
      name: "layout",
      type: "select",
      options: [
        { label: "Grid", value: "grid" },
        { label: "Masonry", value: "masonry" },
        { label: "Carousel", value: "carousel" },
      ],
      defaultValue: "grid",
    },
  ],
};

export const TestimonialBlock: Block = {
  slug: "testimonial",
  labels: {
    singular: "Testimonial",
    plural: "Testimonial Blocks",
  },
  fields: [
    {
      name: "title",
      type: "text",
      localized: true,
    },
    {
      name: "testimonials",
      type: "array",
      required: true,
      minRows: 1,
      fields: [
        {
          name: "quote",
          type: "textarea",
          required: true,
          localized: true,
        },
        {
          name: "author",
          type: "text",
          required: true,
          localized: true,
        },
        {
          name: "role",
          type: "text",
          localized: true,
        },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
        },
      ],
    },
    {
      name: "layout",
      type: "select",
      options: [
        { label: "Grid", value: "grid" },
        { label: "Carousel", value: "carousel" },
        { label: "List", value: "list" },
      ],
      defaultValue: "grid",
    },
  ],
};

export const ContactFormBlock: Block = {
  slug: "contactForm",
  labels: {
    singular: "Contact Form",
    plural: "Contact Form Blocks",
  },
  fields: [
    {
      name: "title",
      type: "text",
      localized: true,
    },
    {
      name: "description",
      type: "textarea",
      localized: true,
    },
    {
      name: "fields",
      type: "array",
      required: true,
      minRows: 1,
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
        },
        {
          name: "type",
          type: "select",
          required: true,
          options: [
            { label: "Text", value: "text" },
            { label: "Email", value: "email" },
            { label: "Phone", value: "tel" },
            { label: "Textarea", value: "textarea" },
          ],
        },
        {
          name: "required",
          type: "checkbox",
          label: "Required Field",
        },
        {
          name: "label",
          type: "text",
          localized: true,
        },
        {
          name: "placeholder",
          type: "text",
          localized: true,
        },
      ],
    },
    {
      name: "submitLabel",
      type: "text",
      localized: true,
      defaultValue: "Envoyer",
    },
    {
      name: "successMessage",
      type: "text",
      localized: true,
      defaultValue: "Votre message a été envoyé avec succès.",
    },
  ],
};

export const CalendarBlock: Block = {
  slug: "calendar",
  labels: {
    singular: "Calendar",
    plural: "Calendar Blocks",
  },
  fields: [
    {
      name: "title",
      type: "text",
      localized: true,
    },
    {
      name: "description",
      type: "textarea",
      localized: true,
    },
    {
      name: "events",
      type: "array",
      required: true,
      minRows: 1,
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
          localized: true,
        },
        {
          name: "date",
          type: "date",
          required: true,
        },
        {
          name: "endDate",
          type: "date",
        },
        {
          name: "description",
          type: "textarea",
          localized: true,
        },
        {
          name: "location",
          type: "text",
          localized: true,
        },
        {
          name: "type",
          type: "select",
          options: [
            { label: "Academic", value: "academic" },
            { label: "Event", value: "event" },
            { label: "Holiday", value: "holiday" },
          ],
          defaultValue: "event",
        },
      ],
    },
  ],
};
