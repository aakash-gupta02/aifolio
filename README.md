# **AIFolio – AI Tools Directory (100+ Tools)**

**Live Demo:** [https://aifolio-labs.vercel.app](https://aifolio-labs.vercel.app)
**Tech:** Next.js 15 · Tailwind CSS v4 · TypeScript · SSG + ISR

---

## **Overview**

**AIFolio** is a curated directory of **100+ AI tools**, built as part of the **RaftLabs Intern Assessment**.
The site includes:

* A modern landing page
* A full AI tools listing page with search, filters & permutations
* Dynamic detailed pages for each AI tool
* Metadata, SEO optimization, OpenGraph, sitemap
* Fully static generation (SSG) + incremental regeneration (ISR)
* Light/Dark mode
* Deployed on Vercel

This project demonstrates the ability to **design, ship, and iterate fast using AI tools**.

---

# **Screenshots**

### Landing Page

[![screencapture_aifolio_labs_vercel_app_2025_11_15_13_52_14.png](https://i.postimg.cc/KcQjcQTB/screencapture_aifolio_labs_vercel_app_2025_11_15_13_52_14.png)](https://postimg.cc/ThLfCVC3)

### Dark Mode Landing Page

[![screencapture-aifolio-labs-vercel-app-2025-11-15-13-57-19.png](https://i.postimg.cc/L8trRQYn/screencapture-aifolio-labs-vercel-app-2025-11-15-13-57-19.png)](https://postimg.cc/zyfdFjkr)

### All Tools Listing

[![Screenshot_2025_11_15_135321.png](https://i.postimg.cc/h4Mv4Mmj/Screenshot_2025_11_15_135321.png)](https://postimg.cc/ThLfCVCM)

### Tool Detail Page

[![Screenshot_2025_11_15_135359.png](https://i.postimg.cc/0jtyt2vn/Screenshot_2025_11_15_135359.png)](https://postimg.cc/JHk808GH)


---

# **Dataset Used**

### **Source URL:**

[https://theresanaiforthat.com/leaderboard/](https://theresanaiforthat.com/leaderboard/)

### **What data was extracted?**

For each AI tool:

* Name
* Rank
* Slug
* Description
* Pricing
* Verified status
* Image/Logo URL

### **How the dataset was generated**

The website renders its leaderboard using a **server-side HTML block**, not a JSON API.
Since the network tab did NOT show any API response, the data was visible only through:

**Chrome DevTools → Sources → Rendered HTML**

Process used:

1. Opened *There's An AI For That → Leaderboard*
2. Opened **Sources tab** and located the full HTML block containing the 100 tool cards
3. Copied that raw HTML
4. Used **DeepSeek** to convert that messy HTML structure into a cleaned, normalized JSON array
5. Saved as `data/tools.json` in the project
6. Created TypeScript types and a helper utility (`getTools`) to load the dataset statically

No external API calls — purely static data, exactly as required.

---

# **Tech Stack**

### **Frontend / Framework**

* Next.js 15 (App Router)
* TypeScript
* Tailwind CSS v4
* Lucide React Icons

### **Build / Rendering**

* **SSG** for all pages
* **ISR (Revalidate every 1 hour)** for tool detail pages
* Metadata & OpenGraph
* Automatic sitemap generation
* Route-based metadata with `generateMetadata`
* `generateStaticParams` for 100+ tool detail pages

### **Deployment**

* Vercel (Production)

---

# **Design Inspiration **

### 1. Landing Page Design – Pinterest

[https://www.pinterest.com/pin/34691859627866376/](https://www.pinterest.com/pin/34691859627866376/)

### 2. Datalux Website desgin – Pinterest

[https://www.pinterest.com/pin/918241811554646456/](https://www.pinterest.com/pin/918241811554646456/)

### 3. Link Stack - Dark Mode 

[https://linkstackk.vercel.app](https://linkstackk.vercel.app)

These references inspired:

* Purple gradient theme
* Clean card layout
* Mesh backgrounds
* Minimal typography
* Section spacing and visual hierarchy

---

# **Features**

### Modern Landing Page

Gradient hero section, stats, features, CTA.

### AI Tools Listing

* Grid layout
* Search
* Keyword-based filtering
* Category / Pricing / Verified permutations

### Dynamic Tool Detail Pages

* Logo
* Rank
* Pricing badge
* Verified status
* Overview card
* Visit Tool button
* Gradient accents + clean UI

### Permutation Pages

* `/tools/free`
* `/tools/rated`
* `/tools/verified`

### Fully SEO Ready

* Metadata
* OG image ready
* Sitemap
* Structured titles
* Auto-generated static HTML

### Mobile Responsive

100% responsive with a compact navbar and mobile menu.

### Light / Dark Mode

Custom theme toggle that overrides system preferences.

---

# **AI Tools Used During Build**

Here are **3 AI prompts** used during the project:

### **1. Convert HTML of 100 AI tools into structured JSON**

```
Convert this HTML list of tool cards into a clean JSON array with fields:
rank, name, slug, description, pricing, verified, image_url.
Remove unnecessary markup and normalize the data.
```

### **2. Generate UI sections based on a reference**

```
Create a modern landing page hero section using Tailwind CSS.
Theme: purple gradient, AI aesthetic, clean typography.
Include heading, subtitle, CTA buttons and soft background blobs.
```

### **3. Improve the UI of a detailed tool page**

```
Make this tool detail page look premium. Add subtle gradients,
badge styling, a sidebar CTA card, icons, and better spacing.
Use Tailwind and keep it clean.
```

---

# **Scripts**

```
npm run dev      # start development
npm run build    # build with SSG + ISR
npm run lint     # linting
npm run start    # run production build
```

---

# **What I Would Improve With 2 More Days**

1. **Add Category-Based Filters**
    Smarter multi-filter with tags, pricing, sectors, etc.

2. **Faster Search With Fuse.js**
    Fuzzy search to improve discovery.

3. **Add “Related Tools” on Tool Detail Page**
    Suggest tools with similar pricing/category.

4. **Generate Dynamic OG Images for Each Tool**
    Better social previews.

5. **Add Pagination or Infinite Scroll**
    Useful when dataset becomes bigger (200+ tools).

6. **Add Favorites (LocalStorage)**
    Let users pin tools they like.

---

# **Submission Files**

* GitHub Repo → [https://github.com/aakash-gupta02/aifolio](https://github.com/aakash-gupta02/aifolio)
* Live Vercel URL → [https://aifolio-labs.vercel.app](https://aifolio-labs.vercel.app)

