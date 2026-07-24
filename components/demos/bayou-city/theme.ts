import { Sora, Inter } from 'next/font/google';

// Fonts load only on routes that import this module (not the Buntra homepage).
const display = Sora({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-bayou-display',
  display: 'swap',
});
const body = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-bayou-body',
  display: 'swap',
});

export const fontClass = `${display.variable} ${body.variable}`;

// "Archeo" light architectural system: soft sky wash, deep navy, electric blue accents.
export const theme: Record<string, string> = {
  '--d-bg': '#f2f7fa',
  '--d-bg-alt': '#ffffff',
  '--d-surface': '#ffffff',
  '--d-line': '#e2ebf2',
  '--d-ink': '#0b192c',
  '--d-body': '#46586d',
  '--d-muted': '#8298ad',
  '--d-primary': '#0b192c',
  '--d-on-primary': '#ffffff',
  '--d-accent': '#0066ff',
  '--d-accent-strong': '#0052cc',
  '--d-accent-soft': '#ebf3fa',
  '--d-radius': '16px',
  '--d-radius-lg': '24px',
  '--d-font-display': 'var(--font-bayou-display)',
  '--d-font-body': 'var(--font-bayou-body)',
};
