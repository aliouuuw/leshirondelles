import React from "react";
import type { ScheduleBlock as ScheduleBlockType } from "@/sanity/lib/utils";

export const ScheduleBlock = ({ block }: { block: ScheduleBlockType }) => {
  return (
    <section className="py-24 bg-white">
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
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <ul className="divide-y divide-gray-200">
            {block.rows?.map((row) => (
              <li
                key={row._key}
                className="grid grid-cols-3 md:grid-cols-4 gap-4 p-6 items-center hover:bg-gray-50 transition-colors"
              >
                <div className="col-span-1 md:col-span-1 text-primary font-bold">
                  {row.label}
                </div>
                <div className="col-span-2 md:col-span-3 text-gray-700">
                  {row.value}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
 