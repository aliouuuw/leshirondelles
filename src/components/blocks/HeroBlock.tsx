import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { FaClock, FaGraduationCap, FaUsers, FaChild } from "react-icons/fa";

const iconMap: { [key: string]: React.ReactNode } = {
  FaClock: <FaClock className="w-4 h-4" />,
  FaGraduationCap: <FaGraduationCap className="w-6 h-6 text-accent mt-1" />,
  FaUsers: <FaUsers className="w-4 h-4" />,
  FaChild: <FaChild className="w-4 h-4" />,
};

const Icon = ({ name }: { name: string }) => {
  const IconComponent = iconMap[name];
  return IconComponent ? <>{IconComponent}</> : null;
};

export const HeroBlock = ({
  programTitle,
  block,
}: {
  programTitle: string;
  block: any;
}) => {
  return (
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
                Programmes / {programTitle}
              </span>
            </div>
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-gray-900">{programTitle}</span>
                {block.subtitle && (
                  <span className="block text-primary">{block.subtitle}</span>
                )}
              </h1>
              <div className="max-w-xl">
                {block.description && (
                  <p className="text-xl text-gray-600 leading-relaxed mb-6">
                    {block.description}
                  </p>
                )}
                {block.stats && block.stats.length > 0 && (
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    {block.stats.map((stat: any, index: number) => (
                      <div key={index} className="flex items-center gap-2">
                        {stat.icon && <Icon name={stat.icon} />}
                        <span>{stat.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            {block.callout && (
              <div className="bg-gray-50 p-8 border-l-4 border-accent">
                <div className="flex items-start gap-4">
                  {block.callout.icon && <Icon name={block.callout.icon} />}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {block.callout.title}
                    </h3>
                    <p className="text-gray-700">{block.callout.content}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="relative h-[500px] w-full">
                {block.image && (
                  <Image
                    src={urlFor(block.image).width(800).height(500).url()}
                    alt={programTitle}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-accent"></div>
              <div className="absolute -bottom-6 -right-6 w-8 h-8 bg-primary"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
