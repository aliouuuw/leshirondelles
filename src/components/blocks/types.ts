import type { Media, Page, Staff, Level } from "@/payload-types";

export interface Button {
  label: string;
  link: string;
  id?: string | null;
}

export interface CallToActionButton {
  label: string;
  linkType: "internal" | "external";
  internalLink?: number | Page | null;
  externalUrl?: string | null;
  style?: "primary" | "secondary" | null;
  id?: string | null;
}

export interface HeroBlock {
  title: string;
  subtitle?: string | null;
  backgroundImage?: number | Media | null;
  buttons?: Button[] | null;
  id?: string | null;
  blockName?: string | null;
  blockType: "hero";
}

export interface RichTextBlock {
  content: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ("ltr" | "rtl") | null;
      format: "left" | "start" | "center" | "right" | "end" | "justify" | "";
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  id?: string | null;
  blockName?: string | null;
  blockType: "richText";
}

export interface ImageBlock {
  image: number | Media;
  caption?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: "imageBlock";
}

export interface CallToActionBlock {
  heading?: string | null;
  subtext?: string | null;
  buttons?: CallToActionButton[] | null;
  id?: string | null;
  blockName?: string | null;
  blockType: "callToAction";
}

export interface TeacherProfileBlock {
  title?: string | null;
  description?: string | null;
  staff: (number | Staff)[];
  layout?: "grid" | "list" | null;
  id?: string | null;
  blockName?: string | null;
  blockType: "teacherProfile";
}

export interface SchoolLevelBlock {
  title?: string | null;
  description?: string | null;
  level: number | Level;
  showCurriculum?: boolean | null;
  showGallery?: boolean | null;
  callToAction?: CallToActionButton | null;
  id?: string | null;
  blockName?: string | null;
  blockType: "schoolLevel";
}

export interface GalleryBlock {
  title?: string | null;
  description?: string | null;
  images: {
    image: number | Media;
    caption?: string | null;
    id?: string | null;
  }[];
  layout?: "grid" | "masonry" | "carousel" | null;
  id?: string | null;
  blockName?: string | null;
  blockType: "gallery";
}

export interface TestimonialBlock {
  title?: string | null;
  testimonials: {
    quote: string;
    author: string;
    role?: string | null;
    image?: number | Media | null;
    id?: string | null;
  }[];
  layout?: "grid" | "carousel" | "list" | null;
  id?: string | null;
  blockName?: string | null;
  blockType: "testimonial";
}

export interface ContactFormBlock {
  title?: string | null;
  description?: string | null;
  fields: {
    name: string;
    type: "text" | "email" | "tel" | "textarea";
    required?: boolean | null;
    label?: string | null;
    placeholder?: string | null;
    id?: string | null;
  }[];
  submitLabel?: string | null;
  successMessage?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: "contactForm";
}

export interface CalendarBlock {
  title?: string | null;
  description?: string | null;
  events: {
    title: string;
    date: string;
    endDate?: string | null;
    description?: string | null;
    location?: string | null;
    type?: "academic" | "event" | "holiday" | null;
    id?: string | null;
  }[];
  id?: string | null;
  blockName?: string | null;
  blockType: "calendar";
}

export type BlockType =
  | HeroBlock
  | RichTextBlock
  | ImageBlock
  | CallToActionBlock
  | TeacherProfileBlock
  | SchoolLevelBlock
  | GalleryBlock
  | TestimonialBlock
  | ContactFormBlock
  | CalendarBlock;
