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

const contactInfo = [
  {
    icon: <FaPhone className="w-6 h-6" />,
    title: "Téléphone",
    details: ["+221 33 XXX XX XX", "+221 77 XXX XX XX"],
    description: "Lundi - Vendredi: 8h00 - 17h00",
  },
  {
    icon: <FaEnvelope className="w-6 h-6" />,
    title: "Email",
    details: ["contact@leshirondelles.sn", "inscription@leshirondelles.sn"],
    description: "Réponse sous 24h",
  },
  {
    icon: <FaMapMarkerAlt className="w-6 h-6" />,
    title: "Adresse",
    details: ["Avenue Cheikh Anta Diop", "Dakar, Sénégal"],
    description: "Face à l'Université Cheikh Anta Diop",
  },
  {
    icon: <FaWhatsapp className="w-6 h-6" />,
    title: "WhatsApp",
    details: ["+221 77 XXX XX XX"],
    description: "Disponible 24h/7j",
  },
];

const socialMedia = [
  {
    icon: <FaFacebook className="w-6 h-6" />,
    name: "Facebook",
    url: "#",
    handle: "@LesHirondellesSN",
  },
  {
    icon: <FaInstagram className="w-6 h-6" />,
    name: "Instagram",
    url: "#",
    handle: "@leshirondelles_sn",
  },
  {
    icon: <FaLinkedin className="w-6 h-6" />,
    name: "LinkedIn",
    url: "#",
    handle: "Institution Les Hirondelles",
  },
];

const departmentContacts = [
  {
    department: "Direction Générale",
    contact: "Mme. Aïssatou Diop",
    email: "direction@leshirondelles.sn",
    phone: "+221 33 XXX XX XX",
  },
  {
    department: "Admission",
    contact: "Service des Inscriptions",
    email: "inscription@leshirondelles.sn",
    phone: "+221 77 XXX XX XX",
  },
  {
    department: "Vie Scolaire",
    contact: "Mme. Fatoumata Sarr",
    email: "viescolaire@leshirondelles.sn",
    phone: "+221 77 XXX XX XX",
  },
  {
    department: "Comptabilité",
    contact: "Service Financier",
    email: "comptabilite@leshirondelles.sn",
    phone: "+221 33 XXX XX XX",
  },
];

const officeHours = [
  { day: "Lundi - Vendredi", hours: "8h00 - 17h00" },
  { day: "Samedi", hours: "8h00 - 12h00" },
  { day: "Dimanche", hours: "Fermé" },
];

export default function ContactPage() {
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
                  <span className="block text-gray-900">Contactez-nous</span>
                </h1>

                <div className="max-w-xl">
                  <p className="text-xl text-gray-600 leading-relaxed mb-6">
                    Nous sommes là pour répondre à toutes vos questions
                    concernant l&apos;éducation de votre enfant. N&apos;hésitez
                    pas à nous contacter par le moyen qui vous convient le
                    mieux.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-8 border-l-4 border-accent">
                <div className="flex items-start gap-4">
                  <FaClock className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Horaires d&apos;ouverture
                    </h3>
                    <div className="space-y-1 text-gray-700">
                      {officeHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between">
                          <span>{schedule.day}:</span>
                          <span className="font-medium">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                <div className="relative h-[500px] w-full">
                  <Image
                    src="/images/contact/contact-hero.jpg"
                    alt="Contact Les Hirondelles"
                    fill
                    className="object-cover"
                  />
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
              <h2 className="section-title-creative">Nos Coordonnées</h2>
              <p className="section-description-creative">
                Plusieurs moyens de nous joindre pour votre commodité
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="card p-8 text-center transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                <div className="text-primary mb-6 flex justify-center">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 color-black">
                  {info.title}
                </h3>
                <div className="space-y-2 mb-4 text-center">
                  {info.details.map((detail, i) => (
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

      {/* Contact Form & Map */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4 color-black">
                  Envoyez-nous un message
                </h2>
                <p className="text-gray-600">
                  Remplissez ce formulaire et nous vous répondrons dans les plus
                  brefs délais.
                </p>
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
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <div className="relative">
                      <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="tel"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 focus:border-primary focus:outline-none transition-colors"
                        placeholder="+221 XX XXX XX XX"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nom de l&apos;enfant
                    </label>
                    <div className="relative">
                      <FaChild className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 focus:border-primary focus:outline-none transition-colors"
                        placeholder="Nom de votre enfant"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">Choisissez un sujet</option>
                    <option value="admission">Demande d&apos;admission</option>
                    <option value="information">
                      Demande d&apos;information
                    </option>
                    <option value="visite">Planifier une visite</option>
                    <option value="rdv">Prendre rendez-vous</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Décrivez votre demande en détail..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn btn-primary flex items-center justify-center gap-2"
                >
                  <FaPaperPlane className="w-4 h-4" />
                  Envoyer le message
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div>
                <h3 className="text-2xl font-bold mb-4 color-black">
                  Notre Localisation
                </h3>
                <div className="bg-gray-300 h-64 flex items-center justify-center text-gray-600">
                  <div className="text-center">
                    <FaMapMarkerAlt className="w-8 h-8 mx-auto mb-2" />
                    <p>Carte interactive</p>
                    <p className="text-sm">Avenue Cheikh Anta Diop, Dakar</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Face à l&apos;Université Cheikh Anta Diop, près de la station
                  Total
                </p>
              </div>

              {/* Department Contacts */}
              <div>
                <h3 className="text-2xl font-bold mb-6 color-black">
                  Contacts par Service
                </h3>
                <div className="space-y-4">
                  {departmentContacts.map((dept, index) => (
                    <div key={index} className="card p-6">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {dept.department}
                      </h4>
                      <p className="text-gray-700 mb-1">{dept.contact}</p>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>{dept.email}</p>
                        <p>{dept.phone}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="section-header-creative mb-16">
            <div>
              <h2 className="section-title-creative">Suivez-nous</h2>
              <p className="section-description-creative">
                Restez connectés avec notre communauté scolaire
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="card p-8 text-center transition-all duration-300 hover:transform hover:-translate-y-1 group"
              >
                <div className="text-primary mb-6 flex justify-center group-hover:text-accent transition-colors">
                  {social.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 color-black">
                  {social.name}
                </h3>
                <p className="text-gray-600">{social.handle}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à Rejoindre Notre Famille ?
            </h2>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Contactez-nous dès aujourd&apos;hui pour découvrir comment Les
              Hirondelles peut accompagner votre enfant vers l&apos;excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="tel:+22133XXXXXX"
                className="btn btn-accent flex items-center gap-2"
              >
                <FaPhone className="w-4 h-4" />
                Appeler Maintenant
              </a>
              <a
                href="https://wa.me/22177XXXXXX"
                className="flex items-center gap-2 font-family-poppins font-medium text-[0.875rem] px-[2rem] py-[1rem] tracking-[0.025em] text-white border-1 border-white hover:underline transition-all duration-300 translate-y-0 hover:translate-y-[-1px]"
              >
                <FaWhatsapp className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
