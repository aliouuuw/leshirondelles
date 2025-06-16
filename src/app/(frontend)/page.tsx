// src/app/(frontend)/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  getHomepageHero, 
  getHomepageStats, 
  getHomepageMission,
  getSchoolLevels 
} from "@/lib/supabase";
import { ImageSlider } from "@/components/ImageSlider";

// Fallback data in case database is empty
const fallbackHero = {
  badge: "Excellence depuis 20+ ans",
  title: "Former les leaders",
  subtitle: "de demain",
  description: "Excellence académique et valeurs humaines du préscolaire au collège.",
  primaryButton: { text: "Nos programmes", url: "/programs" },
  secondaryButton: { text: "Planifier une visite", url: "/contact" }
};

const fallbackStats = [
  { number: "500", suffix: "+", label: "Élèves" },
  { number: "98", suffix: "%", label: "Réussite" },
  { number: "20", suffix: "+", label: "Années" }
];


export default async function HomePage() {
  // Fetch dynamic content
  const [hero, stats, mission, levels] = await Promise.all([
    getHomepageHero(),
    getHomepageStats(),
    getHomepageMission(),
    getSchoolLevels()
  ]);

  // Use fetched content or fallback
  const heroContent = hero || fallbackHero;
  const statsContent = stats.length > 0 ? stats : fallbackStats;
  const missionContent = mission || {
    title: "Notre Mission",
    description: "Former les citoyens de demain avec excellence et bienveillance",
    content: "Notre mission est de fournir une éducation de qualité..."
  };

  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section - Now Dynamic */}
        <section className="hero-background-optimized">
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-0">
            <ImageSlider />
          </div>
          <div className="z-10 absolute top-0 left-0 w-full h-full bg-linear-to-r from-[var(--primary)] to-[var(--accent)]/50 opacity-50"></div>
          <div className="container z-20">
            <div className="hero-content-background">
              {heroContent.badge && (
                <div className="hero-badge-elegant">
                  <span>{heroContent.badge}</span>
                </div>
              )}
              <h1 className="hero-title-background">
                {heroContent.title}
                {heroContent.subtitle && (
                  <>
                    <br />
                    <span className="hero-subtitle">{heroContent.subtitle}</span>
                  </>
                )}
              </h1>
              <p className="hero-description-background">
                {heroContent.description}
              </p>
              <div className="hero-actions-background">
                <a href={heroContent.primaryButton.url} className="btn btn-primary-hero">
                  {heroContent.primaryButton.text}
                </a>
                <a href={heroContent.secondaryButton.url} className="btn btn-secondary-hero">
                  {heroContent.secondaryButton.text}
                </a>
              </div>
              <div className="hero-stats-inline">
                {statsContent.map((stat, index) => (
                  <div key={index} className="hero-stat-inline">
                    <span className="stat-number-inline">
                      {stat.number}{stat.suffix}
                    </span>
                    <span className="stat-label-inline">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Animated Statistics - Dynamic */}
        <section className="stats-creative">
          <div className="stats-marquee">
            <div className="stats-track">
              {statsContent.map((stat, index) => (
                <div key={index} className="stat-item-creative">
                  <span className="stat-number">
                    {stat.number}{stat.suffix}
                  </span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {statsContent.slice(0, 2).map((stat, index) => (
                <div key={`duplicate-${index}`} className="stat-item-creative">
                  <span className="stat-number">
                    {stat.number}{stat.suffix}
                  </span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs - Dynamic School Levels */}
        <section className="programs-simplified">
          <div className="container">
            <div className="section-header-creative">
              <div className="section-number">01</div>
              <div>
                <h2 className="section-title-creative">Nos Programmes</h2>
                <p className="section-description-creative">
                  Un parcours éducatif complet qui accompagne chaque élève vers l'excellence
                </p>
              </div>
            </div>

            <div className="programs-grid-simplified">
              {levels.map((level, index) => (
                <div key={level.id} className="program-card-simplified">
                  <div className="program-image-simplified">
                    <Image
                      src={level.image_url || "/images/programs/default.jpg"}
                      alt={level.name}
                      width={1000}
                      height={1000}
                      quality={100}
                      className="w-full h-full object-cover"
                    />
                    <div className="program-age-badge">{level.age_range}</div>
                  </div>
                  <div className="program-content-simplified">
                    <h3 className="program-title-simplified">{level.name}</h3>
                    <p className="program-description-simplified">
                      {level.description}
                    </p>
                    <a
                      href={`/programs/${level.name.toLowerCase()}`}
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

        {/* Mission - Dynamic */}
        <section className="mission-simplified">
          <div className="container">
            <div className="section-header-creative">
              <div className="section-number">02</div>
              <div>
                <h2 className="section-title-creative">{missionContent.title}</h2>
                <p className="section-description-creative">
                  {missionContent.description}
                </p>
              </div>
            </div>

            <div className="mission-grid">
              <div className="mission-content-simplified">
                <div className="mission-text-large">
                  <p>{missionContent.content}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Your existing testimonials and other sections can stay static for now */}
      </main>
    </div>
  );
}
