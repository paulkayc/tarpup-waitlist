"use client";

import { useState } from "react";

interface UniversityOption {
  id: string;
  name: string;
  shortName: string;
  waitlistCount?: number;
}

const universities: UniversityOption[] = [
  { id: "usc", name: "University of Southern California", shortName: "USC", waitlistCount: 1247 },
  { id: "ucla", name: "University of California, Los Angeles", shortName: "UCLA", waitlistCount: 892 },
  { id: "stanford", name: "Stanford University", shortName: "Stanford", waitlistCount: 756 },
  { id: "berkeley", name: "University of California, Berkeley", shortName: "UC Berkeley", waitlistCount: 634 },
  { id: "mit", name: "Massachusetts Institute of Technology", shortName: "MIT", waitlistCount: 543 },
  { id: "harvard", name: "Harvard University", shortName: "Harvard", waitlistCount: 487 },
  { id: "caltech", name: "California Institute of Technology", shortName: "Caltech", waitlistCount: 298 },
  { id: "other", name: "Other (Request Your Campus)", shortName: "Other", waitlistCount: 2156 },
];

interface UniversitySelectorProps {
  onUniversityChange?: (university: UniversityOption | null) => void;
  className?: string;
}

export default function UniversitySelector({ 
  onUniversityChange,
  className = "" 
}: UniversitySelectorProps) {
  const [selectedUniversity, setSelectedUniversity] = useState<UniversityOption | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (university: UniversityOption) => {
    setSelectedUniversity(university);
    setIsOpen(false);
    onUniversityChange?.(university);
  };

  return (
    <div className={`relative ${className}`}>
      <label className="block text-sm font-medium text-gray-200 mb-2">
        Select Your University
      </label>
      
      <div className="relative">
        <button
          type="button"
          className="relative w-full cursor-pointer rounded-lg bg-gray-800/40 border border-gray-700/50 py-3 pl-3 pr-10 text-left text-gray-200 shadow-sm hover:bg-gray-800/60 focus:border-indigo-500 focus:outline-hidden focus:ring-1 focus:ring-indigo-500 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="block truncate">
            {selectedUniversity ? (
              <span className="flex items-center justify-between">
                <span>{selectedUniversity.shortName}</span>
                <span className="text-xs text-indigo-300">
                  {selectedUniversity.waitlistCount} on waitlist
                </span>
              </span>
            ) : (
              <span className="text-gray-400">Choose your campus...</span>
            )}
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <svg
              className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>

        {isOpen && (
          <div className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg bg-gray-800 border border-gray-700/50 shadow-lg">
            <ul className="py-1">
              {universities.map((university) => (
                <li key={university.id}>
                  <button
                    type="button"
                    className="relative cursor-pointer select-none py-2 pl-3 pr-9 text-gray-200 hover:bg-gray-700/50 w-full text-left transition-colors"
                    onClick={() => handleSelect(university)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="block truncate font-medium">
                          {university.shortName}
                        </span>
                        <span className="block truncate text-sm text-gray-400">
                          {university.name}
                        </span>
                      </div>
                      <span className="text-xs text-indigo-300 bg-indigo-500/20 px-2 py-1 rounded-full">
                        {university.waitlistCount}
                      </span>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {selectedUniversity && (
        <p className="mt-2 text-sm text-gray-300">
          🎉 Join {selectedUniversity.waitlistCount} students at {selectedUniversity.shortName}
        </p>
      )}
    </div>
  );
}