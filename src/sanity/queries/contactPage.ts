import { groq } from "next-sanity";

export const contactPageQuery = groq`
  *[_type == "contactPage"][0]{
    heroTitle,
    heroDescription,
    heroImage,
    officeHoursTitle,
    officeHours[]{
      day,
      hours,
    },
    contactInfoTitle,
    contactInfoDescription,
    contactInfo[]{
      icon,
      title,
      details,
      description,
    },
    socialMediaTitle,
    socialMediaDescription,
    socialMediaLinks[]{
      name,
      url,
      handle,
      icon,
    },
    departmentContactsTitle,
    departmentContactsDescription,
    departmentContacts[]{
      department,
      contactPerson,
      email,
      phone,
    },
    locationMapUrl,
    contactFormTitle,
    contactFormDescription,
  }
`;
