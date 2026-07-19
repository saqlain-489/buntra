import Link from 'next/link';
import { ArrowRight, ShieldCheck } from '@phosphor-icons/react/dist/ssr';
import { Container } from './primitives';
import { Reveal } from './Reveal';
import { finalCta, cta } from '@/lib/content';

export function FinalCta() {
  return (
    <section className="bg-[var(--color-surface-alt)] py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white px-4 py-1.5 text-[13px] font-semibold text-[var(--color-accent-strong)]">
              <ShieldCheck size={16} weight="fill" className="text-[var(--color-accent)]" />
              {finalCta.guarantee}
            </span>
            <h2 className="mt-7 font-[family-name:var(--font-display)] text-4xl font-extrabold leading-[1.02] tracking-[-0.03em] text-[var(--color-ink)] sm:text-5xl md:text-[3.5rem]">
              {finalCta.heading}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-[var(--color-body)]">
              {finalCta.sub}
            </p>
            <div className="mt-9 flex justify-center">
              <Link
                href={cta.href}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-ink)] px-8 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/20"
              >
                {cta.label}
                <ArrowRight size={18} weight="bold" className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
            <p className="mt-4 text-[13px] font-medium text-[var(--color-muted)]">
              Live in 7 days. $0 due until you approve the design.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
