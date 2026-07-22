import Image from 'next/image';
import { Lightning, Phone, ShieldCheck, CheckCircle } from '@phosphor-icons/react/dist/ssr';
import { DContainer, DButton } from '../kit/primitives';
import { Reveal } from '../kit/Reveal';
import { Parallax } from '../kit/Parallax';
import { hero, brand } from './content';

const display = 'font-[family-name:var(--d-font-display)]';

export function Hero() {
  const tel = `tel:${brand.phone.replace(/\D/g, '')}`;

  return (
    <section id="top" className="relative overflow-hidden bg-[var(--d-bg)]">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_92%_-10%,var(--d-accent-soft),transparent_55%)]"
      />
      <DContainer className="relative">
        <div className="grid items-center gap-10 py-14 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <Reveal variant="right">
              <span className="inline-flex items-center gap-2 rounded-[var(--d-radius)] bg-[var(--d-accent-2)] px-3 py-1.5 text-[12px] font-bold uppercase tracking-[0.14em] text-[color:var(--d-primary)]">
                <Lightning size={14} weight="fill" /> {hero.badge}
              </span>
            </Reveal>
            <h1 className={`${display} mt-5 text-[clamp(2.7rem,6.2vw,5rem)] font-bold uppercase leading-[0.94] tracking-[-0.01em] text-[color:var(--d-ink)]`}>
              <Reveal variant="up" delay={0.04}><span className="block">{hero.headline[0]}</span></Reveal>
              <Reveal variant="up" delay={0.12}><span className="block">{hero.headline[1]}</span></Reveal>
              <Reveal variant="up" delay={0.2}>
                <span className="block text-[color:var(--d-accent)]">{hero.headline[2]}</span>
              </Reveal>
            </h1>
            <Reveal variant="up" delay={0.28}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--d-body)]">{hero.sub}</p>
            </Reveal>
            <Reveal variant="up" delay={0.34}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {/* phone-first: primary CTA is the call itself */}
                <a
                  href={tel}
                  className="inline-flex items-center justify-center gap-2 rounded-[var(--d-radius)] bg-[var(--d-primary)] px-6 py-3.5 text-[15px] font-semibold text-[color:var(--d-on-primary)] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-lg active:translate-y-[1px]"
                >
                  <Phone size={17} weight="fill" /> Call {brand.phone}
                </a>
                <DButton href={hero.secondary.href} variant="outline">{hero.secondary.label}</DButton>
              </div>
            </Reveal>
            <Reveal variant="up" delay={0.4}>
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-[color:var(--d-body)]">
                {hero.trust.map((t) => (
                  <span key={t} className="inline-flex items-center gap-1.5">
                    <CheckCircle size={17} weight="fill" className="text-[color:var(--d-accent)]" />
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal variant="scale" delay={0.15} className="relative">
            <div className="relative overflow-hidden rounded-[var(--d-radius-lg)] ring-1 ring-[var(--d-line)] shadow-[0_30px_70px_rgba(15,42,61,0.2)] md:[clip-path:polygon(7%_0,100%_0,100%_100%,0_100%)]">
              <Parallax amount={10}>
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={`https://picsum.photos/seed/${hero.heroSeed}/1000/1250`}
                    alt="A Houston roof being restored after a storm"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="scale-110 object-cover"
                    priority
                  />
                </div>
              </Parallax>
            </div>
            {/* floating response-time card */}
            <div className="absolute -bottom-5 -left-2 flex items-center gap-3 rounded-[var(--d-radius-lg)] bg-[var(--d-surface)] px-5 py-4 shadow-[0_20px_50px_rgba(15,42,61,0.2)] ring-1 ring-[var(--d-line)]">
              <span className="grid h-11 w-11 place-items-center rounded-[var(--d-radius)] bg-[var(--d-accent-soft)] text-[color:var(--d-accent)]">
                <ShieldCheck size={24} weight="duotone" />
              </span>
              <span className="leading-tight">
                <span className={`${display} block text-2xl font-bold uppercase text-[color:var(--d-ink)]`}>{hero.cardValue}</span>
                <span className="text-xs font-medium text-[color:var(--d-muted)]">{hero.cardLabel}</span>
              </span>
            </div>
          </Reveal>
        </div>
      </DContainer>
    </section>
  );
}
