export default function WaitlistCtaLight() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-400/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-400/50">
              <span className="inline-flex bg-linear-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">
                Ready to Connect?
              </span>
            </div>
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--tw-color-gray-800),var(--tw-color-indigo-600),var(--tw-color-gray-900),var(--tw-color-indigo-700),var(--tw-color-gray-800))] bg-[length:200%_auto] bg-clip-text pb-8 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
            >
              Join thousands of students already waiting
            </h2>
            <p 
              className="mb-8 text-lg text-gray-600"
              data-aos="fade-up" 
              data-aos-delay={200}
            >
              Be among the first to experience AI-powered campus connectivity. 
              Get notified the moment TarpAI Connect launches at your university.
            </p>
            
            {/* Stats Row */}
            <div className="mb-8 grid grid-cols-3 gap-4 text-center" data-aos="fade-up" data-aos-delay={300}>
              <div>
                <div className="text-2xl font-bold text-indigo-600">5,000+</div>
                <div className="text-sm text-gray-500">Students Waiting</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-indigo-600">50+</div>
                <div className="text-sm text-gray-500">Campuses</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-indigo-600">Coming Soon</div>
                <div className="text-sm text-gray-500">This Semester</div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <div data-aos="fade-up" data-aos-delay={400}>
                <a
                  className="btn group mb-4 w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-lg hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto text-lg px-8 py-4 inline-block"
                  href="https://form.zootools.co/go/KDlUo4K7EhwvbQxa3V3b"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="relative inline-flex items-center">
                    🚀 Join the Waitlist
                    <span className="ml-1 tracking-normal text-white/70 transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </a>
              </div>
            </div>

            {/* Social Proof */}
            <div className="mt-8 flex justify-center items-center space-x-6 text-sm text-gray-500" data-aos="fade-up" data-aos-delay={500}>
              <div className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse mr-2"></span>
                Live at USC & UCLA
              </div>
              <div>•</div>
              <div>Launching nationwide</div>
              <div>•</div>
              <div>100% Free</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}