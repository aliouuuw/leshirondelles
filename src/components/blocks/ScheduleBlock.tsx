import React from "react";
import type { ScheduleBlock as ScheduleBlockType } from "@/sanity/lib/utils";

export const ScheduleBlock = ({ block }: { block: ScheduleBlockType }) => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-4xl">
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
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="divide-y divide-gray-200">
            {block.rows?.map((row) => (
              <div
                key={row._key}
                className="grid grid-cols-3 md:grid-cols-4 gap-4 p-6 items-center"
              >
                <div className="col-span-1 md:col-span-1 text-primary font-bold">
                  {row.subject}
                </div>
                <div className="col-span-2 md:col-span-3 text-gray-700">
                  {row.hours}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
