import { groq } from "next-sanity";

export const aboutPageQuery = groq`
  *[_type == "aboutPage"][0]{
    heroTitle,
    heroDescription,
    foundedYear,
    location,
    missionQuote,
    missionQuoteAuthor,
    heroImage,
    coreValuesTitle,
    coreValuesDescription,
    coreValues[]{
      icon,
      title,
      description,
    },
    historyTitle,
    historyDescription,
    historyMilestones[]{
      year,
      title,
      description,
      image,
    },
    leadershipTitle,
    leadershipDescription,
    leadershipTeam[]{
      name,
      role,
      image,
      bio,
    },
    ctaSectionTitle,
    ctaSectionDescription,
    ctaButtons[]{
      label,
      link,
      isPrimary,
    },
  }
`;
