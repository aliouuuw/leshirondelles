Website Structure for Institution Les Hirondelles
1. Homepage
-Hero Section: A large, welcoming image or video of the school with a short slogan (e.g., "Nurturing Tomorrow's Leaders in Senegal").
- Quick Links: Buttons to key areas (Admissions, Contact, Calendar).
- About Preview: A short paragraph with a "Learn More" link.
- News / Events: Carousel or list of upcoming school events or announcements.
- Testimonial Section: Quotes from parents, students, and alumni.
- Call to Action: "Enroll Now" or "Visit Our Campus" button.
2. About Us
- Mission & Vision
- History of the School
- Principal's Message
- School Values & Pedagogy
- Accreditations & Affiliations
3. Our Programs
Each section should include:

- Overview of the level
- Curriculum Highlights
- Daily Schedule Example
- Photos or short videos
- Special Programs (e.g., Language, Arts, Sports)
Sections:

- Preschool
- Elementary
- Middle School
4. Admissions
- Why Choose Us
- How to Apply
- Tuition & Fees
- Scholarships / Financial Aid
- FAQs
- Downloadable Application Forms
5. Life at Les Hirondelles
- Clubs & Extracurriculars
- School Trips
- Student Achievements
- - Lunch & Nutrition
Discipline & Well-being Policy
6. News & Events
- Blog or press release format
- School calendar with holidays and term dates
7. Gallery
- Photos and videos sorted by events or school levels
- Virtual campus tour (if available)
8. Contact Us
- Contact Form
- Phone, Email, Address
- Embedded Google Map
- Office Hours
- Social media links
9. Footer
- Quick links to major sections
- Social media icons
- Newsletter signup
- Legal info: Privacy Policy, Terms of Use

---

## Design System Overview
- Color tokens: `--primary` #00538d, `--accent` #FFCE1B, gray-scale (`--gray-50` → `--gray-900`).
- Typography: Poppins (headings), Inter (body).  Consistent font-weights & responsive sizes.
- Shared components/classes:
  • `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-accent`
  • `.card`, `.card-image`, `.card-content`
  • Section helpers: `.section`, `.section-header-creative`, `.hero-*`, `.stats-*`, `.prose` (blog rich-text)
- Responsive grid utilities: `.grid`, `.grid-2`, `.grid-3`, `.grid-4`.

## CMS / Data Architecture (Final Decision)
The project uses **Sanity.io** as a headless CMS to manage all dynamic content. This provides a flexible and powerful content backend with a built-in, customizable editing interface (Sanity Studio).

1.  **Sanity.io:** Serves as the single source of truth for content. It handles the database, a real-time API for content delivery, and asset management (image uploads).
2.  **Next.js Frontend:** The website is built with Next.js and React. It fetches data from Sanity at build time (for static pages) and on-demand (for previews and dynamic content) using GROQ queries.
3.  **Sanity Studio:** Embedded directly into the Next.js application at the `/studio` route, allowing content managers to edit the website's content in a user-friendly interface.

### Content Flow
Content Manager ↔ Sanity Studio (`/studio`) ↔ Sanity.io (data & assets) ↔ Next.js Frontend (data fetching & rendering)

### Key Implementation Details
- **Schemas:** All content models are defined as schemas in `src/sanity/schemaTypes/`. This includes singleton documents for unique pages (`homePage`, `aboutPage`, etc.) and reusable document types (`program`, `blogPost`, `testimonial`).
- **Data Fetching:** A centralized utility file (`src/sanity/lib/utils.ts`) contains data-fetching functions (e.g., `getHomePage`, `getAboutPage`) that pair GROQ queries with the Sanity client.
- **Image Optimization:** Sanity's image pipeline is used via the `@sanity/image-url` library to transform and optimize images on the fly.
- **Live Preview:** Real-time content previews are enabled for an improved editorial experience.

### Migration Tasks
- [ ] Spin up Supabase project & create tables.
- [ ] Configure Auth & RLS policies for content-manager role.
- [ ] Integrate UploadThing keys & callbacks.
- [ ] Build admin dashboard pages (dashboard, blog, pages, settings, media).
- [ ] Replace any remaining hard-coded JSON/file data with Supabase queries.

---