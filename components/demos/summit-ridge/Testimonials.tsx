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
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-[var(--d-radius-lg)] bg-[var(--d-surface)] p-7 ring-1 ring-[var(--d-line)]">
                <Quotes size={28} weight="fill" className="text-[color:var(--d-accent)]/40" />
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-[color:var(--d-ink)]">
                  {t.quote}
                </blockquote>
                <div className="mt-6 flex items-center justify-between border-t border-[var(--d-line)] pt-5">
                  <figcaption>
                    <div className={`${display} text-sm font-bold text-[color:var(--d-ink)]`}>{t.name}</div>
                    <div className="text-xs text-[color:var(--d-muted)]">{t.place}</div>
                  </figcaption>
                  <span className="flex gap-0.5 text-[color:var(--d-accent)]">
                    {Array.from({ length: 5 }, (_, s) => (
                      <Star key={s} size={13} weight="fill" />
                    ))}
                  </span>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-[color:var(--d-muted)]">{testimonials.note}</p>
      </DContainer>
    </DSection>
  );
}
