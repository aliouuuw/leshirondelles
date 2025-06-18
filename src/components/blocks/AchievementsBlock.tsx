import React from "react";
import type { AchievementsBlock as AchievementsBlockType } from "@/sanity/lib/utils";
import { SanityIcon } from "../SanityIcon"; // Assuming you have a component for icons

export const AchievementsBlock = ({
  block,
}: {
  block: AchievementsBlockType;
}) => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          {block.title && (
            <h2 className="text-3xl font-bold text-accent">{block.title}</h2>
          )}
          {block.description && (
            <p className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto">
              {block.description}
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {block.achievements?.map((achievement) => (
            <div key={achievement._key} className="text-center">
              {achievement.icon && (
                <div className="text-accent mb-4 flex justify-center text-4xl">
                  {/* Assuming SanityIcon can handle the icon object from Sanity */}
                  <SanityIcon icon={achievement.icon} />
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{achievement.title}</h3>
              <p className="text-gray-200">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
