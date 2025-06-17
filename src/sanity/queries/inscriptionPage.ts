import { groq } from "next-sanity";

export const inscriptionPageQuery = groq`
  *[_type == "inscriptionPage"][0]{
    heroTitle,
    heroDescription,
    heroImage,
    processTitle,
    processDescription,
    inscriptionSteps[]{
      stepNumber,
      title,
      description,
      icon,
    },
    requiredDocumentsTitle,
    requiredDocumentsDescription,
    requiredDocuments,
    feesTitle,
    feesDescription,
    feeCategories[]{
      categoryName,
      items[]{
        description,
        amount,
      },
    },
    downloadBrochureCtaTitle,
    downloadBrochureCtaDescription,
    brochureFile,
    brochureLabel,
    contactCtaTitle,
    contactCtaDescription,
    contactButtonLabel,
    contactButtonLink,
  }
`;
