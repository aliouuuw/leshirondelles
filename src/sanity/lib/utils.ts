/* eslint-disable @typescript-eslint/no-explicit-any */

import { cache } from "react";
import {
  homePageQuery,
  inscriptionPageQuery,
  siteSettingsQuery,
  programPathsQuery,
  allBlogPostsQuery,
  blogPostBySlugQuery,
  blogPostPathsQuery,
  aboutPageQuery,
  contactPageQuery,
  programNavigationQuery,
  programPageQuery,
} from "../queries";
import { client } from "./client";
import type { PortableTextBlock } from "next-sanity";

export interface SanityDocument {
  _id: string;
  _createdAt: string;
  _rev: string;
  _updatedAt: string;
  _type: string;
}

// Helper function to fetch data from Sanity
async function sanityFetch<T>({
  query,
  params = {},
  tags = [],
}: {
  query: string;
  params?: any;
  tags?: string[];
}): Promise<T> {
  return client.fetch<T>(query, params, {
    cache: "force-cache",
    next: {
      tags,
    },
  });
}

export interface Button {
  label: string;
  link: string;
  isPrimary?: boolean;
}

export interface Statistic {
  value: string;
  label: string;
}

export interface MissionValue {
  icon: string;
  title: string;
  description: string;
}

export interface CtaCard {
  icon: string;
  title: string;
  description: string;
  link: string;
  linkLabel: string;
}

export interface HomePage {
  heroTitle: string;
  heroSubtitle: string;
  heroImages: any[];
  heroButtons: Button[];
  statistics: Statistic[];
  schoolLevelsTitle: string;
  schoolLevelsDescription: string;
  schoolLevels: Program[];
  missionTitle: string;
  missionDescription: string;
  missionContent: PortableTextBlock[];
  missionValues: MissionValue[];
  missionImage: any;
  newsSectionTitle: string;
  newsSectionDescription: string;
  featuredNews: BlogPost;
  latestNews: BlogPost[];
  testimonialsSectionTitle: string;
  testimonials: Testimonial[];
  ctaTitle: string;
  ctaDescription: string;
  ctaCards: CtaCard[];
  socialMediaLinks?: SocialLink[];
}

