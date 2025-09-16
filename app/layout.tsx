import "./css/style.css";

import localFont from "next/font/local";

// Fallback approach for Inter font to avoid SSL issues
const inter = {
  variable: "--font-inter",
  className: "font-sans"
};

// Alternative: Use system fonts instead of Google Fonts
// const inter = localFont({
//   src: '../public/fonts/inter-variable.woff2', // if you have local Inter font files
//   variable: '--font-inter',
//   display: 'swap',
// });

const nacelle = localFont({
  src: [
    {
      path: "../public/fonts/nacelle-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/nacelle-semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-semibolditalic.woff2",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-nacelle",
  display: "swap",
});

export const metadata = {
  title: "TarpAI Connect - AI-Powered Campus Community",
  description: "Connect instantly with fellow students for rides, roommates, study groups, and more. Just tell TarpAI what you need—we'll find your perfect match in real-time.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${nacelle.variable} bg-gray-950 font-inter text-base text-gray-200 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
