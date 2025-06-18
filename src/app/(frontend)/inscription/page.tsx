import React from "react";
import Image from "next/image";
import {
  FaGraduationCap,
  FaFileAlt,
  FaCalendarAlt,
  FaUserTie,
  FaClipboardList,
  FaMoneyBillWave,
  FaCheckCircle,
  FaClock,
  FaDownload,
  FaPhone,
  FaEnvelope,
  FaChild,
  FaUser,
  FaHome,
} from "react-icons/fa";
import {
  getInscriptionPage,
  type InscriptionStep,
  type FeeCategory,
  type FeeItem,
} from "@/sanity/lib/utils";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

export const revalidate = 60;

// A map to render icons based on their string name from Sanity
const iconMap: { [key: string]: React.ReactNode } = {
  FaGraduationCap: <FaGraduationCap className="w-6 h-6" />,
  FaFileAlt: <FaFileAlt className="w-6 h-6" />,
  FaCalendarAlt: <FaCalendarAlt className="w-4 h-4" />,
  FaUserTie: <FaUserTie className="w-6 h-6" />,
  FaClipboardList: <FaClipboardList className="w-6 h-6" />,
  FaMoneyBillWave: <FaMoneyBillWave className="w-6 h-6" />,
  FaCheckCircle: <FaCheckCircle className="w-6 h-6" />,
  FaClock: <FaClock className="w-4 h-4" />,
  FaDownload: <FaDownload className="w-4 h-4" />,
  FaPhone: <FaPhone className="w-4 h-4" />,
  FaEnvelope: <FaEnvelope className="w-4 h-4" />,
  FaChild: <FaChild className="w-4 h-4" />,
  FaUser: <FaUser className="w-4 h-4" />,
  FaHome: <FaHome className="w-4 h-4" />,
};

export default async function AdmissionsPage() {
  const data = await getInscriptionPage();

  if (!data) {
    return <div>Loading...</div>; // Or a custom fallback component
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 pt-20">
      {/* Hero Section */}
      <section className="relative bg-white text-gray-900 py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
        </div>

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-accent"></div>
                <span className="text-sm font-semibold text-primary tracking-wider uppercase">
                  Admissions
                </span>
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="block text-gray-900">{data.heroTitle}</span>
                </h1>

                <div className="max-w-xl">
                  <p className="text-xl text-gray-600 leading-relaxed mb-6">
                    {data.heroDescription}
                  </p>

                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    {data.inscriptionSteps &&
                      data.inscriptionSteps.length > 0 && (
                        <div className="flex items-center gap-2">
                          {iconMap.FaClock} {/* Use the icon from the map */}
                          <span>
                            Processus {data.inscriptionSteps.length} étapes
                          </span>
                        </div>
                      )}
                  </div>
                </div>
              </div>

              {data.contactCtaTitle && data.contactButtonLabel && (
                <div className="bg-gray-50 p-8 border-l-4 border-accent">
                  <div className="flex items-start gap-4">
                    <FaGraduationCap className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {data.contactCtaTitle}
                      </h3>
                      <p className="text-sm text-gray-700">
                        {data.contactCtaDescription}
                      </p>
                      <Link
                        href={data.contactButtonLink}
                        className="mt-4 inline-block btn btn-secondary"
                      >
                        {data.contactButtonLabel}
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                <div className="relative h-[500px] w-full">
                  {data.heroImage && (
                    <Image
                      src={urlFor(data.heroImage).width(800).height(500).url()}
                      alt={data.heroTitle || "Inscription Hero"}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-accent"></div>
                <div className="absolute -bottom-6 -right-6 w-8 h-8 bg-primary"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="section-header-creative mb-16">
            <div>
              <h2 className="section-title-creative">{data.processTitle}</h2>
              <p className="section-description-creative">
                {data.processDescription}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.inscriptionSteps?.map(
              (process: InscriptionStep, index: number) => (
                <div
                  key={index}
                  className="card p-8 transition-all duration-300 hover:transform hover:-translate-y-1 text-center"
                >
                  <div className="text-primary mb-6 flex justify-center text-4xl">
                    {process.icon && iconMap[process.icon]
                      ? iconMap[process.icon]
                      : null}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 color-black">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {process.description}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <FaClock className="w-4 h-4" />
                    <span>{process.stepNumber}</span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Required Documents Section */}
      {data.requiredDocuments && data.requiredDocuments.length > 0 && (
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="section-header-creative mb-16">
              <div>
                <h2 className="section-title-creative">
                  {data.requiredDocumentsTitle}
                </h2>
                <p className="section-description-creative">
                  {data.requiredDocumentsDescription}
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Documents Communs
              </h3>
              <ul className="list-disc list-inside space-y-3 text-gray-700">
                {data.requiredDocuments.map((doc: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <FaCheckCircle className="text-primary mt-1 mr-2 flex-shrink-0" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Tuition Fees Section */}
      {data.feeCategories && data.feeCategories.length > 0 && (
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="section-header-creative mb-16">
              <div>
                <h2 className="section-title-creative">{data.feesTitle}</h2>
                <p className="section-description-creative">
                  {data.feesDescription}
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border-collapse shadow-lg rounded-lg">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="py-4 px-6 text-left text-lg font-semibold rounded-tl-lg">
                      Catégorie
                    </th>
                    <th className="py-4 px-6 text-left text-lg font-semibold">
                      Description
                    </th>
                    <th className="py-4 px-6 text-left text-lg font-semibold rounded-tr-lg">
                      Montant
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.feeCategories.map(
                    (category: FeeCategory, categoryIndex: number) => (
                      <React.Fragment key={categoryIndex}>
                        <tr className="bg-gray-100 border-b border-gray-200">
                          <td
                            colSpan={3}
                            className="py-3 px-6 font-bold text-gray-800 text-lg"
                          >
                            {category.categoryName}
                          </td>
                        </tr>
                        {category.items.map(
                          (item: FeeItem, itemIndex: number) => (
                            <tr
                              key={itemIndex}
                              className="border-b border-gray-200 hover:bg-gray-50"
                            >
                              <td className="py-3 px-6 text-gray-700"></td>
                              <td className="py-3 px-6 text-gray-700">
                                {item.description}
                              </td>
                              <td className="py-3 px-6 text-gray-700 font-medium">
                                {item.amount}
                              </td>
                            </tr>
                          )
                        )}
                      </React.Fragment>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Brochure Download CTA */}
      {data.downloadBrochureCtaTitle && data.brochureFile && (
        <section className="py-24 bg-primary text-white">
          <div className="container mx-auto px-6 max-w-6xl text-center">
            <h2 className="text-4xl font-bold mb-6">
              {data.downloadBrochureCtaTitle}
            </h2>
            <p className="text-lg mb-10 opacity-90">
              {data.downloadBrochureCtaDescription}
            </p>
            <Link
              href={urlFor(data.brochureFile).url()}
              download
              className="btn btn-white inline-flex items-center gap-3"
            >
              <FaDownload /> {data.brochureLabel || "Télécharger la Brochure"}
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
