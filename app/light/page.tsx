export const metadata = {
  title: "TarpAI Connect - Light Theme - Join the Waitlist",
  description: "Be first to experience AI-powered campus connectivity. Join thousands of students waiting for TarpAI Connect to launch at their university.",
};

import Link from 'next/link'

// Simple Arrow Left SVG component
const ArrowLeft = ({ className, ...props }: { className?: string; [key: string]: any }) => (
  <svg className={className || "w-4 h-4"} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);
import PageIllustration from '@/components/page-illustration'
import Hero from '@/components/hero-home'
import AppScreenshotsCarousel from '@/components/app-screenshots-carousel'
import Workflows from '@/components/workflows'
import Features from '@/components/features'
import WaitlistCta from '@/components/waitlist-cta'

export default function LightTheme() {
  return (
    <div className="light min-h-screen bg-white text-gray-900">
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <Link 
          href="/"
          className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Dark Theme
        </Link>
      </div>

      <PageIllustration />
      <Hero />
      <AppScreenshotsCarousel />
      <Workflows />
      <Features />
      <WaitlistCta />
    </div>
  )
}