import React from "react";
import Image from "next/image";
import type { TestimonialBlock } from "./types";

export const Testimonial: React.FC<TestimonialBlock> = ({
  title,
  testimonials,
  layout = "grid",
}) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {title}
          </h2>
        )}

        <div
          className={`${
            layout === "list"
              ? "space-y-8"
              : layout === "carousel"
                ? "flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory"
                : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          }`}
        >
          {testimonials.map((testimonial, index) => {
            const image =
              typeof testimonial.image === "object" ? testimonial.image : null;

            return (
              <div
                key={index}
                className={`${
                  layout === "list"
                    ? "flex items-center gap-8"
                    : layout === "carousel"
                      ? "flex-none w-80 snap-center"
                      : ""
                } bg-gray-50 rounded-xl p-8 shadow-sm`}
              >
                <div className="flex flex-col h-full">
                  <div className="flex-grow">
                    <svg
                      className="h-8 w-8 text-gray-400 mb-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-gray-600 mb-4">{testimonial.quote}</p>
                  </div>
                  <div className="flex items-center">
                    {image?.url && (
                      <Image
                        src={image.url}
                        alt={testimonial.author}
                        width={48}
                        height={48}
                        className="h-12 w-12 rounded-full object-cover mr-4"
                      />
                    )}
                    <div>
                      <p className="font-semibold text-gray-900">
                        {testimonial.author}
                      </p>
                      {testimonial.role && (
                        <p className="text-gray-500 text-sm">
                          {testimonial.role}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
