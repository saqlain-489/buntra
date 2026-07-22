import Image from 'next/image';
import { CheckCircle, ShieldCheck } from '@phosphor-icons/react/dist/ssr';
import { DContainer, DButton, DEyebrow } from '../kit/primitives';
import { Reveal } from '../kit/Reveal';
import { Parallax } from '../kit/Parallax';
import { hero } from './content';

const display = 'font-[family-name:var(--d-font-display)]';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[var(--d-bg)]">
      {/* soft coastal wash so the hero reads even before a real photo */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(115%_75%_at_82%_-8%,var(--d-accent-soft),transparent_58%)]"
      />
      <DContainer className="relative">
        <div className="grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Reveal>
              <DEyebrow>{hero.eyebrow}</DEyebrow>
            </Reveal>
            <h1 className={`${display} mt-5 text-[clamp(2.5rem,5vw,4.2rem)] font-bold leading-[1.04] tracking-[-0.02em] text-[color:var(--d-ink)]`}>
              <Reveal delay={0.05}>
                <span className="block">{hero.headline[0]}</span>
              </Reveal>
              <Reveal delay={0.14}>
                <span className="block">
                  We handle the <span className="text-[color:var(--d-accent)]">claim.</span>
                </span>
              </Reveal>
            </h1>
            <Reveal delay={0.22}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--d-body)]">{hero.sub}</p>
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
              <div className="mt-7 inline-flex items-center gap-2 rounded-[var(--d-radius)] bg-[var(--d-bg-alt)] px-4 py-2.5 text-sm font-medium text-[color:var(--d-body)]">
                <ShieldCheck size={18} weight="duotone" className="text-[color:var(--d-accent)]" />
                {hero.microcopy}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="relative">
            <div className="relative overflow-hidden rounded-[var(--d-radius-lg)] ring-1 ring-[var(--d-line)] shadow-[0_30px_70px_rgba(15,41,51,0.14)]">
              <Parallax amount={10}>
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={`https://picsum.photos/seed/${hero.heroSeed}/1000/1250`}
                    alt="A restored roof by Gulf Coast Storm Pros"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="scale-110 object-cover"
                    priority
                  />
                </div>
              </Parallax>
            </div>
            {/* floating approved-claim card (green = covered) */}
            <div className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-[var(--d-radius-lg)] bg-[var(--d-surface)] px-5 py-4 shadow-[0_20px_50px_rgba(15,41,51,0.16)] ring-1 ring-[var(--d-line)]">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-[var(--d-success)] text-white">
                <CheckCircle size={24} weight="fill" />
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