export interface SiteLink {
  label: string;
  url: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface SiteSettings extends SanityDocument {
  logo: any;
  mainNavigation: SiteLink[];
  footerNavigation: SiteLink[];
  socialLinks: SocialLink[];
  defaultOgImage: any;
}

export interface AboutPage {
  heroTitle: string;
  heroDescription?: string;
  foundedYear?: number;
  location?: string;
  missionQuote?: string;
  missionQuoteAuthor?: string;
  heroImage?: any;
  coreValuesTitle?: string;
  coreValuesDescription?: string;
  coreValues?: CoreValue[];
  historyTitle?: string;
  historyDescription?: string;
  historyMilestones?: HistoryMilestone[];
  leadershipTitle?: string;
  leadershipDescription?: string;
  leadershipTeam?: TeamMember[];
  ctaSectionTitle?: string;
  ctaSectionDescription?: string;
  ctaButtons?: Button[];
}

export interface ContactPage {
  heroTitle: string;
  heroDescription?: string;
  heroImage?: any;
  officeHoursTitle?: string;
  officeHours?: HourEntry[];
  contactInfoTitle?: string;
  contactInfoDescription?: string;
  contactInfo?: ContactInfoEntry[];
  socialMediaTitle?: string;
  socialMediaDescription?: string;
  socialMediaLinks?: SocialLink[];
  departmentContactsTitle?: string;
  departmentContactsDescription?: string;
  departmentContacts?: DepartmentContact[];
  locationMapUrl?: string;
  contactFormTitle?: string;
  contactFormDescription?: string;
  link: string;
  linkLabel: string;
}

export interface InscriptionPage {
  heroTitle: string;
  heroDescription?: string;
  heroImage?: any;
  processTitle?: string;
  processDescription?: string;
  inscriptionSteps?: InscriptionStep[];
  requiredDocumentsTitle?: string;
  requiredDocumentsDescription?: string;
  requiredDocuments?: string[];
  feesTitle?: string;
  feesDescription?: string;
  feeCategories?: FeeCategory[];
  downloadBrochureCtaTitle?: string;
  downloadBrochureCtaDescription?: string;
  brochureFile?: any;
  brochureLabel?: string;
  contactCtaTitle?: string;
  contactCtaDescription?: string;
  contactButtonLabel?: string;
  contactButtonLink?: string;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  publishedAt: string;
  category: string;
  mainImage: any;
  author: { name: string; bio?: string; image?: any };
  body: PortableTextBlock[];
  readTime: number;
  featured: boolean;
}

export interface Program {
  title: string;
  slug: { current: string };
  ageRange: string;
  description: string;
  highlights: string[];
  image: any;
  pageBuilder: any[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role?: string;
  avatar?: any;
}

export interface HourEntry {
  day: string;
  hours: string;
}

export interface ContactInfoEntry {
  icon?: string;
  title: string;
  details: string[];
  description?: string;
}

export interface DepartmentContact {
  department: string;
  contactPerson?: string;
  email?: string;
  phone?: string;
}

export interface InscriptionStep {
  stepNumber: number;
  title: string;
  description?: string;
  icon?: string;
}

export interface FeeItem {
  description: string;
  amount: string;
}

export interface FeeCategory {
  categoryName: string;
  items: FeeItem[];
}

export interface CoreValue {
  icon?: string;
  title: string;
  description?: string;
}

export interface HistoryMilestone {
  year: string;
  title: string;
  description?: string;
  image?: any;
}

export interface TeamMember {
  name: string;
  role?: string;
  image?: any;
  bio?: string | PortableTextBlock[];
}

// Program Page specific types
interface BaseBlock {
  _type: string;
  _key: string;
  title?: string;
  description?: string;
}

export interface HeroBlock extends BaseBlock {
  _type: "heroBlock";
  heading: string;
  tagline?: string;
  image: any;
  stats?: {
    value: string;
    label: string;
  }[];
  callout?: {
    icon: any;
    text: string;
  };
}

export interface AchievementsBlock extends BaseBlock {
  _type: "achievementsBlock";
  achievements: {
    _key: string;
    icon: any;
    title: string;
    description: string;
  }[];
}

export interface ClassLevelTiersBlock extends BaseBlock {
  _type: "classLevelTiersBlock";
  levels: {
    _key: string;
    title: string;
    ageRange: string;
    focus: string;
    highlights: string[];
    image: any;
  }[];
}

export interface FeatureGridBlock extends BaseBlock {
  _type: "featureGridBlock";
  features: {
    _key: string;
    icon: any;
    title: string;
    description: string;
  }[];
}

export interface ScheduleBlock extends BaseBlock {
  _type: "scheduleBlock";
  rows: {
    _key: string;
    label: string;
    value: string;
  }[];
}

export interface TabbedContentBlock extends BaseBlock {
  _type: "tabbedContentBlock";
  tabs: {
    _key: string;
    title: string;
    content: PortableTextBlock[];
  }[];
}

export type ProgramPageContent =
  | HeroBlock
  | AchievementsBlock
  | ClassLevelTiersBlock
  | FeatureGridBlock
  | ScheduleBlock
  | TabbedContentBlock;

export interface ProgramPage extends SanityDocument {
  title: string;
  slug: string;
  content: ProgramPageContent[];
}

export interface ProgramLink {
  title: string;
  slug: string;
  ageRange?: string;
}

export const getSiteSettings = cache(() => {
  return sanityFetch<SiteSettings>({
    query: siteSettingsQuery,
    tags: ["siteSettings"],
  });
});

export const getHomePage = cache(() => {
  return sanityFetch<HomePage>({
    query: homePageQuery,
    tags: ["home", "program", "blogPost"],
  });
});

export const getInscriptionPage = cache(() => {
  return sanityFetch<InscriptionPage>({
    query: inscriptionPageQuery,
    tags: ["inscriptionPage"],
  });
});

export const getAboutPage = cache(() => {
  return sanityFetch<AboutPage>({ query: aboutPageQuery, tags: ["aboutPage"] });
});

export const getContactPage = cache(() => {
  return sanityFetch<ContactPage>({
    query: contactPageQuery,
    tags: ["contactPage"],
  });
});

export async function getProgramPaths() {
  return sanityFetch<{ params: { slug: string } }[]>({
    query: programPathsQuery,
    tags: ["program"],
  });
}

export async function getBlogPostPaths() {
  return sanityFetch<{ params: { slug: string } }[]>({
    query: blogPostPathsQuery,
    tags: ["blogPost"],
  });
}

export async function getAllBlogPosts() {
  return await sanityFetch<BlogPost[]>({
    query: allBlogPostsQuery,
    tags: ["blogPost"],
  });
}

export async function getBlogPostBySlug(slug: string) {
  return await sanityFetch<BlogPost>({
    query: blogPostBySlugQuery,
    params: { slug },
    tags: [`blogPost:${slug}`],
  });
}

export async function getProgramNavigation(): Promise<ProgramLink[]> {
  return client.fetch(programNavigationQuery);
}

export async function getProgramPage(slug: string): Promise<ProgramPage> {
  return await sanityFetch<ProgramPage>({
    query: programPageQuery,
    params: { slug },
    tags: [`program:${slug}`],
  });
}
