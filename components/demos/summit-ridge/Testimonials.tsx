import { Star, Quotes } from '@phosphor-icons/react/dist/ssr';
import { DContainer, DSection } from '../kit/primitives';
import { Reveal } from '../kit/Reveal';
import { testimonials } from './content';

export function Testimonials() {
  return (
    <DSection id="reviews" alt>
      <DContainer>
        <Reveal>
          <h2 className="max-w-2xl text-3xl font-black leading-[1.1] tracking-tighter text-white sm:text-5xl">
            {testimonials.heading}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.items.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-md">
                <Quotes size={28} weight="fill" className="text-[color:var(--d-accent)]/50" />
                <blockquote className="mt-4 flex-1 text-[15px] font-light leading-relaxed text-white">
                  {t.quote}
                </blockquote>
                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                  <figcaption>
                    <div className="text-sm font-bold text-white">{t.name}</div>
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
