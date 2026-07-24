// All copy + placeholder image seeds for the Bayou City Exteriors demo site.
// TODO: swap picsum seeds for real storm-job photos before capturing portfolio shots.
export const brand = {
  name: 'Bayou City',
  full: 'Bayou City Exteriors',
  city: 'Houston, TX',
  phone: '(713) 555-0128',
  email: 'dispatch@bayoucityexteriors.com',
};

export const nav = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
];

export const hero = {
  badge: 'Houston storm & hurricane pros',
  headline: 'Roofs built to outlast Houston weather.',
  sub: 'We tarp fast, document every hit for your insurance, and get your roof watertight in days, not months.',
  primary: { label: 'Get a free inspection', href: '#contact' },
  secondary: { label: 'See our work', href: '#work' },
  proof: 'Trusted by Houston homeowners',
  heroSeed: 'bayou-hero-storm-roof',
};

export const work = {
  badge: 'Recent work',
  heading: 'Storm damage, gone',
  sub: 'Houston roofs we brought back after hail, wind, and hurricane season.',
  items: [
    {
      title: 'Katy hail replacement',
      detail: 'Full shingle replacement after golf-ball hail, claim approved',
      location: 'Katy, TX',
      type: 'Hail restoration',
      seed: 'bayou-work-katy',
    },
    {
      title: 'Heights wind repair',
      detail: 'Wind-lifted shingles resealed and color matched',
      location: 'The Heights',
      type: 'Wind repair',
      seed: 'bayou-work-heights',
    },
    {
      title: 'Sugar Land tear-off',
      detail: 'Complete tear-off and wind-rated rebuild',
      location: 'Sugar Land, TX',
      type: 'Replacement',
      seed: 'bayou-work-sugarland',
    },
    {
      title: 'Memorial restoration',
      detail: 'Insurance-backed restoration after spring storms',
      location: 'Memorial',
      type: 'Restoration',
      seed: 'bayou-work-memorial',
    },
    {
      title: 'Pearland emergency tarp',
      detail: 'Same-night tarp-up, then a fully documented claim',
      location: 'Pearland, TX',
      type: 'Emergency',
      seed: 'bayou-work-pearland',
    },
    {
      title: 'Cypress ridge rebuild',
      detail: 'Ridge and decking rebuilt to hurricane spec',
      location: 'Cypress, TX',
      type: 'Reroof',
      seed: 'bayou-work-cypress',
    },
  ],
  aboutLabel: 'About us',
  allLabel: 'See all work',
};

export const about = {
  badge: 'Our experience',
  heading: 'Built for Houston weather',
  paragraphs: [
    'Our crews are local, licensed, and on call through every storm season. When a Gulf front rolls in, we answer the phone.',
    'We work insurance first: photo-documented inspections, adjuster meetings on the roof, and claims that reflect the real damage.',
  ],
  // Generic, illustrative stats. Do not present as verified metrics.
  metrics: [
    { value: '24/7', label: 'Storm response line' },
    { value: '2,000+', label: 'Houston roofs restored' },
    { value: '7 days', label: 'From approval to watertight' },
  ],
};

export const testimonials = {
  badge: 'Kind words',
  heading: 'Neighbors back under solid roofs',
  note: 'Illustrative reviews for this concept build.',
  items: [
    {
      quote: 'A hailstorm tore up our roof and they had a tarp on it the same night. Handled the whole insurance claim and re-roofed us in under a week.',
      name: 'Marcus H.',
      place: 'Katy',
    },
    {
      quote: 'Two other companies said there was no damage. Bayou City found it, met our adjuster on the roof, and the claim got approved. Straight shooters.',
      name: 'Denise R.',
      place: 'The Heights',
    },
    {
      quote: 'After the last hurricane everyone was booked for months. They still answered the phone and got us watertight fast. Cleanup was spotless.',
      name: 'Carlos & Mia T.',
      place: 'Sugar Land',
    },
  ],
};

