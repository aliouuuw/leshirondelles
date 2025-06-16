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
We opted for a **custom headless CMS** built on:
1. **Supabase** – PostgreSQL database, Row-Level-Security, Auth (magic-link email). Tables: `pages`, `blog_posts`, `levels`, `testimonials`, `site_settings`, plus a `media` reference table or JSON columns.
2. **UploadThing** – handles all media uploads; returned URLs are stored in Supabase.
3. **Next.js Admin Dashboard** – custom UI (using the same Tailwind design-system) that consumes Supabase JS client for CRUD operations and UploadThing for file input.

### Content Flow
Content Manager ↔ Next.js Admin Dashboard ↔ Supabase (data) & UploadThing (files)
Frontend pages fetch data via Supabase helpers; images use stored URLs.

### Migration Tasks
- [ ] Spin up Supabase project & create tables.
- [ ] Configure Auth & RLS policies for content-manager role.
- [ ] Integrate UploadThing keys & callbacks.
- [ ] Build admin dashboard pages (dashboard, blog, pages, settings, media).
- [ ] Replace any remaining hard-coded JSON/file data with Supabase queries.

---