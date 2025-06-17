import { defineField, defineType } from "sanity";

export default defineType({
  name: "homePage",
  type: "document",
  title: "Home Page",
  // You can set a custom icon for this document type in the Sanity Studio
  // icon: HomeIcon,
  fields: [
    defineField({
      name: "heroTitle",
      type: "string",
      title: "Hero - Main Title",
      description: "The main title displayed in the hero section.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroSubtitle",
      type: "string",
      title: "Hero - Subtitle",
      description: "A catchy subtitle for the hero section.",
    }),
    defineField({
      name: "heroImages",
      title: "Hero - Slider Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
              initialValue: "Hero image",
            },
            {
              name: "isHighlighted",
              type: "boolean",
              title: "Is Highlighted?",
              initialValue: false,
            },
          ],
        },
      ],
      description: "Images for the hero section slider.",
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "heroButtons",
      title: "Hero - Call to Action Buttons",
      type: "array",
      of: [
        {
          type: "object",
          name: "heroButton",
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
    defineField({
      name: "statistics",
      title: "Animated Statistics",
      type: "array",
      of: [
        {
          type: "object",
          name: "statistic",
          fields: [
            defineField({
              name: "value",
              type: "string",
              title: "Statistic Value",
              description: "e.g., 500+, 98%",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "label",
              type: "string",
              title: "Statistic Label",
              description: "e.g., Élèves épanouis, Taux de réussite",
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "schoolLevelsTitle",
      type: "string",
      title: "School Levels Section Title",
      initialValue: "Nos Programmes",
    }),
    defineField({
      name: "schoolLevelsDescription",
      type: "string",
      title: "School Levels Section Description",
      initialValue:
        "Un parcours éducatif complet qui accompagne chaque élève vers l'excellence",
    }),
    defineField({
      name: "schoolLevels",
      title: "School Levels (Programs)",
      type: "array",
      of: [{ type: "reference", to: [{ type: "program" }] }],
      description: "References to individual program documents.",
    }),
    defineField({
      name: "missionTitle",
      type: "string",
      title: "Mission Section Title",
      initialValue: "Notre Mission",
    }),
    defineField({
      name: "missionDescription",
      type: "string",
      title: "Mission Section Description",
      initialValue:
        "Former les citoyens de demain avec excellence et bienveillance",
    }),
    defineField({
      name: "missionContent",
      type: "array",
      title: "Mission Main Content",
      of: [
        {
          type: "block",
          styles: [
            { title: "Large", value: "large" },
            { title: "Normal", value: "normal" },
          ],
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
      description: "Rich text content for the mission statement.",
    }),
    defineField({
      name: "missionValues",
      title: "Mission Core Values",
      type: "array",
      of: [
        {
          type: "object",
          name: "missionValue",
          fields: [
            defineField({
              name: "icon",
              type: "string", // Consider using a custom icon selector or image type for more flexibility
              title: "Icon (Emoji or SVG Identifier)",
              description: "e.g., 🎯, 🤝, 🌱",
            }),
            defineField({
              name: "title",
              type: "string",
              title: "Value Title",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              type: "string",
              title: "Value Description",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "missionImage",
      type: "image",
      title: "Mission Section Image",
      options: { hotspot: true },
    }),
    defineField({
      name: "newsSectionTitle",
      type: "string",
      title: "News Section Title",
      initialValue: "Actualités",
    }),
    defineField({
      name: "newsSectionDescription",
      type: "string",
      title: "News Section Description",
      initialValue: "Découvrez la vie dynamique de notre école",
    }),
    defineField({
      name: "featuredNews",
      title: "Featured News/Blog Post",
      type: "reference",
      to: [{ type: "blogPost" }],
      description: "The main featured news or blog post.",
    }),
    defineField({
      name: "latestNews",
      title: "Latest News/Blog Posts (Excluding Featured)",
      type: "array",
      of: [{ type: "reference", to: [{ type: "blogPost" }] }],
      description: "A selection of the latest news or blog posts to display.",
    }),
    defineField({
      name: "testimonialsSectionTitle",
      type: "string",
      title: "Testimonials Section Title",
      initialValue: "Ce qu'ils disent de nous",
    }),
    defineField({
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [{ type: "reference", to: [{ type: "testimonial" }] }],
      description: "References to testimonial documents.",
    }),
    defineField({
      name: "ctaTitle",
      type: "string",
      title: "Call to Action Section Title",
      initialValue: "Prêt à rejoindre notre communauté ?",
    }),
    defineField({
      name: "ctaDescription",
      type: "string",
      title: "Call to Action Section Description",
      initialValue:
        "Découvrez comment Les Hirondelles peut accompagner votre enfant vers l'excellence et la réussite.",
    }),
    defineField({
      name: "ctaCards",
      title: "Call to Action Cards",
      type: "array",
      of: [
        {
          type: "object",
          name: "ctaCard",
          fields: [
            defineField({
              name: "icon",
              type: "string", // Again, consider a more robust icon solution
              title: "Card Icon (Emoji or SVG Identifier)",
            }),
            defineField({
              name: "title",
              type: "string",
              title: "Card Title",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              type: "string",
              title: "Card Description",
            }),
            defineField({
              name: "link",
              type: "string",
              title: "Card Link",
              description:
                "Use '/page' for internal pages, '#section' for page sections, or full URLs for external links",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "linkLabel",
              type: "string",
              title: "Card Link Label",
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "heroTitle",
      subtitle: "heroSubtitle",
      media: "heroImages",
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || "Home Page",
        subtitle: subtitle || "",
        media,
      };
    },
  },
});
