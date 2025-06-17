import { defineField, defineType } from "sanity";

export default defineType({
  name: "inscriptionPage",
  type: "document",
  title: "Inscription Page",
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
      name: "processTitle",
      type: "string",
      title: "Process Section Title",
      initialValue: "Processus d'inscription",
    }),
    defineField({
      name: "processDescription",
      type: "text",
      title: "Process Section Description",
      rows: 2,
      initialValue:
        "Suivez ces étapes simples pour inscrire votre enfant à Les Hirondelles.",
    }),
    defineField({
      name: "inscriptionSteps",
      title: "Inscription Steps",
      type: "array",
      of: [
        {
          type: "object",
          name: "step",
          fields: [
            defineField({
              name: "stepNumber",
              type: "number",
              title: "Step Number",
              validation: (Rule) => Rule.required().integer().positive(),
            }),
            defineField({
              name: "title",
              type: "string",
              title: "Step Title",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              type: "text",
              title: "Step Description",
              rows: 3,
            }),
            defineField({
              name: "icon",
              type: "string", // Consider a more robust icon solution later
              title: "Icon (e.g., emoji or image reference)",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "requiredDocumentsTitle",
      type: "string",
      title: "Required Documents Section Title",
      initialValue: "Documents Requis",
    }),
    defineField({
      name: "requiredDocumentsDescription",
      type: "text",
      title: "Required Documents Section Description",
      rows: 2,
      initialValue:
        "Veuillez préparer les documents suivants pour compléter le dossier d'inscription.",
    }),
    defineField({
      name: "requiredDocuments",
      title: "Required Documents",
      type: "array",
      of: [
        {
          type: "string",
          title: "Document Name",
        },
      ],
    }),
    defineField({
      name: "feesTitle",
      type: "string",
      title: "Fees Section Title",
      initialValue: "Frais de Scolarité",
    }),
    defineField({
      name: "feesDescription",
      type: "text",
      title: "Fees Section Description",
      rows: 2,
      initialValue:
        "Détail des frais pour l'année scolaire en cours. N'hésitez pas à nous contacter pour plus d'informations.",
    }),
    defineField({
      name: "feeCategories",
      title: "Fee Categories",
      type: "array",
      of: [
        {
          type: "object",
          name: "feeCategory",
          fields: [
            defineField({
              name: "categoryName",
              type: "string",
              title: "Category Name (e.g., Préscolaire, Primaire)",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "items",
              title: "Fee Items",
              type: "array",
              of: [
                {
                  type: "object",
                  name: "feeItem",
                  fields: [
                    defineField({
                      name: "description",
                      type: "string",
                      title:
                        "Description (e.g., Frais d'inscription, Scolarité annuelle)",
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: "amount",
                      type: "string",
                      title: "Amount (e.g., 50.000 FCFA, Sur demande)",
                      validation: (Rule) => Rule.required(),
                    }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "downloadBrochureCtaTitle",
      type: "string",
      title: "Download Brochure CTA Title",
      initialValue: "Téléchargez notre brochure",
    }),
    defineField({
      name: "downloadBrochureCtaDescription",
      type: "text",
      title: "Download Brochure CTA Description",
      rows: 2,
      initialValue:
        "Retrouvez toutes les informations détaillées sur nos programmes, notre pédagogie et notre vie scolaire.",
    }),
    defineField({
      name: "brochureFile",
      type: "file",
      title: "Brochure File",
      description: "Upload the school brochure PDF.",
      options: {
        accept: "application/pdf",
      },
    }),
    defineField({
      name: "brochureLabel",
      type: "string",
      title: "Brochure Button Label",
      initialValue: "Télécharger la brochure",
    }),
    defineField({
      name: "contactCtaTitle",
      type: "string",
      title: "Contact CTA Title",
      initialValue: "Besoin d'aide ? Contactez-nous !",
    }),
    defineField({
      name: "contactCtaDescription",
      type: "text",
      title: "Contact CTA Description",
      rows: 2,
      initialValue:
        "Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accompagner dans le processus d'inscription.",
    }),
    defineField({
      name: "contactButtonLabel",
      type: "string",
      title: "Contact Button Label",
      initialValue: "Nous contacter",
    }),
    defineField({
      name: "contactButtonLink",
      type: "string",
      title: "Contact Button Link (URL)",
      initialValue: "/contact",
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
        title: title || "Inscription Page",
        subtitle: subtitle || "",
        media,
      };
    },
  },
});
