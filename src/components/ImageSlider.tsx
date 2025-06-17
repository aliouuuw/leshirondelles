"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface ImageSliderProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  images: any[]; // Array of Sanity image objects
}

export const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Change image every 5 seconds

      return () => clearInterval(interval);
    }
  }, [images.length]);

  if (!images || images.length === 0) {
    return null; // or a placeholder
  }

  return (
    <div className="relative w-full h-full">
      {images.map((image, index) => (
        <Image
          key={image._key || index} // Use Sanity's _key if available
          src={urlFor(image).width(1920).height(1080).url()}
          alt={image.alt || `Slide ${index + 1}`}
          fill
          priority={index === 0} // Prioritize the first image
          quality={95}
          sizes="100vw"
          className={`hero-background-image object-cover object-center brightness-50 transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};
