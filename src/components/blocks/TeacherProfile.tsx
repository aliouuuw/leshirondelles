/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Image from "next/image";
import type { TeacherProfileBlock, RichTextBlock } from "./types";

export const TeacherProfile: React.FC<TeacherProfileBlock> = ({
  title,
  description,
  staff,
  layout = "grid",
}) => {
  return (
    <section className="py-16 bg-white">
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
          className={`grid gap-8 ${
            layout === "list"
              ? "grid-cols-1"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {staff.map((member, index) => {
            const staffMember = typeof member === "object" ? member : null;
            if (!staffMember) return null;

            const photo =
              typeof staffMember.photo === "object" ? staffMember.photo : null;

            return (
              <div
                key={index}
                className={`${
                  layout === "list"
                    ? "flex items-center gap-8"
                    : "flex flex-col items-center text-center"
                } bg-white rounded-lg p-6 shadow-md`}
              >
                {photo?.url && (
                  <div
                    className={`${
                      layout === "list"
                        ? "w-32 h-32 flex-shrink-0"
                        : "w-48 h-48 mb-6"
                    }`}
                  >
                    <Image
                      src={photo.url}
                      alt={staffMember.name}
                      width={192}
                      height={192}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {staffMember.name}
                  </h3>
                  <p className="text-blue-600 mb-3">{staffMember.title}</p>
                  {staffMember.email && (
                    <p className="text-gray-600 mb-3">{staffMember.email}</p>
                  )}
                  {staffMember.bio && (
                    <div className="prose prose-sm max-w-none text-gray-500">
                      {(staffMember.bio as unknown as RichTextBlock).content.root.children.map(
                        (node: any, i: any) => {
                          if (node.children && Array.isArray(node.children)) {
                            return (
                              <p key={i} className="line-clamp-3">
                                {node.children
                                  .map((child: any) => child.text)
                                  .join("")}
                              </p>
                            );
                          }
                          return null;
                        }
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
