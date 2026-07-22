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
            <DHeading className="mt-4 text-3xl leading-tight sm:text-4xl">{process.heading}</DHeading>
          </div>
        </Reveal>

        <div className="relative mt-12 max-w-3xl">
          <span aria-hidden className="absolute bottom-6 left-[23px] top-6 w-px bg-[var(--d-line)]" />
          <ol className="space-y-7">
            {process.steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.07} variant="up">
                <li className="group relative flex gap-6">
                  <span
                    className={`${display} relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[var(--d-primary)] text-base font-bold text-[color:var(--d-on-primary)] ring-4 ring-[var(--d-bg)] transition-transform duration-300 group-hover:scale-110`}
                  >
                    {i + 1}
                  </span>
                  <div className="flex-1 rounded-[var(--d-radius)] bg-[var(--d-surface)] p-5 ring-1 ring-[var(--d-line)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:ring-[var(--d-primary)] group-hover:shadow-[0_16px_38px_rgba(31,45,71,0.08)]">
                    <h3 className={`${display} text-xl font-bold text-[color:var(--d-ink)]`}>{s.title}</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-[color:var(--d-body)]">{s.desc}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </DContainer>
    </DSection>
  );
}
