// All copy + placeholder image seeds for the Summit Ridge demo site.
// TODO: swap picsum seeds for real screenshots/photos before capturing portfolio shots.
export const brand = {
  name: 'Summit Ridge',
  full: 'Summit Ridge Roofing',
  city: 'Denver, CO',
  phone: '(303) 555-0142',
  email: 'hello@summitridgeroofing.com',
};

export const nav = [
  { label: 'Services', href: '#services' },
  { label: 'Why us', href: '#why' },
  { label: 'Work', href: '#work' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
];

export const hero = {
  eyebrow: 'Premium residential roofing',
  headline: ['A roof you will never', 'think about again.'],
  sub: 'Summit Ridge builds and restores residential roofs with materials and craftsmanship made for the long haul. Licensed, insured, and guaranteed for 25 years.',
  primary: { label: 'Get a free estimate', href: '#estimate' },
  secondary: { label: 'See recent work', href: '#work' },
  badge: { top: '25-year', bottom: 'workmanship warranty' },
  heroSeed: 'summit-ridge-hero-home',
};

export const stats = [
  { value: '1,400+', label: 'roofs completed' },
  { value: '25 yr', label: 'workmanship warranty' },
  { value: '4.9', label: 'average rating' },
  { value: 'A+', label: 'BBB accredited' },
];

export const services = {
  eyebrow: 'What we do',
  heading: 'Roofing done right, the first time',
  items: [
    {
      title: 'Roof replacement',
      desc: 'Full tear-off and rebuild with architectural shingle, metal, or tile, installed by our own crews, never subcontracted out.',
      icon: 'House',
      feature: true,
      seed: 'summit-svc-replace',
    },
    { title: 'Roof repair', desc: 'Leaks, missing shingles, and flashing fixed fast, before small problems become expensive ones.', icon: 'Wrench' },
    { title: 'Storm & hail restoration', desc: 'Documented inspections and insurance-ready reports to restore your roof after the weather hits.', icon: 'CloudLightning' },
    { title: 'Inspections & maintenance', desc: 'Annual check-ups that catch wear early and keep your warranty valid for decades.', icon: 'MagnifyingGlass' },
    { title: 'Gutters & exteriors', desc: 'Seamless gutters, fascia, and soffit that finish the job and protect your foundation.', icon: 'Drop' },
  ],
};

export const why = {
  eyebrow: 'Why Summit Ridge',
  heading: 'Built like the mountains we are named for',
  quote:
    'We treat every roof like it is going on our own home. That is why our workmanship warranty runs 25 years, not five.',
  attribution: 'The Summit Ridge crew',
  points: [
    { title: 'Our own crews', desc: 'No subcontractors. The team that quotes your roof is the team that builds it.' },
    { title: 'Premium materials', desc: 'Manufacturer-certified installers of the shingles and metal systems that last longest.' },
    { title: 'Straight pricing', desc: 'A clear, written quote up front. No surprise line items after the trucks arrive.' },
  ],
};

export const work = {
  eyebrow: 'Recent work',
  heading: 'A look at the last few roofs',
  items: [
    { title: 'Cedar Hills full replacement', tag: 'Architectural shingle', seed: 'summit-work-cedar' },
    { title: 'Aspen Grove standing seam', tag: 'Metal roof', seed: 'summit-work-aspen' },
    { title: 'Boulder ridgeline restoration', tag: 'Hail restoration', seed: 'summit-work-boulder' },
    { title: 'Highlands tile rebuild', tag: 'Tile', seed: 'summit-work-highlands' },
    { title: 'Wash Park repair & gutters', tag: 'Repair', seed: 'summit-work-washpark' },
    { title: 'Golden slate accent roof', tag: 'Slate', seed: 'summit-work-golden' },
  ],
};

export const testimonials = {
  eyebrow: 'What homeowners say',
  heading: 'Neighbors who stopped worrying about their roof',
  note: 'Illustrative reviews for this concept build.',
  items: [
    {
      quote: 'They found hail damage two other companies missed, handled the whole insurance claim, and had us re-roofed in three days. Spotless cleanup.',
      name: 'Marcus D.',
      place: 'Cedar Hills',
    },
    {
      quote: 'The quote was the price. No add-ons, no runaround. The crew was on time every morning and the roof looks incredible.',
      name: 'Priya S.',
      place: 'Wash Park',
    },
    {
      quote: 'I have used a lot of contractors. Summit Ridge is the first one I would actually recommend to my own family.',
      name: 'Tom & Rita K.',
      place: 'Highlands',
    },
  ],
};

export const process = {
  eyebrow: 'How it works',
  heading: 'Four steps, zero surprises',
  steps: [
    { title: 'Free inspection', desc: 'We climb up, document everything, and show you photos of exactly what we find.' },
    { title: 'Clear written quote', desc: 'One honest price with materials and timeline spelled out. No pressure.' },
    { title: 'Expert installation', desc: 'Our certified crews install it right, protect your property, and clean up daily.' },
    { title: '25-year support', desc: 'Your warranty is backed in writing, and we answer the phone long after the job is done.' },
  ],
};

export const faq = {
  eyebrow: 'Good questions',
  heading: 'Roofing questions, answered',
  items: [
    { q: 'How long does a roof replacement take?', a: 'Most residential roofs are completed in one to three days, weather permitting. We give you a firm timeline in your written quote.' },
    { q: 'Do you handle insurance claims?', a: 'Yes. We document storm and hail damage with photos and provide insurance-ready reports, and we can meet your adjuster on site.' },
    { q: 'What does the warranty actually cover?', a: 'Our 25-year workmanship warranty covers our installation, on top of the manufacturer warranty on your materials. Both are in writing.' },
    { q: 'Are you licensed and insured?', a: 'Fully licensed, bonded, and insured, with certificates available before any work begins.' },
    { q: 'What will it cost?', a: 'Every roof is different, so we never guess. Your free inspection ends with a clear, itemized quote you can hold us to.' },
  ],
};

export const cta = {
  heading: 'Ready for a roof that lasts?',
  sub: 'Book a free, no-pressure inspection. We will show you exactly what your roof needs, and what it does not.',
  primary: { label: 'Get a free estimate', href: '#estimate' },
  phoneLabel: 'Or call',
};

export const footer = {
  tagline: 'Premium residential roofing, built to outlast the weather.',
  columns: [
    { title: 'Services', links: ['Roof replacement', 'Roof repair', 'Storm restoration', 'Inspections', 'Gutters'] },
    { title: 'Company', links: ['About', 'Recent work', 'Reviews', 'Careers', 'Contact'] },
  ],
  serviceArea: 'Serving Denver and the Front Range.',
};
