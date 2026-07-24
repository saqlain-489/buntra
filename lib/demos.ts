import type { ComponentType } from 'react';

// Registry powering the /work index and /work/[slug] routes. `live` sites have a
// `load` (dynamic import, so each demo's fonts stay scoped to its own page).
export const DEMO_SLUGS = ['summit-ridge', 'bayou-city', 'ironclad', 'lone-star', 'gulf-coast'] as const;
export type DemoSlug = (typeof DEMO_SLUGS)[number];

export type DemoMeta = {
  slug: DemoSlug;
  name: string;
  tagline: string;
  persona: string;
  blurb: string; // one-line "why it's good", used on the homepage featured card
  accent: string; // index card chip color
  thumbSeed: string; // placeholder thumbnail seed
  live: boolean;
  load?: () => Promise<{ default: ComponentType }>;
};

export const demos: DemoMeta[] = [
  {
    slug: 'summit-ridge',
    name: 'Summit Ridge Roofing',
    tagline: 'Premium residential roofing',
    persona: 'Residential',
    blurb: 'A premium dark build with a scroll-reveal hero, for residential roofers who want to look bigger than the competition.',
    accent: '#3d7fd6',
    thumbSeed: 'summit-ridge-hero-home',
    live: true,
    load: () => import('@/components/demos/summit-ridge'),
  },
  {
    slug: 'bayou-city',
    name: 'Bayou City Exteriors',
    tagline: 'Houston storm & hurricane pros',
    persona: 'Storm',
    blurb: 'A light, premium build for Houston storm pros, calm and credible when homeowners need it most.',
    accent: '#0066ff',
    thumbSeed: 'bayou-thumb',
    live: true,
    load: () => import('@/components/demos/bayou-city'),
  },
  {
    slug: 'ironclad',
    name: 'Ironclad Roof Co.',
    tagline: 'Metal & commercial roofing',
    persona: 'Commercial',
    blurb: 'A technical, spec-driven build for metal and commercial roofing, made to win facility managers.',
    accent: '#b87333',
    thumbSeed: 'ironclad-thumb',
    live: true,
    load: () => import('@/components/demos/ironclad'),
  },
  {
    slug: 'lone-star',
    name: 'Lone Star Roofworks',
    tagline: 'Family roofing across Texas',
    persona: 'Residential',
    blurb: 'A warm, family-owned brand that earns trust with neighbors before the first call.',
    accent: '#b23a2e',
    thumbSeed: 'lonestar-thumb',
    live: true,
    load: () => import('@/components/demos/lone-star'),
  },
  {
    slug: 'gulf-coast',
    name: 'Gulf Coast Storm Pros',
    tagline: 'Insurance restoration specialists',
    persona: 'Restoration',
    blurb: 'A calm, SaaS-clean site built around the insurance claim, from inspection to approved.',
    accent: '#0891b2',
    thumbSeed: 'gulf-thumb',
    live: true,
    load: () => import('@/components/demos/gulf-coast'),
  },
];

export const demoBySlug = (slug: string): DemoMeta | undefined => demos.find((d) => d.slug === slug);
