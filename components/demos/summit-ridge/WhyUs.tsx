import { DContainer, DSection, DHeading, DEyebrow } from '../kit/primitives';
import { Reveal } from '../kit/Reveal';
import { why, stats } from './content';

const display = 'font-[family-name:var(--d-font-display)]';

export function WhyUs() {
  return (
    <DSection id="why" alt>
      <DContainer>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <div>
              <DEyebrow>{why.eyebrow}</DEyebrow>
              <DHeading className="mt-4 text-3xl leading-tight sm:text-4xl">{why.heading}</DHeading>
              <blockquote className={`${display} mt-8 border-l-2 border-[var(--d-accent)] pl-6 text-2xl font-medium italic leading-snug text-[color:var(--d-ink)]`}>
                {why.quote}
                <footer className="mt-4 text-sm font-normal not-italic text-[color:var(--d-muted)]">
                  {why.attribution}
                </footer>
              </blockquote>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {why.points.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="rounded-[var(--d-radius-lg)] bg-[var(--d-surface)] p-6 ring-1 ring-[var(--d-line)]">
                  <h3 className={`${display} text-lg font-bold text-[color:var(--d-ink)]`}>{p.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[color:var(--d-body)]">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-[var(--d-radius-lg)] bg-[var(--d-line)] ring-1 ring-[var(--d-line)] sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-[var(--d-surface)] px-6 py-8 text-center">
                <div className={`${display} text-3xl font-bold text-[color:var(--d-ink)]`}>{s.value}</div>
                <div className="mt-1.5 text-[13px] font-medium text-[color:var(--d-muted)]">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </DContainer>
    </DSection>
  );
}
