import Image from 'next/image';
import { DContainer, DSection, DHeading } from '../kit/primitives';
import { Reveal } from '../kit/Reveal';
import { work } from './content';

const display = 'font-[family-name:var(--d-font-display)]';
const mono = 'font-[family-name:var(--d-font-mono)]';

export function Projects() {
  return (
    <DSection id="work">
      <DContainer>
        <Reveal>
          <div className="max-w-2xl">
            <span className={`${mono} text-[13px] font-medium uppercase tracking-[0.14em] text-[color:var(--d-accent-strong)]`}>
              {work.eyebrow}
            </span>
            <DHeading className="mt-4 text-3xl leading-tight sm:text-4xl">{work.heading}</DHeading>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {work.items.map((item, i) => (
            <Reveal key={item.seed} delay={(i % 3) * 0.06} variant={i % 2 === 0 ? 'up' : 'scale'}>
              <figure className="group overflow-hidden rounded-[var(--d-radius-lg)] border border-[var(--d-line)] bg-[var(--d-surface)] transition-all duration-200 hover:-translate-y-1 hover:border-[var(--d-accent)] hover:shadow-[0_18px_44px_rgba(22,24,28,0.12)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={`https://picsum.photos/seed/${item.seed}/900/700`}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover grayscale-[0.35] transition-all duration-[600ms] ease-out group-hover:scale-[1.05] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--d-primary)]/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className={`${mono} absolute right-3 top-3 bg-[var(--d-primary)]/90 px-2.5 py-1 text-[11px] tracking-[0.06em] text-white backdrop-blur-sm rounded-[var(--d-radius)]`}>
                    {item.meta}
                  </span>
                </div>
                <figcaption className="flex items-center justify-between gap-3 px-4 py-4">
                  <span className={`${display} text-[15px] font-bold leading-snug text-[color:var(--d-ink)]`}>{item.title}</span>
                  <span className={`${mono} shrink-0 text-[11px] uppercase tracking-[0.06em] text-[color:var(--d-accent-strong)]`}>
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
