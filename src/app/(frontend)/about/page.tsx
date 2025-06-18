import React from "react";
import Image from "next/image";
import {
  getAboutPage,
  type AboutPage,
  type CoreValue,
  type HistoryMilestone,
  type TeamMember,
  type Button,
} from "@/sanity/lib/utils";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "sanity";
import Link from "next/link";

export const revalidate = 60;

export default async function AboutPage() {
  const data = await getAboutPage();

  if (!data) {
    return <div>Loading...</div>; // Or a custom fallback component
  }

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
                  <span className="block text-gray-900">{data.heroTitle}</span>
                </h1>

                <div className="max-w-xl">
                  <p className="text-xl text-gray-600 leading-relaxed mb-6">
                    {data.heroDescription}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    {data.foundedYear && (
                      <span>Fondée en {data.foundedYear}</span>
                    )}
                    {data.foundedYear && data.location && (
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    )}
                    {data.location && <span>{data.location}</span>}
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
                      {data.missionQuote}
                    </p>
                    <div className="text-sm font-semibold text-primary">
                      — {data.missionQuoteAuthor}
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
                  {data.heroImage && (
                    <Image
                      src={urlFor(data.heroImage).width(800).height(500).url()}
                      alt={data.heroTitle || "About Hero"}
                      fill
                      className="object-cover mix-blend-multiply"
                    />
                  )}
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
              <h2 className="section-title-creative">{data.coreValuesTitle}</h2>
              <p className="section-description-creative">
                {data.coreValuesDescription}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.coreValues?.map((value: CoreValue, index: number) => (
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
              <h2 className="section-title-creative">{data.historyTitle}</h2>
              <p className="section-description-creative">
                {data.historyDescription}
              </p>
            </div>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 -translate-x-1/2 w-0.5 bg-gray-300 h-full hidden md:block"></div>
            <div className="space-y-16">
              {data.historyMilestones?.map(
                (milestone: HistoryMilestone, index: number) => (
                  <div
                    key={index}
                    className={`flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className="md:w-5/12 text-center md:text-right">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {milestone.year}
                      </h3>
                      <p className="text-lg font-semibold text-primary mb-3">
                        {milestone.title}
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                    <div className="relative w-6 h-6 rounded-full bg-primary flex items-center justify-center z-10 shrink-0">
                      <div className="w-3 h-3 rounded-full bg-white"></div>
                    </div>
                    <div className="md:w-5/12">
                      {milestone.image && (
                        <Image
                          src={urlFor(milestone.image)
                            .width(600)
                            .height(400)
                            .url()}
                          alt={milestone.title}
                          width={600}
                          height={400}
                          quality={90}
                          className="rounded-lg shadow-lg"
                        />
                      )}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="section-header-creative mb-16">
            <div>
              <h2 className="section-title-creative">{data.leadershipTitle}</h2>
              <p className="section-description-creative">
                {data.leadershipDescription}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.leadershipTeam?.map((member: TeamMember, index: number) => (
              <div key={index} className="team-card-creative">
                <div className="team-image-creative">
                  {member.image && (
                    <Image
                      src={urlFor(member.image).width(400).height(400).url()}
                      alt={member.name}
                      width={400}
                      height={400}
                      quality={90}
                      className="w-full h-full object-cover rounded-md"
                    />
                  )}
                </div>
                <div className="team-content-creative">
                  <h3 className="team-name-creative">{member.name}</h3>
                  <p className="team-role-creative">{member.role}</p>
                  {member.bio && typeof member.bio === "string" ? (
                    <p className="team-bio-creative">{member.bio}</p>
                  ) : member.bio && Array.isArray(member.bio) ? (
                    <PortableText value={member.bio as PortableTextBlock[]} />
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-6">{data.ctaSectionTitle}</h2>
          <p className="text-lg mb-10 opacity-90">
            {data.ctaSectionDescription}
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {data.ctaButtons?.map((button: Button, index: number) => (
              <Link
                key={index}
                href={button.link}
                className={`btn ${
                  button.isPrimary ? "btn-white" : "btn-outline-white"
                }`}
              >
                {button.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
