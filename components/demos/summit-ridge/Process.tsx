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
          <span aria-hidden className="absolute bottom-4 left-[19px] top-4 w-px bg-[var(--d-line)]" />
          <ol className="space-y-8">
            {process.steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <li className="group relative flex gap-6 transition-transform duration-300 hover:translate-x-1">
                  <span
                    className={`${display} relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--d-primary)] text-sm font-bold text-[color:var(--d-on-primary)] ring-4 ring-[var(--d-bg)] transition-colors duration-300 group-hover:bg-[var(--d-accent)]`}
                  >
                    {i + 1}
                  </span>
                  <div className="pt-1">
                    <h3 className={`${display} text-xl font-bold text-[color:var(--d-ink)]`}>{s.title}</h3>
                    <p className="mt-1.5 max-w-lg text-[15px] leading-relaxed text-[color:var(--d-body)]">{s.desc}</p>
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
