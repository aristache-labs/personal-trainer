# Elite Trainer - Premium Personal Training Website

A modern, production-ready personal trainer website built with Next.js 14+, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Premium Dark Theme** - Modern, professional design with lime accent colors
- 🌍 **Multi-language Support** - Full English and Romanian translations
- 📱 **Fully Responsive** - Optimized for mobile, tablet, laptop, and desktop
- ⚡ **High Performance** - Fast loading with optimized images and animations
- 🎭 **Smooth Animations** - Tasteful scroll reveals and micro-interactions
- 🎯 **Conversion-Focused** - Strategic CTAs and trust-building elements
- ♿ **Accessible** - WCAG compliant with proper semantic HTML
- 🔍 **SEO-Optimized** - Meta tags, Open Graph, and structured content

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Syne (display) + DM Sans (body)

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
personal-trainer/
├── app/
│   ├── [locale]/          # Localized pages
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/
│   ├── layout/            # Navbar, Footer, etc.
│   ├── sections/          # Page sections
│   └── ui/                # Reusable UI components
├── dictionaries/          # i18n translations
├── lib/                   # Utilities
└── public/                # Static assets
```

## Sections Included

1. **Hero** - Full-viewport landing with stats
2. **About** - Trainer story and values
3. **Services** - 7 service cards with benefits
4. **Benefits** - Why choose this trainer
5. **Transformations** - Before/after results
6. **Testimonials** - Client reviews
7. **Process** - Step-by-step workflow
8. **Pricing** - 3-tier pricing plans
9. **FAQ** - Common questions
10. **Contact** - Form + contact options

## Customization

### Update Content

Edit translation files:
- `dictionaries/en.json` (English)
- `dictionaries/ro.json` (Romanian)

### Change Colors

Modify `tailwind.config.ts`:
```ts
colors: {
  accent: '#a3e635', // Your brand color
  background: '#09090b',
  surface: '#18181b',
}
```

### Add Images

Replace placeholders in sections:
- Hero: Professional trainer photo
- About: Personal story photo
- Transformations: Before/after images

### Update Contact Info

Update links in:
- `components/sections/Contact.tsx`
- `components/ui/FloatingWhatsApp.tsx`

## Build for Production

```bash
npm run build
npm start
```

## Deploy

This project is ready to deploy on:
- **Vercel** (recommended)
- **Netlify**
- **Any Node.js hosting**

## Performance Tips

- Replace placeholder images with optimized real photos
- Use `next/image` for all images
- Test with Lighthouse for optimization
- Enable compression on production server

## License

Private project - All rights reserved

## Support

For questions or customization requests, contact: contact@elitetrainer.com
