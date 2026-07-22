import { Poppins, Nunito_Sans } from 'next/font/google';

// Fonts load only on routes that import this module (not the Buntra homepage).
const display = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-lonestar-display',
  display: 'swap',
});
const body = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-lonestar-body',
  display: 'swap',
});

export const fontClass = `${display.variable} ${body.variable}`;

// Warm Texas cream + brick-red + navy. Rounded, friendly, generational.
export const theme: Record<string, string> = {
  '--d-bg': '#faf5ec',
  '--d-bg-alt': '#f2e9d9',
  '--d-surface': '#fffdf8',
  '--d-line': '#e6dcc9',
  '--d-ink': '#1f2d47',
  '--d-body': '#57616f',
  '--d-muted': '#8f8778',
  '--d-primary': '#b23a2e',
  '--d-on-primary': '#fff8f2',
  '--d-accent': '#b23a2e',
  '--d-accent-strong': '#8f2c22',
  '--d-accent-soft': '#f7e6e2',
  '--d-ink-deep': '#16213a',
  '--d-radius': '16px',
  '--d-radius-lg': '24px',
  '--d-font-display': 'var(--font-lonestar-display)',
  '--d-font-body': 'var(--font-lonestar-body)',
};
