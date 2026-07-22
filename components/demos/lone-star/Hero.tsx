import Image from 'next/image';
import { Star, Heart } from '@phosphor-icons/react/dist/ssr';
import { DContainer, DButton, DEyebrow } from '../kit/primitives';
import { Reveal } from '../kit/Reveal';
import { Parallax } from '../kit/Parallax';
import { hero, brand } from './content';

const display = 'font-[family-name:var(--d-font-display)]';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[var(--d-bg)]">
      {/* warm sunlit wash so the hero reads even before a real photo */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_88%_-10%,var(--d-accent-soft),transparent_58%)]"
      />
      <DContainer className="relative">
        <div className="grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--d-accent-soft)] px-4 py-1.5">
                <Heart size={14} weight="fill" className="text-[color:var(--d-accent)]" />
                <DEyebrow>{hero.eyebrow}</DEyebrow>
              </span>
            </Reveal>
            <h1 className={`${display} mt-6 text-[clamp(2.5rem,5vw,4.2rem)] font-bold leading-[1.05] tracking-[-0.015em] text-[color:var(--d-ink)]`}>
              <Reveal delay={0.05} variant="up">
                <span className="block">{hero.headline[0]}</span>
              </Reveal>
              <Reveal delay={0.14} variant="up">
                <span className="block">
                  trust like{' '}
                  <span className="relative whitespace-nowrap text-[color:var(--d-accent)]">
                    family.
                    <svg
                      aria-hidden
                      viewBox="0 0 220 14"
                      preserveAspectRatio="none"
                      className="absolute -bottom-1.5 left-0 h-3 w-full text-[color:var(--d-accent)]"
                    >
                      <path d="M2 9 C 60 3, 160 3, 218 8" stroke="currentColor" strokeWidth="3.5" fill="none" strokeLinecap="round" />
                    </svg>
                  </span>
                </span>
              </Reveal>
            </h1>
            <Reveal delay={0.22}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-[color:var(--d-body)]">{hero.sub}</p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <DButton href={hero.primary.href}>{hero.primary.label}</DButton>
                <DButton href={hero.secondary.href} variant="outline">
                  {hero.secondary.label}
                </DButton>
              </div>
            </Reveal>
            <Reveal delay={0.38}>
              <div className="mt-8 flex items-center gap-2.5 text-sm text-[color:var(--d-body)]">
                <span className="flex gap-0.5 text-[color:var(--d-accent)]">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} size={16} weight="fill" />
                  ))}
                </span>
                Loved by North Texas neighbors
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} variant="scale" className="relative">
            <div className="relative overflow-hidden rounded-[var(--d-radius-lg)] ring-1 ring-[var(--d-line)] shadow-[0_30px_70px_rgba(31,45,71,0.16)]">
              <Parallax amount={10}>
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={`https://picsum.photos/seed/${hero.heroSeed}/1000/1250`}
                    alt="A Texas family home with a fresh Lone Star roof"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="scale-110 object-cover"
                    priority
                  />
                </div>
              </Parallax>
            </div>
            {/* circular family emblem badge overlapping the image */}
            <div className="absolute -bottom-6 -left-4 grid h-28 w-28 place-items-center rounded-full bg-[var(--d-primary)] text-center text-[color:var(--d-on-primary)] shadow-[0_18px_40px_rgba(178,58,46,0.35)] ring-4 ring-[var(--d-bg)] sm:-left-6 sm:h-32 sm:w-32">
              <span className="leading-tight">
                <span className={`${display} block text-[13px] font-semibold uppercase tracking-wide`}>{hero.emblem.top}</span>
                <span className="mx-auto mt-1 block h-px w-8 bg-[color:var(--d-on-primary)]/40" />
                <span className="mt-1 block px-3 text-[10px] font-semibold uppercase tracking-wide text-[color:var(--d-on-primary)]/85">
                  {hero.emblem.bottom}
                </span>
              </span>
            </div>
          </Reveal>
        </div>
      </DContainer>
    </section>
  );
}
