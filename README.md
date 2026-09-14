# Prithivan Raja — Portfolio Site

Personal portfolio and blog. Next.js 14, Tailwind CSS, Framer Motion. Static export for Netlify.

## Quick Start

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Before Launch

1. Replace `public/headshot.jpg` with your photo (800×1000px JPG recommended)
2. Place your resume at `public/resume.pdf`
3. Update GitHub URL in `components/Contact.tsx` if needed

## Writing Blog Posts

Create `content/blog/your-post-title.mdx`:

```yaml
---
title: "Your Post Title"
description: "One-line description."
date: "2026-10-01"
tags: ["Finance", "ML / AI"]
---

Your content in Markdown...
```

Push to GitHub → Netlify auto-deploys in 30 seconds.

## Deploy

1. Push to GitHub
2. Sign up at netlify.com with GitHub
3. Import repo → builds automatically via `netlify.toml`
