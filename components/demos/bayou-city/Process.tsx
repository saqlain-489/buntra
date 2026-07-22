import { DContainer, DSection, DHeading, DEyebrow } from '../kit/primitives';
import { Reveal } from '../kit/Reveal';
import { process } from './content';

const display = 'font-[family-name:var(--d-font-display)]';

export function Process() {
  return (
    <DSection id="process">
      <DContainer>
        <Reveal>
          <div className="max-w-2xl">
            <DEyebrow>{process.eyebrow}</DEyebrow>
            <DHeading className="mt-4 text-3xl uppercase leading-[1.05] sm:text-4xl">{process.heading}</DHeading>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {process.steps.map((s, i) => (
            <Reveal key={s.title} variant="up" delay={i * 0.07}>
              <div className="group flex h-full flex-col rounded-[var(--d-radius-lg)] border-t-2 border-[var(--d-line)] bg-[var(--d-surface)] p-6 ring-1 ring-[var(--d-line)] transition-all duration-200 hover:-translate-y-1 hover:border-[var(--d-accent-2)] hover:shadow-[0_20px_50px_rgba(15,42,61,0.1)]">
                <span className={`${display} text-5xl font-bold leading-none text-[color:var(--d-accent)] transition-colors group-hover:text-[color:var(--d-accent-strong)]`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className={`${display} mt-4 text-lg font-bold uppercase leading-tight text-[color:var(--d-ink)]`}>{s.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[color:var(--d-body)]">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </DContainer>
    </DSection>
  );
}
