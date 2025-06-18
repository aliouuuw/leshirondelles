// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
// import { createClient, defineLive } from "next-sanity";

// import { apiVersion, dataset, projectId, readToken } from "../env";

// // The live client should not use the CDN
// const liveClient = createClient({
//   projectId,
//   dataset,
//   apiVersion,
//   useCdn: false,
//   token: readToken,
// });

// export const { sanityFetch, SanityLive } = defineLive({
//   client: liveClient,
//   // The serverToken is required for auth-protected drafts to be seen by live queries
//   serverToken: readToken,
//   // The browserToken is required for browsers to subscribe to auth-protected draft documents
//   browserToken: readToken,
// });
