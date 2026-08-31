import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Eduardo Melo — App Portfolio',
  description: 'Ten ideas, one universe in motion. A living collection of original apps by Eduardo Melo.',
  openGraph: {
    title: 'Ten ideas. One universe in motion.',
    description: 'Eduardo Melo — A portfolio of original apps.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Ten ideas. One universe in motion.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ten ideas. One universe in motion.',
    description: 'Eduardo Melo — A portfolio of original apps.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
