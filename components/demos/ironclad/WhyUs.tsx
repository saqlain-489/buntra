import { CheckSquare } from '@phosphor-icons/react/dist/ssr';
import { DContainer, DSection, DHeading } from '../kit/primitives';
import { Reveal } from '../kit/Reveal';
import { why } from './content';

const display = 'font-[family-name:var(--d-font-display)]';
const mono = 'font-[family-name:var(--d-font-mono)]';

export function WhyUs() {
  return (
    <DSection id="why" alt>
      <DContainer>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Reveal variant="right">
              <span className={`${mono} text-[13px] font-medium uppercase tracking-[0.14em] text-[color:var(--d-accent-strong)]`}>
                {why.eyebrow}
              </span>
              <DHeading className="mt-4 text-3xl leading-tight sm:text-4xl">{why.heading}</DHeading>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-[color:var(--d-body)]">{why.sub}</p>
            </Reveal>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {why.points.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.06}>
                  <div className="group flex h-full flex-col rounded-[var(--d-radius-lg)] border border-[var(--d-line)] bg-[var(--d-surface)] p-5 transition-colors hover:border-[var(--d-accent)]">
                    <CheckSquare size={22} weight="fill" className="text-[color:var(--d-accent)]" />
                    <h3 className={`${display} mt-3 text-[17px] font-bold text-[color:var(--d-ink)]`}>{p.title}</h3>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-[color:var(--d-body)]">{p.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* engineered spec sheet */}
          <Reveal variant="left" delay={0.1}>
            <div className="overflow-hidden rounded-[var(--d-radius-lg)] border border-[var(--d-line)] bg-[var(--d-surface)] shadow-[0_18px_44px_rgba(22,24,28,0.08)]">
              <div className={`${mono} flex items-center justify-between border-b border-[var(--d-line)] bg-[var(--d-primary)] px-5 py-3.5 text-[12px] tracking-[0.1em] text-white`}>
                <span>{why.specTitle}</span>
                <span className="text-[color:var(--d-accent)]">REV. A</span>
              </div>
              <dl>
                {why.specRows.map((r, i) => (
                  <Reveal key={r.k} variant="clip" delay={i * 0.05}>
                    <div className="flex items-baseline justify-between gap-4 border-b border-[var(--d-line)] px-5 py-4 last:border-b-0 transition-colors hover:bg-[var(--d-bg-alt)]">
                      <dt className={`${mono} text-[12px] uppercase tracking-[0.08em] text-[color:var(--d-muted)]`}>{r.k}</dt>
                      <dd className={`${mono} text-right text-[14px] font-semibold text-[color:var(--d-ink)]`}>{r.v}</dd>
                    </div>
                  </Reveal>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </DContainer>
    </DSection>
  );
}
