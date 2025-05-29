import React from "react";
import Image from "next/image";
import {
  FaBullseye,
  FaHandsHelping,
  FaLeaf,
  FaGlobeAmericas,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";

const coreValues = [
  {
    icon: <FaBullseye className="w-6 h-6" />,
    title: "Excellence Académique",
    description:
      "Viser les plus hauts standards dans l'enseignement et l'apprentissage.",
  },
  {
    icon: <FaHandsHelping className="w-6 h-6" />,
    title: "Respect & Intégrité",
    description:
      "Cultiver un environnement de respect mutuel, d'honnêteté et de responsabilité.",
  },
  {
    icon: <FaLeaf className="w-6 h-6" />,
    title: "Épanouissement Global",
    description:
      "Favoriser le développement intellectuel, social, émotionnel et physique de chaque élève.",
  },
  {
    icon: <FaGlobeAmericas className="w-6 h-6" />,
    title: "Ouverture sur le Monde",
    description: "Préparer des citoyens du monde, conscients et engagés.",
  },
  {
    icon: <FaLightbulb className="w-6 h-6" />,
    title: "Innovation Pédagogique",
    description:
      "Intégrer des méthodes modernes pour un apprentissage stimulant.",
  },
  {
    icon: <FaUsers className="w-6 h-6" />,
    title: "Esprit de Communauté",
    description:
      "Construire une communauté scolaire solidaire et bienveillante.",
  },
];

const historyMilestones = [
  {
    year: "2003",
    title: "Fondation de L'Institution",
    description:
      "Création de Les Hirondelles avec la vision d'une éducation d'excellence au Sénégal.",
    image: "/images/about/history-1.jpg",
  },
  {
    year: "2008",
    title: "Première Promotion du Primaire",
    description:
      "Célébration de nos premiers diplômés du cycle primaire, marquant une étape clé.",
    image: "/images/about/history-2.jpg",
  },
  {
    year: "2015",
    title: "Expansion avec le Collège",
    description:
      "Ouverture du cycle collégial pour offrir un parcours éducatif continu et cohérent.",
    image: "/images/about/history-3.jpg",
  },
  {
    year: "2020",
    title: "Modernisation des Infrastructures",
    description:
      "Investissement majeur dans nos locaux et équipements pour un cadre d'apprentissage optimal.",
    image: "/images/about/history-4.jpg",
  },
  {
    year: "Aujourd'hui",
    title: "Vers de Nouveaux Horizons",
    description:
      "Fiers de notre héritage, nous continuons d'innover pour former les leaders de demain.",
    image: "/images/about/history-5.jpg",
  },
];

const leadershipTeam = [
  {
    name: "Mme. NDIAYE Cheikh SY",
    role: "Déclarante Responsable",
    image: "/images/team/supervisor.jpg",
    bio: "Mme. NDIAYE ,fondatrice de l'école, est dédiée à la gestion administrative de l'école, favorisant un environnement scolaire positif et inclusif pour tous.",
  },
  {
    name: "Mme. Ndiaye Fatou Dabo",
    role: "Directrice Générale",
    image: "/images/team/director.jpg",
    bio: "Avec plus de 20 ans d'expérience dans l'éducation, Mme. Ndiaye inspire notre vision stratégique et notre engagement envers l'excellence.",
  },
  {
    name: "M. Aliou GOUDIABY",
    role: "Gestionnaire Pédagogique",
    image: "/images/team/pedagogical-lead.jpg",
    bio: "Passionné par l'innovation pédagogique, M. GOUDIABY veille à la qualité de nos programmes et à l'épanouissement de chaque élève.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 pt-20">
      {/* Hero Section - Unique Approach */}
      <section className="relative bg-white text-gray-900 py-24 overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
        </div>

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center min-h-[70vh]">
            {/* Left Content - Spans 7 columns */}
            <div className="lg:col-span-7 space-y-8">
              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold leading-none">
                  <span className="block text-gray-900">
                    Notre Histoire & Vision
                  </span>
                </h1>

                <div className="max-w-xl">
                  <p className="text-xl text-gray-600 leading-relaxed mb-6">
                    Depuis plus de deux décennies, nous cultivons
                    l&apos;excellence éducative au cœur du Sénégal, formant les
                    leaders de demain avec passion et dévouement.
                  </p>

                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>Fondée en 2003</span>
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <span>Dakar, Sénégal</span>
                  </div>
                </div>
              </div>

              {/* Mission Statement */}
              <div className="bg-gray-50 p-8 border-l-4 border-primary">
                <div className="flex items-start gap-4">
                  <div className="text-4xl text-primary leading-none">
                    &quot;
                  </div>
                  <div>
                    <p className="text-lg italic text-gray-700 mb-3">
                      Former les citoyens de demain en alliant excellence
                      académique, valeurs humaines et ouverture sur le monde.
                    </p>
                    <div className="text-sm font-semibold text-primary">
                      — Notre Mission Fondamentale
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual - Spans 5 columns */}
            <div className="lg:col-span-5">
              <div className="relative">
                {/* Main Image */}
                <div className="relative h-[500px] w-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
                  <Image
                    src="/images/about/school-heritage.jpg"
                    alt="Héritage Les Hirondelles"
                    fill
                    className="object-cover mix-blend-multiply"
                  />
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  {/* Bottom Quote */}
                  <div className="self-end max-w-xs">
                    <div className="bg-black/80 text-white p-6 backdrop-blur-sm">
                      <p className="text-sm mb-2">
                        &quot;L&apos;éducation est l&apos;arme la plus puissante
                        pour changer le monde&quot;
                      </p>
                      <div className="text-xs text-gray-300">
                        — Nelson Mandela
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-accent"></div>
                <div className="absolute -bottom-6 -right-6 w-8 h-8 bg-primary"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="section-header-creative mb-16">
            <div>
              <h2 className="section-title-creative">Nos Valeurs</h2>
              <p className="section-description-creative">
                Les principes qui guident notre approche éducative et façonnent
                l&apos;expérience de chaque élève.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="card p-8 transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                <div className="text-primary mb-6">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-4 color-black">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline Section - Clean & Elegant */}
      <section className="py-24 bg-gray-50 overflow-hidden relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="section-header-creative mb-20">
            <div>
              <h2 className="section-title-creative">Notre Parcours</h2>
              <p className="section-description-creative">
                Une histoire d&apos;engagement et de croissance continue dans
                l&apos;excellence éducative.
              </p>
            </div>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-300 h-full hidden lg:block"></div>

            {/* Timeline Items */}
            <div className="space-y-32">
              {historyMilestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } flex-col lg:gap-20 gap-12 group`}
                >
                  {/* Content Side */}
                  <div className="lg:w-5/12 w-full">
                    <div
                      className={`${index % 2 === 0 ? "lg:text-right lg:pr-12" : "lg:text-left lg:pl-12"} text-center lg:text-left`}
                    >
                      {/* Year Badge - Large and Prominent */}
                      <div
                        className={`mb-8 ${index % 2 === 0 ? "lg:flex lg:justify-end" : "lg:flex lg:justify-start"} flex justify-center`}
                      >
                        <div className="relative">
                          <div className="text-6xl font-black text-gray-200 leading-none">
                            {milestone.year}
                          </div>
                          <div className="absolute inset-0 text-6xl font-black text-primary leading-none transform translate-x-1 translate-y-1 opacity-20">
                            {milestone.year}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="space-y-6">
                        <h3 className="text-3xl font-bold color-black leading-tight">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                          {milestone.description}
                        </p>

                        {/* Progress Indicator */}
                        <div
                          className={`flex items-center gap-4 ${index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"} justify-center`}
                        >
                          <div className="w-12 h-0.5 bg-accent"></div>
                          <div className="text-sm font-semibold text-primary tracking-wider">
                            ÉTAPE {String(index + 1).padStart(2, "0")}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Point */}
                  <div className="lg:w-2/12 w-full flex justify-center relative z-10">
                    <div className="w-4 h-4 bg-primary border-4 border-white shadow-lg transition-all duration-300 group-hover:scale-150 group-hover:bg-accent"></div>
                  </div>

                  {/* Image Side */}
                  <div className="lg:w-5/12 w-full">
                    <div className="relative group/image">
                      {/* Main Image Container */}
                      <div className="relative h-96 w-full overflow-hidden bg-white shadow-lg">
                        <Image
                          src={milestone.image}
                          alt={milestone.title}
                          fill
                          className="object-cover transition-all duration-700 group-hover/image:scale-105"
                        />

                        {/* Subtle Overlay */}
                        <div className="absolute inset-0 bg-primary opacity-0 group-hover/image:opacity-10 transition-opacity duration-500"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Timeline End Marker */}
            <div className="flex justify-center mt-20">
              <div className="w-8 h-8 bg-accent transform rotate-45"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="section-header-creative mb-16">
            <div>
              <h2 className="section-title-creative">
                Notre Équipe de Direction
              </h2>
              <p className="section-description-creative">
                Des professionnels dévoués qui guident notre institution vers
                l&apos;excellence.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {leadershipTeam.map((member, index) => (
              <div
                key={index}
                className="card overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                <div className="relative h-72 w-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-3 color-black">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6 max-w-6xl text-center flex flex-col items-center justify-center">
          <div className="mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                Rejoignez Notre Communauté
              </h2>
              <p className="text-xl text-gray-100 mb-12 max-w-2xl mx-auto leading-relaxed">
                Découvrez comment Les Hirondelles peut contribuer à
                l&apos;épanouissement et à la réussite de votre enfant.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="/contact" className="btn btn-accent">
              Nous Contacter
            </a>
            <a
              href="/inscription"
              className="font-family-poppins font-medium text-[0.875rem] px-[2rem] py-[1rem] tracking-[0.025em] text-white border-1 border-white hover:underline transition-all duration-300 translate-y-0 hover:translate-y-[-1px]"
            >
              Processus d&apos;inscription
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
