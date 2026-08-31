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
  title: 'Eduardo Melo — Portfolio de Aplicativos',
  description: 'Dez ideias, um universo em movimento. Uma coleção viva de aplicativos autorais por Eduardo Melo.',
  openGraph: {
    title: 'Dez ideias. Um universo em movimento.',
    description: 'Eduardo Melo — Portfólio de aplicativos autorais.',
    type: 'website',
    images: [{ url: '/og.png', width: 1731, height: 909, alt: 'Dez ideias. Um universo em movimento.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dez ideias. Um universo em movimento.',
    description: 'Eduardo Melo — Portfólio de aplicativos autorais.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
