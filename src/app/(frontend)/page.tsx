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

// Updated static data for the Hero section
const heroData = {
  title: "Former les leaders de demain au Sénégal",
  subtitle:
    "De la maternelle au collège, nous cultivons l'excellence, l'intégrité et l'esprit communautaire.",
  backgroundImage: { url: "/images/hero-school.jpg" }, // Ensure you have this high-quality image in your public/images folder
  buttons: [
    { label: "Découvrir nos programmes", link: "/programs" },
    { label: "Planifier une visite", link: "/visit" },
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
    <div className="min-h-screen bg-white">
      {/* Fixed Modern Header */}
      <header className="header-fixed">
        <div className="header-container">
          {/* Logo Section */}
          <div className="header-logo">
            <div className="header-logo-icon">
              <span className="text-white font-bold text-lg">LH</span>
            </div>
            <div className="header-logo-text">
              <h1 className="header-logo-title">Les Hirondelles</h1>
              <p className="header-logo-subtitle">Institution d'Excellence</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="header-nav">
            <a href="/" className="nav-link-modern active">
              Accueil
            </a>
            <a href="/about" className="nav-link-modern">
              À propos
            </a>
            <a href="/programs" className="nav-link-modern">
              Programmes
            </a>
            <a href="/admissions" className="nav-link-modern">
              Admissions
            </a>
            <a href="/life" className="nav-link-modern">
              Vie scolaire
            </a>
            <a href="/contact" className="nav-link-modern">
              Contact
            </a>
          </nav>

          {/* Actions */}
          <div className="header-actions">
            <button className="btn-primary">Inscription</button>
            <button className="header-menu-button">
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

      {/* Main Content with proper padding */}
      <main className="main-content">
        {/* Modern Hero Section */}
        <section className="hero-modern">
          <div className="relative z-10 px-6 lg:px-12">
            <div className="max-w-2xl">
              <h1 className="display-text hero-text-white mb-6">
                Formant les
                <span className="text-school-yellow block">Leaders</span>
                de Demain
              </h1>
              <p className="text-large text-white/90 mb-8 leading-relaxed">
                L'Institution Les Hirondelles offre une éducation d'excellence
                du préscolaire au collège, cultivant l'excellence académique et
                les valeurs humaines.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary">
                  Découvrir nos programmes
                </button>
                <button className="btn-outline text-white border-white hover:bg-white hover:text-school-blue">
                  Planifier une visite
                </button>
              </div>
            </div>
          </div>
          <div className="relative z-10 hidden lg:block">
            <img
              src="/images/hero-students.jpg"
              alt="Élèves Les Hirondelles"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Statistics Section */}
        <section className="stats-modern">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid-modern grid-4">
              <div className="stat-item">
                <div className="stat-number">20+</div>
                <div className="stat-label">Années d'Excellence</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Élèves Actifs</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">98%</div>
                <div className="stat-label">Taux de Réussite</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Enseignants Qualifiés</div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="section-modern">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-school-blue mb-6">
                Nos Programmes d'Excellence
              </h2>
              <p className="text-large text-gray-600 max-w-3xl mx-auto">
                Un parcours éducatif complet qui accompagne chaque élève de ses
                premiers pas à sa préparation au BFEM
              </p>
            </div>

            <div className="grid-modern grid-3 space-y-modern">
              {schoolLevels.map((level, index) => (
                <div key={index} className="card-modern group">
                  <div className="image-overlay">
                    <img
                      src={level.image}
                      alt={level.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-school-blue group-hover:text-school-yellow transition-colors">
                        {level.title}
                      </h3>
                      <span className="bg-school-yellow text-school-black px-3 py-1 text-sm font-medium uppercase tracking-wide">
                        {level.ageRange}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {level.description}
                    </p>
                    <div className="space-y-3">
                      {level.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center text-sm">
                          <div className="w-1 h-1 bg-school-yellow mr-4"></div>
                          <span className="text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section with Modern Layout */}
        <section className="section-dark section-modern clip-diagonal">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-white">Notre Mission</h2>
                <div className="space-y-6">
                  <p className="text-large text-white/90 leading-relaxed">
                    L'Institution Les Hirondelles s'engage à offrir une
                    éducation de qualité qui forme les citoyens de demain.
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    Nous cultivons l'excellence académique tout en développant
                    les valeurs humaines essentielles : respect, intégrité,
                    solidarité et persévérance.
                  </p>
                </div>
                <button className="btn-primary">En savoir plus</button>
              </div>
              <div className="relative">
                <img
                  src="/images/about-modern.jpg"
                  alt="Mission Les Hirondelles"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-school-yellow/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* News & Events - Modern Grid */}
        <section className="section-modern section-light">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-school-blue mb-6">Actualités & Événements</h2>
              <p className="text-large text-gray-600">
                Restez connectés à la vie de notre école
              </p>
            </div>

            <div className="grid-modern grid-3">
              {newsEvents.map((item, index) => (
                <article key={index} className="card-modern group">
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <span
                        className={`px-3 py-1 text-xs font-medium uppercase tracking-wide ${
                          item.type === "Événement"
                            ? "bg-school-yellow text-school-black"
                            : "bg-school-blue text-white"
                        }`}
                      >
                        {item.type}
                      </span>
                      <time className="text-sm text-gray-500 font-medium">
                        {item.date}
                      </time>
                    </div>
                    <h3 className="text-school-blue mb-4 group-hover:text-school-yellow transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials - Modern Design */}
        <section className="section-yellow section-modern">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-school-black mb-6">Témoignages</h2>
              <p className="text-large text-school-black/80">
                L'excellence reconnue par notre communauté
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-modern">
                  <blockquote className="text-large text-gray-800 mb-8 leading-relaxed italic">
                    {testimonial.quote}
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-16 h-16 object-cover"
                    />
                    <div>
                      <div className="font-semibold text-school-blue text-lg">
                        {testimonial.author}
                      </div>
                      <div className="text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-dark section-modern">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-white mb-6">
              Prêt à Rejoindre Notre Communauté ?
            </h2>
            <p className="text-large text-white/90 mb-12 leading-relaxed">
              Découvrez comment Les Hirondelles peut accompagner votre enfant
              vers l'excellence et la réussite
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="btn-primary">Planifier une visite</button>
              <button className="btn-outline text-white border-white hover:bg-white hover:text-school-black">
                Télécharger la brochure
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Modern Footer */}
      <footer className="bg-school-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid-modern grid-4 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-school-yellow flex items-center justify-center">
                  <span className="text-school-black font-bold">LH</span>
                </div>
                <div>
                  <h3 className="font-bold text-white">Les Hirondelles</h3>
                  <p className="text-xs text-school-yellow uppercase tracking-wider">
                    Institution d'Excellence
                  </p>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed">
                Formant les leaders de demain avec excellence et bienveillance
                depuis plus de 20 ans.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-school-yellow uppercase tracking-wide text-sm">
                Navigation
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/about"
                    className="text-white/70 hover:text-school-yellow transition-colors"
                  >
                    À propos
                  </a>
                </li>
                <li>
                  <a
                    href="/programs"
                    className="text-white/70 hover:text-school-yellow transition-colors"
                  >
                    Programmes
                  </a>
                </li>
                <li>
                  <a
                    href="/admissions"
                    className="text-white/70 hover:text-school-yellow transition-colors"
                  >
                    Admissions
                  </a>
                </li>
                <li>
                  <a
                    href="/life"
                    className="text-white/70 hover:text-school-yellow transition-colors"
                  >
                    Vie scolaire
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-school-yellow uppercase tracking-wide text-sm">
                Contact
              </h4>
              <div className="space-y-3 text-white/70">
                <p>Dakar, Sénégal</p>
                <p>+221 33 XXX XX XX</p>
                <p>contact@leshirondelles.sn</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-school-yellow uppercase tracking-wide text-sm">
                Suivez-nous
              </h4>
              <div className="flex space-x-4 mb-6">
                <a
                  href="#"
                  className="w-10 h-10 bg-school-blue hover:bg-school-yellow text-white hover:text-school-black flex items-center justify-center transition-all"
                >
                  <span className="text-sm">f</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-school-blue hover:bg-school-yellow text-white hover:text-school-black flex items-center justify-center transition-all"
                >
                  <span className="text-sm">ig</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-school-blue hover:bg-school-yellow text-white hover:text-school-black flex items-center justify-center transition-all"
                >
                  <span className="text-sm">in</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-white/50 text-sm">
              © 2024 Institution Les Hirondelles. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
