/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import "./styles.css";
import Image from "next/image";
import { ImageSlider } from "@/components/ImageSlider";
import {
  getHomePage,
  type HomePage,
  type Button,
  type Statistic,
  type Program,
  type MissionValue,
  type BlogPost,
  type Testimonial,
  type CtaCard,
} from "@/sanity/lib/utils";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "sanity";

// Add this helper function near the top of your file
const getCategoryTitle = (value: string): string => {
  const categoryMap: Record<string, string> = {
    actualites: "Actualités",
    evenements: "Événements",
    succes: "Succès",
    infrastructure: "Infrastructure",
    international: "International",
    environnement: "Environnement",
  };
  return categoryMap[value] || value;
};

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

// const schoolLevels = [
//   {
//     title: "Préscolaire",
//     description:
//       "Un environnement bienveillant pour les premiers apprentissages",
//     ageRange: "3-5 ans",
//     highlights: ["Éveil artistique", "Développement moteur", "Socialisation"],
//     image: "/images/programs/preschool.jpg",
//   },
//   {
//     title: "Primaire",
//     description: "Fondations solides pour l'apprentissage académique",
//     ageRange: "6-10 ans",
//     highlights: ["Français & Mathématiques", "Sciences", "Langues étrangères"],
//     image: "/images/programs/primary.jpg",
//   },
//   {
//     title: "Collège",
//     description: "Préparation à l'excellence académique et personnelle",
//     ageRange: "11-15 ans",
//     highlights: ["Préparation BFEM", "Clubs & activités", "Orientation"],
//     image: "/images/programs/middleschool.jpg",
//   },
// ];

// const testimonials = [
//   {
//     quote:
//       "Les Hirondelles a donné à ma fille la confiance et les compétences nécessaires pour réussir. L'équipe pédagogique est exceptionnelle.",
//     author: "Mme Fatou Diop",
//     role: "Parent d'élève",
//     image: "/images/parent1.png",
//   },
//   {
//     quote:
//       "Une école qui allie excellence académique et valeurs humaines. Mon fils s'épanouit chaque jour.",
//     author: "M. Amadou Sall",
//     role: "Parent d'élève",
//     image: "/images/parent2.png",
//   },
// ];

// const newsEvents = [
//   {
//     title: "Journée Portes Ouvertes",
//     date: "15 Mars 2024",
//     description:
//       "Venez découvrir notre établissement et rencontrer nos équipes",
//     type: "Événement",
//   },
//   {
//     title: "Concours de Sciences",
//     date: "22 Mars 2024",
//     description: "Nos élèves de collège participent au concours national",
//     type: "Actualité",
//   },
//   {
//     title: "Spectacle de fin d'année",
//     date: "10 Juin 2024",
//     description: "Représentation théâtrale et musicale de nos élèves",
//     type: "Événement",
//   },
// ];

export const revalidate = 60;

