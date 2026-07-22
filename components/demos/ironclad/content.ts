// All copy + placeholder image seeds for the Ironclad Roof Co. demo site.
// TODO: swap picsum seeds for real project photography before portfolio capture.
export const brand = {
  name: 'Ironclad',
  full: 'Ironclad Roof Co.',
  city: 'Kansas City, MO',
  phone: '(816) 555-0173',
  email: 'build@ironcladroof.co',
};

export const nav = [
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Why us', href: '#why' },
  { label: 'Projects', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'FAQ', href: '#faq' },
];

export const hero = {
  eyebrow: '[ COMMERCIAL // METAL ]',
  headline: ['Metal and commercial', 'roofs, built to spec.'],
  sub: 'Ironclad designs and installs standing-seam metal and flat commercial roofing systems for facilities that cannot afford a leak. Sealed to tolerance, load rated, and warrantied up to 40 years.',
  primary: { label: 'Request a roof assessment', href: '#assessment' },
  secondary: { label: 'View capabilities', href: '#capabilities' },
  chips: [
    { k: 'PANEL', v: '24-ga steel' },
    { k: 'WIND UPLIFT', v: '180 mph' },
    { k: 'WARRANTY', v: 'up to 40 yr' },
  ],
  imageTag: 'STANDING-SEAM // 24-GA',
  heroSeed: 'ironclad-hero-metal-roof',
};

export const capabilities = {
  eyebrow: 'CAPABILITIES',
  heading: 'Five systems. One standard of finish.',
  sub: 'Every scope is spec-first: panel, fastener pattern, and slope are on paper before a truck rolls.',
  items: [
    {
      title: 'Standing-seam metal',
      desc: 'Mechanically locked panels rolled to length on site, no exposed fasteners, no shortcuts on the seam.',
      icon: 'Ruler',
      spec: { k: 'SEAM', v: '1.75 in' },
      feature: true,
    },
    {
      title: 'TPO & flat commercial',
      desc: 'Fully-adhered or mechanically-fastened membrane for low-slope decks, hot-air welded and probe tested.',
      icon: 'Stack',
      spec: { k: 'MEMBRANE', v: '60 mil' },
    },
    {
      title: 'Coatings & restoration',
      desc: 'Silicone and acrylic systems that seal and re-warranty a sound roof without a full tear-off.',
      icon: 'PaintRoller',
      spec: { k: 'EXTENDS', v: '15 yr' },
    },
    {
      title: 'Structural & deck repair',
      desc: 'Rusted purlins, soft decking, and failed penetrations rebuilt to a load-rated substrate first.',
      icon: 'Wrench',
      spec: { k: 'RATED', v: 'load-safe' },
    },
    {
      title: 'Maintenance programs',
      desc: 'Biannual inspections that catch a seam or flashing failure before it becomes a shutdown.',
      icon: 'ClipboardText',
      spec: { k: 'CADENCE', v: '2x / yr' },
    },
  ],
};

export const specsBand = {
  heading: 'The numbers on the board',
  note: 'Figures illustrative for this concept build.',
  items: [
    { value: '2.4M', label: 'sq ft metal installed' },
    { value: '180', label: 'mph wind uplift rating' },
    { value: '40 yr', label: 'maximum system warranty' },
    { value: '24/7', label: 'facility emergency line' },
  ],
};

export const why = {
  eyebrow: 'WHY IRONCLAD',
  heading: 'We roof like engineers, not like a crew with a nailgun.',
  sub: 'A commercial roof is a load-bearing system, not a cosmetic layer. We scope it, spec it, and document it that way.',
  points: [
    { title: 'Sealed to tolerance', desc: 'Every seam is mechanically locked and torque checked, not hand crimped and hoped for.' },
    { title: 'Load and uplift rated', desc: 'Fastener patterns are calculated to your building wind zone, then documented in the closeout package.' },
    { title: 'One accountable lead', desc: 'The project lead who scopes your roof signs off on it. No subcontracted mystery labor.' },
    { title: 'Warranty in writing', desc: 'Workmanship and manufacturer warranties, both issued on paper before we invoice the final draw.' },
  ],
  specTitle: 'STANDING-SEAM // BASE SPEC',
  specRows: [
    { k: 'PANEL GAUGE', v: '24 ga galvalume' },
    { k: 'SEAM HEIGHT', v: '1.75 in mechanical lock' },
    { k: 'MIN SLOPE', v: '0.25 : 12' },
    { k: 'WIND UPLIFT', v: 'ASTM E1592 · 180 mph' },
    { k: 'FIRE RATING', v: 'UL Class A' },
    { k: 'WARRANTY', v: 'up to 40 yr system' },
  ],
};

