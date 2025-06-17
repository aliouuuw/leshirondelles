import { groq } from "next-sanity";

export const allBlogPostsQuery = groq`
  *[_type == "blogPost"] | order(publishedAt desc){
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    category,
    mainImage,
    author->{name},
    readTime,
    featured,
  }
`;

export const blogPostBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    category,
    mainImage,
    author->{name, bio, image},
    body,
    readTime,
  }
`;
