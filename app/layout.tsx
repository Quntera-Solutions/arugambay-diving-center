import type { Metadata } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
import './globals.css';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import RevealOnScroll from '@/components/RevealOnScroll';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Arugambay Diving Center — Scuba Diving & Snorkeling in Arugam Bay, Sri Lanka',
  description:
    "Explore the ocean's hidden wonders with Arugambay Diving Center. PADI courses, Discover Scuba Diving (no swimming required), snorkeling tours, night diving, fun dives & boat safaris in Arugam Bay, Sri Lanka.",
  keywords: [
    'diving Arugam Bay',
    'scuba diving Sri Lanka',
    'PADI Sri Lanka',
    'snorkeling Arugam Bay',
    'Discover Scuba Diving',
    'dolphin watching Arugam Bay',
  ],
  openGraph: {
    title: 'Arugambay Diving Center',
    description: "Explore the ocean's hidden wonders — no swimming skills required.",
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="font-sans text-ocean-950 bg-white antialiased">
        {children}
        <WhatsAppFloat />
        <RevealOnScroll />
      </body>
    </html>
  );
}
