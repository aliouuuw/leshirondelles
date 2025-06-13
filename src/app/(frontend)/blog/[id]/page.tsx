import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import "../../styles.css";

// This would typically come from your CMS or API
const blogPost = {
  id: 1,
  title: "Rentrée Scolaire 2024-2025 : Tout ce qu'il faut savoir",
  content: `
    <p>Chers parents et élèves,</p>
    
    <p>Nous sommes ravis de vous présenter les informations essentielles pour la rentrée scolaire 2024-2025. Cette année s'annonce riche en nouveautés et en projets passionnants pour notre communauté éducative.</p>
    
    <h3>Dates importantes</h3>
    <ul>
      <li>Rentrée administrative : 2 septembre 2024</li>
      <li>Rentrée des classes : 4 septembre 2024</li>
      <li>Réunion parents-professeurs : 7 septembre 2024</li>
    </ul>
    
    <h3>Nouveautés de l'année</h3>
    <p>Cette année, nous mettons en place plusieurs innovations pédagogiques :</p>
    <ul>
      <li>Nouvelle salle multimédia équipée des dernières technologies</li>
      <li>Programme renforcé en langues étrangères</li>
      <li>Ateliers de coding dès le primaire</li>
    </ul>
    
    <h3>Fournitures scolaires</h3>
    <p>Les listes de fournitures sont disponibles sur l'espace parent. Nous avons veillé à optimiser les listes pour éviter les achats superflus.</p>
    
    <h3>Services périscolaires</h3>
    <p>Nous maintenons et enrichissons notre offre d'activités périscolaires :</p>
    <ul>
      <li>Étude dirigée de 16h à 18h</li>
      <li>Activités sportives et culturelles</li>
      <li>Club sciences et environnement</li>
    </ul>
    
    <p>Pour toute question, n'hésitez pas à contacter le secrétariat. Nous vous souhaitons une excellente rentrée scolaire !</p>
  `,
  date: "2024-03-15",
  category: "Actualités",
  image: "/images/blog/rentree-scolaire.jpg",
  author: "Direction Les Hirondelles",
  authorRole: "Direction de l'établissement",
  readTime: "5 min",
};

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString("fr-FR", options);
};

export default function BlogPost({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the post based on the ID
  if (params.id !== "1") {
    notFound();
  }

  return (
    <div className="min-h-screen pt-20">
      <main>
        {/* Header with Featured Image */}
        <div className="relative h-[400px] w-full">
          <Image
            src={blogPost.image}
            alt={blogPost.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <div className="max-w-3xl">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-[#00538d]/10 text-[#00538d] rounded-full text-sm font-medium">
                    {blogPost.category}
                  </span>
                  <time className="text-gray-200 text-sm">
                    {formatDate(blogPost.date)}
                  </time>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {blogPost.title}
                </h1>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-gray-200">
                    <span className="text-sm">Par {blogPost.author}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm">{blogPost.authorRole}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-200">
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm">
                      {blogPost.readTime} de lecture
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />

              {/* Share and Navigation */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-gray-600">Partager :</span>
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-gray-600 hover:text-[#00538d]">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </button>
                      <button className="p-2 text-gray-600 hover:text-[#00538d]">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </button>
                      <button className="p-2 text-gray-600 hover:text-[#00538d]">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-[#00538d] hover:text-[#003e6b]"
                  >
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
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                      />
                    </svg>
                    Retour aux actualités
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>

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
