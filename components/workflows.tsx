import Spotlight from "@/components/spotlight";

export default function Workflows() {
  return (
    <section id="how-it-works">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                How It Works
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Connect with your campus community in 3 simple steps
            </h2>
            <p className="text-lg text-gray-200">
              TarpAI makes connecting with fellow students effortless. Just tell us what you need, 
              and our AI will instantly match you with students who can help or share your interests.
            </p>
          </div>
          {/* Spotlight items */}
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            {/* Card 1 - Tell TarpAI What You Need */}
            <div
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                {/* Step number */}
                <div
                  className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-300 font-bold text-sm border border-indigo-400/30"
                  aria-hidden="true"
                >
                  1
                </div>
                {/* Icon */}
                <div className="flex items-center justify-center h-72 p-8">
                  <div className="relative">
                    {/* Chat bubble icon */}
                    <svg
                      className="w-32 h-32 text-indigo-400 transition-transform duration-300 group-hover/card:scale-105"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    {/* Floating AI sparkle */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center animate-pulse">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                      <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                        💬 AI-Powered
                      </span>
                    </span>
                  </div>
                  <h3 className="font-nacelle text-lg font-semibold text-gray-200 mb-2">
                    Tell TarpAI What You Need
                  </h3>
                  <p className="text-gray-200 mb-3">
                    Simply type what you're looking for in natural language. 
                    "Need a ride to LAX tomorrow" or "Looking for a study partner for calculus."
                  </p>
                  <div className="text-xs text-gray-300 bg-gray-800/30 rounded p-2">
                    <strong>Example:</strong> "Need someone to split an Uber to the airport at 6am"
                  </div>
                </div>
              </div>
            </div>
            {/* Card 2 - Get Matched Instantly */}
            <div
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                {/* Step number */}
                <div
                  className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20 text-green-300 font-bold text-sm border border-green-400/30"
                  aria-hidden="true"
                >
                  2
                </div>
                {/* Icon */}
                <div className="flex items-center justify-center h-72 p-8">
                  <div className="relative">
                    {/* Lightning bolt icon for instant matching */}
                    <svg
                      className="w-32 h-32 text-green-400 transition-transform duration-300 group-hover/card:scale-105"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    {/* Floating user icons */}
                    <div className="absolute -top-1 -left-3 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-bounce" style={{animationDelay: '0s'}}>
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="absolute -bottom-1 -right-3 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-bounce" style={{animationDelay: '0.5s'}}>
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                      <span className="bg-linear-to-r from-green-500 to-green-200 bg-clip-text text-transparent">
                        ⚡ Real-Time
                      </span>
                    </span>
                  </div>
                  <h3 className="font-nacelle text-lg font-semibold text-gray-200 mb-2">
                    Get Matched Instantly
                  </h3>
                  <p className="text-gray-200 mb-3">
                    Our smart algorithm instantly finds students with similar needs or availability. 
                    See matches with profiles, ratings, and distance from you.
                  </p>
                  <div className="text-xs text-gray-300 bg-gray-800/30 rounded p-2">
                    <strong>Smart Matching:</strong> Location, timing, preferences, and safety ratings
                  </div>
                </div>
              </div>
            </div>
            {/* Card 3 - Connect & Coordinate */}
            <div
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                {/* Step number */}
                <div
                  className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/20 text-orange-300 font-bold text-sm border border-orange-400/30"
                  aria-hidden="true"
                >
                  3
                </div>
                {/* Icon */}
                <div className="flex items-center justify-center h-72 p-8">
                  <div className="relative">
                    {/* Handshake/connection icon */}
                    <svg
                      className="w-32 h-32 text-orange-400 transition-transform duration-300 group-hover/card:scale-105"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    {/* Floating chat bubbles */}
                    <div className="absolute -top-2 -left-2 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center animate-pulse">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center animate-pulse" style={{animationDelay: '0.7s'}}>
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                      <span className="bg-linear-to-r from-orange-500 to-orange-200 bg-clip-text text-transparent">
                        💬 Direct Messaging
                      </span>
                    </span>
                  </div>
                  <h3 className="font-nacelle text-lg font-semibold text-gray-200 mb-2">
                    Connect & Coordinate
                  </h3>
                  <p className="text-gray-200 mb-3">
                    Chat directly with your matches to coordinate details. 
                    Share contact info, plan meetups, and build lasting connections with your campus community.
                  </p>
                  <div className="text-xs text-gray-300 bg-gray-800/30 rounded p-2">
                    <strong>Safe & Secure:</strong> Verified student profiles and in-app messaging
                  </div>
                </div>
              </div>
            </div>
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
