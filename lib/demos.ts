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
    accent: '#0e8a7d',
    thumbSeed: 'bayou-thumb',
    live: true,
    load: () => import('@/components/demos/bayou-city'),
  },
  {
    slug: 'ironclad',
    name: 'Ironclad Roof Co.',
    tagline: 'Metal & commercial roofing',
    persona: 'Commercial',
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
    accent: '#0891b2',
    thumbSeed: 'gulf-thumb',
    live: true,
    load: () => import('@/components/demos/gulf-coast'),
  },
];

export const demoBySlug = (slug: string): DemoMeta | undefined => demos.find((d) => d.slug === slug);
