// All copy + placeholder image seeds for the Gulf Coast Storm Pros demo site.
// TODO: swap picsum seeds for real photos before capturing portfolio shots.
export const brand = {
  name: 'Gulf Coast Storm Pros',
  full: 'Gulf Coast Storm Pros',
  city: 'Pensacola, FL',
  phone: '(850) 555-0188',
  email: 'claims@gulfcoaststormpros.com',
};

export const nav = [
  { label: 'How claims work', href: '#claim' },
  { label: 'Services', href: '#services' },
  { label: 'Why us', href: '#why' },
  { label: 'Work', href: '#work' },
  { label: 'FAQ', href: '#faq' },
];

export const hero = {
  eyebrow: 'Insurance restoration specialists',
  headline: ['Storm damage?', 'We handle the claim.'],
  sub: 'From the first free inspection to your restored roof, we document the damage, file the paperwork, and meet your adjuster on site. You focus on your family. We handle the insurance.',
  primary: { label: 'Book a free inspection', href: '#cta' },
  secondary: { label: 'See how claims work', href: '#claim' },
  microcopy: 'Free inspection. No cost until your claim is approved.',
  badge: { top: 'Approved', bottom: 'claims handled end to end' },
  heroSeed: 'gulf-coast-hero-roof',
};

export const trustBar = {
  note: 'What every homeowner gets, on every job.',
  items: [
    { label: 'Licensed & insured', icon: 'ShieldCheck' },
    { label: 'A+ rated, local', icon: 'Star' },
    { label: 'Free storm inspections', icon: 'MagnifyingGlass' },
    { label: 'Certified installers', icon: 'Certificate' },
    { label: 'Available 24/7', icon: 'Clock' },
  ],
};

export const claim = {
  eyebrow: 'The signature difference',
  heading: 'Your insurance claim, handled step by step',
  sub: 'Most homeowners have never filed a roof claim before. We walk you through every stage so nothing gets missed and nothing gets denied.',
  steps: [
    { title: 'Free inspection', desc: 'We climb up, photograph every shingle, and tell you honestly whether you have a claim.', icon: 'MagnifyingGlass' },
    { title: 'Damage documented', desc: 'Storm and hail damage recorded with dated photos and a written report built for your insurer.', icon: 'Camera' },
    { title: 'Claim filed', desc: 'We prepare the paperwork and help you file so the deductible and scope are right the first time.', icon: 'FileText' },
    { title: 'Adjuster meeting', desc: 'We meet your adjuster on the roof and walk the damage together so nothing gets overlooked.', icon: 'Handshake' },
    { title: 'Approved & covered', desc: 'Your claim is approved, the scope is agreed, and you finally know what your roof will cost you.', icon: 'CheckCircle' },
    { title: 'Roof restored', desc: 'Our certified crews rebuild your roof, protect your property, and clean up before we leave.', icon: 'House' },
  ],
};

export const services = {
  eyebrow: 'What we restore',
  heading: 'Storm-first roofing, built around your claim',
  items: [
    { title: 'Storm & hail damage', desc: 'The damage insurers pay for, documented properly: bruised shingles, wind uplift, and granule loss after the storm.', icon: 'CloudLightning' },
    { title: 'Full roof replacement', desc: 'A complete tear-off and rebuild when the damage runs too deep to repair, done by our own certified crews.', icon: 'House' },
    { title: 'Insurance claim help', desc: 'We document, file, and meet your adjuster so your claim is approved for the full, fair scope.', icon: 'FileText' },
    { title: 'Emergency repair', desc: 'Active leak after a storm? We tarp and stop the water fast, then handle the permanent fix through your claim.', icon: 'Warning' },
    { title: 'Free roof inspections', desc: 'An honest, no-pressure look after any storm. If your roof is fine, we tell you and you owe us nothing.', icon: 'MagnifyingGlass' },
  ],
};

