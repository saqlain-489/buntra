import { Space_Grotesk, IBM_Plex_Mono } from 'next/font/google';

// Fonts load only on routes that import this module (not the Buntra homepage).
// Space Grotesk carries both display and body (technical, engineered feel);
// IBM Plex Mono handles eyebrows, spec labels, numbers, and step indices.
const grotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-ironclad-grotesk',
  display: 'swap',
});
const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-ironclad-mono',
  display: 'swap',
});

export const fontClass = `${grotesk.variable} ${mono.variable}`;

// Charcoal + steel + copper. Near-sharp radius, industrial/technical.
export const theme: Record<string, string> = {
  '--d-bg': '#fafbfc',
  '--d-bg-alt': '#eceef1',
  '--d-surface': '#ffffff',
  '--d-line': '#dde1e6',
  '--d-ink': '#16181c',
  '--d-body': '#4a4f57',
  '--d-muted': '#8b929c',
  '--d-primary': '#23262b',
  '--d-on-primary': '#ffffff',
  '--d-accent': '#b87333',
  '--d-accent-strong': '#9a5f28',
  '--d-accent-soft': '#f6ece1',
  '--d-radius': '2px',
  '--d-radius-lg': '4px',
  '--d-font-display': 'var(--font-ironclad-grotesk)',
  '--d-font-body': 'var(--font-ironclad-grotesk)',
  '--d-font-mono': 'var(--font-ironclad-mono)',
};
