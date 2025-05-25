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

// Static data for the homepage
const heroData = {
  title: "Bienvenue à l'Institution Les Hirondelles",
  subtitle:
    "Formant les leaders de demain au Sénégal - De la maternelle au collège",
  backgroundImage: { url: "/images/school-hero.jpg" } as any, // Mock Media object
  buttons: [
    { label: "Découvrir nos programmes", link: "/programs" },
    { label: "Nous contacter", link: "/contact" },
  ],
  blockType: "hero" as const,
};

const quickLinks = [
  {
    title: "Admissions",
    description: "Inscrivez votre enfant",
    icon: "📚",
    link: "/admissions",
  },
  {
    title: "Calendrier",
    description: "Événements et dates importantes",
    icon: "📅",
    link: "/calendar",
  },
  {
    title: "Contact",
    description: "Nous joindre facilement",
    icon: "📞",
    link: "/contact",
  },
  {
    title: "Galerie",
    description: "La vie à l'école",
    icon: "📸",
    link: "/gallery",
  },
];

const schoolLevels = [
  {
    title: "Préscolaire",
    description:
      "Un environnement bienveillant pour les premiers apprentissages",
    ageRange: "3-5 ans",
    highlights: ["Éveil artistique", "Développement moteur", "Socialisation"],
    image: "/images/preschool.jpg",
  },
  {
    title: "Élémentaire",
    description: "Fondations solides pour l'apprentissage académique",
    ageRange: "6-10 ans",
    highlights: ["Français & Mathématiques", "Sciences", "Langues étrangères"],
    image: "/images/elementary.jpg",
  },
  {
    title: "Collège",
    description: "Préparation à l'excellence académique et personnelle",
    ageRange: "11-15 ans",
    highlights: ["Préparation BFEM", "Clubs & activités", "Orientation"],
    image: "/images/middle-school.jpg",
  },
];

const testimonials = [
  {
    quote:
      "Les Hirondelles a donné à ma fille la confiance et les compétences nécessaires pour réussir. L'équipe pédagogique est exceptionnelle.",
    author: "Mme Fatou Diop",
    role: "Parent d'élève",
    image: "/images/parent1.jpg",
  },
  {
    quote:
      "Une école qui allie excellence académique et valeurs humaines. Mon fils s'épanouit chaque jour.",
    author: "M. Amadou Sall",
    role: "Parent d'élève",
    image: "/images/parent2.jpg",
  },
];

