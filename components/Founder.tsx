import { Quotes, ShieldCheck } from '@phosphor-icons/react/dist/ssr';
import { Container, Section } from './primitives';
import { Reveal } from './Reveal';
import { founder, brand } from '@/lib/content';

const display = 'font-[family-name:var(--font-display)]';

export function Founder() {
  return (
    <Section id="founder" alt>
      <Container>
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">
                {founder.label}
              </span>
              <span className="h-px flex-1 bg-[var(--color-line)]" />
            </div>
          </Reveal>

          {/* Opening line: the hook, oversized, with a quiet quote mark */}
          <Reveal delay={0.05}>
            <div className="relative mt-7">
              <Quotes
                aria-hidden
                size={54}
                weight="fill"
                className="absolute -left-1 -top-6 text-[var(--color-accent)]/12"
              />
              <p className={`${display} relative text-[clamp(1.5rem,3.2vw,2.15rem)] font-bold leading-[1.2] tracking-tight text-[var(--color-ink)]`}>
                {founder.paragraphs[0]}
              </p>
            </div>
          </Reveal>

          {/* Body */}
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-[var(--color-body)]">
              {founder.paragraphs[1]}
            </p>
          </Reveal>

          {/* The promise, pulled out as a risk-reversal callout */}
          <Reveal delay={0.15}>
            <div className="mt-7 flex items-start gap-4 rounded-2xl border border-[var(--color-line)] bg-white p-6 shadow-sm">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                <ShieldCheck size={24} weight="duotone" />
              </span>
              <p className="text-[15px] font-medium leading-relaxed text-[var(--color-ink)]">
                {founder.paragraphs[2]}
              </p>
            </div>
          </Reveal>

          {/* Signature */}
          <Reveal delay={0.2}>
            <div className="mt-9 flex items-center gap-4 border-t border-[var(--color-line)] pt-8">
              <span className={`${display} grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[var(--color-ink)] text-lg font-extrabold text-white ring-4 ring-[var(--color-accent)]/25`}>
                {founder.initials}
              </span>
              <div>
                <p className={`${display} text-lg font-bold text-[var(--color-ink)]`}>
                  <span className="accent-underline">{founder.name}</span>
                </p>
                <p className="mt-0.5 text-sm text-[var(--color-body)]">
                  {founder.role} · {brand.city}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