export const why = {
  eyebrow: 'Why Gulf Coast',
  heading: 'The claim is the hard part. That is our part.',
  quote: 'We handle the claim so you do not have to. That is the whole job. You approve the work, we deal with the insurance company.',
  attribution: 'The Gulf Coast Storm Pros team',
  points: [
    { title: 'We speak insurance', desc: 'Adjuster language, proper documentation, and fair-scope claims are what we do every single day.' },
    { title: 'Nothing until approved', desc: 'Your inspection is free and you pay nothing out of pocket beyond your deductible once the claim is approved.' },
    { title: 'On the roof with your adjuster', desc: 'We do not email a report and hope. We meet your adjuster on site so the damage is seen and covered.' },
  ],
};

export const work = {
  eyebrow: 'Restored roofs',
  heading: 'Storms we have put right',
  items: [
    { title: 'Perdido Key wind restoration', tag: 'Wind claim', seed: 'gulf-work-perdido' },
    { title: 'Gulf Breeze full replacement', tag: 'Full replacement', seed: 'gulf-work-breeze' },
    { title: 'Navarre hail restoration', tag: 'Hail claim', seed: 'gulf-work-navarre' },
    { title: 'Milton emergency tarp & rebuild', tag: 'Emergency', seed: 'gulf-work-milton' },
    { title: 'Pace shingle restoration', tag: 'Storm claim', seed: 'gulf-work-pace' },
    { title: 'Cantonment adjuster-approved rebuild', tag: 'Approved claim', seed: 'gulf-work-cantonment' },
  ],
};

export const testimonials = {
  eyebrow: 'What homeowners say',
  heading: 'Neighbors who let us handle the claim',
  note: 'Illustrative reviews for this concept build.',
  items: [
    {
      quote: 'After the storm I had no idea where to start. They inspected for free, filed everything, and met the adjuster for me. The claim was approved and I only paid my deductible.',
      name: 'Denise R.',
      place: 'Gulf Breeze',
    },
    {
      quote: 'Two other roofers just handed me a quote. Gulf Coast documented the hail damage properly and got the whole roof covered. I would not have known to ask.',
      name: 'Carl M.',
      place: 'Navarre',
    },
    {
      quote: 'They tarped the leak the same night, then handled the insurance from start to finish. New roof in under two weeks and the yard was spotless.',
      name: 'The Alvarez family',
      place: 'Pace',
    },
  ],
};

export const faq = {
  eyebrow: 'Good questions',
  heading: 'Insurance and roofing, answered',
  items: [
    { q: 'Do I actually have a claim?', a: 'That is what the free inspection tells you. We document the damage honestly. If a storm did not cause enough damage to file, we say so and you owe nothing.' },
    { q: 'How much will I pay out of pocket?', a: 'On an approved claim, typically just your insurance deductible. We build the claim for the full fair scope so you are not left covering the gap.' },
    { q: 'Do you deal with the insurance company for me?', a: 'Yes. We document the damage, prepare and help file the paperwork, and meet your adjuster on the roof so the claim reflects the real damage.' },
    { q: 'Will filing a claim raise my rates?', a: 'Storm damage claims are typically treated differently from at-fault claims, but every policy is different. We help you understand your options before you file.' },
    { q: 'How long does the whole process take?', a: 'Inspection to approval usually runs a couple of weeks depending on your insurer. Once approved, most roofs are rebuilt in one to three days, weather permitting.' },
    { q: 'Are you licensed and insured?', a: 'Fully licensed, bonded, and insured, with certificates and certified installers available before any work begins.' },
  ],
};

export const cta = {
  heading: 'Storm rolled through? Start with a free inspection.',
  sub: 'No cost, no pressure. We tell you honestly whether you have a claim, and if you do, we handle it from here.',
  primary: { label: 'Book a free inspection', href: '#cta' },
  microcopy: 'Free inspection. Nothing out of pocket until your claim is approved.',
  phoneLabel: 'Or call',
};

export const footer = {
  tagline: 'Insurance restoration specialists. We handle the claim so you do not have to.',
  columns: [
    { title: 'Services', links: ['Storm & hail damage', 'Roof replacement', 'Insurance claim help', 'Emergency repair', 'Free inspections'] },
    { title: 'Company', links: ['How claims work', 'Why us', 'Restored roofs', 'FAQ', 'Contact'] },
  ],
  serviceArea: 'Serving Pensacola and the Gulf Coast.',
};
