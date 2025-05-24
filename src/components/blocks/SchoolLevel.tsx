import React from "react";
import Image from "next/image";
import type { SchoolLevelBlock } from "./types";
import type { Page } from "@/payload-types";

type RichText = {
  root: {
    children: {
      type: string;
      children?: { text: string }[];
    }[];
  };
};

export const SchoolLevel: React.FC<SchoolLevelBlock> = ({
  title,
  description,
  level,
  showCurriculum,
  showGallery,
  callToAction,
}) => {
  const levelData = typeof level === "object" ? level : null;
  if (!levelData) return null;

  const heroImage =
    typeof levelData.heroImage === "object" ? levelData.heroImage : null;

  const getButtonUrl = () => {
    if (!callToAction) return "#";
    if (
      callToAction.linkType === "internal" &&
      typeof callToAction.internalLink === "object"
    ) {
      return `/${(callToAction.internalLink as Page).slug}`;
    }
    if (callToAction.linkType === "external" && callToAction.externalUrl) {
      return callToAction.externalUrl;
    }
    return "#";
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Image Section */}
          <div className="mb-10 lg:mb-0">
            {heroImage?.url ? (
              <Image
                src={heroImage.url}
                alt={levelData.name}
                width={800}
                height={600}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            ) : (
              <div className="bg-gray-200 rounded-lg aspect-video" />
            )}
          </div>

          {/* Content Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {title || levelData.name}
            </h2>
            {description && (
              <p className="text-xl text-gray-600 mb-6">{description}</p>
            )}
            {levelData.ageRange && (
              <p className="text-lg text-blue-600 mb-6">
                Âge: {levelData.ageRange}
              </p>
            )}

            {/* Curriculum Overview */}
            {showCurriculum && levelData.curriculumOverview && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Programme
                </h3>
                <div className="prose prose-lg text-gray-600">
                  {(levelData.curriculumOverview as RichText).root.children.map(
                    (node, i) => {
                      if (node.children && Array.isArray(node.children)) {
                        console.log(node.children);
                        return (
                          <p key={i}>
                            {node.children.map((child) => child.text).join("")}
                          </p>
                        );
                      }
                      return null;
                    }
                  )}
                </div>
              </div>
            )}

            {/* Gallery Preview */}
            {showGallery &&
              levelData.gallery &&
              levelData.gallery.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Galerie
                  </h3>
                  <div className="grid grid-cols-3 gap-4">
                    {levelData.gallery.slice(0, 3).map((item, index) => {
                      const image =
                        typeof item.image === "object" ? item.image : null;
                      if (!image?.url) return null;

                      return (
                        <Image
                          key={index}
                          src={image.url}
                          alt={item.caption || ""}
                          width={400}
                          height={300}
                          className="rounded-lg shadow-sm w-full h-32 object-cover"
                        />
                      );
                    })}
                  </div>
                </div>
              )}

            {/* Call to Action */}
            {callToAction && (
              <a
                href={getButtonUrl()}
                className={`inline-block px-6 py-3 rounded-lg font-medium transition-colors ${
                  callToAction.style === "secondary"
                    ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {callToAction.label}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
