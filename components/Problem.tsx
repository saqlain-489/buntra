import { Container, Section, Heading } from './primitives';
import { Reveal } from './Reveal';
import { problem } from '@/lib/content';

export function Problem() {
  return (
    <Section id="problem" alt>
      <Container>
        <Reveal>
          <div className="max-w-3xl">
            <Heading className="text-3xl leading-[1.08] sm:text-4xl md:text-[2.75rem]">
              Your next customer is <span className="accent-underline">Googling you</span> right now.
            </Heading>
            <p className="mt-6 text-lg leading-relaxed text-[var(--color-body)]">{problem.body}</p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-[var(--color-line)] ring-1 ring-[var(--color-line)] sm:grid-cols-3">
          {problem.points.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.08} className="bg-white">
              <div className="h-full px-7 py-9">
                <span aria-hidden className="block h-1 w-9 rounded-full bg-[var(--color-accent)]" />
                <div className="mt-5 font-[family-name:var(--font-display)] text-[2.75rem] font-extrabold leading-none tracking-tight text-[var(--color-ink)]">
                  {p.stat}
                </div>
                <p className="mt-3 text-[15px] font-medium leading-snug text-[var(--color-body)]">
                  {p.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
