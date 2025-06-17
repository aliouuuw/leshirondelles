import { defineField, defineType } from "sanity";

export default defineType({
  name: "contactPage",
  type: "document",
  title: "Contact Page",
  fields: [
    defineField({
      name: "heroTitle",
      type: "string",
      title: "Hero - Main Title",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroDescription",
      type: "text",
      title: "Hero - Description",
      rows: 3,
    }),
    defineField({
      name: "heroImage",
      type: "image",
      title: "Hero - Main Image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "officeHoursTitle",
      type: "string",
      title: "Office Hours Title",
      initialValue: "Horaires d'ouverture",
    }),
    defineField({
      name: "officeHours",
      title: "Office Hours",
      type: "array",
      of: [
        {
          type: "object",
          name: "hourEntry",
          fields: [
            defineField({
              name: "day",
              type: "string",
              title: "Day(s)",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "hours",
              type: "string",
              title: "Hours",
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "contactInfoTitle",
      type: "string",
      title: "Contact Info Section Title",
      initialValue: "Nos Coordonnées",
    }),
    defineField({
      name: "contactInfoDescription",
      type: "string",
      title: "Contact Info Section Description",
      initialValue: "Plusieurs moyens de nous joindre pour votre commodité",
    }),
    defineField({
      name: "contactInfo",
      title: "Contact Information",
      type: "array",
      of: [
        {
          type: "object",
          name: "infoEntry",
          fields: [
            defineField({
              name: "icon",
              type: "string", // Consider a more robust icon solution later
              title: "Icon (e.g., FaPhone, or emoji)",
            }),
            defineField({
              name: "title",
              type: "string",
              title: "Type of Contact (e.g., Téléphone, Email)",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "details",
              type: "array",
              title: "Contact Details",
              of: [{ type: "string" }],
              description: "e.g., phone numbers, email addresses",
            }),
            defineField({
              name: "description",
              type: "string",
              title: "Additional Description",
              description: "e.g., Lundi - Vendredi: 8h00 - 17h00",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "socialMediaTitle",
      type: "string",
      title: "Social Media Section Title",
      initialValue: "Suivez-nous",
    }),
    defineField({
      name: "socialMediaDescription",
      type: "string",
      title: "Social Media Section Description",
      initialValue: "Restez connecté avec notre communauté en ligne.",
    }),
    defineField({
      name: "socialMediaLinks",
      title: "Social Media Links",
      type: "array",
      of: [
        {
          type: "object",
          name: "socialLink",
          fields: [
            defineField({
              name: "name",
              type: "string",
              title: "Platform Name (e.g., Facebook, Instagram)",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "url",
              type: "url",
              title: "Profile URL",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "handle",
              type: "string",
              title: "Handle/Username",
              description: "e.g., @LesHirondellesSN",
            }),
            defineField({
              name: "icon",
              type: "string", // Consider a more robust icon solution later
              title: "Icon (e.g., FaFacebook, or emoji)",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "departmentContactsTitle",
      type: "string",
      title: "Department Contacts Section Title",
      initialValue: "Contacts par Département",
    }),
    defineField({
      name: "departmentContactsDescription",
      type: "string",
      title: "Department Contacts Section Description",
      initialValue:
        "Trouvez le bon interlocuteur pour votre demande spécifique.",
    }),
    defineField({
      name: "departmentContacts",
      title: "Department Contacts",
      type: "array",
      of: [
        {
          type: "object",
          name: "departmentContact",
          fields: [
            defineField({
              name: "department",
              type: "string",
              title: "Department Name",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "contactPerson",
              type: "string",
              title: "Contact Person",
            }),
            defineField({
              name: "email",
              type: "string",
              title: "Email",
              validation: (Rule) => Rule.email(),
            }),
            defineField({
              name: "phone",
              type: "string",
              title: "Phone Number",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "locationMapUrl",
      type: "url",
      title: "Location Map URL",
      description: "URL for an embedded map (e.g., Google Maps embed URL).",
    }),
    defineField({
      name: "contactFormTitle",
      type: "string",
      title: "Contact Form Section Title",
      initialValue: "Envoyez-nous un message",
    }),
    defineField({
      name: "contactFormDescription",
      type: "text",
      title: "Contact Form Section Description",
      rows: 2,
      initialValue:
        "Remplissez le formulaire ci-dessous et nous vous recontacterons dans les plus brefs délais.",
    }),
  ],
  preview: {
    select: {
      title: "heroTitle",
      subtitle: "heroDescription",
      media: "heroImage",
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || "Contact Page",
        subtitle: subtitle || "",
        media,
      };
    },
  },
});
