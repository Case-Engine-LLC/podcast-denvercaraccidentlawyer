import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { MarkerWidget } from '@/components/MarkerWidget'
import SchemaJsonLd from '@/components/SchemaJsonLd'
import { about, attorney, authorProfiles, contact, siteConfig } from '@/data/siteData'
import './globals.css'
import '@/themes/v1/variables.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800'],
})

const SITE_URL =
  siteConfig.podcastUrl?.replace(/\/$/, '') ||
  contact.website?.replace(/\/$/, '') ||
  'https://denvercaraccident.lawyer'
const TITLE = siteConfig.podcastName
const DESCRIPTION = about.description
const hostProfile = Object.values(authorProfiles)[0]
const HOST_NAME = hostProfile?.name || attorney.name
const FIRM_NAME = attorney.firm

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${TITLE}`,
  },
  description: DESCRIPTION,
  applicationName: TITLE,
  authors: [{ name: HOST_NAME, url: contact.website || SITE_URL }],
  keywords: [
    TITLE,
    HOST_NAME,
    FIRM_NAME,
    'Denver car accident lawyer',
    'Denver car accident attorney',
    'Denver personal injury attorney',
    'Colorado car accident attorney',
    'Colorado personal injury podcast',
    'Front Range accident lawyer',
    'Boulder car accident attorney',
    'Aurora personal injury lawyer',
    'Denver truck accident lawyer',
    'Denver motorcycle accident lawyer',
    'Denver dog bite lawyer',
    'Denver bicycle accident attorney',
    'Denver wrongful death attorney',
    'Colorado modified comparative fault',
    'CRS 13-21-124 dog bite Colorado',
    'I-25 car accident Denver',
    'I-70 truck accident Colorado',
  ],
  category: 'Legal Podcast',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: TITLE,
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    locale: 'en_US',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: `${TITLE} — hosted by ${HOST_NAME}, ${FIRM_NAME}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/opengraph-image'],
  },
  // Next's file-convention `app/icon.tsx` + `app/apple-icon.tsx` auto-wire
  // `<link rel="icon" href="/icon">` and `<link rel="apple-touch-icon" href="/apple-icon">`.
  // Don't add an explicit `icons` block here — it overrides the auto-detection
  // with paths that don't exist (e.g. /icon.svg).
  manifest: '/manifest.webmanifest',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#070519' },
    { media: '(prefers-color-scheme: dark)', color: '#070519' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <SchemaJsonLd />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <MarkerWidget />
      </body>
    </html>
  )
}
