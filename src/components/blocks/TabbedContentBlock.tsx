"use client";

import React, { useState } from "react";
import type { TabbedContentBlock as TabbedContentBlockType } from "@/sanity/lib/utils";
import { BlockRenderer } from "./BlockRenderer"; // Assuming this can render portable text

export const TabbedContentBlock = ({
  block,
}: {
  block: TabbedContentBlockType;
}) => {
  const [activeTab, setActiveTab] = useState(0);

  if (!block.tabs || block.tabs.length === 0) {
    return null;
  }

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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <ul className="space-y-2">
              {block.tabs.map((tab, index) => (
                <li key={tab._key}>
                  <button
                    onClick={() => setActiveTab(index)}
                    className={`w-full text-left p-4 rounded-lg transition-colors duration-200 ${
                      activeTab === index
                        ? "bg-primary text-white"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    {tab.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                {block.tabs[activeTab].title}
              </h3>
              {/* The content is portable text, so it needs a renderer */}
              <div className="prose prose-lg max-w-none">
                <BlockRenderer
                  blocks={block.tabs[activeTab].content}
                  programTitle=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
