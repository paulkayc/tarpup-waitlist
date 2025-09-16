export default function PageIllustrationLight() {
  return (
    <>
      {/* Illustration */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform"
        aria-hidden="true"
      >
        <svg
          width={1360}
          height={578}
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01-light"
            >
              <stop stopColor="#E0E7FF" offset="0%" />
              <stop stopColor="#C7D2FE" offset="77.402%" />
              <stop stopColor="#A5B4FC" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01-light)" fillRule="evenodd">
            <circle cx={1232} cy={128} r={128} />
            <circle cx={155} cy={443} r={64} />
          </g>
        </svg>
      </div>

      {/* Additional decorative elements */}
      <div
        className="pointer-events-none absolute right-0 top-0 -z-10"
        aria-hidden="true"
      >
        <svg
          width={400}
          height={400}
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
              id="illustration-02-light"
            >
              <stop stopColor="#F3F4F6" offset="0%" />
              <stop stopColor="#E5E7EB" offset="100%" />
            </linearGradient>
          </defs>
          <circle cx={200} cy={200} r={200} fill="url(#illustration-02-light)" opacity="0.6" />
        </svg>
      </div>
    </>
  );
}