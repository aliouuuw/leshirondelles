import { defineField, defineType } from "sanity";

export default defineType({
  name: "aboutPage",
  type: "document",
  title: "About Us Page",
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
      name: "foundedYear",
      type: "number",
      title: "Founded Year",
    }),
    defineField({
      name: "location",
      type: "string",
      title: "Location",
    }),
    defineField({
      name: "missionQuote",
      type: "text",
      title: "Mission Quote",
      rows: 3,
    }),
    defineField({
      name: "missionQuoteAuthor",
      type: "string",
      title: "Mission Quote Author",
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
      name: "coreValuesTitle",
      type: "string",
      title: "Core Values Section Title",
      initialValue: "Nos Valeurs",
    }),
    defineField({
      name: "coreValuesDescription",
      type: "string",
      title: "Core Values Section Description",
      initialValue:
        "Les principes qui guident notre approche éducative et façonnent l'expérience de chaque élève.",
    }),
    defineField({
      name: "coreValues",
      title: "Core Values",
      type: "array",
      of: [
        {
          type: "object",
          name: "coreValue",
          fields: [
            defineField({
              name: "icon",
              type: "string", // Consider a more robust icon solution later
              title: "Icon (e.g., FaBullseye, or emoji)",
            }),
            defineField({
              name: "title",
              type: "string",
              title: "Value Title",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              type: "text",
              title: "Value Description",
              rows: 2,
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "historyTitle",
      type: "string",
      title: "History Section Title",
      initialValue: "Notre Parcours",
    }),
    defineField({
      name: "historyDescription",
      type: "string",
      title: "History Section Description",
      initialValue:
        "Une histoire d'engagement et de croissance continue dans l'excellence éducative.",
    }),
    defineField({
      name: "historyMilestones",
      title: "History Milestones",
      type: "array",
      of: [
        {
          type: "object",
          name: "milestone",
          fields: [
            defineField({
              name: "year",
              type: "string",
              title: "Year",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "title",
              type: "string",
              title: "Milestone Title",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              type: "text",
              title: "Milestone Description",
              rows: 3,
            }),
            defineField({
              name: "image",
              type: "image",
              title: "Milestone Image",
              options: { hotspot: true },
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "leadershipTitle",
      type: "string",
      title: "Leadership Section Title",
      initialValue: "Notre Équipe de Direction",
    }),
    defineField({
      name: "leadershipDescription",
      type: "string",
      title: "Leadership Section Description",
      initialValue:
        "Des professionnels dévoués qui guident notre institution vers l'excellence.",
    }),
    defineField({
      name: "leadershipTeam",
      title: "Leadership Team Members",
      type: "array",
      of: [
        {
          type: "object",
          name: "teamMember",
          fields: [
            defineField({
              name: "name",
              type: "string",
              title: "Member Name",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "role",
              type: "string",
              title: "Member Role",
            }),
            defineField({
              name: "image",
              type: "image",
              title: "Member Image",
              options: { hotspot: true },
            }),
            defineField({
              name: "bio",
              type: "text",
              title: "Biography",
              rows: 3,
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "ctaSectionTitle",
      type: "string",
      title: "CTA Section Title",
      initialValue: "Rejoignez Notre Communauté",
    }),
    defineField({
      name: "ctaSectionDescription",
      type: "string",
      title: "CTA Section Description",
      initialValue:
        "Découvrez comment Les Hirondelles peut contribuer à l'épanouissement et à la réussite de votre enfant.",
    }),
    defineField({
      name: "ctaButtons",
      title: "CTA Buttons",
      type: "array",
      of: [
        {
          type: "object",
          name: "ctaButton",
          fields: [
            defineField({
              name: "label",
              type: "string",
              title: "Button Label",
              validation: (Rule) =>
                Rule.required()
                  .min(2)
                  .max(30)
                  .warning("Label should be between 2 and 30 characters"),
            }),
            defineField({
              name: "link",
              type: "string",
              title: "Button Link",
              description:
                "Use '/page' for internal pages, '#section' for page sections, or full URLs for external links",
              validation: (Rule) =>
                Rule.required().custom((value) => {
                  // Allow internal paths starting with /
                  if (value?.startsWith("/")) return true;

                  // Allow anchor links starting with #
                  if (value?.startsWith("#")) return true;

                  // Allow valid URLs
                  try {
                    new URL(value || "");
                    return true;
                  } catch (error) {
                    return "Please enter a valid URL, internal path (/page), or anchor link (#section)";
                  }
                }),
            }),
            defineField({
              name: "isPrimary",
              type: "boolean",
              title: "Is Primary Button?",
              description:
                "Check if this button should have the primary style.",
              initialValue: false,
            }),
          ],
        },
      ],
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
        title: title || "About Us Page",
        subtitle: subtitle || "",
        media,
      };
    },
  },
});
