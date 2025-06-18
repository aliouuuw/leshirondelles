import aboutPage from "./aboutPage";
import author from "./author";
import blogPost from "./blogPost";
import contactPage from "./contactPage";
import homePage from "./homePage";
import inscriptionPage from "./inscriptionPage";
import program from "./program";
import siteSettings from "./siteSettings";
import testimonial from "./testimonial";
import blocks from "./blocks";

export const schema = {
  types: [
    aboutPage,
    author,
    blogPost,
    contactPage,
    homePage,
    inscriptionPage,
    program,
    siteSettings,
    testimonial,
    ...blocks,
  ],
};
