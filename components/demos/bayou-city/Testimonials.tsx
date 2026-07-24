import { Star } from '@phosphor-icons/react/dist/ssr';
import { Reveal } from '../kit/Reveal';
import { Container, SectionHead, display } from './ui';
import { testimonials } from './content';

export function Testimonials() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <SectionHead badge={testimonials.badge} heading={testimonials.heading} />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.items.map((t, i) => (
            <Reveal key={t.name} variant="up" delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-2xl border border-[var(--d-line)] bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:p-8">
                <span className="flex gap-0.5 text-[#f5b50a]">
                  {Array.from({ length: 5 }, (_, s) => (
                    <Star key={s} size={15} weight="fill" />
                  ))}
                </span>
                <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-[color:var(--d-ink)]">{t.quote}</blockquote>
                <figcaption className="mt-6 border-t border-[var(--d-line)] pt-5">
                  <div className={`${display} text-sm font-semibold text-[color:var(--d-ink)]`}>{t.name}</div>
                  <div className="mt-0.5 text-xs text-[color:var(--d-muted)]">{t.place}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-[color:var(--d-muted)]">{testimonials.note}</p>
      </Container>
    </section>
  );
}
