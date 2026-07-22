import { Playfair_Display, Manrope } from 'next/font/google';

// Fonts load only on routes that import this module (not the Buntra homepage).
const display = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-summit-display',
  display: 'swap',
});
const body = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-summit-body',
  display: 'swap',
});

export const fontClass = `${display.variable} ${body.variable}`;

// Slate + snow-white + azure. Sharp radius, editorial/high-end.
export const theme: Record<string, string> = {
  '--d-bg': '#ffffff',
  '--d-bg-alt': '#f3f6f9',
  '--d-surface': '#ffffff',
  '--d-line': '#e3e8ee',
  '--d-ink': '#212a33',
  '--d-body': '#586472',
  '--d-muted': '#98a3b0',
  '--d-primary': '#242e39',
  '--d-on-primary': '#ffffff',
  '--d-accent': '#3d7fd6',
  '--d-accent-strong': '#2c66b4',
  '--d-accent-soft': '#eaf1fb',
  '--d-radius': '8px',
  '--d-radius-lg': '14px',
  '--d-font-display': 'var(--font-summit-display)',
  '--d-font-body': 'var(--font-summit-body)',
};
