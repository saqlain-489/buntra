import Link from 'next/link';
import { Check, X, ShieldCheck, ArrowRight } from '@phosphor-icons/react/dist/ssr';
import { Container } from './primitives';
import { Reveal } from './Reveal';
import { differentiators as d, cta } from '@/lib/content';

export function Differentiators() {
  return (
    <section id="why" className="relative overflow-hidden bg-[var(--color-ink-deep)] py-20 md:py-28">
      {/* Amber glow, the only warm light in the dark section. */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[420px] w-[720px] -translate-x-1/2 rounded-full opacity-[0.16] blur-3xl [background:radial-gradient(circle,var(--color-accent),transparent_60%)]"
      />
      <Container className="relative">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl">
              {d.heading}
            </h2>
            <p className="mt-4 text-lg text-[var(--color-ink-body)]">{d.sub}</p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* The usual route */}
          <Reveal>
            <div className="h-full rounded-2xl border border-[var(--color-ink-line)] bg-white/[0.02] p-6 sm:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-muted)]">
                {d.usualLabel}
              </p>
              <ul className="mt-5 divide-y divide-[var(--color-ink-line)]">
                {d.rows.map((r) => (
                  <li key={r.usual} className="flex items-start gap-3 py-3.5">
                    <X size={20} weight="bold" className="mt-0.5 shrink-0 text-[var(--color-muted)]" />
                    <span className="text-[15px] leading-snug text-[var(--color-ink-body)]">{r.usual}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* With Buntra */}
          <Reveal delay={0.08}>
            <div className="relative h-full rounded-2xl border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/[0.06] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.35)] sm:p-7">
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] shadow-[0_0_10px_var(--color-accent)]" />
                {d.buntraLabel}
              </p>
              <ul className="mt-5 divide-y divide-[var(--color-ink-line)]">
                {d.rows.map((r) => (
                  <li key={r.buntra} className="flex items-start gap-3 py-3.5">
                    <Check size={20} weight="bold" className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
                    <span className="text-[15px] font-medium leading-snug text-white">{r.buntra}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.05}>
          <div className="mt-10 flex flex-col items-start gap-6 rounded-2xl border border-[var(--color-ink-line)] bg-white/[0.03] px-7 py-7 md:flex-row md:items-center md:justify-between md:px-9">
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent)] ring-1 ring-[var(--color-accent)]/25">
                <ShieldCheck size={26} weight="duotone" />
              </span>
              <p className="max-w-xl text-[15px] leading-relaxed text-[var(--color-ink-body)]">
                {d.reassurance}
              </p>
            </div>
            <Link
              href={cta.href}
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold text-[var(--color-ink)] transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/25"
            >
              {cta.label}
              <ArrowRight size={16} weight="bold" className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
