import type { Metadata, Viewport } from 'next';
// Suppress TS error when no type declarations are available for CSS imports
// @ts-ignore
import './globals.css';

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-portfolio.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: 'Your Name — Cosmic Portfolio',
    template: '%s | Your Name'
  },
  description:
    'A cinematic 3D portfolio universe. Full Stack Developer, AI Engineer, and Creative Developer.',
  keywords: ['portfolio', 'developer', 'threejs', 'react', 'next.js', 'ai', 'creative'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Your Name — Cosmic Portfolio',
    description: 'Travel through my solar system.',
    url: SITE,
    siteName: 'Your Name',
    images: [{ url: '/og.jpg', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Name — Cosmic Portfolio',
    description: 'Travel through my solar system.',
    images: ['/og.jpg']
  },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  themeColor: '#03040a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Your Name',
              jobTitle: 'Full Stack Developer, AI Engineer',
              url: SITE
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
