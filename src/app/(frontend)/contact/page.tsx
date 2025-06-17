import React from "react";
import Image from "next/image";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaClock,
  FaUser,
  FaChild,
  FaPaperPlane,
} from "react-icons/fa";
import {
  getContactPage,
  type ContactPage,
  type HourEntry,
  type ContactInfoEntry,
  type SocialLink,
  type DepartmentContact,
} from "@/sanity/lib/utils";
import { urlFor } from "@/sanity/lib/image";

export const revalidate = 60;

// A map to render icons based on their string name from Sanity
const iconMap: { [key: string]: React.ReactNode } = {
  FaPhone: <FaPhone className="w-6 h-6" />,
  FaEnvelope: <FaEnvelope className="w-6 h-6" />,
  FaMapMarkerAlt: <FaMapMarkerAlt className="w-6 h-6" />,
  FaWhatsapp: <FaWhatsapp className="w-6 h-6" />,
  FaFacebook: <FaFacebook className="w-6 h-6" />,
  FaInstagram: <FaInstagram className="w-6 h-6" />,
  FaLinkedin: <FaLinkedin className="w-6 h-6" />,
  FaClock: <FaClock className="w-6 h-6" />,
  FaUser: <FaUser className="w-6 h-6" />,
  FaChild: <FaChild className="w-6 h-6" />,
  FaPaperPlane: <FaPaperPlane className="w-6 h-6" />,
};

export default async function ContactPage() {
  const { data } = await getContactPage();

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
                  Contact
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
                </div>
              </div>

              {data.officeHoursTitle &&
                data.officeHours &&
                data.officeHours.length > 0 && (
                  <div className="bg-gray-50 p-8 border-l-4 border-accent">
                    <div className="flex items-start gap-4">
                      <FaClock className="w-6 h-6 text-accent mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          {data.officeHoursTitle}
                        </h3>
                        <div className="space-y-1 text-gray-700">
                          {data.officeHours.map(
                            (schedule: HourEntry, index: number) => (
                              <div key={index} className="flex justify-between">
                                <span>{schedule.day}:</span>
                                <span className="font-medium">
                                  {schedule.hours}
                                </span>
                              </div>
                            )
                          )}
                        </div>
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
                      alt={data.heroTitle || "Contact Hero"}
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

      {/* Contact Information */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="section-header-creative mb-16">
            <div>
              <h2 className="section-title-creative">
                {data.contactInfoTitle}
              </h2>
              <p className="section-description-creative">
                {data.contactInfoDescription}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.contactInfo?.map((info: ContactInfoEntry, index: number) => (
              <div
                key={index}
                className="card p-8 text-center transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                <div className="text-primary mb-6 flex justify-center">
                  {info.icon && iconMap[info.icon] ? iconMap[info.icon] : null}
                </div>
                <h3 className="text-xl font-semibold mb-4 color-black">
                  {info.title}
                </h3>
                <div className="space-y-2 mb-4 text-center">
                  {info.details.map((detail, i: number) => (
                    <p
                      key={i}
                      className="text-gray-700 break-words whitespace-normal font-medium"
                    >
                      {detail}
                    </p>
                  ))}
                </div>
                <p className="text-sm text-gray-500">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      {data.socialMediaLinks && data.socialMediaLinks.length > 0 && (
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="section-header-creative mb-16 text-center">
              <div>
                <h2 className="section-title-creative">
                  {data.socialMediaTitle}
                </h2>
                <p className="section-description-creative">
                  {data.socialMediaDescription}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              {data.socialMediaLinks.map((link: SocialLink, index: number) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors duration-300 flex items-center space-x-3"
                >
                  {link.icon && iconMap[link.icon] ? iconMap[link.icon] : null}
                  <span className="text-lg font-medium">{link.name}</span>
                  {link.handle && (
                    <span className="text-sm opacity-75">({link.handle})</span>
                  )}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Department Contacts */}
      {data.departmentContacts && data.departmentContacts.length > 0 && (
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="section-header-creative mb-16">
              <div>
                <h2 className="section-title-creative">
                  {data.departmentContactsTitle}
                </h2>
                <p className="section-description-creative">
                  {data.departmentContactsDescription}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.departmentContacts.map(
                (contact: DepartmentContact, index: number) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg shadow-sm"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {contact.department}
                    </h3>
                    {contact.contactPerson && (
                      <p className="text-gray-700">
                        Contact: {contact.contactPerson}
                      </p>
                    )}
                    {contact.email && (
                      <p className="text-gray-700">
                        Email:{" "}
                        <a
                          href={`mailto:${contact.email}`}
                          className="text-primary hover:underline"
                        >
                          {contact.email}
                        </a>
                      </p>
                    )}
                    {contact.phone && (
                      <p className="text-gray-700">
                        Téléphone:{" "}
                        <a
                          href={`tel:${contact.phone}`}
                          className="text-primary hover:underline"
                        >
                          {contact.phone}
                        </a>
                      </p>
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      )}

      {/* Contact Form & Map */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4 color-black">
                  {data.contactFormTitle}
                </h2>
                <p className="text-gray-600">{data.contactFormDescription}</p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <div className="relative">
                      <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 focus:border-primary focus:outline-none transition-colors"
                        placeholder="Votre nom complet"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="email"
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 focus:border-primary focus:outline-none transition-colors"
                        placeholder="Votre email"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Sujet
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-primary focus:outline-none transition-colors"
                    placeholder="Sujet de votre message"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Votre Message *
                  </label>
                  <textarea
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-primary focus:outline-none transition-colors"
                    placeholder="Écrivez votre message ici..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary-lg w-full md:w-auto flex items-center justify-center gap-2"
                >
                  Envoyer le message <FaPaperPlane />
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="relative h-[400px] lg:h-auto rounded-lg overflow-hidden shadow-lg">
              {data.locationMapUrl ? (
                <iframe
                  src={data.locationMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              ) : (
                <div className="flex items-center justify-center h-full bg-gray-200 text-gray-500">
                  Map not available
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
