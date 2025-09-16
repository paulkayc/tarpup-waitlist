"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Import the app screenshots
import Screenshot1 from "@/public/images/screenshots/Screenshot1.png";
import Screenshot2 from "@/public/images/screenshots/Screenshot2.png";
import Screenshot3 from "@/public/images/screenshots/Screenshot3.png";
import Screenshot4 from "@/public/images/screenshots/Screenshot4.png";

const screenshots = [
  {
    id: 1,
    src: Screenshot1,
    alt: "TarpAI Connect Dashboard",
    title: "AI-Powered Marketplace",
    description: "Browse real-time requests and matches from students on your campus"
  },
  {
    id: 2,
    src: Screenshot2,
    alt: "TarpAI Connect Chat Interface",
    title: "Smart Matching",
    description: "Get instantly connected with students who share your needs"
  },
  {
    id: 3,
    src: Screenshot3,
    alt: "TarpAI Connect Profile",
    title: "Direct Messaging",
    description: "Chat securely with matches and coordinate plans easily"
  },
  {
    id: 4,
    src: Screenshot4,
    alt: "TarpAI Connect Features",
    title: "Campus Community",
    description: "Join study groups, find rides, discover roommates, and more"
  }
];

export default function AppScreenshotsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % screenshots.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 8 seconds of manual interaction
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <section className="relative py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
            <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
              App Preview
            </span>
          </div>
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            See TarpAI Connect in action
          </h2>
          <p className="text-lg text-gray-200">
            Explore the intuitive interface designed specifically for college students
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-2xl bg-gray-800/20 p-4">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {screenshots.map((screenshot, index) => (
                <div key={screenshot.id} className="w-full flex-shrink-0">
                  <div className="flex flex-col lg:flex-row items-center gap-8 p-4">
                    {/* Screenshot */}
                    <div className="lg:w-2/3">
                      <div className="relative overflow-hidden rounded-xl bg-gray-900/50 p-2">
                        <Image
                          src={screenshot.src}
                          alt={screenshot.alt}
                          width={800}
                          height={500}
                          className="w-full h-auto rounded-lg shadow-2xl"
                          priority={index === 0}
                        />
                        {/* Mobile frame overlay */}
                        <div className="absolute inset-0 rounded-xl border-2 border-gray-600/30 pointer-events-none"></div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="lg:w-1/3 text-center lg:text-left">
                      <h3 className="mb-4 font-nacelle text-2xl font-semibold text-gray-200">
                        {screenshot.title}
                      </h3>
                      <p className="text-gray-200 text-lg leading-relaxed">
                        {screenshot.description}
                      </p>
                      {/* Feature badges */}
                      <div className="mt-6 flex flex-wrap gap-2 justify-center lg:justify-start">
                        {index === 0 && (
                          <>
                            <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-sm rounded-full">Real-time</span>
                            <span className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full">AI-Powered</span>
                          </>
                        )}
                        {index === 1 && (
                          <>
                            <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-sm rounded-full">Smart Matching</span>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full">Campus Only</span>
                          </>
                        )}
                        {index === 2 && (
                          <>
                            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full">Secure Chat</span>
                            <span className="px-3 py-1 bg-pink-500/20 text-pink-300 text-sm rounded-full">Verified Users</span>
                          </>
                        )}
                        {index === 3 && (
                          <>
                            <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-sm rounded-full">Community</span>
                            <span className="px-3 py-1 bg-teal-500/20 text-teal-300 text-sm rounded-full">Safety First</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 text-gray-300 hover:text-white hover:bg-gray-800/80 transition-all duration-300 group"
            aria-label="Previous screenshot"
          >
            <svg className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 text-gray-300 hover:text-white hover:bg-gray-800/80 transition-all duration-300 group"
            aria-label="Next screenshot"
          >
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-8 gap-3">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-indigo-500 scale-125' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to screenshot ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-4 mx-auto max-w-xs">
            <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-indigo-500 to-indigo-300 rounded-full transition-all duration-500"
                style={{ width: `${((currentSlide + 1) / screenshots.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}