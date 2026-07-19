import { Container, Section } from './primitives';
import { Reveal } from './Reveal';
import { founder, brand } from '@/lib/content';

export function Founder() {
  return (
    <Section id="founder" alt>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          {/* Identity */}
          <Reveal>
            <div className="rounded-2xl bg-white p-8 ring-1 ring-[var(--color-line)]">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-[var(--color-ink)] font-[family-name:var(--font-display)] text-2xl font-extrabold text-white ring-4 ring-[var(--color-accent)]/30">
                {founder.initials}
              </span>
              <p className="mt-6 font-[family-name:var(--font-display)] text-xl font-bold text-[var(--color-ink)]">
                {founder.name}
              </p>
              <p className="mt-1 text-[15px] text-[var(--color-body)]">{founder.role}</p>
              <div className="mt-6 flex items-center gap-2 border-t border-[var(--color-line)] pt-6 text-[13px] font-medium text-[var(--color-muted)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                Based in {brand.city}, working with roofers everywhere
              </div>
            </div>
          </Reveal>

          {/* The note */}
          <Reveal delay={0.08}>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-accent-strong)]">
                {founder.label}
              </p>
              <div className="mt-5 space-y-5">
                <p className="font-[family-name:var(--font-display)] text-2xl font-bold leading-[1.28] tracking-tight text-[var(--color-ink)]">
                  {founder.paragraphs[0]}
                </p>
                {founder.paragraphs.slice(1).map((p) => (
                  <p key={p} className="text-lg leading-relaxed text-[var(--color-body)]">
                    {p}
                  </p>
                ))}
              </div>
              <p className="mt-8 inline-block font-[family-name:var(--font-display)] text-lg font-bold text-[var(--color-ink)]">
                <span className="accent-underline">{founder.name}</span>
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
