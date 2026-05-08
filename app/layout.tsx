import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GDPR Cookie Scanner — Detect Compliance Issues Instantly',
  description: 'Crawl your website to detect undeclared cookies and GDPR violations. Get actionable fix recommendations in minutes.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="58652b82-d6f5-4237-86ec-794473fa7a5f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
