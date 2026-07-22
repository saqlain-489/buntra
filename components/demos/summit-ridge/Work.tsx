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
            <Reveal key={item.seed} delay={(i % 3) * 0.06}>
              <figure className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--d-radius-lg)] ring-1 ring-[var(--d-line)]">
                  <Image
                    src={`https://picsum.photos/seed/${item.seed}/900/700`}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--d-ink)]/55 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <figcaption className="mt-3 flex items-center justify-between gap-3">
                  <span className={`${display} text-[15px] font-bold text-[color:var(--d-ink)]`}>{item.title}</span>
                  <span className="shrink-0 text-[11px] font-semibold uppercase tracking-wide text-[color:var(--d-accent)]">
                    {item.tag}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </DContainer>
    </DSection>
  );
}
