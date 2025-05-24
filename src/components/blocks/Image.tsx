import React from "react";
import Image from "next/image";
import type { ImageBlock as ImageBlockType } from "./types";

export const ImageBlock: React.FC<ImageBlockType> = ({ image, caption }) => {
  const imageData = typeof image === "object" ? image : null;
  if (!imageData?.url) return null;

  return (
    <figure className="my-8">
      <div className="aspect-[16/9] w-full overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={imageData.url}
          alt={caption || imageData.alt || ""}
          width={1200}
          height={675}
          className="w-full h-full object-cover"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-gray-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
