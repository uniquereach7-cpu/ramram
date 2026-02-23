import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// ============================================
// ROOT LAYOUT - RamRamGroup Corporate Website
// ============================================

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ramramgroup.com'),
  title: {
    default: 'RamRamGroup | Diversified Excellence Across Industries',
    template: '%s | RamRamGroup',
  },
  description:
    'RamRamGroup is a diversified conglomerate building excellence across real estate, hospitality, education, and agriculture. Transforming industries with innovation and integrity.',
  keywords: [
    'RamRamGroup',
    'corporate conglomerate',
    'real estate',
    'restaurant',
    'salon',
    'education',
    'cafe',
    'agriculture',
    'sports',
    'business group',
    'investment',
  ],
  authors: [{ name: 'RamRamGroup' }],
  creator: 'RamRamGroup',
  publisher: 'RamRamGroup',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ramramgroup.com',
    siteName: 'RamRamGroup',
    title: 'RamRamGroup | Diversified Excellence Across Industries',
    description:
      'A diversified conglomerate building excellence across real estate, hospitality, education, and agriculture.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RamRamGroup - Building Excellence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RamRamGroup | Diversified Excellence Across Industries',
    description:
      'A diversified conglomerate building excellence across real estate, hospitality, education, and agriculture.',
    images: ['/og-image.jpg'],
    creator: '@ramramgroup',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#ffffff' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-white text-stone-900">
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-orange-500 focus:text-white focus:rounded-lg focus:font-medium"
        >
          Skip to main content
        </a>

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main id="main-content" className="min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
