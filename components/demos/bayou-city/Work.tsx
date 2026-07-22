import Image from 'next/image';
import { DContainer, DSection, DHeading, DEyebrow } from '../kit/primitives';
import { Reveal } from '../kit/Reveal';
import { work } from './content';

const display = 'font-[family-name:var(--d-font-display)]';

export function Work() {
  return (
    <DSection id="work" alt>
      <DContainer>
        <Reveal>
          <div className="max-w-2xl">
            <DEyebrow>{work.eyebrow}</DEyebrow>
            <DHeading className="mt-4 text-3xl uppercase leading-[1.05] sm:text-4xl">{work.heading}</DHeading>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-5">
          {work.items.map((item, i) => (
            <Reveal key={item.seed} variant="up" delay={(i % 3) * 0.06}>
              <figure className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--d-radius-lg)] ring-1 ring-[var(--d-line)]">
                  <Image
                    src={`https://picsum.photos/seed/${item.seed}/900/700`}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--d-primary)]/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="absolute left-3 top-3 rounded-[var(--d-radius)] bg-[var(--d-accent-2)] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-[color:var(--d-primary)]">
                    {item.tag}
                  </span>
                </div>
                <figcaption className={`${display} mt-3 text-[15px] font-bold uppercase text-[color:var(--d-ink)]`}>
                  {item.title}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </DContainer>
    </DSection>
  );
}
