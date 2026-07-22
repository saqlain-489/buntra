// All copy + placeholder image seeds for the Lone Star Roofworks demo site.
// TODO: swap picsum seeds for real photos before capturing portfolio shots.
export const brand = {
  name: 'Lone Star Roofworks',
  full: 'Lone Star Roofworks',
  city: 'Fort Worth, TX',
  phone: '(817) 555-0193',
  email: 'howdy@lonestarroofworks.com',
  est: '1998',
};

export const nav = [
  { label: 'Services', href: '#services' },
  { label: 'Our story', href: '#story' },
  { label: 'Recent work', href: '#work' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
];

export const hero = {
  eyebrow: 'Family owned Texas roofing',
  headline: ['Roofing your neighbors', 'trust like family.'],
  sub: 'For over 25 years, the same Fort Worth family has climbed Texas roofs, weathered the storms, and treated every home like our own. Licensed, insured, and here when you call.',
  primary: { label: 'Get a free estimate', href: '#estimate' },
  secondary: { label: 'See our work', href: '#work' },
  emblem: { top: 'Family owned', bottom: `& operated since ${brand.est}` },
  heroSeed: 'lonestar-hero-texas-home',
};

export const trustBadges = [
  { label: 'Family owned & operated', icon: 'HouseLine' },
  { label: 'Licensed & fully insured', icon: 'ShieldCheck' },
  { label: 'Local Texas crews', icon: 'MapPin' },
  { label: '10-year workmanship warranty', icon: 'SealCheck' },
];

export const services = {
  eyebrow: 'How we help',
  heading: 'Whatever your roof needs, we have got you',
  sub: 'From a quick repair to a full tear-off, the same trusted crew handles it start to finish.',
  items: [
    { title: 'Roof replacement', desc: 'Full tear-off and rebuild with shingle or metal, installed by our own crew, cleaned up like we were never there.', icon: 'House' },
    { title: 'Storm & hail repair', desc: 'Texas weather is rough. We patch leaks, replace shingles, and get your roof watertight fast.', icon: 'CloudRain' },
    { title: 'Insurance claims help', desc: 'We document the damage, sit down with your adjuster, and walk you through the paperwork so you are not alone.', icon: 'FileText' },
    { title: 'Free roof inspections', desc: 'A friendly, no-pressure look at your roof with honest photos of what we find and what we do not.', icon: 'MagnifyingGlass' },
    { title: 'Gutters & exteriors', desc: 'Seamless gutters, fascia, and soffit that keep the water moving and your home dry.', icon: 'Drop' },
    { title: 'Roof maintenance', desc: 'Yearly check-ups that catch the little things early and keep your warranty in good standing.', icon: 'Wrench' },
  ],
};

export const story = {
  eyebrow: 'Our story',
  heading: 'Three generations, one handshake promise',
  body: [
    'Lone Star Roofworks started in 1998 with one truck, one ladder, and a simple rule: treat every family like our own. Today the kids who grew up riding along are the ones running the crews.',
    'We still live in the neighborhoods we roof. When you call, you get a real person you will probably see at the grocery store, not a call center three states away.',
  ],
  emblem: { top: 'Family owned', bottom: `since ${brand.est}` },
  portraitSeed: 'lonestar-family-portrait',
  highlights: [
    { title: 'Our own crews', desc: 'No day-labor subcontractors. The folks who quote your roof are the ones who build it.' },
    { title: 'Honest, plain talk', desc: 'We tell you what your roof actually needs, even when that means a repair instead of a replacement.' },
    { title: 'We answer the phone', desc: 'Years after the job, if something comes up, you call us and a Lone Star truck shows up.' },
  ],
};

export const work = {
  eyebrow: 'Recent work',
  heading: 'Roofs we have put over Texas families',
  items: [
    { title: 'Aledo full replacement', tag: 'Architectural shingle', seed: 'lonestar-work-aledo' },
    { title: 'Keller standing seam metal', tag: 'Metal roof', seed: 'lonestar-work-keller' },
    { title: 'Arlington hail restoration', tag: 'Storm repair', seed: 'lonestar-work-arlington' },
    { title: 'Weatherford ranch reroof', tag: 'Shingle', seed: 'lonestar-work-weatherford' },
    { title: 'Southlake gutters & fascia', tag: 'Exteriors', seed: 'lonestar-work-southlake' },
    { title: 'Mansfield leak repair', tag: 'Repair', seed: 'lonestar-work-mansfield' },
  ],
};

export const testimonials = {
  eyebrow: 'From the neighborhood',
  heading: 'What Texas families tell their friends',
  note: 'Illustrative reviews for this concept build.',
  items: [
    {
      quote: 'After the spring hail, they walked our roof, met our adjuster, and had us re-roofed the next week. Felt like family helping family.',
      name: 'Dana R.',
      place: 'Aledo neighbor',
    },
    {
      quote: 'They could have sold me a whole new roof. Instead they fixed one flashing and shook my hand. That honesty earned every future job.',
      name: 'Miguel A.',
      place: 'Arlington neighbor',
    },
    {
      quote: 'Same crew, on time every morning, cleaned up every nail. My kids played barefoot in the yard that same evening.',
      name: 'The Whitfield family',
      place: 'Keller neighbor',
    },
  ],
};

export const process = {
  eyebrow: 'How it works',
  heading: 'Simple, friendly, no surprises',
  steps: [
    { title: 'Give us a call', desc: 'Tell us what is going on. We set up a time that works for your family, not just ours.' },
    { title: 'Free honest inspection', desc: 'We climb up, take photos, and show you exactly what we see in plain English.' },
    { title: 'Clear written quote', desc: 'One fair price, materials and timeline spelled out. No pressure, no fine print.' },
    { title: 'We build it right', desc: 'Our crew installs it, protects your yard, and cleans up so well you would never know.' },
    { title: 'We stick around', desc: 'Your 10-year workmanship warranty is in writing, and we pick up the phone for years to come.' },
  ],
};

export const faq = {
  eyebrow: 'Good questions',
  heading: 'Questions Texas families ask us',
  items: [
    { q: 'How long does a roof replacement take?', a: 'Most homes are done in one to two days, weather permitting. Texas heat and pop-up storms can shift things, so we always give you a firm timeline in writing.' },
    { q: 'Do you help with insurance claims?', a: 'Absolutely. We document hail and storm damage with photos, meet your adjuster on site, and walk you through the paperwork so you never feel lost.' },
    { q: 'Are you really family owned?', a: 'Yes, since 1998. The family that started Lone Star still runs it, and we live in the same North Texas towns we roof.' },
    { q: 'What does the warranty cover?', a: 'Our 10-year workmanship warranty covers our installation, on top of the manufacturer warranty on your shingles or metal. Both come to you in writing.' },
    { q: 'Are you licensed and insured?', a: 'Fully licensed, bonded, and insured. We are happy to hand you the certificates before we ever set a ladder against your house.' },
  ],
};

export const cta = {
  heading: 'Let us take a look at your roof',
  sub: 'Free, friendly, and no pressure. We will show you honestly what your roof needs, and treat your home like our own.',
  primary: { label: 'Get a free estimate', href: '#estimate' },
  phoneLabel: 'Or call the family',
};

export const footer = {
  tagline: 'Family owned Texas roofing, built on a handshake and backed in writing.',
  columns: [
    { title: 'Services', links: ['Roof replacement', 'Storm & hail repair', 'Insurance claims', 'Inspections', 'Gutters'] },
    { title: 'Company', links: ['Our story', 'Recent work', 'Reviews', 'Careers', 'Contact'] },
  ],
  serviceArea: 'Proudly serving Fort Worth and North Texas.',
};
