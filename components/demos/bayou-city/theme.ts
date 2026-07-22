import { Oswald, Inter } from 'next/font/google';

// Fonts load only on routes that import this module (not the Buntra homepage).
const display = Oswald({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-bayou-display',
  display: 'swap',
});
const body = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-bayou-body',
  display: 'swap',
});

export const fontClass = `${display.variable} ${body.variable}`;

// Storm navy + teal + amber-urgency. Sharp radius, condensed-caps, emergency energy.
export const theme: Record<string, string> = {
  '--d-bg': '#ffffff',
  '--d-bg-alt': '#eef4f5',
  '--d-surface': '#ffffff',
  '--d-line': '#dbe6e8',
  '--d-ink': '#10222e',
  '--d-body': '#48606a',
  '--d-muted': '#8aa0a8',
  '--d-primary': '#0f2a3d',
  '--d-on-primary': '#ffffff',
  '--d-accent': '#0e8a7d',
  '--d-accent-strong': '#0a6f64',
  '--d-accent-soft': '#e0f2f0',
  '--d-accent-2': '#f4a52b', // amber urgency pop (dark navy text when used as a fill)
  '--d-radius': '4px',
  '--d-radius-lg': '8px',
  '--d-font-display': 'var(--font-bayou-display)',
  '--d-font-body': 'var(--font-bayou-body)',
};
