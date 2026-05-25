import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
})

export const metadata: Metadata = {
  title: 'Aadil Khan — Full Stack MERN Developer',
  description: 'Full Stack MERN Developer building scalable backends, clean REST APIs, and refined frontend experiences. Portfolio, projects, and contact.',
  keywords: ['Full Stack Developer', 'MERN Stack', 'React', 'Node.js', 'MongoDB', 'Express.js', 'Software Engineer', 'Web Developer'],
  authors: [{ name: 'Aadil Khan' }],
  openGraph: {
    title: 'Aadil Khan — Full Stack MERN Developer',
    description: 'Premium developer portfolio — projects, experience, and achievements.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
