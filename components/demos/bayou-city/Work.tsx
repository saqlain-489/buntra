import Image from 'next/image';
import { Reveal } from '../kit/Reveal';
import { Container, SectionHead, Pill, display } from './ui';
import { work } from './content';

export function Work() {
  return (
    <section id="work" className="bg-white py-20 md:py-28">
      <Container>
        <SectionHead badge={work.badge} heading={work.heading} sub={work.sub} />

        <div className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {work.items.map((item, i) => (
            <Reveal key={item.seed} variant="up" delay={(i % 3) * 0.07}>
              <figure className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--d-line)] shadow-sm transition-shadow duration-300 group-hover:shadow-md">
                  <Image
                    src={`https://picsum.photos/seed/${item.seed}/900/700`}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.05]"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[color:var(--d-ink)] backdrop-blur">
                    {item.location}
                  </span>
                  <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[color:var(--d-ink)] backdrop-blur">
                    {item.type}
                  </span>
                </div>
                <figcaption className="mt-4">
                  <div className={`${display} text-[17px] font-semibold text-[color:var(--d-ink)]`}>{item.title}</div>
                  <p className="mt-1 text-sm leading-relaxed text-[color:var(--d-body)]">{item.detail}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal variant="up" delay={0.1}>
          <div className="mt-14 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Pill href="#about" variant="outline">{work.aboutLabel}</Pill>
            <Pill href="/work">{work.allLabel}</Pill>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
