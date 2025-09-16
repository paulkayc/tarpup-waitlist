export default function WorkflowsLight() {
  return (
    <section id="how-it-works" className="py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-400/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-400/50">
              <span className="inline-flex bg-linear-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">
                How It Works
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--tw-color-gray-800),var(--tw-color-indigo-600),var(--tw-color-gray-900),var(--tw-color-indigo-700),var(--tw-color-gray-800))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Connect with your campus community in 3 simple steps
            </h2>
            <p className="text-lg text-gray-600">
              TarpAI makes connecting with fellow students effortless. Just tell us what you need, 
              and our AI will instantly match you with students who can help or share your interests.
            </p>
          </div>
          {/* Simple grid layout for light theme */}
          <div className="grid max-w-sm mx-auto gap-12 sm:max-w-none sm:grid-cols-3 md:gap-x-14 md:gap-y-16">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-indigo-100 rounded-2xl flex items-center justify-center">
                <div className="text-3xl">💬</div>
              </div>
              <h3 className="font-nacelle text-xl font-semibold text-gray-900 mb-3">
                Tell TarpAI What You Need
              </h3>
              <p className="text-gray-600">
                Simply type what you're looking for in natural language. 
                "Need a ride to LAX tomorrow" or "Looking for a study partner for calculus."
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-2xl flex items-center justify-center">
                <div className="text-3xl">⚡</div>
              </div>
              <h3 className="font-nacelle text-xl font-semibold text-gray-900 mb-3">
                Get Matched Instantly
              </h3>
              <p className="text-gray-600">
                Our smart algorithm instantly finds students with similar needs or availability. 
                See matches with profiles, ratings, and distance from you.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-orange-100 rounded-2xl flex items-center justify-center">
                <div className="text-3xl">🤝</div>
              </div>
              <h3 className="font-nacelle text-xl font-semibold text-gray-900 mb-3">
                Connect & Coordinate
              </h3>
              <p className="text-gray-600">
                Chat directly with your matches to coordinate details. 
                Share contact info, plan meetups, and build lasting connections.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}