import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Catcheater - Pristine Protein Production',
  description: 'Tag-less Quality-Control System for E. coli. Eliminate cheaters, maximize yield.',
  openGraph: {
    title: 'Catcheater - Pristine Protein Production',
    description: 'Eliminate cheaters. Maximize yield. The first tag-less quality control system for industrial fermentation.',
    url: 'https://catcheater.bio',
    siteName: 'Catcheater',
    images: [
      {
        url: '/og-card.png',
        width: 1200,
        height: 630,
        alt: 'Catcheater Platform Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Catcheater - Pristine Protein Production',
    description: 'Eliminate cheaters. Maximize yield.',
    images: ['/og-card.png'],
  },
};

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground pt-40`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
