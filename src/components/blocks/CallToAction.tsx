import React from "react";
import type { CallToActionBlock, CallToActionButton } from "./types";
import type { Page } from "@/payload-types";

export const CallToAction: React.FC<CallToActionBlock> = ({
  heading,
  subtext,
  buttons,
}) => {
  const getButtonUrl = (button: CallToActionButton) => {
    if (
      button.linkType === "internal" &&
      typeof button.internalLink === "object"
    ) {
      return `/${(button.internalLink as Page).slug}`;
    }
    if (button.linkType === "external" && button.externalUrl) {
      return button.externalUrl;
    }
    return "#";
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {heading && <h2 className="text-3xl font-bold mb-4">{heading}</h2>}
        {subtext && <p className="text-xl text-gray-600 mb-8">{subtext}</p>}
        {buttons && buttons.length > 0 && (
          <div className="flex flex-wrap gap-4 justify-center">
            {buttons.map((button, i) => (
              <a
                key={i}
                href={getButtonUrl(button)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  button.style === "secondary"
                    ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
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
