import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.png";

export default function Features() {
  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
            <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
              Campus Connectivity
            </span>
          </div>
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Everything you need to connect with your campus
          </h2>
          <p className="text-lg text-gray-200">
            TarpAI understands campus life and connects you with the right students at the right time. 
            From finding rides to forming study groups, we've got your campus community covered.
          </p>
          </div>
          <div className="flex justify-center pb-4 md:pb-12" data-aos="fade-up">
            <Image
              className="max-w-none"
              src={FeaturesImage}
              width={1104}
              height={384}
              alt="Features"
            />
          </div>
          {/* Items */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
            <article>
              <div className="mb-3 text-2xl">
                🚗
              </div>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Smart Ride Sharing
              </h3>
              <p className="text-gray-200">
                "Need a ride to LAX at 8am?" AI matches you instantly with students heading there at the same time. 
                Split costs and make new friends on the way.
              </p>
              <div className="mt-2 text-xs text-indigo-300">
                • Real-time matching • Cost splitting • Safety verified
              </div>
            </article>
            <article>
              <div className="mb-3 text-2xl">
                🏠
              </div>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Roommate Matching
              </h3>
              <p className="text-gray-200">
                Find your perfect roommate based on lifestyle preferences, study habits, and cleanliness. 
                Our AI considers compatibility beyond just budget.
              </p>
              <div className="mt-2 text-xs text-indigo-300">
                • Lifestyle matching • Compatibility scores • Background checks
              </div>
            </article>
            <article>
              <div className="mb-3 text-2xl">
                🛒
              </div>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Campus Marketplace
              </h3>
              <p className="text-gray-200">
                "Need a couch for my dorm?" AI connects you with students selling furniture, textbooks, and more. 
                Buy, sell, and trade safely within your campus community.
              </p>
              <div className="mt-2 text-xs text-indigo-300">
                • Student verification • Local pickup • Fair pricing
              </div>
            </article>
            <article>
              <div className="mb-3 text-2xl">
                📚
              </div>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Study Groups
              </h3>
              <p className="text-gray-200">
                "Looking for calc study group?" AI matches you with students in the same class with complementary strengths. 
                Form groups that actually help everyone succeed.
              </p>
              <div className="mt-2 text-xs text-indigo-300">
                • Academic matching • Skill complementing • Schedule alignment
              </div>
            </article>
            <article>
              <div className="mb-3 text-2xl">
                🎉
              </div>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Activity Buddies
              </h3>
              <p className="text-gray-200">
                "Want to hit the gym tomorrow?" Find workout partners, movie buddies, or concert companions. 
                AI matches you with students who share your interests and availability.
              </p>
              <div className="mt-2 text-xs text-indigo-300">
                • Interest matching • Schedule sync • Safety first
              </div>
            </article>
            <article>
              <div className="mb-3 text-2xl">
                💬
              </div>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Instant Messaging
              </h3>
              <p className="text-gray-200">
                Connect and communicate directly with your matches through secure in-app messaging. 
                Coordinate plans, share details, and build lasting campus friendships.
              </p>
              <div className="mt-2 text-xs text-indigo-300">
                • Secure messaging • Photo sharing • Group chats
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
