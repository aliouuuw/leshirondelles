## Sanity Migration Checklist

This checklist outlines the steps to migrate the website's frontend content to be dynamic using Sanity as the backend.

### Phase 1: Content Model Design & Implementation (Completed)

1.  **[x] Define Sanity Schemas:**
    *   Create schema files for each content type in `src/sanity/schemaTypes/`.
    *   **[x] Singleton Documents:**
        *   `siteSettings`: For global configurations (logo, default OG image, nav links, social links).
        *   `homePage`: For the homepage's unique sections (hero, stats, mission, CTA).
        *   `aboutPage`: For the "About Us" page content (hero, core values, history, leadership team).
        *   `contactPage`: For contact information (hero, address blocks, map coordinates, form copy).
        *   `inscriptionPage`: For enrollment details (hero, required documents, fees table, CTA copy).
    *   **[x] Reusable Document Types:**
        *   `program`: Details for each educational program (title, slug, age range, highlights, image, body).
        *   `testimonial`: Quotes from parents/students (quote, author, role, avatar).
        *   `blogPost`: Articles for the blog (title, slug, excerpt, published date, category, main image, author reference, rich text body).
        *   `author`: Information about content authors (name, picture, bio).
        *   `newsItem` (Optional): If distinct from blog posts, otherwise use `blogPost` with a specific category.
        *   `stat`: For animated statistics (label, value).
    *   **[x] Embedded/Object Types:** Define these for components like `coreValue`, `historyMilestone`, `leadershipMember`, `button`, `link`, `richImage`, etc., which will be nested within singleton documents.
2.  **[x] Update `src/sanity/schemaTypes/index.ts`:**
    *   Import all newly created schema files.
    *   Add each imported schema to the `types` array in the `export const schema` object.
3.  **[x] Initial Data Import/Creation:**
    *   Populate your Sanity Studio with initial content. This can be done manually via the Studio UI or by writing import scripts for existing static data.

### Phase 2: Data Fetching & Frontend Integration (In Progress)

1.  **[x] Create GROQ Queries & Fetch Helpers:**
    *   Develop GROQ queries for each document type and section in `src/sanity/queries/` (e.g., `homePage.ts`, `blogPost.ts`).
    *   Implement small fetch helper functions using the Sanity client for each query.
2.  **[x] Refactor Next.js Pages (`src/app/(frontend)/`)**:
    *   Modify each page component to fetch data from Sanity using the new fetch helpers.
    *   Replace hard-coded arrays and content with dynamic data retrieved from Sanity documents.
    *   For images, use `urlFor(source).width(...).url()` to generate optimized image URLs.
    *   For rich text content (like blog post bodies), integrate `@portabletext/react` for rendering.
    *   **Completed Pages:** `HomePage`, `AboutPage`, `ContactPage`, `InscriptionPage`.
3.  **[ ] Implement Dynamic Routes (e.g., Blog Posts, Programs):**
    *   Rename relevant dynamic route folders (e.g., `[id]` to `[slug]` for better SEO and readability).
    *   Implement `generateStaticParams` in dynamic route pages (e.g., `src/app/(frontend)/blog/[slug]/page.tsx`) to pre-render pages at build time.
    *   Fetch individual post data based on the `slug` parameter.
    *   **Next Step:** Create `src/app/(frontend)/programs/[slug]/page.tsx`.
4.  **[ ] Integrate Site-wide Data:**
    *   In `src/app/(frontend)/layout.tsx`, fetch the `siteSettings` document.
    *   Use this data to dynamically populate navigation links, logo, footer content, and other site-wide elements.
5.  **[ ] Enable Sanity Live Preview:**
    *   Add the `<SanityLive />` component (from `@/sanity/lib/live`) to the root of your frontend layout (`src/app/(frontend)/layout.tsx`) to enable real-time content preview during editing in Sanity Studio.
6.  **[x] Environment Variables:**
    *   Ensure your `.env.local` file contains the necessary Sanity environment variables.
7.  **[x] Set Revalidation Strategy:**
    *   Add `export const revalidate = 60;` to pages that benefit from Incremental Static Regeneration (ISR).

### Phase 3: Testing & Deployment (Not Started)

1.  **[ ] Thorough Testing:**
    *   Verify that all pages render correctly with dynamic content from Sanity.
    *   Test all links, images, and rich text rendering.
    *   Check responsive design across various devices.
2.  **[x] Cleanup Obsolete Data:**
    *   Once the dynamic content is confirmed to be working, remove all old hard-coded static arrays and data from the React pages. (This has been done for the migrated pages).
3.  **[ ] Deployment:**
    *   Push your changes to your repository.
    *   Deploy the updated website to your hosting platform (e.g., Vercel), ensuring all environment variables are correctly set.
4.  **[ ] Sanity Studio Access:**
    *   Provide content editors with access to the Sanity Studio (accessible via the `/studio` route in your application).

This plan provides a clear roadmap for transitioning your website's content to a dynamic Sanity backend, allowing for easier content management and updates.
