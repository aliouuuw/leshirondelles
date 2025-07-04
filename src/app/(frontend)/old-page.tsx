/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import "./styles.css";
import Image from "next/image";
import { ImageSlider } from "@/components/ImageSlider";
import Link from "next/link";

// Helper to render Payload blocks
// const renderBlock = (block: any, index: number) => {
//   switch (block.blockType) {
//     case "hero":
//       return <Hero key={index} {...block} />;
//     case "richText":
//       return <RichText key={index} {...block} />;
//     case "imageBlock":
//       return <ImageBlockComponent key={index} {...block} />;
//     case "callToAction":
//       return <CallToAction key={index} {...block} />;
//     case "teacherProfile":
//       return <TeacherProfile key={index} {...block} />;
//     case "schoolLevel":
//       return <SchoolLevel key={index} {...block} />;
//     case "gallery":
//       return <Gallery key={index} {...block} />;
//     case "testimonial":
//       return <Testimonial key={index} {...block} />;
//     case "contactForm":
//       return <ContactForm key={index} {...block} />;
//     case "calendar":
//       return <Calendar key={index} {...block} />;
//     default:
//       return (
//         <div
//           key={index}
//           className="max-w-4xl mx-auto px-4 py-8 text-center text-gray-500"
//         >
//           <p>Unsupported block type: {block.blockType}</p>
//         </div>
//       );
//   }
// };

// Updated static data for the Hero section
// const heroData = {
//   title: "Former les leaders de demain au Sénégal",
//   subtitle:
//     "De la maternelle au collège, nous cultivons l'excellence, l'intégrité et l'esprit communautaire.",
//   backgroundImage: { url: "/images/hero-school.jpg" }, // Ensure you have this high-quality image in your public/images folder
//   buttons: [
//     { label: "Découvrir nos programmes", link: "/programs" },
//     { label: "Planifier une visite", link: "/visit" },
//   ],
//   blockType: "hero" as const,
// };

// const quickLinks = [
//   {
//     title: "Admissions",
//     description: "Inscrivez votre enfant",
//     icon: "📚",
//     link: "/admissions",
//   },
//   {
//     title: "Calendrier",
//     description: "Événements et dates importantes",
//     icon: "📅",
//     link: "/calendar",
//   },
//   {
//     title: "Contact",
//     description: "Nous joindre facilement",
//     icon: "📞",
//     link: "/contact",
//   },
//   {
//     title: "Galerie",
//     description: "La vie à l'école",
//     icon: "📸",
//     link: "/gallery",
//   },
// ];

const schoolLevels = [
  {
    title: "Préscolaire",
    description:
      "Un environnement bienveillant pour les premiers apprentissages",
    ageRange: "3-5 ans",
    highlights: ["Éveil artistique", "Développement moteur", "Socialisation"],
    image: "/images/programs/preschool.jpg",
  },
  {
    title: "Primaire",
    description: "Fondations solides pour l'apprentissage académique",
    ageRange: "6-10 ans",
    highlights: ["Français & Mathématiques", "Sciences", "Langues étrangères"],
    image: "/images/programs/primary.jpg",
  },
  {
    title: "Collège",
    description: "Préparation à l'excellence académique et personnelle",
    ageRange: "11-15 ans",
    highlights: ["Préparation BFEM", "Clubs & activités", "Orientation"],
    image: "/images/programs/middleschool.jpg",
  },
];

