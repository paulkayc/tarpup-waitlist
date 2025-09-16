"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

import SecondaryIllustration from "@/public/images/secondary-illustration.svg";

interface AppScreenshotsProps {
  mainScreenshot: any;
  screenshots?: any[];
  className?: string;
}

export default function AppScreenshots({ 
  mainScreenshot,
  screenshots = [],
  className = "" 
}: AppScreenshotsProps) {
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<any>(null);

  const handleImageClick = (image: any) => {
    setCurrentImage(image);
    setLightboxOpen(true);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Secondary illustration */}
      <div
        className="pointer-events-none absolute bottom-8 left-1/2 -z-10 -ml-28 -translate-x-1/2 translate-y-1/2"
        aria-hidden="true"
      >
        <Image
          className="md:max-w-none"
          src={SecondaryIllustration}
          width={1165}
          height={1012}
          alt="Secondary illustration"
        />
      </div>

      {/* Main app screenshot */}
      <button
        className="group relative flex items-center justify-center rounded-2xl focus:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-200"
        onClick={() => handleImageClick(mainScreenshot)}
        aria-label="View app interface"
        data-aos="fade-up"
        data-aos-delay={200}
      >
        <figure className="relative overflow-hidden rounded-2xl before:absolute before:inset-0 before:-z-10 before:bg-linear-to-br before:from-gray-900 before:via-indigo-500/20 before:to-gray-900">
          <Image
            className="transition-all duration-300 group-hover:scale-105"
            src={mainScreenshot}
            width={1104}
            height={576}
            priority
            alt="TarpAI Connect App Interface"
          />
          
          {/* Floating UI elements overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="pointer-events-none absolute inset-0">
              {/* AI prompt bubble */}
              <div className="absolute left-4 top-4 sm:left-8 sm:top-8 rounded-xl bg-white/10 p-3 backdrop-blur-sm border border-white/20 max-w-[200px]">
                <p className="text-xs sm:text-sm text-white">
                  🚗 "Need a ride to LAX tomorrow at 2pm?"
                </p>
              </div>
              
              {/* Match notification */}
              <div className="absolute right-4 top-4 sm:right-8 sm:top-8 rounded-xl bg-indigo-500/20 p-3 backdrop-blur-sm border border-indigo-300/30 max-w-[180px]">
                <p className="text-xs sm:text-sm text-indigo-100">
                  ⚡ 5 students matched
                </p>
                <p className="text-xs text-indigo-200/70">
                  2 min away
                </p>
              </div>
              
              {/* Feature indicators */}
              <div className="absolute left-4 bottom-4 sm:left-8 sm:bottom-8 space-y-2">
                <div className="rounded-full bg-orange-500/20 px-3 py-1 backdrop-blur-sm border border-orange-300/30">
                  <p className="text-xs text-orange-100 flex items-center gap-2">
                    🏠 Roommate matching
                  </p>
                </div>
                <div className="rounded-full bg-blue-500/20 px-3 py-1 backdrop-blur-sm border border-blue-300/30">
                  <p className="text-xs text-blue-100 flex items-center gap-2">
                    📚 Study groups
                  </p>
                </div>
              </div>
              
              {/* Activity indicator */}
              <div className="absolute right-4 bottom-4 sm:right-8 sm:bottom-8 rounded-full bg-green-500/20 px-4 py-2 backdrop-blur-sm border border-green-300/30">
                <p className="text-xs text-green-100 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                  Live on campus
                </p>
              </div>
            </div>
          </div>
        </figure>
        
        {/* View app button overlay */}
        <span className="pointer-events-none absolute p-2.5 before:absolute before:inset-0 before:rounded-full before:bg-gray-950/80 before:backdrop-blur-sm before:duration-300 group-hover:before:scale-110">
          <span className="relative flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              fill="none"
              className="text-indigo-400"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Zm3.5-10-5-3.5v7l5-3.5Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm font-medium leading-tight text-gray-300">
              View App Demo
              <span className="text-gray-600"> - </span>
              <span className="text-indigo-300">Interactive</span>
            </span>
          </span>
        </span>
      </button>

      {/* Additional Screenshots Gallery */}
      {screenshots && screenshots.length > 0 && (
        <div className="mt-8" data-aos="fade-up" data-aos-delay={400}>
          <div className="text-center mb-6">
            <h3 className="text-lg font-nacelle font-semibold text-gray-200 mb-2">
              Explore TarpAI Connect
            </h3>
            <p className="text-sm text-gray-300">
              See how students are connecting across campus
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {screenshots.map((screenshot, index) => (
              <button
                key={index}
                onClick={() => handleImageClick(screenshot)}
                className="group relative overflow-hidden rounded-xl bg-gray-800/20 p-2 transition-all duration-300 hover:scale-105 hover:bg-gray-800/40"
              >
                <Image
                  src={screenshot}
                  alt={`TarpAI Feature ${index + 2}`}
                  width={300}
                  height={200}
                  className="w-full h-auto rounded-lg transition-all duration-300 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xs text-white font-medium">
                    {index === 0 && "🛒 Campus Marketplace"}
                    {index === 1 && "💬 Chat & Connect"}
                    {index === 2 && "🎯 Activity Matching"}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Lightbox modal */}
      <Dialog
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 z-99999 bg-black/70 transition-opacity duration-300 ease-out data-closed:opacity-0"
        />
        <div className="fixed inset-0 z-99999 flex px-4 py-6 sm:px-6">
          <div className="mx-auto flex h-full max-w-6xl items-center">
            <DialogPanel
              transition
              className="max-h-full w-full overflow-hidden rounded-2xl bg-gray-900 shadow-2xl duration-300 ease-out data-closed:scale-95 data-closed:opacity-0"
            >
              {currentImage && (
                <Image
                  src={currentImage}
                  width={1200}
                  height={800}
                  alt="TarpAI App Screenshot"
                  className="max-h-[80vh] w-full object-contain"
                />
              )}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}