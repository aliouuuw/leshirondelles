import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import type { ClassLevelTiersBlock as ClassLevelTiersBlockType } from "@/sanity/lib/utils";

export const ClassLevelTiersBlock = ({
  block,
}: {
  block: ClassLevelTiersBlockType;
}) => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="section-header-creative mb-16 text-center">
          {block.title && (
            <h2 className="section-title-creative">{block.title}</h2>
          )}
          {block.description && (
            <p className="section-description-creative mt-4">
              {block.description}
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {block.levels?.map((level) => (
            <div
              key={level._key}
              className="card overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              {level.image && (
                <div className="relative h-64 w-full">
                  <Image
                    src={urlFor(level.image).width(400).height(300).url()}
                    alt={level.name || "Class level image"}
                    fill
                    className="object-cover"
                  />
                  {level.age && (
                    <div className="absolute top-4 left-4 bg-accent text-black px-3 py-1 text-sm font-semibold">
                      {level.age}
                    </div>
                  )}
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {level.name}
                </h3>
                {level.focus && (
                  <p className="text-gray-600 mb-4">{level.focus}</p>
                )}
                {level.highlights && (
                  <div className="space-y-2">
                    {level.highlights.map((highlight, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm text-gray-500"
                      >
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
