import { Quotes } from '@phosphor-icons/react/dist/ssr';
import { DContainer, DSection, DHeading } from '../kit/primitives';
import { Reveal } from '../kit/Reveal';
import { testimonials } from './content';

const display = 'font-[family-name:var(--d-font-display)]';
const mono = 'font-[family-name:var(--d-font-mono)]';

export function Testimonials() {
  return (
    <DSection id="reviews">
      <DContainer>
        <Reveal>
          <div className="max-w-2xl">
            <span className={`${mono} text-[13px] font-medium uppercase tracking-[0.14em] text-[color:var(--d-accent-strong)]`}>
              {testimonials.eyebrow}
            </span>
            <DHeading className="mt-4 text-3xl leading-tight sm:text-4xl">{testimonials.heading}</DHeading>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.items.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08} variant={i === 1 ? 'up' : 'scale'}>
              <figure className="group flex h-full flex-col rounded-[var(--d-radius-lg)] border border-[var(--d-line)] bg-[var(--d-surface)] p-7 transition-all duration-200 hover:-translate-y-1 hover:border-[var(--d-accent)] hover:shadow-[0_18px_44px_rgba(22,24,28,0.1)]">
                <Quotes size={28} weight="fill" className="text-[color:var(--d-accent)]/45" />
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-[color:var(--d-ink)]">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-[var(--d-line)] pt-5">
                  <div className={`${display} text-sm font-bold text-[color:var(--d-ink)]`}>{t.name}</div>
                  <div className={`${mono} mt-1 text-[11px] uppercase tracking-[0.06em] text-[color:var(--d-muted)]`}>{t.place}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <p className={`${mono} mt-6 text-center text-[11px] tracking-[0.04em] text-[color:var(--d-muted)]`}>{testimonials.note}</p>
      </DContainer>
    </DSection>
  );
}
