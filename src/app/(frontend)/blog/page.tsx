import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../styles.css";

// Sample blog data - In a real app, this would come from your CMS or API
const blogPosts = [
  {
    id: 1,
    title: "Rentrée Scolaire 2024-2025 : Tout ce qu'il faut savoir",
    excerpt:
      "Découvrez les dates importantes, les nouveautés et les informations essentielles pour préparer la rentrée scolaire.",
    date: "2024-03-15",
    category: "Actualités",
    image: "/images/blog/rentree-scolaire.jpg",
    author: "Direction Les Hirondelles",
    featured: true,
  },
  {
    id: 2,
    title: "Nos élèves brillent au Concours National de Mathématiques",
    excerpt:
      "Félicitations à nos élèves qui ont remporté plusieurs prix lors du concours national.",
    date: "2024-03-10",
    category: "Succès",
    image: "/images/blog/maths-competition.jpg",
    author: "Département de Mathématiques",
  },
  {
    id: 3,
    title: "Journée Culturelle : Célébration de la Diversité",
    excerpt:
      "Retour sur notre journée culturelle annuelle qui met à l'honneur les traditions sénégalaises.",
    date: "2024-03-05",
    category: "Événements",
    image: "/images/blog/cultural-day.jpg",
    author: "Équipe Pédagogique",
  },
  {
    id: 4,
    title: "Innovation Pédagogique : Nouvelle Salle Multimédia",
    excerpt:
      "Notre établissement s'équipe d'une nouvelle salle multimédia pour enrichir l'expérience d'apprentissage.",
    date: "2024-02-28",
    category: "Infrastructure",
    image: "/images/blog/multimedia-room.jpg",
    author: "Service Technique",
  },
  {
    id: 5,
    title: "Succès de notre Programme d'Échange Linguistique",
    excerpt:
      "Nos élèves ont participé à un échange enrichissant avec une école partenaire.",
    date: "2024-02-20",
    category: "International",
    image: "/images/blog/exchange-program.jpg",
    author: "Département des Langues",
  },
  {
    id: 6,
    title: "Les Hirondelles s'engage pour l'environnement",
    excerpt:
      "Découvrez nos initiatives écologiques et nos projets de développement durable.",
    date: "2024-02-15",
    category: "Environnement",
    image: "/images/blog/eco-project.jpg",
    author: "Club Environnement",
  },
];

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString("fr-FR", options);
};

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen pt-20">
      <main>
        {/* Header Section */}
        <section className="bg-gradient-to-r from-[#00538d] to-[#003e6b] text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Journal de l&apos;école
              </h1>
              <p className="text-xl text-white/80">
                Actualités, événements et vie scolaire à Les Hirondelles
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 relative h-64 md:h-auto">
                      <Image
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-8 md:p-12">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-[#00538d]/10 text-[#00538d] rounded-full text-sm font-medium">
                          {featuredPost.category}
                        </span>
                        <time className="text-gray-500 text-sm">
                          {formatDate(featuredPost.date)}
                        </time>
                      </div>
                      <h2 className="text-3xl font-bold mb-4 text-gray-900">
                        {featuredPost.title}
                      </h2>
                      <p className="text-gray-600 mb-6">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 text-sm">
                          Par {featuredPost.author}
                        </span>
                        <Link
                          href={`/blog/${featuredPost.id}`}
                          className="inline-flex items-center gap-2 text-[#00538d] hover:text-[#003e6b] font-medium"
                        >
                          Lire la suite
                          <svg
                            className="w-4 h-4"
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
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Regular Posts Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative h-48">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-[#00538d]/10 text-[#00538d] rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                        <time className="text-gray-500 text-sm">
                          {formatDate(post.date)}
                        </time>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 text-sm">
                          Par {post.author}
                        </span>
                        <Link
                          href={`/blog/${post.id}`}
                          className="inline-flex items-center gap-2 text-[#00538d] hover:text-[#003e6b] font-medium"
                        >
                          Lire la suite
                          <svg
                            className="w-4 h-4"
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
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                Restez informé
              </h2>
              <p className="text-gray-600 mb-8">
                Inscrivez-vous à notre newsletter pour recevoir les dernières
                actualités de l&apos;école
              </p>
              <form className="flex gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00538d]"
                />
                <button type="submit" className="btn btn-primary">
                  S&apos;inscrire
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
