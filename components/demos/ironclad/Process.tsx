import { DContainer, DSection, DHeading } from '../kit/primitives';
import { Reveal } from '../kit/Reveal';
import { process } from './content';

const display = 'font-[family-name:var(--d-font-display)]';
const mono = 'font-[family-name:var(--d-font-mono)]';

export function Process() {
  return (
    <DSection id="process" alt>
      <DContainer>
        <Reveal>
          <div className="max-w-2xl">
            <span className={`${mono} text-[13px] font-medium uppercase tracking-[0.14em] text-[color:var(--d-accent-strong)]`}>
              {process.eyebrow}
            </span>
            <DHeading className="mt-4 text-3xl leading-tight sm:text-4xl">{process.heading}</DHeading>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-[var(--d-radius-lg)] border border-[var(--d-line)] bg-[var(--d-line)] md:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} variant="clip">
              <div className="group flex h-full flex-col bg-[var(--d-surface)] p-7 transition-colors hover:bg-[var(--d-bg)]">
                <div className="flex items-center justify-between">
                  <span className={`${mono} text-[13px] font-semibold tracking-[0.1em] text-[color:var(--d-accent-strong)]`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="h-px w-10 bg-[var(--d-line)] transition-colors group-hover:bg-[var(--d-accent)]" />
                </div>
                <h3 className={`${display} mt-6 text-lg font-bold text-[color:var(--d-ink)]`}>{s.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[color:var(--d-body)]">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </DContainer>
    </DSection>
  );
}
