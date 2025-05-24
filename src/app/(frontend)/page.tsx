/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import "./styles.css";
import { getPayload } from "payload";
import config from "@/payload.config";
import type { Page, SiteSetting } from "@/payload-types";
import {
  Hero,
  RichText,
  ImageBlockComponent,
  CallToAction,
  TeacherProfile,
  SchoolLevel,
  Gallery,
  Testimonial,
  ContactForm,
  Calendar,
} from "@/components/blocks";

// Helper to render Payload blocks
const renderBlock = (block: any, index: number) => {
  switch (block.blockType) {
    case "hero":
      return <Hero key={index} {...block} />;
    case "richText":
      return <RichText key={index} {...block} />;
    case "imageBlock":
      return <ImageBlockComponent key={index} {...block} />;
    case "callToAction":
      return <CallToAction key={index} {...block} />;
    case "teacherProfile":
      return <TeacherProfile key={index} {...block} />;
    case "schoolLevel":
      return <SchoolLevel key={index} {...block} />;
    case "gallery":
      return <Gallery key={index} {...block} />;
    case "testimonial":
      return <Testimonial key={index} {...block} />;
    case "contactForm":
      return <ContactForm key={index} {...block} />;
    case "calendar":
      return <Calendar key={index} {...block} />;
    default:
      return (
        <div
          key={index}
          className="max-w-4xl mx-auto px-4 py-8 text-center text-gray-500"
        >
          <p>Unsupported block type: {block.blockType}</p>
        </div>
      );
  }
};

export default async function HomePage() {
  const payload = await getPayload({ config: config });

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
                  {siteSettingsData.footerText.root.children.map(
                    (node: any, i: number) => {
                      if (node.children && Array.isArray(node.children)) {
                        return (
                          <p key={i}>
                            {node.children
                              .map((child: any) => child.text)
                              .join("")}
                          </p>
                        );
                      }
                      return <React.Fragment key={i}></React.Fragment>;
                    }
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
