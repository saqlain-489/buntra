import { Outfit } from 'next/font/google';

// Fonts load only on routes that import this module (not the Buntra homepage).
// One geometric family carries the whole dark design: black for display, light for body.
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-summit-display',
  display: 'swap',
});

export const fontClass = outfit.variable;

// Deep midnight + glass + neon blue/purple accents. Premium dark agency look.
export const theme: Record<string, string> = {
  '--d-bg': '#0c1128',
  '--d-bg-alt': '#101736',
  '--d-surface': '#131a3d',
  '--d-line': 'rgba(255,255,255,0.10)',
  '--d-ink': '#ffffff',
  '--d-body': '#d1d5db',
  '--d-muted': '#9ca3af',
  '--d-primary': '#ffffff',
  '--d-on-primary': '#0c1128',
  '--d-accent': '#00f0ff',
  '--d-accent-strong': '#7cd6ff',
  '--d-accent-soft': 'rgba(0,240,255,0.08)',
  '--d-accent-2': '#b026ff',
  '--d-radius': '14px',
  '--d-radius-lg': '24px',
  '--d-font-display': 'var(--font-summit-display)',
  '--d-font-body': 'var(--font-summit-display)',
};
