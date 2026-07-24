import { Reveal } from '../kit/Reveal';
import { Container, SectionHead, display } from './ui';
import { process } from './content';

export function Process() {
  return (
    <section id="process" className="bg-[var(--d-bg)] py-20 md:py-28">
      <Container>
        <SectionHead badge={process.badge} heading={process.heading} badgeOnTint />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {process.steps.map((s, i) => (
            <Reveal key={s.title} variant="up" delay={i * 0.07}>
              <div>
                <div className="flex items-center gap-4">
                  <span className={`${display} grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[var(--d-primary)] text-base font-semibold text-[color:var(--d-on-primary)]`}>
                    {i + 1}
                  </span>
                  {/* hairline connector to the next step, desktop row only */}
                  {i < process.steps.length - 1 && <span aria-hidden className="hidden h-px flex-1 bg-[var(--d-line)] lg:block" />}
                </div>
                <h3 className={`${display} mt-5 text-[17px] font-semibold text-[color:var(--d-ink)]`}>{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--d-body)]">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