const newsEvents = [
  {
    title: "Journée Portes Ouvertes",
    date: "15 Mars 2024",
    description:
      "Venez découvrir notre établissement et rencontrer nos équipes",
    type: "Événement",
  },
  {
    title: "Concours de Sciences",
    date: "22 Mars 2024",
    description: "Nos élèves de collège participent au concours national",
    type: "Actualité",
  },
  {
    title: "Spectacle de fin d'année",
    date: "10 Juin 2024",
    description: "Représentation théâtrale et musicale de nos élèves",
    type: "Événement",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-school-blue/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-school-blue rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">LH</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-school-blue">
                  Les Hirondelles
                </h1>
                <p className="text-sm text-school-yellow font-medium">
                  Institution d'Excellence
                </p>
              </div>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a href="/" className="nav-link active">
                Accueil
              </a>
              <a href="/about" className="nav-link">
                À propos
              </a>
              <a href="/programs" className="nav-link">
                Programmes
              </a>
              <a href="/admissions" className="nav-link">
                Admissions
              </a>
              <a href="/life" className="nav-link">
                Vie scolaire
              </a>
              <a href="/contact" className="nav-link">
                Contact
              </a>
            </nav>

            <button className="md:hidden p-2 text-school-blue hover:bg-school-blue-light rounded-lg transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero {...heroData} />

        {/* Quick Links Section */}
        <section className="py-16 section-yellow">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-school-blue mb-4">
                Accès Rapide
              </h2>
              <p className="text-gray-600">
                Trouvez rapidement ce que vous cherchez
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => (
                <a key={index} href={link.link} className="card group">
                  <div className="p-6">
                    <div className="icon-blue mb-4 group-hover:scale-110 transition-transform">
                      {link.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-school-blue mb-2">
                      {link.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{link.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* About Preview Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <h2 className="text-3xl font-bold text-school-blue mb-6">
                  Notre Mission
                </h2>
                <div className="accent-yellow pl-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    L'Institution Les Hirondelles s'engage à offrir une
                    éducation de qualité qui forme les citoyens de demain. Nous
                    cultivons l'excellence académique tout en développant les
                    valeurs humaines essentielles : respect, intégrité,
                    solidarité et persévérance.
                  </p>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Depuis notre création, nous accompagnons chaque élève dans
                    son épanouissement personnel et sa réussite scolaire, de la
                    maternelle au collège.
                  </p>
                </div>
                <a
                  href="/about"
                  className="btn-primary inline-flex items-center"
                >
                  En savoir plus
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
              <div className="relative animate-slide-in-right">
                <img
                  src="/images/about-preview.jpg"
                  alt="Élèves de Les Hirondelles"
                  className="rounded-lg shadow-xl w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-school-blue/20 to-transparent rounded-lg"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-school-blue font-semibold text-sm">
                    ✨ Plus de 20 ans d'excellence éducative
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* School Levels Section */}
        <section className="py-16 section-blue">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-school-blue mb-4">
                Nos Programmes
              </h2>
              <p className="text-gray-600">
                Un parcours éducatif complet de 3 à 15 ans
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {schoolLevels.map((level, index) => (
                <div key={index} className="card-highlight">
                  <img
                    src={level.image}
                    alt={level.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-school-blue">
                        {level.title}
                      </h3>
                      <span className="text-sm bg-school-yellow text-school-blue px-3 py-1 rounded-full font-medium">
                        {level.ageRange}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{level.description}</p>
                    <div className="space-y-2">
                      {level.highlights.map((highlight, i) => (
                        <div
                          key={i}
                          className="flex items-center text-sm text-gray-700"
                        >
                          <div className="w-2 h-2 bg-school-yellow rounded-full mr-3"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* News & Events Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-school-blue mb-4">
                Actualités & Événements
              </h2>
              <p className="text-gray-600">
                Restez informés de la vie de notre école
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {newsEvents.map((item, index) => (
                <article key={index} className="card">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`text-xs px-3 py-1 rounded-full font-medium ${
                          item.type === "Événement"
                            ? "bg-school-yellow text-school-blue"
                            : "bg-school-blue text-white"
                        }`}
                      >
                        {item.type}
                      </span>
                      <time className="text-sm text-gray-500 font-medium">
                        {item.date}
                      </time>
                    </div>
                    <h3 className="text-lg font-semibold text-school-blue mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
            <div className="text-center mt-8">
              <a href="/news" className="btn-outline">
                Voir toutes les actualités
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 section-yellow">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-school-blue mb-4">
                Témoignages
              </h2>
              <p className="text-gray-600">
                Ce que disent les parents de notre école
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <div className="flex items-start space-x-4 mt-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-16 h-16 rounded-full object-cover border-2 border-school-yellow"
                    />
                    <div className="flex-1">
                      <blockquote className="text-gray-700 mb-4 italic leading-relaxed">
                        {testimonial.quote}
                      </blockquote>
                      <div>
                        <div className="font-semibold text-school-blue">
                          {testimonial.author}
                        </div>
                        <div className="text-sm text-gray-600">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <CallToAction
          blockType="callToAction"
          heading="Prêt à rejoindre notre communauté ?"
          subtext="Découvrez comment Les Hirondelles peut accompagner votre enfant vers la réussite"
          buttons={[
            {
              label: "Planifier une visite",
              linkType: "external",
              externalUrl: "/visit",
            },
            {
              label: "Télécharger la brochure",
              linkType: "external",
              externalUrl: "/brochure",
            },
          ]}
        />
      </main>

      {/* Footer */}
      <footer className="footer-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-school-yellow rounded-full flex items-center justify-center">
                  <span className="text-school-blue font-bold">LH</span>
                </div>
                <div>
                  <h3 className="font-bold text-white">Les Hirondelles</h3>
                  <p className="text-sm text-school-yellow">
                    Institution d'Excellence
                  </p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Formant les leaders de demain avec excellence et bienveillance
                depuis plus de 20 ans.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-school-yellow">
                Navigation
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="/about"
                    className="text-gray-300 hover:text-school-yellow transition-colors"
                  >
                    À propos
                  </a>
                </li>
                <li>
                  <a
                    href="/programs"
                    className="text-gray-300 hover:text-school-yellow transition-colors"
                  >
                    Programmes
                  </a>
                </li>
                <li>
                  <a
                    href="/admissions"
                    className="text-gray-300 hover:text-school-yellow transition-colors"
                  >
                    Admissions
                  </a>
                </li>
                <li>
                  <a
                    href="/life"
                    className="text-gray-300 hover:text-school-yellow transition-colors"
                  >
                    Vie scolaire
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-school-yellow">Contact</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p className="flex items-center">
                  <span className="mr-2">📍</span> Dakar, Sénégal
                </p>
                <p className="flex items-center">
                  <span className="mr-2">📞</span> +221 33 XXX XX XX
                </p>
                <p className="flex items-center">
                  <span className="mr-2">✉️</span> contact@leshirondelles.sn
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-school-yellow">
                Suivez-nous
              </h4>
              <div className="flex space-x-4 mb-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-school-blue hover:bg-school-yellow text-white hover:text-school-blue rounded-full flex items-center justify-center transition-all"
                >
                  📘
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-school-blue hover:bg-school-yellow text-white hover:text-school-blue rounded-full flex items-center justify-content transition-all"
                >
                  📷
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-school-blue hover:bg-school-yellow text-white hover:text-school-blue rounded-full flex items-center justify-center transition-all"
                >
                  💼
                </a>
              </div>
              <div>
                <h5 className="font-medium mb-2 text-school-yellow">
                  Newsletter
                </h5>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="flex-1 px-3 py-2 text-sm bg-gray-800 border border-gray-600 rounded-l-md focus:outline-none focus:border-school-yellow text-white"
                  />
                  <button className="px-4 py-2 bg-school-yellow text-school-blue text-sm rounded-r-md hover:bg-school-yellow-dark font-medium transition-colors">
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>
              &copy; 2024 Institution Les Hirondelles. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
