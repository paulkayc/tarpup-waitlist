"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import SecondaryIllustration from "@/public/images/secondary-illustration.svg";

interface TarpAIVideoLightProps {
  className?: string;
}

export default function TarpAIVideoLight({ className = "" }: TarpAIVideoLightProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setShowControls(false);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Secondary illustration */}
      <div
        className="pointer-events-none absolute bottom-8 left-1/2 -z-10 -ml-28 -translate-x-1/2 translate-y-1/2"
        aria-hidden="true"
      >
        <Image
          className="md:max-w-none opacity-30"
          src={SecondaryIllustration}
          width={1165}
          height={1012}
          alt="Secondary illustration"
        />
      </div>

      {/* Video container */}
      <div
        className="group relative flex items-center justify-center rounded-2xl focus:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-200 overflow-hidden"
        data-aos="fade-up"
        data-aos-delay={200}
      >
        <div className="relative overflow-hidden rounded-2xl before:absolute before:inset-0 before:-z-10 before:bg-linear-to-br before:from-gray-50 before:via-indigo-50 before:to-gray-100 shadow-2xl border border-gray-200">
          <video
            ref={videoRef}
            className="relative z-10 w-full max-w-[1104px] h-auto transition-all duration-300 group-hover:scale-[1.02] cursor-pointer"
            width={1104}
            height={576}
            onEnded={handleVideoEnd}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
            controls={showControls}
            preload="metadata"
            poster="/images/hero-image-01.jpg"
            onClick={togglePlay}
          >
            <source src="/videos/video_tapAI.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Custom play button overlay */}
          {!isPlaying && (
            <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
              {/* Floating UI elements overlay - for visual only, no interaction */}
              <div className="absolute inset-0 pointer-events-none">
                {/* AI prompt bubble */}
                <div className="absolute left-4 top-4 sm:left-8 sm:top-8 rounded-xl bg-white/90 backdrop-blur-sm p-3 border border-gray-200 max-w-[200px] shadow-lg">
                  <p className="text-xs sm:text-sm text-gray-800">
                    🚗 "Need a ride to LAX tomorrow at 2pm?"
                  </p>
                </div>
                
                {/* Match notification */}
                <div className="absolute right-4 top-4 sm:right-8 sm:top-8 rounded-xl bg-indigo-50/90 backdrop-blur-sm p-3 border border-indigo-200 max-w-[180px] shadow-lg">
                  <p className="text-xs sm:text-sm text-indigo-800">
                    ⚡ 5 students matched
                  </p>
                  <p className="text-xs text-indigo-600">
                    2 min away
                  </p>
                </div>
                
                {/* Feature indicators */}
                <div className="absolute left-4 bottom-4 sm:left-8 sm:bottom-8 space-y-2">
                  <div className="rounded-full bg-orange-50/90 backdrop-blur-sm px-3 py-1 border border-orange-200 shadow-sm">
                    <p className="text-xs text-orange-700 flex items-center gap-2">
                      🏠 Roommate matching
                    </p>
                  </div>
                  <div className="rounded-full bg-blue-50/90 backdrop-blur-sm px-3 py-1 border border-blue-200 shadow-sm">
                    <p className="text-xs text-blue-700 flex items-center gap-2">
                      📚 Study groups
                    </p>
                  </div>
                </div>
                
                {/* Activity indicator */}
                <div className="absolute right-4 bottom-4 sm:right-8 sm:bottom-8 rounded-full bg-green-50/90 backdrop-blur-sm px-4 py-2 border border-green-200 shadow-sm">
                  <p className="text-xs text-green-700 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                    Live on campus
                  </p>
                </div>
              </div>

              {/* Centered Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={togglePlay}
                  className="group pointer-events-auto flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/90 backdrop-blur-sm border border-gray-200 shadow-xl transition-all duration-300 hover:bg-white hover:scale-105 focus:outline-none focus:ring-3 focus:ring-indigo-200"
                  aria-label="Play TarpAI demo video"
                >
                  {/* Play Icon */}
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-500 transition-colors duration-300 shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="none"
                      className="text-white ml-1"
                    >
                      <path
                        fill="currentColor"
                        d="M8 5v14l11-7L8 5z"
                      />
                    </svg>
                  </div>
                  {/* Watch Demo Text */}
                  <span className="text-gray-800 font-medium text-lg">
                    Watch Demo
                  </span>
                </button>
              </div>
            </div>
          )}

          {/* Video overlay when playing */}
          {isPlaying && (
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm border border-gray-200">
              <p className="text-xs text-gray-700 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
                TarpAI Demo
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}