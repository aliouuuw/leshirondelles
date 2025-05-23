/* eslint-disable @typescript-eslint/no-explicit-any */
import { getPayload } from "payload";
import type { Page, Media as MediaType, SiteSetting } from "@/payload-types";
import React, { Fragment } from "react";

import config from "@/payload.config";
import "./styles.css";

// Helper to render Payload blocks
// You might want to create a more robust BlockRenderer component in a separate file
const renderBlock = (block: any, index: number) => {
  switch (block.blockType) {
    case "hero":
      const heroImage = block.backgroundImage as MediaType | null;
      return (
        <section
          key={index}
          className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-800 text-white"
          style={{
            backgroundImage: heroImage?.url ? `url(${heroImage.url})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center">
            <h1 className="text-5xl font-bold mb-6">{block.title}</h1>
            {block.subtitle && (
              <p className="text-xl mb-8 text-gray-200">{block.subtitle}</p>
            )}
            {block.buttons && block.buttons.length > 0 && (
              <div className="flex flex-wrap gap-4 justify-center">
                {block.buttons.map((button: any, i: number) => (
                  <a
                    key={i}
                    href={button.link || "#"}
                    className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                      button.style === "secondary"
                        ? "bg-white text-blue-900 hover:bg-gray-100"
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
    case "richText":
      // Basic RichText rendering - for complex content, consider a dedicated Lexical renderer
      // console.log(block.content.root.children);

      const renderRichTextChildren = (children: any[]): React.ReactNode[] => {
        return children.map((child, i) => {
          if (child.type === "text") {
            // Lexical text node
            let textNode: React.ReactNode = child.text;
            // Lexical uses format bitmask for styles
            // 1: bold, 2: italic, 4: strikethrough, 8: underline, 16: code, etc.
            if (child.format && child.format & 1) {
              // Bold (format 1)
              textNode = (
                <strong key={`bold-${i}`} className="font-bold">
                  {textNode}
                </strong>
              );
            }
            if (child.format && child.format & 2) {
              // Italic (format 2)
              textNode = (
                <em key={`italic-${i}`} className="italic">
                  {textNode}
                </em>
              );
            }
            if (child.format && child.format & 8) {
              // Underline (format 8)
              textNode = (
                <u key={`underline-${i}`} className="underline">
                  {textNode}
                </u>
              );
            }
            // Add other format checks as needed (strikethrough, code, etc.)
            return textNode;
          }

          if (!child.type) {
            return <br key={i} />;
          }

          const childrenContent = child.children
            ? renderRichTextChildren(child.children)
            : null;

          switch (child.tag) {
            case "h1":
              return (
                <h1 key={i} className="text-4xl mb-4">
                  {childrenContent}
                </h1>
              );
            case "h2":
              return (
                <h2 key={i} className="text-3xl">
                  {childrenContent}
                </h2>
              );
            case "h3":
              return (
                <h3 key={i} className="text-2xl mb-4">
                  {childrenContent}
                </h3>
              );
            case "h4":
              return (
                <h4 key={i} className="text-xl mb-4">
                  {childrenContent}
                </h4>
              );
            case "h5":
              return (
                <h5 key={i} className="text-lg mb-4">
                  {childrenContent}
                </h5>
              );
            case "h6":
              return (
                <h6 key={i} className="text-base mb-4">
                  {childrenContent}
                </h6>
              );
            case "ul":
              return (
                <ul key={i} className="list-disc list-inside mb-4">
                  {childrenContent}
                </ul>
              );
            case "ol":
              return (
                <ol key={i} className="list-decimal list-inside mb-4">
                  {childrenContent}
                </ol>
              );
            case "ol":
              return (
                <ol key={i} className="list-decimal list-inside mb-4">
                  {childrenContent}
                </ol>
              );
            case "li":
              return (
                <li key={i} className="mb-2">
                  {childrenContent}
                </li>
              );
            case "link":
              return (
                <a
                  key={i}
                  href={child.url}
                  {...(child.newTab
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {childrenContent}
                </a>
              );
            case "blockquote":
              return (
                <blockquote
                  key={i}
                  className="border-l-4 border-gray-300 pl-4 italic"
                >
                  {childrenContent}
                </blockquote>
              );
            case "code":
              return (
                <pre key={i} className="bg-gray-100 p-4 rounded-md">
                  <code>{childrenContent}</code>
                </pre>
              );
            case "paragraph": // Lexical paragraph type
              return (
                <p key={i} className="mb-4">
                  {childrenContent}
                </p>
              );
            default:
              // Fallback for unknown Slate node types (Payload's RichText default)
              // Or for Lexical, you might need a more specific handler or a library
              if (child.children) return <p key={i}>{childrenContent}</p>; // Common fallback
              return <Fragment key={i}></Fragment>; // Or render nothing
          }
        });
      };
      return (
        <section key={index} className="max-w-4xl mx-auto px-4 py-12">
          {block.content && (
            <div className="prose prose-lg max-w-none">
              {renderRichTextChildren(block.content.root.children)}
            </div>
          )}
        </section>
      );
    case "callToAction":
      return (
        <section key={index} className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            {block.heading && (
              <h2 className="text-3xl font-bold mb-4">{block.heading}</h2>
            )}
            {block.subtext && (
              <p className="text-xl text-gray-600 mb-8">{block.subtext}</p>
            )}
            {block.buttons && block.buttons.length > 0 && (
              <div className="flex flex-wrap gap-4 justify-center">
                {block.buttons.map((button: any, i: number) => {
                  const url =
                    button.linkType === "internal" &&
                    typeof button.internalLink === "object" &&
                    button.internalLink?.slug
                      ? `/${(button.internalLink as Page).slug}`
                      : button.linkType === "external"
                        ? button.externalUrl
                        : "#";
                  return (
                    <a
                      key={i}
                      href={url || "#"}
                      className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                        button.style === "secondary"
                          ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
                          : "bg-blue-600 text-white hover:bg-blue-700"
                      }`}
                    >
                      {button.label}
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      );
    // Add cases for other block types (ImageBlock, etc.) as you create them
    default:
      return (
        <div
          key={index}
          className="max-w-4xl mx-auto px-4 py-8 text-center text-gray-500"
        >
          <p>Unsupported block type: {(block as any).blockType}</p>
        </div>
      );
  }
};

export default async function HomePage() {
  // const headersList = getHeaders(); // Correct usage of getHeaders
  const payload = await getPayload({ config: config }); // Use the resolved config

  let homePageData: Page | null = null;
  let siteSettingsData: SiteSetting | null = null;

  try {
    // Fetch the "Accueil" page data
    const homePageQuery = await payload.find({
      collection: "pages",
      where: {
        slug: {
          equals: "home",
        },
      },
      limit: 1,
      locale: null, // Fetch French content
      depth: 2, // Increase depth to populate related fields like images
    });
    homePageData = homePageQuery.docs[0] || null;

    // Fetch Site Settings
    siteSettingsData = await payload.findGlobal({
      slug: "siteSettings",
      locale: null, // Fetch French content
      depth: 1,
    });
  } catch (error) {
    console.error("Error fetching data for HomePage:", error);
    // Handle error appropriately, maybe show an error message
  }

  // Basic RichText rendering for footer - adapt from renderBlock if needed
  const renderFooterRichText = (content: any[]): React.ReactNode[] => {
    return content.map((node, i) => {
      if (node.children && Array.isArray(node.children)) {
        return (
          <p key={i}>
            {node.children.map((child: any) => child.text).join("")}
          </p>
        ); // Simplistic rendering
      }
      return <React.Fragment key={i}></React.Fragment>;
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            {siteSettingsData?.siteTitle || "Les Hirondelles"}
          </h1>
        </div>
      </header>

      <main className="flex-grow">
        {homePageData ? (
          homePageData.layout?.map((block, index) => renderBlock(block, index))
        ) : (
          <div className="max-w-4xl mx-auto px-4 py-16 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Bienvenue !
            </h1>
            <p className="text-gray-600 mb-2">
              Contenu de la page d&apos;accueil en cours de chargement ou non
              disponible.
            </p>
            <p className="text-gray-600 mb-8">
              Veuillez vérifier la console du serveur pour les erreurs de
              récupération de données.
            </p>
            <a
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              href={(config as any).routes?.admin || "/admin"}
              rel="noopener noreferrer"
              target="_blank"
            >
              Aller au panneau d&apos;administration
            </a>
          </div>
        )}
      </main>

      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              {siteSettingsData?.footerText && (
                <div className="prose prose-invert">
                  {renderFooterRichText(
                    siteSettingsData.footerText.root.children
                  )}
                </div>
              )}
            </div>
            <div className="space-y-4">
              <p className="text-gray-300">
                Contact: {siteSettingsData?.contactEmail || "non spécifié"}
              </p>
              <p className="text-gray-300">
                Tel: {siteSettingsData?.phoneNumber || "non spécifié"}
              </p>
              <p className="text-gray-300">
                {siteSettingsData?.address || "Adresse non spécifiée"}
              </p>
              {siteSettingsData?.socialMediaLinks && (
                <div className="flex gap-4 mt-6">
                  {siteSettingsData.socialMediaLinks.map(
                    (social: any, index: number) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {social.platform}
                      </a>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
