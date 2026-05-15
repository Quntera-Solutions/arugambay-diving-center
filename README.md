# Arugambay Diving Center — Website

A modern, responsive marketing site for **Arugambay Diving Center** in Arugam Bay, Sri Lanka.

Built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed for deployment on **Vercel**.

## ✨ Features

- 🌊 **Animated SVG ocean waves** between sections + floating bubbles in the hero
- 📱 **Fully responsive**, mobile-first design
- 💬 **WhatsApp integration** — floating "Chat with us" button + booking form opens WhatsApp with prefilled message
- 🤿 **Hybrid structure**: single landing page + dedicated `/courses` page for PADI training
- 🎨 **Refined coastal aesthetic** — Fraunces (display serif) + Manrope (body), deep ocean blues on white
- ♿ **Accessible**: semantic HTML, ARIA labels, reduced-motion friendly, keyboard-navigable
- 🔍 **SEO-ready** — proper metadata, Open Graph tags, semantic structure
- ⚡ **Fast** — Next.js Image optimization (AVIF/WebP), font subsetting

## 🚀 Quick Start

### Prerequisites

- **Node.js 18.17 or later** ([download](https://nodejs.org/))
- npm (comes with Node) or pnpm/yarn

### Install & Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open http://localhost:3000
```

The site will hot-reload as you edit files.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
arugambay-diving-center/
├── app/
│   ├── courses/
│   │   └── page.tsx          ← /courses route
│   ├── globals.css           ← Tailwind + custom utilities
│   ├── layout.tsx            ← Root layout, fonts, metadata
│   └── page.tsx              ← / (landing page)
├── components/
│   ├── BookingForm.tsx       ← Form → WhatsApp deep-link
│   ├── Contact.tsx           ← Address, phone, embedded map
│   ├── Footer.tsx
│   ├── Gallery.tsx           ← Mosaic image grid
│   ├── Hero.tsx              ← Full-screen video-style hero
│   ├── InclusivePhilosophy.tsx
│   ├── Navbar.tsx            ← Sticky, transparent → solid on scroll
│   ├── PadiCallout.tsx       ← Banner linking to /courses
│   ├── RevealOnScroll.tsx    ← Global IntersectionObserver
│   ├── Services.tsx          ← 6-card services grid
│   ├── WaveDivider.tsx       ← Animated SVG wave
│   ├── WhatsAppFloat.tsx     ← Floating chat button
│   └── WhyDiveWithUs.tsx     ← 3 feature cards
├── lib/
│   └── site.ts               ← Brand constants & whatsappUrl() helper
├── public/
│   └── images/               ← All photos
└── ...config files
```

## ✏️ Customizing

### Change phone number / address / brand details

Edit one file: **`lib/site.ts`**

```ts
export const siteConfig = {
  name: 'Arugambay Diving Center',
  phone: '+94 76 530 2577',
  phoneRaw: '+94765302577',
  whatsappNumber: '94765302577',   // ← change this for WhatsApp link
  address: 'Kiki Mall, Panama Rd, Arugam Bay, Sri Lanka',
  season: 'April to October',
};
```

### Change the color theme

The ocean palette is defined in **`tailwind.config.ts`** under `theme.extend.colors.ocean`. Adjust the shades and the whole site updates.

### Replace images

Drop new images into `public/images/` with the same filenames, or update the `src` paths in the relevant components.

### Edit services / courses

- Services grid → `components/Services.tsx` (array at top)
- PADI courses → `app/courses/page.tsx` (array at top)

### Edit copy

All text is inline in the components — search-and-replace is the fastest way to change wording.

## 🚢 Deploy to Vercel

1. **Push your code** to GitHub, GitLab or Bitbucket.

2. Go to **[vercel.com/new](https://vercel.com/new)** and import your repo.

3. Vercel auto-detects Next.js — just click **Deploy**. No environment variables needed.

4. Your site will be live at `your-project.vercel.app` within ~1 minute.

5. Add a custom domain in **Project Settings → Domains**.

### Or deploy via CLI

```bash
npm install -g vercel
vercel        # follow the prompts, first run links your project
vercel --prod # deploy to production
```

## 🧰 Tech Stack

| | |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Fonts | Fraunces + Manrope (via `next/font/google`) |
| Icons | Inline SVG (no icon library — keeps bundle tiny) |
| Map | Google Maps embed (no API key) |
| Hosting | Vercel-ready |

## 📝 Notes

- **The booking form does not need a backend.** It builds a formatted WhatsApp message from the form data and opens it in WhatsApp — the user reviews and sends. This avoids the need for an email service, a database, or any server logic. If later you want server-side handling, swap the `onSubmit` in `BookingForm.tsx`.
- **Images are served from `/public/images/`.** Next.js automatically optimizes them.
- **`prefers-reduced-motion`** is respected — scroll reveals and wave animations are subtle and motion-safe.
- **The Google Maps embed** doesn't require an API key as long as you use the public embed URL format. For more control (custom markers etc.) you'd use the Maps JavaScript API.

## 📞 Support

For questions about diving in Arugam Bay: **+94 76 530 2577** (WhatsApp)