const testimonials = [
  {
    quote:
      "Les Hirondelles a donné à ma fille la confiance et les compétences nécessaires pour réussir. L'équipe pédagogique est exceptionnelle.",
    author: "Mme Fatou Diop",
    role: "Parent d'élève",
    image: "/images/parent1.png",
  },
  {
    quote:
      "Une école qui allie excellence académique et valeurs humaines. Mon fils s'épanouit chaque jour.",
    author: "M. Amadou Sall",
    role: "Parent d'élève",
    image: "/images/parent2.png",
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

const slideshowImages = [
  "/images/slideshow/IMG_7671.jpg",
  "/images/slideshow/IMG_7619.jpg",
  "/images/slideshow/IMG_7524.jpg",
  "/images/slideshow/IMG_7513.jpg",
  "/images/slideshow/IMG_6939.jpg",
  "/images/slideshow/IMG_6897.jpg",
  "/images/slideshow/IMG_6809.jpg",
  "/images/slideshow/ELI_8718.JPG",
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section - Condensed Content */}
        <section className="hero-background-optimized">
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-0">
            <ImageSlider images={slideshowImages} />
            {/* <h1 className="text-purple text-4xl font-bold">
              Background
            </h1> */}
          </div>
          <div className="z-10 absolute top-0 left-0 w-full h-full bg-linear-to-r from-[var(--primary)] to-[var(--accent)]/50 opacity-50"></div>
          <div className="container z-20">
            <div className="hero-content-background">
              <div className="hero-badge-elegant">
                <span>Excellence depuis 20+ ans</span>
              </div>
              <h1 className="hero-title-background">
                Former les leaders
                <br />
                <span className="hero-subtitle">de demain</span>
              </h1>
              <p className="hero-description-background">
                Excellence académique et valeurs humaines du préscolaire au
                collège.
              </p>
              <div className="hero-actions-background">
                <Link href="/programs" className="btn btn-primary-hero">
                  Nos programmes
                </Link>
                <Link href="/visit" className="btn btn-secondary-hero">
                  Planifier une visite
                </Link>
              </div>
              <div className="hero-stats-inline">
                <div className="hero-stat-inline">
                  <span className="stat-number-inline">500+</span>
                  <span className="stat-label-inline">Élèves</span>
                </div>
                <div className="hero-stat-inline">
                  <span className="stat-number-inline">98%</span>
                  <span className="stat-label-inline">Réussite</span>
                </div>
                <div className="hero-stat-inline">
                  <span className="stat-number-inline">20+</span>
                  <span className="stat-label-inline">Années</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Animated Statistics - Horizontal Scroll */}
        <section className="stats-creative">
          <div className="stats-marquee">
            <div className="stats-track">
              <div className="stat-item-creative">
                <span className="stat-number">500+</span>
                <span className="stat-label">Élèves épanouis</span>
              </div>
              <div className="stat-item-creative">
                <span className="stat-number">20+</span>
                <span className="stat-label">Années d&apos;excellence</span>
              </div>
              <div className="stat-item-creative">
                <span className="stat-number">98%</span>
                <span className="stat-label">Taux de réussite</span>
              </div>
              <div className="stat-item-creative">
                <span className="stat-number">50+</span>
                <span className="stat-label">Enseignants dévoués</span>
              </div>
              <div className="stat-item-creative">
                <span className="stat-number">15</span>
                <span className="stat-label">Activités extra-scolaires</span>
              </div>
              {/* Duplicate for seamless loop */}
              <div className="stat-item-creative">
                <span className="stat-number">500+</span>
                <span className="stat-label">Élèves épanouis</span>
              </div>
              <div className="stat-item-creative">
                <span className="stat-number">20+</span>
                <span className="stat-label">Années d&apos;excellence</span>
              </div>
            </div>
          </div>
        </section>

        {/* Programs - Simplified Grid */}
        <section className="programs-simplified">
          <div className="container">
            <div className="section-header-creative">
              <div className="section-number">01</div>
              <div>
                <h2 className="section-title-creative">Nos Programmes</h2>
                <p className="section-description-creative">
                  Un parcours éducatif complet qui accompagne chaque élève vers
                  l&apos;excellence
                </p>
              </div>
            </div>

            <div className="programs-grid-simplified">
              {schoolLevels.map((level, index) => (
                <div key={index} className="program-card-simplified">
                  <div className="program-image-simplified">
                    <Image
                      src={level.image}
                      alt={level.title}
                      width={1000}
                      height={1000}
                      quality={100}
                      className="w-full h-full object-cover"
                    />
                    <div className="program-age-badge">{level.ageRange}</div>
                  </div>
                  <div className="program-content-simplified">
                    <h3 className="program-title-simplified">{level.title}</h3>
                    <p className="program-description-simplified">
                      {level.description}
                    </p>
                    <ul className="program-highlights-simplified">
                      {level.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                    <Link
                      href={`/programs/${level.title.toLowerCase()}`}
                      className="program-link-simplified"
                    >
                      En savoir plus →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission - Simplified Two Column */}
        <section className="mission-simplified">
          <div className="container">
            <div className="section-header-creative">
              <div className="section-number">02</div>
              <div>
                <h2 className="section-title-creative">Notre Mission</h2>
                <p className="section-description-creative">
                  Former les citoyens de demain avec excellence et bienveillance
                </p>
              </div>
            </div>

            <div className="mission-grid">
              <div className="mission-content-simplified">
                <p className="mission-text-large">
                  Nous nous engageons à offrir une éducation de qualité qui
                  forme les citoyens de demain, cultivant l&apos;excellence
                  académique tout en développant les valeurs humaines
                  essentielles.
                </p>
                <p className="mission-text-regular">
                  Depuis notre création, nous accompagnons chaque élève dans son
                  épanouissement personnel et sa réussite scolaire, de la
                  maternelle au collège.
                </p>

                <div className="mission-values-simplified">
                  <div className="value-item-simplified">
                    <div className="value-icon">🎯</div>
                    <div>
                      <h4>Excellence académique</h4>
                      <p>Des programmes rigoureux et adaptés</p>
                    </div>
                  </div>
                  <div className="value-item-simplified">
                    <div className="value-icon">🤝</div>
                    <div>
                      <h4>Valeurs humaines</h4>
                      <p>Respect, intégrité et solidarité</p>
                    </div>
                  </div>
                  <div className="value-item-simplified">
                    <div className="value-icon">🌱</div>
                    <div>
                      <h4>Épanouissement personnel</h4>
                      <p>Développement de chaque potentiel</p>
                    </div>
                  </div>
                </div>

                <Link href="/about" className="btn btn-primary">
                  Découvrir notre histoire
                </Link>
              </div>

              <div className="mission-visual-simplified flex justify-center items-center">
                <div className="mission-image-wrapper h-[400px] w-[350px]">
                  <Image
                    src="/images/mission-main.png"
                    alt="Notre mission"
                    fill
                    quality={100}
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* News - Magazine Style Layout */}
        <section className="news-creative">
          <div className="container">
            <div className="section-header-creative">
              <div className="section-number">03</div>
              <div>
                <h2 className="section-title-creative">Actualités</h2>
                <p className="section-description-creative">
                  Découvrez la vie dynamique de notre école
                </p>
              </div>
            </div>

            <div className="news-magazine-grid">
              <article className="news-featured">
                <div className="news-image">
                  <Image
                    src="/images/news-featured.jpg"
                    alt="Actualité principale"
                    width={100}
                    height={100}
                    quality={100}
                    className="w-full h-full object-cover"
                  />
                  <div className="news-category">Événement</div>
                </div>
                <div className="news-content">
                  <time className="news-date">15 Mars 2024</time>
                  <h3 className="news-title">Journée Portes Ouvertes 2024</h3>
                  <p className="news-excerpt">
                    Venez découvrir notre établissement, rencontrer nos équipes
                    pédagogiques et visiter nos installations modernes.
                  </p>
                  <Link href="/news/portes-ouvertes" className="news-link">
                    Lire la suite →
                  </Link>
                </div>
              </article>

              <div className="news-secondary">
                {newsEvents.slice(1).map((item, index) => (
                  <article key={index} className="news-card-small">
                    <div className="news-meta">
                      <span className="news-category-small">{item.type}</span>
                      <time className="news-date-small">{item.date}</time>
                    </div>
                    <h4 className="news-title-small">{item.title}</h4>
                    <p className="news-excerpt-small">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="news-cta">
              <Link href="/news" className="btn btn-secondary">
                Toutes les actualités
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials - Carousel with Floating Cards */}
        <section className="testimonials-creative">
          <div className="container">
            <div className="section-header-creative">
              <div className="section-number">04</div>
              <div>
                <h2 className="section-title-creative">
                  Ce qu&apos;ils disent de nous
                </h2>
              </div>
            </div>

            <div className="testimonials-carousel">
              <div className="testimonials-track">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="testimonial-card-creative">
                    <div className="testimonial-content-creative">
                      <div className="testimonial-quote-creative">
                        <span className="quote-mark"></span>
                        <p>{testimonial.quote}</p>
                      </div>
                      <div className="testimonial-author-creative">
                        <div className="author-avatar">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.author}
                            width={100}
                            height={100}
                            quality={100}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="author-info">
                          <h4>{testimonial.author}</h4>
                          <p>{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA - Interactive Contact Section */}
        <section className="cta-creative">
          <div className="container">
            <div className="cta-content">
              <div className="cta-text">
                <h2 className="cta-title">
                  Prêt à rejoindre notre communauté ?
                </h2>
                <p className="cta-description">
                  Découvrez comment Les Hirondelles peut accompagner votre
                  enfant vers l&apos;excellence et la réussite.
                </p>
              </div>
              <div className="cta-actions">
                <div className="cta-card">
                  <div className="cta-card-icon">📅</div>
                  <h3>Planifier une visite</h3>
                  <p>Découvrez nos installations</p>
                  <Link href="/visit" className="btn btn-primary">
                    Réserver
                  </Link>
                </div>
                <div className="cta-card">
                  <div className="cta-card-icon">📋</div>
                  <h3>Dossier d&apos;inscription</h3>
                  <p>Téléchargez notre brochure</p>
                  <Link href="/brochure" className="btn btn-secondary">
                    Télécharger
                  </Link>
                </div>
                <div className="cta-card">
                  <div className="cta-card-icon">💬</div>
                  <h3>Nous contacter</h3>
                  <p>Posez vos questions</p>
                  <Link
                    href="/contact"
                    className="font-family-poppins font-medium text-[0.875rem] px-[2rem] py-[1rem] tracking-[0.025em] text-white border-1 border-white hover:underline transition-all duration-300 translate-y-0 hover:translate-y-[-1px]"
                  >
                    Discuter
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
