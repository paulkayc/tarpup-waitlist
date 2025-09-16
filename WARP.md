# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a Next.js 15 landing page template called "Open PRO" built with:
- **Next.js 15** with App Router and React Server Components
- **React 19** with TypeScript
- **Tailwind CSS v4** for styling with custom design tokens
- **AOS (Animate On Scroll)** for smooth scroll animations
- **Headless UI** for accessible interactive components

The project is based on a free template from Cruip.com and serves as a modern landing page for SaaS products, open source projects, or online services.

## Architecture

### Directory Structure
```
app/
├── (auth)/           # Authentication pages (signin, signup, reset-password)
├── (default)/        # Main landing page layout and content
├── api/              # API routes
├── css/              # Global styles and Tailwind configuration
└── layout.tsx        # Root layout with fonts and global structure

components/
├── ui/               # Reusable UI components (header, footer, logo)
├── hero-home.tsx     # Main hero section with video modal
├── features.tsx      # Features grid section
├── workflows.tsx     # Workflows showcase
├── testimonials.tsx  # Customer testimonials
├── cta.tsx          # Call-to-action section
└── *.tsx            # Other landing page sections

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

## Key Files to Modify

- `app/(default)/page.tsx` - Main landing page composition
- `components/hero-home.tsx` - Primary hero section and main CTA
- `components/features.tsx` - Product features showcase
- `app/css/style.css` - Global styling and design tokens
- `app/layout.tsx` - Site metadata and global structure