export const work = {
  eyebrow: 'SELECTED PROJECTS',
  heading: 'Buildings that stopped leaking.',
  items: [
    { title: 'Stockyards distribution center', tag: 'Standing-seam metal', meta: '84,000 sq ft', seed: 'ironclad-proj-stockyards' },
    { title: 'Midtown medical plaza', tag: 'TPO flat roof', meta: '31,000 sq ft', seed: 'ironclad-proj-medical' },
    { title: 'Riverside self-storage', tag: 'Metal re-roof', meta: '52,000 sq ft', seed: 'ironclad-proj-storage' },
    { title: 'Fairway retail strip', tag: 'Silicone coating', meta: '18,500 sq ft', seed: 'ironclad-proj-retail' },
    { title: 'Depot logistics warehouse', tag: 'Standing-seam metal', meta: '120,000 sq ft', seed: 'ironclad-proj-warehouse' },
    { title: 'Northline church campus', tag: 'Structural repair', meta: '9,200 sq ft', seed: 'ironclad-proj-church' },
  ],
};

export const process = {
  eyebrow: 'ENGAGEMENT',
  heading: 'From assessment to closeout.',
  steps: [
    { title: 'Roof assessment', desc: 'We measure, core sample, and photograph the deck, then map every penetration and failure point.' },
    { title: 'Engineered scope & quote', desc: 'You get a fixed-price scope with panel spec, fastener pattern, and slope calc attached. No verbal estimates.' },
    { title: 'Scheduled installation', desc: 'A dedicated crew installs to spec with daily site protection and a clean, load-safe staging plan.' },
    { title: 'Closeout & warranty', desc: 'We hand over the warranty package, as-built spec sheet, and a maintenance schedule. Then we answer the phone.' },
  ],
};

export const testimonials = {
  eyebrow: 'ON RECORD',
  heading: 'What facility owners tell us.',
  note: 'Illustrative quotes for this concept build. Attributions are generic by design.',
  items: [
    {
      quote: 'Two coating contractors patched the same seam twice. Ironclad re-flashed the whole valley and it has been dry through three storms since.',
      name: 'Facilities Director',
      place: 'Distribution center, 84k sq ft',
    },
    {
      quote: 'They handed us a closeout binder with the fastener pattern and slope calc. I have never gotten paperwork that clean from a roofer.',
      name: 'Property Owner',
      place: 'Retail strip',
    },
    {
      quote: 'The quoted number was the invoiced number. On a 120,000 square foot warehouse, that almost never happens.',
      name: 'Operations Manager',
      place: 'Logistics warehouse',
    },
  ],
};

export const faq = {
  eyebrow: 'SPECS & ANSWERS',
  heading: 'Commercial roofing, answered.',
  items: [
    { q: 'Do you work on occupied commercial buildings?', a: 'Yes. We stage and phase installs so your facility keeps operating, with load-safe material handling and daily cleanup around your foot traffic.' },
    { q: 'Metal or TPO, which system is right for my building?', a: 'It depends on slope, roof traffic, and budget. Low-slope decks usually get TPO or a coating; anything above a quarter-inch rise per foot is a candidate for standing-seam metal. The assessment tells us which.' },
    { q: 'How long do your roofs last?', a: 'A properly installed standing-seam metal system is a 40-plus year roof. Coatings extend an existing roof 10 to 15 years. Both come with a written warranty.' },
    { q: 'Can you restore a roof instead of tearing it off?', a: 'Often, yes. If the deck is sound, a silicone or acrylic coating system can seal and re-warranty the roof at a fraction of a tear-off, with far less downtime.' },
    { q: 'Are you licensed, bonded, and insured?', a: 'Fully licensed, bonded, and insured for commercial work, with certificates and manufacturer certifications available before mobilization.' },
  ],
};

export const cta = {
  heading: 'Get a roof assessment on your building.',
  sub: 'We will core the deck, map the failure points, and hand you an engineered scope with a fixed price. No pressure, no verbal guesses.',
  primary: { label: 'Request a roof assessment', href: '#assessment' },
  phoneLabel: 'Or call the facility line',
};

export const footer = {
  tagline: 'Metal and commercial roofing systems, engineered to outlast the building.',
  columns: [
    { title: 'Systems', links: ['Standing-seam metal', 'TPO & flat', 'Coatings & restoration', 'Structural repair', 'Maintenance'] },
    { title: 'Company', links: ['Capabilities', 'Projects', 'Process', 'Assessment', 'Contact'] },
  ],
  serviceArea: 'Serving Kansas City and the greater metro.',
};
