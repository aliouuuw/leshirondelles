import React from "react";
import { getProgramPaths, getProgramPage } from "@/sanity/lib/utils";
import { BlockRenderer } from "@/components/blocks/BlockRenderer";

// Generate static pages for all programs
export async function generateStaticParams() {
  const paths = await getProgramPaths();
  return paths.map((path) => path.params);
}

// Revalidate the page every 60 seconds
export const revalidate = 60;

// Page component
export default async function ProgramPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = await getProgramPage(slug);

  if (!program) {
    return (
      <div className="min-h-screen bg-gray-50 text-gray-800 pt-20">
        Program not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 pt-20">
      {/* The BlockRenderer now handles the hero section and all other content */}
      <BlockRenderer programTitle={program.title} blocks={program.content} />
    </div>
  );
}
