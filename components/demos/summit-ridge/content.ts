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
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  // Layer A: the sketch. Layer B: the real thing, revealed on scroll.
  outline: {
    headline: 'Imagine the perfect roof.',
    img: 'https://strvid.nyc3.cdn.digitaloceanspaces.com/cloudinary/hero_city_outline_fzg37d.jpg',
  },
  reveal: {
    headline: 'We build the reality.',
    sub: 'Premium residential roofs, built by our own crews and guaranteed for 25 years.',
    img: 'https://strvid.nyc3.cdn.digitaloceanspaces.com/cloudinary/hero_city_iglhwn.jpg',
    primary: { label: 'Get a free estimate', href: '#contact' },
    secondary: { label: 'See our work', href: '#work' },
  },
};

export const ticker = {
  heading: 'Trusted by homeowners across the Front Range',
  items: [
    { label: 'Licensed & insured', icon: 'ShieldCheck' },
    { label: '25-year workmanship warranty', icon: 'SealCheck' },
    { label: 'BBB A+ accredited', icon: 'Medal' },
    { label: '4.9 average rating', icon: 'Star' },
    { label: 'Manufacturer-certified crews', icon: 'Certificate' },
    { label: 'Storm & hail specialists', icon: 'CloudLightning' },
  ],
};

export const services = {
  heading: 'Roofing built specifically for your home',
  items: [
    {
      title: 'Roof replacement',
      desc: 'Full tear-off and rebuild with architectural shingle, metal, or tile, installed by our own crews, never subcontracted out.',
      icon: 'House',
    },
    {
      title: 'Roof repair',
      desc: 'Leaks, missing shingles, and flashing fixed fast, before small problems become expensive ones.',
      icon: 'Wrench',
    },
    {
      title: 'Storm & hail restoration',
      desc: 'Documented inspections and insurance-ready reports to restore your roof after the weather hits.',
      icon: 'CloudLightning',
    },
    {
      title: 'Gutters & exteriors',
      desc: 'Seamless gutters, fascia, and soffit that finish the job and protect your foundation.',
      icon: 'Drop',
    },
  ],
};

export const work = {
  heading: 'Recent work',
  linkLabel: 'View all work',
  items: [
    { title: 'Cedar Hills full replacement', tag: 'Architectural shingle', seed: 'summit-work-cedar' },
    { title: 'Aspen Grove standing seam', tag: 'Metal roof', seed: 'summit-work-aspen' },
    { title: 'Boulder ridgeline restoration', tag: 'Hail restoration', seed: 'summit-work-boulder' },
    { title: 'Highlands tile rebuild', tag: 'Tile', seed: 'summit-work-highlands' },
    { title: 'Golden slate accent roof', tag: 'Slate', seed: 'summit-work-golden' },
  ],
};

export const about = {
  heading: 'A roof is not just what it looks like. It is how it is built.',
  paragraphs: [
    'We treat every roof like it is going on our own home. No subcontractors, ever: the crew that quotes your roof is the crew that builds it, and our workmanship warranty runs 25 years, not five.',
    'Manufacturer-certified installers, the shingle and metal systems that last longest, and one clear written price before the trucks arrive. That is the whole pitch.',
  ],
  stats: [
    { value: '1,400+', label: 'roofs completed' },
    { value: '25 yr', label: 'workmanship warranty' },
    { value: '4.9', label: 'average rating' },
  ],
};

export const testimonials = {
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
  heading: 'Four steps, zero surprises',
  steps: [
    { title: 'Free inspection', desc: 'We climb up, document everything, and show you photos of exactly what we find.' },
    { title: 'Clear written quote', desc: 'One honest price with materials and timeline spelled out. No pressure.' },
    { title: 'Expert installation', desc: 'Our certified crews install it right, protect your property, and clean up daily.' },
    { title: '25-year support', desc: 'Your warranty is backed in writing, and we answer the phone long after the job is done.' },
  ],
};

export const faq = {
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
  heading: ['Ready for a roof', 'done right?'],
  sub: 'Book a free, no-pressure inspection. We will show you exactly what your roof needs, and what it does not.',
  primaryLabel: 'Get a free estimate',
  secondaryLabel: 'Email us instead',
};

export const footer = {
  tagline: 'Premium residential roofing, built to outlast the weather.',
  columns: [
    { title: 'Services', links: ['Roof replacement', 'Roof repair', 'Storm restoration', 'Gutters & exteriors'] },
    { title: 'Company', links: ['About', 'Recent work', 'Reviews', 'Contact'] },
  ],
  serviceArea: 'Serving Denver and the Front Range.',
};
