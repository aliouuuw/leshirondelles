"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const slideshowImages = [
  "/images/slideshow/IMG_7671.jpg",
  "/images/slideshow/IMG_7619.jpg",
  "/images/slideshow/IMG_7524.jpg",
  "/images/slideshow/IMG_7513.jpg",
  "/images/slideshow/IMG_6939.jpg",
  "/images/slideshow/IMG_6897.jpg",
  "/images/slideshow/IMG_6809.jpg",
  "/images/slideshow/ELI_8718.JPG",
];

export const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === slideshowImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full">
      {slideshowImages.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Slide ${index + 1}`}
          fill
          priority
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
