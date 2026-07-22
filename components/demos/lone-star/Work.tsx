import Image from 'next/image';
import { DContainer, DSection, DHeading, DEyebrow } from '../kit/primitives';
import { Reveal } from '../kit/Reveal';
import { work } from './content';

const display = 'font-[family-name:var(--d-font-display)]';

export function Work() {
  return (
    <DSection id="work">
      <DContainer>
        <Reveal>
          <div className="max-w-2xl">
            <DEyebrow>{work.eyebrow}</DEyebrow>
            <DHeading className="mt-4 text-3xl leading-tight sm:text-4xl">{work.heading}</DHeading>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-5">
          {work.items.map((item, i) => (
            <Reveal key={item.seed} delay={(i % 3) * 0.06} variant="up">
              <figure className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--d-radius-lg)] ring-1 ring-[var(--d-line)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_22px_50px_rgba(31,45,71,0.14)]">
                  <Image
                    src={`https://picsum.photos/seed/${item.seed}/900/700`}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--d-ink)]/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="absolute left-3 top-3 rounded-full bg-[var(--d-surface)]/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[color:var(--d-accent-strong)] backdrop-blur-sm">
                    {item.tag}
                  </span>
                </div>
                <figcaption className={`${display} mt-3 text-[15px] font-bold text-[color:var(--d-ink)]`}>{item.title}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </DContainer>
    </DSection>
  );
}