export const services = {
  badge: 'Services',
  heading: 'What we do best',
  sub: 'One local crew for the whole storm cycle, from the emergency tarp to the final nail.',
  items: [
    {
      title: 'Storm & hail repair',
      desc: 'Wind-lifted shingles, hail bruising, and hidden leaks found, documented, and fixed before the next front.',
      icon: 'CloudLightning',
    },
    {
      title: 'Hurricane preparation',
      desc: 'Wind-rated systems and sealed decking built to take a Gulf hurricane, not just survive a drizzle.',
      icon: 'Wind',
    },
    {
      title: 'Full roof replacement',
      desc: 'Complete tear-off and rebuild by our own Houston crews, cleaned up to the last nail.',
      icon: 'House',
    },
    {
      title: 'Insurance claim help',
      desc: 'Photo-documented, adjuster-ready damage reports so your claim gets paid, not lowballed.',
      icon: 'ClipboardText',
    },
    {
      title: 'Emergency tarp-up',
      desc: 'Water pouring in? We tarp exposed roof fast to stop the damage while your claim gets moving.',
      icon: 'Umbrella',
    },
    {
      title: 'Inspections & maintenance',
      desc: 'Seasonal checkups that catch loose shingles and small leaks before the next storm finds them.',
      icon: 'MagnifyingGlass',
    },
  ],
};

export const values = {
  badge: 'Our values',
  heading: 'Principles that guide us',
  items: [
    {
      title: 'Integrity',
      desc: 'Straight talk on what your roof needs and what it does not.',
      icon: 'Handshake',
    },
    {
      title: 'Homeowner first',
      desc: 'Your claim, your schedule, your call. We work around you.',
      icon: 'UsersThree',
    },
    {
      title: 'Craftsmanship',
      desc: 'Certified crews, documented work, and a roof done right the first time.',
      icon: 'Medal',
    },
  ],
};

export const process = {
  badge: 'How claims work',
  heading: 'From storm to sealed',
  steps: [
    { title: 'Call us 24/7', desc: 'Storm hit? Call any hour. We log the damage and get a crew rolling toward you.' },
    { title: 'Emergency tarp-up', desc: 'We tarp exposed roof fast to stop water before it wrecks ceilings and drywall.' },
    { title: 'Documented inspection', desc: 'We climb up, photograph every hit, and build an adjuster-ready damage report.' },
    { title: 'We meet your adjuster', desc: 'We stand on the roof with your insurance adjuster so nothing gets missed or lowballed.' },
    { title: 'Repair & walkthrough', desc: 'Our crews install it right, haul off every nail, and walk the finished roof with you.' },
  ],
};

export const faq = {
  badge: 'Good questions',
  heading: 'Storm and insurance questions, answered',
  items: [
    { q: 'My roof is leaking right now. How fast can you come?', a: 'Call our 24/7 line and we get a crew rolling to tarp exposed areas fast, usually within a couple of hours, so water stops before it reaches your ceilings.' },
    { q: 'Do you handle the insurance claim for me?', a: 'Yes. We photo-document every hit, build an adjuster-ready report, and meet your insurance adjuster on the roof so storm damage actually gets covered.' },
    { q: 'What if the adjuster says there is no damage?', a: 'It happens, and it is often wrong. We walk the roof with the adjuster and point out the hail and wind damage with photos so nothing legitimate gets missed.' },
    { q: 'How long until my roof is watertight?', a: 'We tarp the same visit if needed. Once your claim is approved, our Houston crews typically have the full roof replaced and sealed inside seven days, weather permitting.' },
    { q: 'Are you licensed and insured?', a: 'Fully licensed, bonded, and insured, with certificates available before any work begins. Every crew is local to the Houston area.' },
  ],
};

export const cta = {
  badge: 'Storm coming?',
  heading: 'Do not wait for the next storm.',
  sub: 'A free inspection today beats a flooded living room tomorrow. We answer around the clock.',
  primaryLabel: 'Get a free inspection',
  secondaryLabel: 'See our work',
};

export const footer = {
  tagline: 'Houston storm and hurricane roofing. We answer 24/7 and fight for your claim.',
  serviceArea: 'Serving Houston and the greater Gulf Coast.',
};
