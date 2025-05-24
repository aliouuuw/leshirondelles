import React from "react";
import type { HeroBlock } from "./types";

export const Hero: React.FC<HeroBlock> = ({
  title,
  subtitle,
  backgroundImage,
  buttons,
}) => {
  const bgImageUrl =
    typeof backgroundImage === "object" && backgroundImage?.url
      ? backgroundImage.url
      : undefined;

  return (
    <section
      className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-800 text-white"
      style={{
        backgroundImage: bgImageUrl ? `url(${bgImageUrl})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold mb-6">{title}</h1>
        {subtitle && <p className="text-xl mb-8 text-gray-200">{subtitle}</p>}
        {buttons && buttons.length > 0 && (
          <div className="flex flex-wrap gap-4 justify-center">
            {buttons.map((button, i) => (
              <a
                key={i}
                href={button.link || "#"}
                className="px-6 py-3 rounded-lg font-medium transition-colors bg-blue-600 text-white hover:bg-blue-700"
              >
                {button.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
