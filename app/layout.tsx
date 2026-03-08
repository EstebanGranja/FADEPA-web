import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});
const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  title: 'FADEPA Pinturería',
  description: 'FADEPA es una pinturería ubicada en Alta Gracia que ofrece una amplia gama de productos de pintura, revestimientos, aditivos y soluciones para el hogar e industria.',
  generator: 'v0.app',
  keywords: ['pintura', 'pinturería', 'Alta Gracia', 'Córdoba', 'revestimientos', 'látex', 'esmaltes', 'impermeabilizantes'],
  icons: {
    icon: [
      {
        url: '/fadepa-logo-header-32x32.png',
      },
    ],
    apple: '/fadepa-logo-header-32x32.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
