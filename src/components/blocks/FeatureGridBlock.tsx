import React from "react";
import type { FeatureGridBlock as FeatureGridBlockType } from "@/sanity/lib/utils";
import { SanityIcon } from "../SanityIcon";

export const FeatureGridBlock = ({
  block,
}: {
  block: FeatureGridBlockType;
}) => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="section-header-creative mb-16">
          <div>
            {block.title && (
              <h2 className="section-title-creative">{block.title}</h2>
            )}
            {block.description && (
              <p className="section-description-creative">
                {block.description}
              </p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {block.features?.map((feature) => (
            <div
              key={feature._key}
              className="card p-8 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              {feature.icon && (
                <div className="text-accent mb-6 h-6 w-6">
                  <SanityIcon icon={feature.icon} />
                </div>
              )}
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
 