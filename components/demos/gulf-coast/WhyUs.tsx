import { CheckCircle, Quotes } from '@phosphor-icons/react/dist/ssr';
import { DContainer, DSection, DHeading, DEyebrow } from '../kit/primitives';
import { Reveal } from '../kit/Reveal';
import { why } from './content';

const display = 'font-[family-name:var(--d-font-display)]';

export function WhyUs() {
  return (
    <DSection id="why" alt>
      <DContainer>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal variant="right">
            <div>
              <DEyebrow>{why.eyebrow}</DEyebrow>
              <DHeading className="mt-4 text-3xl leading-tight sm:text-4xl">{why.heading}</DHeading>
              <figure className="mt-8 rounded-[var(--d-radius-lg)] bg-[var(--d-primary)] p-8 text-[color:var(--d-on-primary)]">
                <Quotes size={30} weight="fill" className="text-white/40" />
                <blockquote className={`${display} mt-4 text-2xl font-medium leading-snug`}>{why.quote}</blockquote>
                <figcaption className="mt-5 text-sm font-medium text-white/70">{why.attribution}</figcaption>
              </figure>
            </div>
          </Reveal>

          <div className="grid content-center gap-4">
            {why.points.map((p, i) => (
              <Reveal key={p.title} variant="left" delay={i * 0.08}>
                <div className="group flex gap-4 rounded-[var(--d-radius-lg)] bg-[var(--d-surface)] p-6 ring-1 ring-[var(--d-line)] transition-all duration-300 hover:-translate-y-0.5 hover:ring-[var(--d-accent)] hover:shadow-[0_18px_40px_rgba(15,41,51,0.08)]">
                  <span className="mt-0.5 shrink-0 text-[color:var(--d-success)]">
                    <CheckCircle size={26} weight="fill" />
                  </span>
                  <div>
                    <h3 className={`${display} text-lg font-bold text-[color:var(--d-ink)]`}>{p.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-[color:var(--d-body)]">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </DContainer>
    </DSection>
  );
}
