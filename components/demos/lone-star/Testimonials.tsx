import { Star, Quotes } from '@phosphor-icons/react/dist/ssr';
import { DContainer, DSection, DHeading, DEyebrow } from '../kit/primitives';
import { Reveal } from '../kit/Reveal';
import { testimonials } from './content';

const display = 'font-[family-name:var(--d-font-display)]';

export function Testimonials() {
  return (
    <DSection id="reviews" alt>
      <DContainer>
        <Reveal>
          <div className="max-w-2xl">
            <DEyebrow>{testimonials.eyebrow}</DEyebrow>
            <DHeading className="mt-4 text-3xl leading-tight sm:text-4xl">{testimonials.heading}</DHeading>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.items.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08} variant="scale">
              <figure className="group flex h-full flex-col rounded-[var(--d-radius-lg)] bg-[var(--d-surface)] p-7 ring-1 ring-[var(--d-line)] transition-all duration-300 hover:-translate-y-1 hover:ring-[var(--d-primary)] hover:shadow-[0_22px_50px_rgba(31,45,71,0.1)]">
                <div className="flex items-center justify-between">
                  <Quotes size={30} weight="fill" className="text-[color:var(--d-accent)]/35 transition-colors duration-300 group-hover:text-[color:var(--d-accent)]/60" />
                  <span className="flex gap-0.5 text-[color:var(--d-accent)]">
                    {Array.from({ length: 5 }, (_, s) => (
                      <Star key={s} size={14} weight="fill" />
                    ))}
                  </span>
                </div>
                <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-[color:var(--d-ink)]">{t.quote}</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-[var(--d-line)] pt-5">
                  <span className={`${display} grid h-10 w-10 place-items-center rounded-full bg-[var(--d-accent-soft)] text-sm font-bold text-[color:var(--d-accent-strong)]`}>
                    {t.name.charAt(0)}
                  </span>
                  <span className="leading-tight">
                    <span className={`${display} block text-sm font-bold text-[color:var(--d-ink)]`}>{t.name}</span>
                    <span className="text-xs text-[color:var(--d-muted)]">{t.place}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-[color:var(--d-muted)]">{testimonials.note}</p>
      </DContainer>
    </DSection>
  );
}
