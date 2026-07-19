// Single source of all page copy. Keeps components clean and edits in one place.

export const brand = {
  name: 'Buntra',
  full: 'Buntra Web Studio',
  city: 'Houston',
  email: 'hello@buntra.com',
  phone: '(713) 555-0180', // TODO: replace with real number before launch
};

export const cta = {
  label: 'Get my free mockup',
  href: '#mockup',
};

// Nav anchors, in page order. Labels stay short so the bar renders on one line.
export const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Why us', href: '#why' },
  { label: 'Process', href: '#process' },
  { label: 'FAQ', href: '#faq' },
];

export const hero = {
  eyebrow: 'Websites for roofing contractors',
  headline: ['Roofing websites that', 'book more jobs.'],
  sub: 'Fast, mobile-first sites that turn Google searches into phone calls. Live in 7 days, pay nothing until you see it.',
};

export const problem = {
  heading: 'Your next customer is Googling you right now.',
  body: 'Most people check their phone before they call a roofer. If your site is slow, dated, or clumsy on mobile, they hit back and dial the next name on the list. A weak website hands your jobs to the competition, quietly, every single day.',
  points: [
    { stat: '60%', label: 'of roofing searches happen on a phone' },
    { stat: '7 days', label: 'from start to a site that is live' },
    { stat: '$0', label: 'due until you approve the design' },
  ],
};

export const services = {
  heading: 'Everything your site needs to turn a search into a booked job',
  sub: 'Not a brochure that sits there. A site built to ring your phone.',
  items: [
    {
      title: 'Mobile-first design',
      desc: 'Sharp and fast on the phone, where most of your customers actually find you. No pinching, no waiting, no bounce.',
    },
    {
      title: 'Click-to-call and quote form',
      desc: 'One tap to call you, or a short form that drops a lead straight in your inbox.',
    },
    {
      title: 'Storm and insurance pages',
      desc: 'Built around the jobs roofers win: storm damage, repairs, and insurance claims.',
    },
    {
      title: 'Google Business setup',
      desc: 'We tidy up your profile so you show up on the local map when people search.',
    },
    {
      title: 'Built to be found',
      desc: 'Clean structure and local pages so you rank for roofing in your city.',
    },
    {
      title: 'Reviews front and center',
      desc: 'Your real Google reviews on display, because trust is what closes the call.',
    },
  ],
};

// Honest framing: these are concept builds, not shipped client sites yet.
export const concepts = {
  heading: 'Same roofer. A site that actually books jobs.',
  sub: 'Drag to see what a modern site does for a contractor. This is the free mockup you get, built from your real business, before you pay anything.',
  honesty:
    'These are concept builds and redesign mockups, the exact kind of work we deliver. As client sites ship, real ones take their place here.',
  gallery: [
    { title: 'Storm response landing', tag: 'Concept', seed: 'buntra-storm-response' },
    { title: 'Metal roofing rebuild', tag: 'Concept', seed: 'buntra-metal-rebuild' },
    { title: 'Insurance claim funnel', tag: 'Concept', seed: 'buntra-insurance-funnel' },
  ],
};

export const differentiators = {
  heading: 'Why roofers pick Buntra over the alternatives',
  sub: 'You have options. Here is the honest comparison, side by side.',
  usualLabel: 'The usual route',
  buntraLabel: 'With Buntra',
  rows: [
    { usual: 'Pay upfront and hope it works out', buntra: 'Pay nothing until you approve the design' },
    { usual: 'Four to eight weeks, if it ships at all', buntra: 'Live in 7 days' },
    { usual: 'A generic template that looks like everyone else', buntra: 'Built around roofing: storm, insurance, local' },
    { usual: 'Agency jargon and an account manager', buntra: 'You talk to the person building it' },
    { usual: 'Surprise invoices and creeping scope', buntra: 'Flat $249 build, $99 a month, no surprises' },
    { usual: 'You chase them for every small edit', buntra: 'Free edits your first 30 days' },
  ],
  reassurance: 'The risk is ours, not yours. If it is not clearly better than what you have, you owe us nothing.',
};

export const process = {
  eyebrow: 'Our Process',
  heading: 'From first look to a booked job, in a week',
  sub: 'No jargon, no runaround. Three simple moves, and you are in control at every one.',
  // seed drives a placeholder photo. TODO: swap for real process/roofing shots.
  steps: [
    {
      kicker: 'Free mockup',
      title: 'See it first',
      desc: 'We rebuild your homepage and send you a live link. Free, before you commit to anything.',
      seed: 'buntra-step-mockup',
    },
    {
      kicker: 'Your call',
      title: 'You approve',
      desc: 'Love it? We finish the full site. Want changes? We make them. Not for you? You pay nothing.',
      seed: 'buntra-step-approve',
    },
    {
      kicker: 'Launch day',
      title: 'Go live in 7 days',
      desc: 'We handle hosting, setup, and launch. Your new site is working for you within a week.',
      seed: 'buntra-step-live',
    },
  ],
};

export const founder = {
  // TODO: confirm the founder name and add a real headshot if you want one.
  name: 'Saqlain Ahmad',
  role: 'Founder, Buntra Web Studio',
  initials: 'SA',
  label: 'A note from the founder',
  paragraphs: [
    'I kept meeting roofers who did excellent work but had a website that made them look small. Meanwhile the contractor across town with a slick site was getting the calls.',
    'That never sat right with me. So Buntra does one thing well: build roofing sites that make the phone ring, fast, and without the risk. You see the work before you pay a cent.',
    'If your new site is not clearly better than what you have today, you owe me nothing. That is the whole deal, and I am happy to put my name on it.',
  ],
};

export const faq = {
  heading: 'Questions roofers ask',
  items: [
    { q: 'How much does it cost?', a: 'A $249 one-time build fee plus $99 per month for hosting, maintenance, and edits. You are not charged the build fee until you have seen your site and approved it.' },
    { q: 'I already have a website. Why switch?', a: 'Most roofing sites we see are not mobile-friendly, which loses the majority of searchers before they ever call. We show you exactly what a modern version looks like, free, so you can decide with your own eyes.' },
    { q: 'I do not have time for this.', a: 'That is the point. You approve a design and we handle everything else: copy, photos, hosting, and launch. Your time investment is a few minutes.' },
    { q: 'What if I get most jobs from word of mouth?', a: 'Great. Referrals still Google you before they call to make sure you are legit. A sharp site turns that check into a booked job instead of a second thought.' },
    { q: 'How fast is it really?', a: 'Seven days from the moment you approve your mockup to a live site. We build on a proven roofing template, so we move fast without cutting corners.' },
  ],
};

export const finalCta = {
  heading: 'See your new roofing site. Free.',
  sub: 'Tell us about your business and we will rebuild your homepage at no cost. Live and clearly better in 7 days, or you pay nothing.',
  guarantee: 'Live and better in 7 days, or it is free',
};

export const contact = {
  heading: 'Get your free mockup',
  sub: 'Takes 30 seconds. No payment, no commitment.',
  steps: [
    'Send us your business name and current site or number.',
    'We rebuild your homepage and send a live link, free.',
    'You like it, you are live in a week. You do not, you owe nothing.',
  ],
};
