import { defineType, defineField } from "sanity";
import { FaListUl } from "react-icons/fa";
import { SanityIcon } from "../../../components/SanityIcon";
import * as Lucide from "lucide-react";
import React from "react";

export default defineType({
  name: "block.featureGrid",
  title: "Feature Grid",
  type: "object",
  icon: FaListUl,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      description: "Optional title for this section (e.g., Our Activities).",
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
      rows: 3,
    }),
    defineField({
      name: "features",
      type: "array",
      title: "Features",
      of: [
        {
          type: "object",
          name: "feature",
          fields: [
            defineField({
              name: "icon",
              type: "iconPicker",
              title: "Icon",
              options: {
                providers: ["f7", "fa", "lucide"],
                configurations: [
                  {
                    title: "Lucide Icons",
                    provider: "lucide",
                    icons: () =>
                      Object.entries(Lucide).map(([name, Component]) => {
                        const IconComponent =
                          Component as React.ComponentType<{
                            width: string;
                            height: string;
                          }>;
                        return {
                          name,
                          component: () => (
                            <IconComponent width="1.5em" height="1em" />
                          ),
                          tags: [name],
                        };
                      }),
                  },
                ],
              },
            }),
            defineField({
              name: "title",
              type: "string",
              title: "Title",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              type: "text",
              title: "Description",
              rows: 3,
            }),
          ],
          preview: {
            select: {
              title: "title",
              icon: "icon",
            },
            prepare({ title, icon }) {
              return {
                title,
                media: <SanityIcon icon={icon} />,
              };
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: "title",
      features: "features",
    },
    prepare({ title, features }) {
      return {
        title: title || "Feature Grid",
        subtitle: `${features.length} feature(s)`,
      };
    },
  },
});
