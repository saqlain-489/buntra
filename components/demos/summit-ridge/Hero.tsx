import Image from 'next/image';
import { ShieldCheck, Star } from '@phosphor-icons/react/dist/ssr';
import { DContainer, DButton, DEyebrow } from '../kit/primitives';
import { Reveal } from '../kit/Reveal';
import { Parallax } from '../kit/Parallax';
import { hero, brand } from './content';

const display = 'font-[family-name:var(--d-font-display)]';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[var(--d-bg)]">
      {/* soft slate wash so the hero reads even before a real photo */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_85%_-10%,var(--d-accent-soft),transparent_55%)]"
      />
      <DContainer className="relative">
        <div className="grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Reveal>
              <DEyebrow>{hero.eyebrow}</DEyebrow>
            </Reveal>
            <h1 className={`${display} mt-5 text-[clamp(2.6rem,5.2vw,4.4rem)] font-bold leading-[1.02] tracking-[-0.02em] text-[color:var(--d-ink)]`}>
              <Reveal delay={0.05}><span className="block">{hero.headline[0]}</span></Reveal>
              <Reveal delay={0.14}>
                <span className="block">
                  {hero.headline[1].replace(' again.', ' ')}
                  <span className="italic text-[color:var(--d-accent)]">again.</span>
                </span>
              </Reveal>
            </h1>
            <Reveal delay={0.22}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--d-body)]">{hero.sub}</p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <DButton href={hero.primary.href}>{hero.primary.label}</DButton>
                <DButton href={hero.secondary.href} variant="outline">{hero.secondary.label}</DButton>
              </div>
            </Reveal>
            <Reveal delay={0.38}>
              <div className="mt-7 flex items-center gap-2 text-sm text-[color:var(--d-body)]">
                <span className="flex gap-0.5 text-[color:var(--d-accent)]">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} size={16} weight="fill" />
                  ))}
                </span>
                4.9 from Front Range homeowners
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="relative">
            <div className="relative overflow-hidden rounded-[var(--d-radius-lg)] ring-1 ring-[var(--d-line)] shadow-[0_30px_70px_rgba(33,42,51,0.16)]">
              <Parallax amount={10}>
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={`https://picsum.photos/seed/${hero.heroSeed}/1000/1250`}
                    alt="A finished Summit Ridge roof"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="scale-110 object-cover"
                    priority
                  />
                </div>
              </Parallax>
            </div>
            {/* floating warranty card */}
            <div className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-[var(--d-radius-lg)] bg-[var(--d-surface)] px-5 py-4 shadow-[0_20px_50px_rgba(33,42,51,0.16)] ring-1 ring-[var(--d-line)]">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-[var(--d-accent-soft)] text-[color:var(--d-accent)]">
                <ShieldCheck size={24} weight="duotone" />
              </span>
              <span className="leading-tight">
                <span className={`${display} block text-xl font-bold text-[color:var(--d-ink)]`}>{hero.badge.top}</span>
                <span className="text-xs font-medium text-[color:var(--d-muted)]">{hero.badge.bottom}</span>
              </span>
            </div>
          </Reveal>
        </div>
      </DContainer>
    </section>
  );
}
