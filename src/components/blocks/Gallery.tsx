import React from "react";
import Image from "next/image";
import type { GalleryBlock } from "./types";

export const Gallery: React.FC<GalleryBlock> = ({
  title,
  description,
  images,
  layout = "grid",
}) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            {title}
          </h2>
        )}
        {description && (
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            {description}
          </p>
        )}

        <div
          className={`${
            layout === "masonry"
              ? "columns-1 md:columns-2 lg:columns-3 gap-4"
              : layout === "carousel"
                ? "flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory"
                : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          }`}
        >
          {images.map((item, index) => {
            const image = typeof item.image === "object" ? item.image : null;
            if (!image?.url) return null;

            return (
              <figure
                key={index}
                className={`${
                  layout === "masonry"
                    ? "break-inside-avoid mb-4"
                    : layout === "carousel"
                      ? "flex-none w-80 snap-center"
                      : ""
                } group relative`}
              >
                <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-200">
                  <Image
                    src={image.url}
                    alt={item.caption || ""}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
                  />
                </div>
                {item.caption && (
                  <figcaption className="mt-2 text-sm text-center text-gray-600">
                    {item.caption}
                  </figcaption>
                )}
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
};
