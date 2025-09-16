"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import SecondaryIllustration from "@/public/images/secondary-illustration.svg";

interface TarpAIVideoProps {
  className?: string;
}

export default function TarpAIVideo({ className = "" }: TarpAIVideoProps) {
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
          className="md:max-w-none"
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
        <div className="relative overflow-hidden rounded-2xl before:absolute before:inset-0 before:-z-10 before:bg-linear-to-br before:from-gray-900 before:via-indigo-500/20 before:to-gray-900">
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

              {/* Centered Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={togglePlay}
                  className="group pointer-events-auto flex flex-col items-center gap-3 p-6 rounded-2xl bg-black/60 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-black/70 hover:scale-105 focus:outline-none focus:ring-3 focus:ring-indigo-200"
                  aria-label="Play TarpAI demo video"
                >
                  {/* Play Icon */}
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors duration-300">
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
                  <span className="text-white font-medium text-lg">
                    Watch Demo
                  </span>
                </button>
              </div>
            </div>
          )}

          {/* Video overlay when playing */}
          {isPlaying && (
            <div className="absolute top-4 left-4 bg-black/50 px-3 py-1 rounded-full">
              <p className="text-xs text-white flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-red-400 animate-pulse"></span>
                TarpAI Demo
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}