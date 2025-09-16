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

export default function AppScreenshotsCarouselLight() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % screenshots.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-12 md:py-20 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-400/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-400/50">
            <span className="inline-flex bg-linear-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">
              App Preview
            </span>
          </div>
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--tw-color-gray-800),var(--tw-color-indigo-600),var(--tw-color-gray-900),var(--tw-color-indigo-700),var(--tw-color-gray-800))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            See TarpAI Connect in action
          </h2>
          <p className="text-lg text-gray-600">
            Explore the intuitive interface designed specifically for college students
          </p>
        </div>

        {/* Current Screenshot Display */}
        <div className="relative">
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Screenshot */}
              <div className="lg:w-2/3">
                <div className="relative overflow-hidden rounded-xl bg-gray-50 p-2">
                  <Image
                    src={screenshots[currentSlide].src}
                    alt={screenshots[currentSlide].alt}
                    width={800}
                    height={500}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="lg:w-1/3 text-center lg:text-left">
                <h3 className="mb-4 font-nacelle text-2xl font-semibold text-gray-900">
                  {screenshots[currentSlide].title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {screenshots[currentSlide].description}
                </p>
                {/* Feature badges */}
                <div className="mt-6 flex flex-wrap gap-2 justify-center lg:justify-start">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full">Real-time</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">AI-Powered</span>
                </div>
              </div>
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-8 gap-3">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-indigo-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}