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
  { label: 'Services', href: '#services' },
  { label: 'Why us', href: '#why' },
  { label: 'Storm work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
];

export const hero = {
  badge: '24/7 storm response',
  headline: ['When the storm', 'hits Houston,', 'we hit back.'],
  sub: 'Hurricane and hail specialists for Houston homeowners. We tarp fast, document every hit for your insurance, and get your roof watertight, usually within 7 days of approval.',
  secondary: { label: 'Free storm inspection', href: '#estimate' },
  cardValue: '90 min',
  cardLabel: 'average tarp-up response',
  trust: ['Licensed & insured', 'Local Houston crews'],
  heroSeed: 'bayou-hero-storm-roof',
};

export const marquee = [
  '24/7 storm response',
  'Free insurance inspection',
  'Emergency tarp-up',
  'Hail & wind specialists',
  'Licensed & insured',
  'Local Houston crews',
];

export const services = {
  eyebrow: 'What we handle',
  heading: 'Storm-ready roofing, start to finish',
  sub: 'One local crew for the whole storm cycle, from the emergency tarp to the final nail.',
  items: [
    {
      title: 'Storm & hail repair',
      desc: 'Wind-lifted shingles, hail bruising, and hidden leaks found, documented, and fixed before the next front rolls in.',
      icon: 'CloudLightning',
      feature: true,
      seed: 'bayou-svc-storm',
    },
    { title: 'Hurricane prep & reroof', desc: 'Wind-rated systems and sealed decking built to take a Gulf hurricane, not just survive a drizzle.', icon: 'Wind' },
    { title: 'Full roof replacement', desc: 'Complete tear-off and rebuild by our own Houston crews, cleaned up to the last nail.', icon: 'House' },
    { title: 'Insurance claim support', desc: 'Photo-documented, adjuster-ready damage reports so your claim gets paid, not lowballed.', icon: 'ClipboardText' },
    { title: 'Emergency tarp-up', desc: 'Water pouring in? We tarp exposed roof fast to stop the damage while your claim gets moving.', icon: 'Umbrella' },
  ],
};

export const why = {
  eyebrow: 'Why Bayou City',
  heading: 'Houston storm season is our whole job',
  sub: 'When a Gulf storm rolls through, you need a crew that answers the phone at 2 a.m. and knows how insurance works. That is us.',
  points: [
    { title: 'We answer, day or night', desc: 'A real local crew picks up 24/7. No call center, no next-week appointment while water hits your ceiling.' },
    { title: 'We fight for your claim', desc: 'We meet your adjuster on the roof and document every hit, so the storm damage actually gets covered.' },
    { title: 'Watertight in 7 days', desc: 'Once your claim is approved, our Houston crews get you sealed up fast, usually inside a week.' },
  ],
  stats: [
    { value: '2,000+', label: 'Houston roofs restored' },
    { value: '24/7', label: 'storm response line' },
    { value: '4.9', label: 'average homeowner rating' },
    { value: '7 days', label: 'typical time to watertight' },
  ],
};

export const work = {
  eyebrow: 'Recent storm work',
  heading: 'Roofs we got back under cover',
  items: [
    { title: 'Katy hail replacement', tag: 'Hail', seed: 'bayou-work-katy' },
    { title: 'The Heights wind repair', tag: 'Wind', seed: 'bayou-work-heights' },
    { title: 'Sugar Land full tear-off', tag: 'Replacement', seed: 'bayou-work-sugarland' },
    { title: 'Memorial storm restoration', tag: 'Restoration', seed: 'bayou-work-memorial' },
    { title: 'Pearland emergency tarp', tag: 'Emergency', seed: 'bayou-work-pearland' },
    { title: 'Cypress ridge rebuild', tag: 'Reroof', seed: 'bayou-work-cypress' },
  ],
};

export const process = {
  eyebrow: 'How it works',
  heading: 'From storm to sealed, the insurance-smart way',
  steps: [
    { title: 'Call us 24/7', desc: 'Storm hit? Call any hour. We log the damage and get a crew rolling toward you.' },
    { title: 'Emergency tarp-up', desc: 'We tarp exposed roof fast to stop water before it wrecks ceilings and drywall.' },
    { title: 'Free documented inspection', desc: 'We climb up, photograph every hit, and build an adjuster-ready damage report.' },
    { title: 'We meet your adjuster', desc: 'We stand on the roof with your insurance adjuster so nothing gets missed or lowballed.' },
    { title: 'Repair & final walkthrough', desc: 'Our crews install it right, haul off every nail, and walk the finished roof with you.' },
  ],
};

export const testimonials = {
  eyebrow: 'What Houston says',
  heading: 'Neighbors we got back under a solid roof',
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

export const faq = {
  eyebrow: 'Storm questions',
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
  heading: "Storm damage? Don't wait.",
  sub: 'Every hour of water is more damage. Call now for a free storm inspection and same-day emergency tarp-up.',
  primaryLabel: 'Free storm inspection',
  primaryHref: '#estimate',
  phoneLabel: 'Or call 24/7',
};

export const footer = {
  tagline: 'Houston storm and hurricane roofing. We answer 24/7 and fight for your claim.',
  columns: [
    { title: 'Services', links: ['Storm & hail repair', 'Hurricane reroof', 'Full replacement', 'Insurance claims', 'Emergency tarp-up'] },
    { title: 'Company', links: ['Why Bayou City', 'Storm work', 'Process', 'Reviews', 'Contact'] },
  ],
  serviceArea: 'Serving Houston and the greater Gulf Coast.',
};
