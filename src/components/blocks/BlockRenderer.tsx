import React from "react";
import { PortableText } from "@portabletext/react";
import { AchievementsBlock } from "./AchievementsBlock";
import { ClassLevelTiersBlock } from "./ClassLevelTiersBlock";
import { FeatureGridBlock } from "./FeatureGridBlock";
import { ScheduleBlock } from "./ScheduleBlock";
import { TabbedContentBlock } from "./TabbedContentBlock";
import { HeroBlock } from "./HeroBlock";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const portableTextComponents = {
  types: {
    image: ({ value }: { value: any }) => (
      <div className="my-8 relative h-96 w-full">
        <Image
          src={urlFor(value).width(1200).height(600).url()}
          alt={value.alt || "Program image"}
          fill
          className="object-cover"
        />
      </div>
    ),
  },
};

export const BlockRenderer = ({
  programTitle,
  blocks,
}: {
  programTitle: string;
  blocks: any[];
}) => {
  if (!blocks) {
    return null;
  }

  return (
    <>
      {blocks.map((block, index) => {
        switch (block._type) {
          case "block.hero":
            return (
              <HeroBlock
                key={index}
                block={block}
                programTitle={programTitle}
              />
            );
          case "block.achievements":
            return <AchievementsBlock key={index} block={block} />;
          case "block.classLevelTiers":
            return <ClassLevelTiersBlock key={index} block={block} />;
          case "block.featureGrid":
            return <FeatureGridBlock key={index} block={block} />;
          case "block.schedule":
            return <ScheduleBlock key={index} block={block} />;
          case "block.tabbedContent":
            return <TabbedContentBlock key={index} block={block} />;
          case "block":
            // Handle standard Portable Text blocks
            return (
              <section key={index} className="py-12 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                  <div className="prose lg:prose-xl max-w-none">
                    <PortableText
                      value={[block]}
                      components={portableTextComponents}
                    />
                  </div>
                </div>
              </section>
            );
          case "image":
            // Handle standalone images in the pageBuilder
            return (
              <section key={index} className="py-12 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                  {portableTextComponents.types.image({ value: block })}
                </div>
              </section>
            );
          default:
            console.warn("Unsupported block type:", block._type);
            return null;
        }
      })}
    </>
  );
};
