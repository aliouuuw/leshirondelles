# Blog Style Consistency & CMS Strategy – Conversation Summary (context-1)

## Participants  
• User (site owner / developer)  
• AI Agent (assistant)

## 1. Initial Issue – Blog Design Inconsistency  
The blog listing (`/blog`) and single-post pages looked off-brand (colors, buttons, layout).  
User shared the React / Tailwind code for both pages.

## 2. Design-System Audit & Unification  
Agent explored the repo and analysed `src/app/(frontend)/styles.css`.  
Key tokens defined:  
• Primary `#00538d` • Accent `#FFCE1B` • Extensive gray scale  
• CSS vars for spacing, radius, container, etc.  
Typography standardised (Poppins headings, Inter body).  
Responsive break-points, grid utilities, button & card systems documented.

## 3. Implementation – Blog Styling Fixes  
• `styles.css` heavily extended: buttons, cards, hero, stats, footer, grids, utilities.  
• Added blog-specific `.prose` rules for rich-text.  
• Updated `/blog/page.tsx` + `/blog/[id]/page.tsx` to use shared classes:  
  – Featured-post card – Article grid – Consistent hero section – Newsletter CTA.  
Result: blog pages now visually match the rest of the site on all devices.

## 4. CMS Architecture Review (Payload CMS)  
Agent listed existing Payload collections (Users, Media, Pages, Levels, Staff, SiteSettings).  
Crafted a "Comprehensive CMS Strategy":  
  1. Add missing collections (Blog, Events, Testimonials, etc.)  
  2. Four-phase plan (Collections → Frontend integration → Content migration → Advanced features).  
  3. Supplied TypeScript collection configs, API helpers, a `DynamicHomepage` component, and migration steps.  
Phase 1 scaffolding completed in code snippets.

## 5. Performance Concern & Pivot  
User reported Payload admin was too slow.  
Agent recommended lighter alternatives:  
  • File-based JSON/Markdown (preferred) • Decap CMS (Git-based) • Airtable, simple DB.

## 6. Lightweight File-based CMS Plan (Chosen Direction)  
Steps provided:  
1. `npm uninstall` all Payload packages.  
2. Delete Payload folders (`src/collections`, `src/app/(payload)` …).  
3. Create `/src/content` with sample JSON:  
   – `homepage.json`, `site-settings.json`, `blog/posts.json`, etc.  
4. Example React admin UI suggestion & Next.js fetch helpers.

## 7. Custom CMS with Supabase & UploadThing (Final Decision)
The project direction has now shifted to building a bespoke CMS powered by **Supabase** (PostgreSQL + Auth) for structured data and **UploadThing** for all media uploads.

Key points:
• Supabase tables will store pages, blog_posts, levels, testimonials, site_settings, etc.
• A custom Next.js admin dashboard will communicate with Supabase via its JS client.
• UploadThing handles file uploads; returned URLs are saved in a `media` table / JSON column in Supabase.
• Admin UI will reuse the existing Tailwind design-system for visual consistency.

## Deliverables Produced by Agent  
• Extended `styles.css` encompassing full design system & blog styles.  
• Refactored blog page code adopting new styles.  
• (Pre-pivot) Payload collection/type definitions & dynamic components.  
• Shell commands + sample JSON files for the lightweight CMS migration.

## Outstanding / Next Steps  
1. Spin up a Supabase project and create the required tables & `media` bucket/table.
2. Configure Supabase Auth (magic-link email) and Row-Level-Security for content managers.
3. Integrate UploadThing into the admin dashboard; persist upload URLs in Supabase.
4. Build the custom Next.js admin dashboard (using the shared design-system components).
5. Replace any hard-coded or file-based data fetching with Supabase helper functions across pages.
6. Update `PROJECT_CONTEXT.md` with the new Supabase + UploadThing architecture and design-system details.