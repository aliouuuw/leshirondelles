import type { FileAsset, Image as SanityImage } from "sanity";
import { SanityDocument, PortableTextBlock } from "sanity";
import { sanityFetch } from "./live";
import {
  homePageQuery,
  aboutPageQuery,
  contactPageQuery,
  inscriptionPageQuery,
  siteSettingsQuery,
  allBlogPostsQuery,
  blogPostBySlugQuery,
} from "../queries";

// Define TypeScript interfaces for your Sanity document types

export interface SanityImageAsset extends SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
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
  description?: string;
}

export interface CtaCard {
  icon?: string;
  title: string;
  description?: string;
  link: string;
  linkLabel: string;
}

export interface Program extends SanityDocument {
  title: string;
  slug: { current: string };
  ageRange?: string;
  highlights?: string[];
  image: SanityImageAsset;
  body: PortableTextBlock[]; // PortableText
}

export interface Testimonial extends SanityDocument {
  quote: string;
  author: string;
  role?: string;
  avatar?: SanityImageAsset;
}

export interface Author extends SanityDocument {
  name: string;
  slug: { current: string };
  image?: SanityImageAsset;
  bio?: PortableTextBlock[]; // PortableText
}

export interface BlogPost extends SanityDocument {
  title: string;
  slug: { current: string };
  excerpt?: string;
  publishedAt: string;
  category: string;
  mainImage: SanityImageAsset;
  author: Author; // Reference to Author
  body: PortableTextBlock[]; // PortableText
  readTime?: string;
  featured?: boolean;
}

export interface HomePage extends SanityDocument {
  heroTitle: string;
  heroSubtitle?: string;
  heroBackgroundImage: SanityImageAsset;
  heroButtons?: Button[];
  statistics?: Statistic[];
  schoolLevelsTitle?: string;
  schoolLevelsDescription?: string;
  schoolLevels?: Program[]; // References to Program documents
  missionTitle?: string;
  missionDescription?: string;
  missionContent?: PortableTextBlock[]; // PortableText
  missionValues?: MissionValue[];
  missionImage?: SanityImageAsset;
  newsSectionTitle?: string;
  newsSectionDescription?: string;
  featuredNews?: BlogPost; // Reference to BlogPost
  latestNews?: BlogPost[]; // References to BlogPost documents
  testimonialsSectionTitle?: string;
  testimonials?: Testimonial[]; // References to Testimonial documents
  ctaTitle?: string;
  ctaDescription?: string;
  ctaCards?: CtaCard[];
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
  image?: SanityImageAsset;
}

export interface TeamMember {
  name: string;
  role?: string;
  image?: SanityImageAsset;
  bio?: string;
}

export interface AboutPage extends SanityDocument {
  heroTitle: string;
  heroDescription?: string;
  foundedYear?: number;
  location?: string;
  missionQuote?: string;
  missionQuoteAuthor?: string;
  heroImage?: SanityImageAsset;
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

export interface SocialLink {
  name: string;
  url: string;
  handle?: string;
  icon?: string;
}

export interface DepartmentContact {
  department: string;
  contactPerson?: string;
  email?: string;
  phone?: string;
}

export interface ContactPage extends SanityDocument {
  heroTitle: string;
  heroDescription?: string;
  heroImage?: SanityImageAsset;
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

export interface InscriptionPage extends SanityDocument {
  heroTitle: string;
  heroDescription?: string;
  heroImage?: SanityImageAsset;
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
  brochureFile?: FileAsset; // Sanity file asset
  brochureLabel?: string;
  contactCtaTitle?: string;
  contactCtaDescription?: string;
  contactButtonLabel?: string;
  contactButtonLink?: string;
}

export interface NavItem {
  label: string;
  slug: string;
}

export interface SiteSettings extends SanityDocument {
  siteTitle: string;
  logo: SanityImageAsset;
  defaultOgImage?: SanityImageAsset;
  mainNavigation?: NavItem[];
  footerText?: string;
  socialMediaLinks?: SocialLink[];
}

// Helper functions to fetch data

export async function getHomePage() {
  return sanityFetch({ query: homePageQuery });
}

export async function getAboutPage() {
  return sanityFetch({ query: aboutPageQuery });
}

export async function getContactPage() {
  return sanityFetch({ query: contactPageQuery });
}

export async function getInscriptionPage() {
  return sanityFetch({ query: inscriptionPageQuery });
}

export async function getSiteSettings() {
  return sanityFetch({ query: siteSettingsQuery });
}

export async function getAllBlogPosts() {
  return sanityFetch({ query: allBlogPostsQuery });
}

export async function getBlogPostBySlug(slug: string) {
  return sanityFetch({
    query: blogPostBySlugQuery,
    params: { slug },
  });
}
