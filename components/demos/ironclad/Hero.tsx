import Image from 'next/image';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr';
import { DContainer, DButton } from '../kit/primitives';
import { Reveal } from '../kit/Reveal';
import { Parallax } from '../kit/Parallax';
import { hero } from './content';

const display = 'font-[family-name:var(--d-font-display)]';
const mono = 'font-[family-name:var(--d-font-mono)]';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[var(--d-bg)]">
      {/* blueprint grid motif */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            'linear-gradient(var(--d-line) 1px, transparent 1px), linear-gradient(90deg, var(--d-line) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(120% 90% at 70% 0%, #000 30%, transparent 75%)',
        }}
      />
      <DContainer className="relative">
        <div className="grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <Reveal variant="right">
              <span className={`${mono} inline-block text-[13px] font-medium tracking-[0.14em] text-[color:var(--d-accent-strong)]`}>
                {hero.eyebrow}
              </span>
            </Reveal>
            <h1 className={`${display} mt-5 text-[clamp(2.5rem,5.2vw,4.3rem)] font-bold leading-[1.03] tracking-[-0.02em] text-[color:var(--d-ink)]`}>
              <Reveal delay={0.05}><span className="block">{hero.headline[0]}</span></Reveal>
              <Reveal delay={0.13}>
                <span className="block">
                  roofs, built to <span className="text-[color:var(--d-accent)]">spec.</span>
                </span>
              </Reveal>
            </h1>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--d-body)]">{hero.sub}</p>
            </Reveal>
            <Reveal delay={0.28}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <DButton href={hero.primary.href}>
                  {hero.primary.label} <ArrowRight size={17} weight="bold" />
                </DButton>
                <DButton href={hero.secondary.href} variant="outline">{hero.secondary.label}</DButton>
              </div>
            </Reveal>
            <Reveal delay={0.36}>
              <dl className="mt-9 flex flex-wrap gap-3">
                {hero.chips.map((c) => (
                  <div
                    key={c.k}
                    className="flex items-baseline gap-2 border border-[var(--d-line)] bg-[var(--d-surface)] px-3.5 py-2 rounded-[var(--d-radius)]"
                  >
                    <dt className={`${mono} text-[11px] font-medium uppercase tracking-[0.1em] text-[color:var(--d-muted)]`}>{c.k}</dt>
                    <dd className={`${mono} text-[13px] font-semibold text-[color:var(--d-ink)]`}>{c.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={0.12} variant="scale" className="relative">
            {/* corner brackets for a technical frame */}
            <span aria-hidden className="absolute -left-2 -top-2 h-6 w-6 border-l-2 border-t-2 border-[var(--d-accent)]" />
            <span aria-hidden className="absolute -bottom-2 -right-2 h-6 w-6 border-b-2 border-r-2 border-[var(--d-accent)]" />
            <div className="relative overflow-hidden rounded-[var(--d-radius-lg)] ring-1 ring-[var(--d-line)] shadow-[0_30px_70px_rgba(22,24,28,0.18)]">
              <Parallax amount={10}>
                <div className="relative aspect-[4/5] w-full sm:aspect-[5/4] lg:aspect-[4/5]">
                  <Image
                    src={`https://picsum.photos/seed/${hero.heroSeed}/1000/1250`}
                    alt="A finished standing-seam metal commercial roof"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="scale-110 object-cover"
                    priority
                  />
                </div>
              </Parallax>
              {/* mono spec overlay tag */}
              <div className={`${mono} absolute bottom-3 left-3 flex items-center gap-2 bg-[var(--d-primary)]/90 px-3 py-1.5 text-[11px] font-medium tracking-[0.08em] text-white backdrop-blur-sm rounded-[var(--d-radius)]`}>
                <span className="h-1.5 w-1.5 bg-[var(--d-accent)]" />
                {hero.imageTag}
              </div>
            </div>
          </Reveal>
        </div>
      </DContainer>
    </section>
  );
}
