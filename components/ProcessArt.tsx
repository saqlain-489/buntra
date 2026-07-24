// Custom, on-brand process illustrations (Slate & Azure). One browser-window
// motif that evolves across the steps: previewed -> approved -> live.
// Pure SVG, colors pull from the theme tokens so it always matches.

function Frame({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <ellipse cx="160" cy="120" rx="118" ry="86" fill="var(--color-accent)" opacity="0.06" />
      <rect x="66" y="50" width="188" height="140" rx="14" fill="#ffffff" stroke="var(--color-line)" strokeWidth="2" />
      <line x1="66" y1="76" x2="254" y2="76" stroke="var(--color-line)" strokeWidth="2" />
      <circle cx="83" cy="63" r="3" fill="var(--color-line)" />
      <circle cx="95" cy="63" r="3" fill="var(--color-line)" />
      <circle cx="107" cy="63" r="3" fill="var(--color-line)" />
      {/* wireframe of a roofing site */}
      <rect x="80" y="88" width="160" height="40" rx="6" fill="var(--color-accent-soft)" />
      <path d="M139 118 l21 -17 l21 17" stroke="var(--color-accent)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="80" y="138" width="122" height="6" rx="3" fill="var(--color-line)" />
      <rect x="80" y="152" width="90" height="6" rx="3" fill="var(--color-line)" />
      <rect x="80" y="166" width="48" height="15" rx="7.5" fill="var(--color-accent)" />
      {children}
    </>
  );
}

export function ProcessArt({ step, className = '' }: { step: number; className?: string }) {
  const common = `block h-full w-full ${className}`;

  // Step 1: See it first — a preview/eye badge on the fresh mockup.
  if (step === 0) {
    return (
      <svg viewBox="0 0 320 240" fill="none" className={common} aria-hidden>
        <Frame />
        <circle cx="236" cy="58" r="15" fill="var(--color-accent)" />
        <ellipse cx="236" cy="58" rx="8" ry="4.6" fill="#ffffff" />
        <circle cx="236" cy="58" r="2.6" fill="var(--color-accent)" />
      </svg>
    );
  }

  // Step 2: You approve — an azure check seal on the design.
  if (step === 1) {
    return (
      <svg viewBox="0 0 320 240" fill="none" className={common} aria-hidden>
        <Frame />
        <circle cx="242" cy="178" r="26" fill="var(--color-accent)" stroke="#ffffff" strokeWidth="4" />
        <path d="M231 178 l7.5 7.5 l13 -15" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // Step 3: Go live — the site broadcasting, with a live indicator.
  return (
    <svg viewBox="0 0 320 240" fill="none" className={common} aria-hidden>
      <path d="M264 94 a38 38 0 0 1 0 52" stroke="var(--color-accent)" strokeWidth="3" opacity="0.5" strokeLinecap="round" />
      <path d="M278 82 a54 54 0 0 1 0 76" stroke="var(--color-accent)" strokeWidth="3" opacity="0.26" strokeLinecap="round" />
      <Frame />
      <circle cx="236" cy="63" r="7" stroke="var(--color-accent)" strokeWidth="2" opacity="0.35" />
      <circle cx="236" cy="63" r="3.5" fill="var(--color-accent)" />
    </svg>
  );
}
