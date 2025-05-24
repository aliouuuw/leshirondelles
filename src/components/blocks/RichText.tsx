/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import type { RichTextBlock } from "./types";

export const RichText: React.FC<RichTextBlock> = ({ content }) => {
  const renderNode = (node: RichTextBlock["content"]["root"]) => {
    if (!node.children || !Array.isArray(node.children)) return null;

    return node.children.map((child: any, index: number) => {
      if (child.type === "paragraph") {
        return (
          <p key={index} className="mb-4">
            {child.children?.map((textNode: any, i: number) => (
              <React.Fragment key={i}>{textNode.text}</React.Fragment>
            ))}
          </p>
        );
      }

      if (child.type === "heading") {
        const HeadingTag = `h${child.tag || "2"}` as React.ElementType;
        return (
          <HeadingTag key={index} className="mb-4 font-bold">
            {child.children?.map((textNode: any, i: number) => (
              <React.Fragment key={i}>{textNode.text}</React.Fragment>
            ))}
          </HeadingTag>
        );
      }

      if (child.type === "list") {
        const ListTag = child.listType === "ordered" ? "ol" : "ul";
        return (
          <ListTag key={index} className="mb-4 list-inside">
            {child.children?.map((listItem: any, i: number) => (
              <li key={i}>
                {listItem.children?.map((textNode: any, j: number) => (
                  <React.Fragment key={j}>{textNode.text}</React.Fragment>
                ))}
              </li>
            ))}
          </ListTag>
        );
      }

      return null;
    });
  };

  return (
    <div className="prose prose-lg max-w-none">{renderNode(content.root)}</div>
  );
};
