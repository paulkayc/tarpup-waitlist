import '../css/style.css'

// Use fallback fonts to avoid Google Fonts SSL issues
const fontClasses = 'font-sans'

export default function LightLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <body className={`${fontClasses} min-h-screen bg-white text-gray-900`}>
        <div className="relative">
          {children}
        </div>
      </body>
    </html>
  )
}