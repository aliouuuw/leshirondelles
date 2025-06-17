import { groq } from "next-sanity";

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0]{
    siteTitle,
    logo,
    defaultOgImage,
    mainNavigation[]{
      label,
      slug,
    },
    footerText,
    socialMediaLinks[]{
      platform,
      url,
      icon,
    },
  }
`;
