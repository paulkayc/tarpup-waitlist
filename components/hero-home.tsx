"use client";

import { useState } from "react";
import TarpAIVideo from "@/components/tarpai-video";
import UniversitySelector from "@/components/university-selector";

export default function HeroHome() {
  const [selectedUniversity, setSelectedUniversity] = useState<any>(null);
  const [showWaitlistForm, setShowWaitlistForm] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedUniversity || !email || !name) return;

    setIsSubmitting(true);
    // TODO: Implement actual waitlist submission
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    
    alert(`🎉 Welcome to the waitlist! You're in line for ${selectedUniversity.shortName}. We'll notify you when TarpAI Connect launches at your campus!`);
    setIsSubmitting(false);
    setShowWaitlistForm(false);
  };

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Coming Soon to Your Campus
              </span>
            </div>
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Your Campus Community,{" "}
              <span className="block">AI-Powered</span>
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-gray-200"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Connect instantly with fellow students for rides, roommates, study groups, and more. 
                Just tell TarpAI what you need—we'll find your perfect match in real-time.
              </p>
              
              {/* Waitlist CTA buttons */}
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto inline-block"
                    href="https://form.zootools.co/go/KDlUo4K7EhwvbQxa3V3b"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="relative inline-flex items-center">
                      🎓 Join Campus Waitlist
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        →
                      </span>
                    </span>
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                    href="#how-it-works"
                  >
                    See How It Works
                  </a>
                </div>
              </div>

              {/* Quick stats */}
              <div className="mt-8 grid grid-cols-3 gap-4 text-center" data-aos="fade-up" data-aos-delay={800}>
                <div>
                  <div className="text-2xl font-bold text-indigo-300">5,000+</div>
                  <div className="text-sm text-gray-300">Students Waiting</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-indigo-300">50+</div>
                  <div className="text-sm text-gray-300">Campuses Requested</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-indigo-300">Real-time</div>
                  <div className="text-sm text-gray-300">AI Matching</div>
                </div>
              </div>
            </div>
          </div>

          {/* TarpAI Demo Video */}
          <div id="app-demo">
            <TarpAIVideo className="" />
          </div>
        </div>
      </div>

      {/* Waitlist Form Modal */}
      {showWaitlistForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <div className="bg-gray-900 rounded-2xl p-8 max-w-md w-full mx-4 border border-gray-700/50">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-nacelle font-semibold text-white mb-2">
                Join the Waitlist
              </h2>
              <p className="text-gray-300">
                Be among the first to experience TarpAI Connect
              </p>
            </div>

            <form onSubmit={handleWaitlistSubmit} className="space-y-4">
              <UniversitySelector 
                onUniversityChange={setSelectedUniversity}
                className=""
              />
              
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-3 bg-gray-800/40 border border-gray-700/50 rounded-lg text-gray-200 placeholder-gray-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-hidden"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Student Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-3 bg-gray-800/40 border border-gray-700/50 rounded-lg text-gray-200 placeholder-gray-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-hidden"
                  placeholder="your.email@university.edu"
                  required
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  disabled={!selectedUniversity || !email || !name || isSubmitting}
                  className="flex-1 bg-linear-to-t from-indigo-600 to-indigo-500 text-white py-3 px-4 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:from-indigo-700 hover:to-indigo-600 transition-all"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Joining...
                    </span>
                  ) : (
                    `Join ${selectedUniversity?.shortName || 'Campus'} Waitlist`
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setShowWaitlistForm(false)}
                  className="px-4 py-3 text-gray-300 hover:text-white transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