export default async function HomePage() {
  const { data } = await getHomePage();

  if (!data) {
    return <div>Loading...</div>; // Or a custom fallback component
  }

  const ptMissionComponents = {
    block: {
      large: ({ children }: { children?: React.ReactNode }) => (
        <p className="mission-text-large">{children}</p>
      ),
      normal: ({ children }: { children?: React.ReactNode }) => (
        <p className="mission-text-regular">{children}</p>
      ),
    },
  };

  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section - Condensed Content */}
        <section className="hero-background-optimized">
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-0">
            <ImageSlider images={data.heroImages} />
          </div>
          <div className="z-10 absolute top-0 left-0 w-full h-full bg-linear-to-r from-[var(--primary)] to-[var(--accent)]/50 opacity-50"></div>
          <div className="container z-20">
            <div className="hero-content-background">
              <div className="hero-badge-elegant">
                <span>Excellence depuis 20+ ans</span>
              </div>
              <h1 className="hero-title-background">{data.heroTitle}</h1>
              <p className="hero-description-background">{data.heroSubtitle}</p>
              <div className="hero-actions-background">
                {data.heroButtons?.map((button: Button, index: number) => (
                  <a
                    key={index}
                    href={button.link}
                    className={`btn ${button.isPrimary ? "btn-primary-hero" : "btn-secondary-hero"}`}
                  >
                    {button.label}
                  </a>
                ))}
              </div>
              <div className="hero-stats-inline">
                {data.statistics
                  ?.slice(0, 3)
                  .map((stat: Statistic, index: number) => (
                    <div key={index} className="hero-stat-inline">
                      <span className="stat-number-inline">{stat.value}</span>
                      <span className="stat-label-inline">{stat.label}</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>

        {/* Animated Statistics - Horizontal Scroll */}
        <section className="stats-creative">
          <div className="stats-marquee">
            <div className="stats-track">
              {data.statistics?.map((stat: Statistic, index: number) => (
                <div key={index} className="stat-item-creative">
                  <span className="stat-number">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {data.statistics?.map((stat: Statistic, index: number) => (
                <div
                  key={index + (data.statistics?.length || 0)}
                  className="stat-item-creative"
                >
                  <span className="stat-number">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs - Simplified Grid */}
        <section className="programs-simplified">
          <div className="container">
            <div className="section-header-creative">
              <div className="section-number">01</div>
              <div>
                <h2 className="section-title-creative">
                  {data.schoolLevelsTitle}
                </h2>
                <p className="section-description-creative">
                  {data.schoolLevelsDescription}
                </p>
              </div>
            </div>

            <div className="programs-grid-simplified">
              {data.schoolLevels?.map((level: Program, index: number) => (
                <div key={index} className="program-card-simplified">
                  <div className="program-image-simplified">
                    {level.image && (
                      <Image
                        src={urlFor(level.image).width(1000).height(1000).url()}
                        alt={level.title}
                        width={1000}
                        height={1000}
                        quality={100}
                        className="w-full h-full object-cover"
                      />
                    )}
                    <div className="program-age-badge">{level.ageRange}</div>
                  </div>
                  <div className="program-content-simplified">
                    <h3 className="program-title-simplified">{level.title}</h3>
                    <p className="program-description-simplified">
                      {level.description as string}
                    </p>
                    <ul className="program-highlights-simplified">
                      {level.highlights?.map((highlight: string, i: number) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                    <a
                      href={`/programs/${level.slug.current}`}
                      className="program-link-simplified"
                    >
                      En savoir plus →
                    </a>
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
                <h2 className="section-title-creative">{data.missionTitle}</h2>
                <p className="section-description-creative">
                  {data.missionDescription}
                </p>
              </div>
            </div>

            <div className="mission-grid">
              <div className="mission-content-simplified">
                {data.missionContent && (
                  <PortableText
                    value={data.missionContent as PortableTextBlock[]}
                    components={ptMissionComponents}
                  />
                )}

                <div className="mission-values-simplified">
                  {data.missionValues?.map(
                    (value: MissionValue, index: number) => (
                      <div key={index} className="value-item-simplified">
                        <div className="value-icon">{value.icon}</div>
                        <div>
                          <h4>{value.title}</h4>
                          <p>{value.description}</p>
                        </div>
                      </div>
                    )
                  )}
                </div>

                <a href="/about" className="btn btn-primary">
                  Découvrir notre histoire
                </a>
              </div>

              <div className="h-fit flex justify-center md:justify-end items-center">
                <div className="relative h-[400px] w-[350px] overflow-hidden">
                  {data.missionImage && (
                    <Image
                      src={urlFor(data.missionImage)
                        .width(350)
                        .height(400)
                        .url()}
                      alt={data.missionTitle || "Notre mission"}
                      fill
                      quality={100}
                      className="object-cover object-center z-10"
                    />
                  )}
                  {/* <Image
                    src="/images/mission-main.png"
                    alt="Notre mission"
                    fill
                    quality={100}
                    className="object-cover object-center"
                  /> */}
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
                <h2 className="section-title-creative">
                  {data.newsSectionTitle}
                </h2>
                <p className="section-description-creative">
                  {data.newsSectionDescription}
                </p>
              </div>
            </div>

            <div className="news-magazine-grid">
              {data.featuredNews && (
                <article className="news-featured">
                  <div className="news-image">
                    {data.featuredNews.mainImage && (
                      <Image
                        src={urlFor(data.featuredNews.mainImage)
                          .width(1000)
                          .height(600)
                          .url()}
                        alt={data.featuredNews.title}
                        width={100}
                        height={100}
                        quality={100}
                        className="w-full h-full object-cover"
                      />
                    )}
                    <div className="news-category">
                      {data.featuredNews.category &&
                        getCategoryTitle(data.featuredNews.category)}
                    </div>
                  </div>
                  <div className="news-content">
                    <time className="news-date">
                      {new Date(
                        data.featuredNews.publishedAt
                      ).toLocaleDateString("fr-FR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <h3 className="news-title">{data.featuredNews.title}</h3>
                    <p className="news-excerpt">{data.featuredNews.excerpt}</p>
                    <a
                      href={`/blog/${data.featuredNews.slug.current}`}
                      className="news-link"
                    >
                      Lire la suite →
                    </a>
                  </div>
                </article>
              )}

              <div className="news-secondary">
                {data.latestNews?.map((item: BlogPost, index: number) => (
                  <article key={index} className="news-card-small">
                    <div className="news-meta">
                      <span className="news-category-small">
                        {item.category && getCategoryTitle(item.category)}
                      </span>
                      <time className="news-date-small">
                        {new Date(item.publishedAt).toLocaleDateString(
                          "fr-FR",
                          { year: "numeric", month: "long", day: "numeric" }
                        )}
                      </time>
                    </div>
                    <h4 className="news-title-small">{item.title}</h4>
                    <p className="news-excerpt-small">{item.excerpt}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="news-cta">
              <a href="/news" className="btn btn-secondary">
                Toutes les actualités
              </a>
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
                  {data.testimonialsSectionTitle}
                </h2>
              </div>
            </div>

            <div className="testimonials-carousel">
              <div className="testimonials-track">
                {data.testimonials?.map(
                  (testimonial: Testimonial, index: number) => (
                    <div key={index} className="testimonial-card-creative">
                      <div className="testimonial-content-creative">
                        <div className="testimonial-quote-creative">
                          <span className="quote-mark"></span>
                          <p>{testimonial.quote}</p>
                        </div>
                        <div className="testimonial-author-creative">
                          <div className="author-avatar">
                            {testimonial.avatar && (
                              <Image
                                src={urlFor(testimonial.avatar)
                                  .width(100)
                                  .height(100)
                                  .url()}
                                alt={testimonial.author}
                                width={100}
                                height={100}
                                quality={100}
                                className="w-full h-full object-cover"
                              />
                            )}
                          </div>
                          <div className="author-info">
                            <h4>{testimonial.author}</h4>
                            <p>{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA - Interactive Contact Section */}
        <section className="cta-creative">
          <div className="container">
            <div className="cta-content">
              <div className="cta-text">
                <h2 className="cta-title">{data.ctaTitle}</h2>
                <p className="cta-description">{data.ctaDescription}</p>
              </div>
              <div className="cta-actions">
                {data.ctaCards?.map((card: CtaCard, index: number) => (
                  <div key={index} className="cta-card">
                    <div className="cta-card-icon">{card.icon}</div>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <a
                      href={card.link}
                      className={`btn ${
                        card.link === "/contact"
                          ? "font-family-poppins font-medium text-[0.875rem] px-[2rem] py-[1rem] tracking-[0.025em] text-white border-1 border-white hover:underline transition-all duration-300 translate-y-0 hover:translate-y-[-1px]"
                          : "btn-primary"
                      }`}
                    >
                      {card.linkLabel}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
