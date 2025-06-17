import { type SchemaTypeDefinition } from "sanity";
import homePage from "./homePage";
import program from "./program";
import testimonial from "./testimonial";
import author from "./author";
import blogPost from "./blogPost";
import aboutPage from "./aboutPage";
import contactPage from "./contactPage";
import inscriptionPage from "./inscriptionPage";
import siteSettings from "./siteSettings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homePage,
    program,
    testimonial,
    author,
    blogPost,
    aboutPage,
    contactPage,
    inscriptionPage,
    siteSettings,
  ],
};
