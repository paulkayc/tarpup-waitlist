export default function FeaturesLight() {
  return (
    <section className="relative bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t border-gray-200 py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-400/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-400/50">
            <span className="inline-flex bg-linear-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">
              Campus Connectivity
            </span>
          </div>
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--tw-color-gray-800),var(--tw-color-indigo-600),var(--tw-color-gray-900),var(--tw-color-indigo-700),var(--tw-color-gray-800))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Everything you need to connect with your campus
          </h2>
          <p className="text-lg text-gray-600">
            TarpAI understands campus life and connects you with the right students at the right time. 
            From finding rides to forming study groups, we've got your campus community covered.
          </p>
          </div>

          {/* Features grid */}
          <div className="mx-auto grid max-w-sm items-start gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <div className="mb-3 text-2xl">🚗</div>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-900">
                Smart Ride Sharing
              </h3>
              <p className="text-gray-600 mb-3">
                "Need a ride to LAX at 8am?" AI matches you instantly with students heading there at the same time. 
                Split costs and make new friends on the way.
              </p>
              <div className="text-xs text-indigo-700 bg-indigo-50 rounded px-2 py-1 inline-block">
                • Real-time matching • Cost splitting • Safety verified
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <div className="mb-3 text-2xl">🏠</div>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-900">
                Roommate Matching
              </h3>
              <p className="text-gray-600 mb-3">
                Find your perfect roommate based on lifestyle preferences, study habits, and cleanliness. 
                Our AI considers compatibility beyond just budget.
              </p>
              <div className="text-xs text-indigo-700 bg-indigo-50 rounded px-2 py-1 inline-block">
                • Lifestyle matching • Compatibility scores • Background checks
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <div className="mb-3 text-2xl">🛒</div>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-900">
                Campus Marketplace
              </h3>
              <p className="text-gray-600 mb-3">
                "Need a couch for my dorm?" AI connects you with students selling furniture, textbooks, and more. 
                Buy, sell, and trade safely within your campus community.
              </p>
              <div className="text-xs text-indigo-700 bg-indigo-50 rounded px-2 py-1 inline-block">
                • Student verification • Local pickup • Fair pricing
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <div className="mb-3 text-2xl">📚</div>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-900">
                Study Groups
              </h3>
              <p className="text-gray-600 mb-3">
                "Looking for calc study group?" AI matches you with students in the same class with complementary strengths. 
                Form groups that actually help everyone succeed.
              </p>
              <div className="text-xs text-indigo-700 bg-indigo-50 rounded px-2 py-1 inline-block">
                • Academic matching • Skill complementing • Schedule alignment
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <div className="mb-3 text-2xl">🎉</div>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-900">
                Activity Buddies
              </h3>
              <p className="text-gray-600 mb-3">
                "Want to hit the gym tomorrow?" Find workout partners, movie buddies, or concert companions. 
                AI matches you with students who share your interests and availability.
              </p>
              <div className="text-xs text-indigo-700 bg-indigo-50 rounded px-2 py-1 inline-block">
                • Interest matching • Schedule sync • Safety first
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <div className="mb-3 text-2xl">💬</div>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-900">
                Instant Messaging
              </h3>
              <p className="text-gray-600 mb-3">
                Connect and communicate directly with your matches through secure in-app messaging. 
                Coordinate plans, share details, and build lasting campus friendships.
              </p>
              <div className="text-xs text-indigo-700 bg-indigo-50 rounded px-2 py-1 inline-block">
                • Secure messaging • Photo sharing • Group chats
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}