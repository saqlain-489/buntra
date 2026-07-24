import Link from 'next/link';
import { Reveal } from '../kit/Reveal';

export const display = 'font-[family-name:var(--d-font-display)]';

// Spec asks for max-w-7xl containers, wider than the kit's DContainer.
export function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

// Signature "Archeo" section badge: soft blue pill with a sparkle glyph.
// onTint swaps to a white fill for sections whose bg is already the soft blue.
export function Badge({ children, onTint = false }: { children: React.ReactNode; onTint?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full ${onTint ? 'bg-white' : 'bg-[var(--d-accent-soft)]'} px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-[color:var(--d-accent-strong)]`}
    >
      <span aria-hidden>&#10022;</span> {children}
    </span>
  );
}

export const pillBase =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-7 py-3 text-[15px] font-semibold whitespace-nowrap transition-all duration-200 hover:-translate-y-0.5 active:translate-y-[1px]';
export const pillPrimary = `${pillBase} bg-[var(--d-primary)] text-[color:var(--d-on-primary)] shadow-sm hover:shadow-md`;
export const pillOutline = `${pillBase} border border-[var(--d-line)] bg-white text-[color:var(--d-ink)] hover:border-[var(--d-ink)]`;

export function Pill({
  href,
  children,
  variant = 'primary',
  className = '',
}: {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  className?: string;
}) {
  return (
    <Link href={href} className={`${variant === 'primary' ? pillPrimary : pillOutline} ${className}`}>
      {children}
    </Link>
  );
}

// Badge + heading + optional sub, revealed together. Parent sections keep layout control.
export function SectionHead({
  badge,
  heading,
  sub,
  center = true,
  badgeOnTint = false,
}: {
  badge: string;
  heading: string;
  sub?: string;
  center?: boolean;
  badgeOnTint?: boolean;
}) {
  return (
    <Reveal variant="up">
      <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
        <Badge onTint={badgeOnTint}>{badge}</Badge>
        <h2 className={`${display} mt-5 text-3xl font-bold leading-[1.08] tracking-tight text-[color:var(--d-ink)] sm:text-4xl md:text-[2.6rem]`}>
          {heading}
        </h2>
        {sub && <p className="mt-4 text-lg leading-relaxed text-[color:var(--d-body)]">{sub}</p>}
      </div>
    </Reveal>
  );
}

// Soft white cloud shapes hugging a container's bottom edge (parent must be overflow-hidden).
export function Clouds() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0">
      <div className="absolute -bottom-14 left-[6%] h-36 w-64 rounded-full bg-white/80 blur-2xl sm:h-44 sm:w-80" />
      <div className="absolute -bottom-20 left-1/2 h-44 w-80 -translate-x-1/2 rounded-full bg-white/90 blur-2xl sm:h-56 sm:w-[28rem]" />
      <div className="absolute -bottom-14 right-[5%] h-36 w-64 rounded-full bg-white/70 blur-2xl sm:h-44 sm:w-96" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent sm:h-28" />
    </div>
  );
}
