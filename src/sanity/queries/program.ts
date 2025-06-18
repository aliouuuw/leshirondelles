import { groq } from "next-sanity";

export const programPathsQuery = groq`
  *[_type == "program" && defined(slug.current)]{
    "params": { "slug": slug.current }
  }
`;

export const programNavigationQuery = groq`
  *[_type == "program"] | order(title asc) {
    "slug": slug.current,
    "title": title,
    "ageRange": ageRange
  }
`;

export const programPageQuery = groq`
  *[_type == "program" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    "content": pageBuilder[] {
      ...,
      _type == "achievementsBlock" => {
        ...,
        achievements[] {
          ...,
          icon {
            "alt": alt,
            "metadata": asset->metadata,
            "lqip": asset->metadata.lqip,
          }
        }
      },
      _type == "classLevelTiersBlock" => {
        ...,
        levels[]{
          ...,
          image {
            "alt": alt,
            "metadata": asset->metadata,
            "lqip": asset->metadata.lqip,
          }
        }
      },
      _type == "featureGridBlock" => {
        ...,
        features[]{
          ...,
          icon {
            "alt": alt,
            "metadata": asset->metadata,
            "lqip": asset->metadata.lqip,
          }
        }
      },
      _type == "heroBlock" => {
        ...,
        image {
          "alt": alt,
          "metadata": asset->metadata,
          "lqip": asset->metadata.lqip,
        },
        callout {
          ...,
          icon {
            "alt": alt,
            "metadata": asset->metadata,
            "lqip": asset->metadata.lqip,
          }
        }
      }
    }
  }
`;
