export const metadata = {
  title: "TarpAI Connect - Join the Waitlist",
  description: "Be first to experience AI-powered campus connectivity. Join thousands of students waiting for TarpAI Connect to launch at their university.",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import AppScreenshotsCarousel from "@/components/app-screenshots-carousel";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import WaitlistCta from "@/components/waitlist-cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <AppScreenshotsCarousel />
      <Workflows />
      <Features />
      <WaitlistCta />
    </>
  );
}
