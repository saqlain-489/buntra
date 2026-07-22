import { DM_Sans, Inter } from 'next/font/google';

// Fonts load only on routes that import this module (not the Buntra homepage).
const display = DM_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-gulf-display',
  display: 'swap',
});
const body = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-gulf-body',
  display: 'swap',
});

export const fontClass = `${display.variable} ${body.variable}`;

// Coastal blue + clean SaaS white. Medium radius, calm and trustworthy.
export const theme: Record<string, string> = {
  '--d-bg': '#ffffff',
  '--d-bg-alt': '#f1f6f8',
  '--d-surface': '#ffffff',
  '--d-line': '#dbe7eb',
  '--d-ink': '#0f2933',
  '--d-body': '#47606b',
  '--d-muted': '#89a2ab',
  '--d-primary': '#0e7490',
  '--d-on-primary': '#ffffff',
  '--d-accent': '#0891b2',
  '--d-accent-strong': '#0a5f77',
  '--d-accent-soft': '#e0f2f6',
  '--d-success': '#16a34a',
  '--d-radius': '10px',
  '--d-radius-lg': '16px',
  '--d-font-display': 'var(--font-gulf-display)',
  '--d-font-body': 'var(--font-gulf-body)',
};
