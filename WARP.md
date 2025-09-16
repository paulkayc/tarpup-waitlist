# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is the **TarpAI Waitlist Landing Page** - a Next.js 15 application for TarpAI's AI-powered campus connectivity platform. Built with:
- **Next.js 15** with App Router and React Server Components
- **React 19** with TypeScript
- **Tailwind CSS v4** for styling with custom design tokens
- **AOS (Animate On Scroll)** for smooth scroll animations
- **Headless UI** for accessible interactive components

**TarpAI** helps students find rides, roommates, study groups, and activity partners through AI-powered matching. This landing page collects waitlist signups before the platform launches at universities.

## Architecture

### Directory Structure
```
app/
├── (auth)/           # Authentication pages (signin, signup, reset-password)
├── (default)/        # Main dark theme landing page layout and content
├── light/            # Light theme variant of landing page
├── api/              # API routes
├── css/              # Global styles and Tailwind configuration
└── layout.tsx        # Root layout with fonts and global structure

components/
├── ui/               # Reusable UI components (header, footer, logo)
├── light/            # Light theme specific component variants
├── hero-home.tsx     # Main hero section with TarpAI messaging and waitlist CTA
├── features.tsx      # TarpAI features (ride sharing, roommates, marketplace, etc.)
├── workflows.tsx     # How TarpAI AI matching works
├── tarpai-video.tsx  # Interactive demo video player
├── university-selector.tsx  # University selection component
├── waitlist-cta.tsx  # Waitlist signup call-to-action
└── *.tsx            # Other TarpAI landing page sections

utils/
├── useMasonry.tsx   # Custom masonry layout hook
└── useMousePosition.tsx # Mouse position tracking hook

public/
├── images/          # Static images and graphics
├── videos/          # Video assets
└── fonts/           # Custom font files (Nacelle)
```

### Key Architectural Patterns

#### App Router Structure
- Uses Next.js 15 App Router with route groups: `(auth)` and `(default)`
- Server Components by default with `"use client"` only where needed
- Route-level layouts for different page groups

#### Component Architecture
- **Page Composition**: Main page composed of modular section components
- **Layout Separation**: Distinct layouts for auth and main content areas
- **UI Component Library**: Reusable UI components in `components/ui/`
- **Animation Integration**: AOS library initialized in DefaultLayout

#### Styling System
- **Tailwind v4**: Latest version with native CSS approach
- **Custom Design Tokens**: Defined in `app/css/style.css` with CSS variables
- **Component-Scoped Styles**: Additional styles imported via CSS layers
- **Responsive Design**: Mobile-first approach with consistent breakpoints

#### Font Management
- **Inter**: Variable Google Font for body text
- **Nacelle**: Custom local font for headings with multiple weights/styles
- **Font Variables**: CSS custom properties for consistent typography

## Development Commands

### Primary Development
```bash
# Start development server with Turbopack (recommended)
pnpm dev

# Alternative package managers
npm run dev
yarn dev

# Production build
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint
```

### Development Server
- Development runs on `http://localhost:3000`
- Uses Turbopack for faster builds and hot reloading
- File changes in `app/` and `components/` auto-refresh

### Project Setup
```bash
# Install dependencies (pnpm recommended per README)
pnpm install

# Alternative installations
npm install
yarn install
```

## Code Patterns

### Component Structure
- Landing page sections are modular and can be reordered in `app/(default)/page.tsx`
- Each section component handles its own styling and animations
- Consistent use of responsive containers: `mx-auto max-w-6xl px-4 sm:px-6`

### Animation Implementation
- AOS library configured in `DefaultLayout` with global settings
- Individual components use `data-aos` attributes for scroll animations
- Custom CSS animations defined in theme configuration

### Responsive Design
- Mobile-first approach with `sm:`, `md:`, `lg:` breakpoints
- Flexible grid layouts using CSS Grid and Flexbox
- Consistent spacing and typography scales

### TypeScript Integration
- Strict TypeScript configuration with Next.js plugin
- Type definitions for custom hooks and component props
- Path mapping configured for `@/*` imports

## Styling Guidelines

### Tailwind v4 Features
- Uses native CSS with `@import 'tailwindcss'`
- Custom design tokens in CSS variables format
- Component-layer imports for reusable patterns

### Color Scheme
- Dark theme with gray-950 background
- Indigo accent colors for CTAs and highlights
- Consistent color opacity patterns (e.g., `/65` for secondary text)

### Typography
- Nacelle font for headings with gradient text effects
- Inter font for body text with custom letter spacing
- Responsive text sizing with consistent line heights

## Deployment

The project is configured for Vercel deployment (as mentioned in README):
- Next.js optimized build output
- Static asset optimization
- API routes supported
- Environment variables can be configured in Vercel dashboard

## Key TarpAI Files

### Main Pages
- `app/(default)/page.tsx` - Main dark theme landing page composition
- `app/light/page.tsx` - Light theme variant with theme toggle
- `app/layout.tsx` - Root layout with TarpAI metadata and branding

### Core TarpAI Components
- `components/hero-home.tsx` - Hero section with TarpAI messaging, stats, and waitlist CTA
- `components/features.tsx` - TarpAI features (smart ride sharing, roommate matching, etc.)
- `components/tarpai-video.tsx` - Interactive demo video showcasing AI matching
- `components/university-selector.tsx` - University selection for waitlist signup
- `components/waitlist-cta.tsx` - Main call-to-action for joining waitlist
- `components/workflows.tsx` - How TarpAI's AI matching process works

### UI & Branding
- `components/ui/footer.tsx` - TarpAI footer with campus-focused links
- `components/ui/logo.tsx` - TarpAI logo component
- `app/css/style.css` - Global styling and design tokens

### Configuration
- `package.json` - Project metadata for TarpAI waitlist app
- `README.md` - Comprehensive TarpAI project documentation
