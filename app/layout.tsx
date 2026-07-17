import type { Metadata } from 'next';
import { Archivo, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
  variable: '--font-archivo',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  icons: { icon: '/buntra-icon.png' },
  title: 'Buntra Web Studio | Roofing websites that book jobs',
  description:
    'We build fast, mobile-first websites for roofing contractors that turn Google searches into phone calls. Live in 7 days. You pay nothing until you see it.',
  openGraph: {
    title: 'Buntra Web Studio | Roofing websites that book jobs',
    description:
      'Fast, mobile-first roofing websites built to make the phone ring. Live in 7 days, free mockup first.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${jakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}
