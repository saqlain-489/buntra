import Image from 'next/image';
import { Star } from '@phosphor-icons/react/dist/ssr';
import { Reveal } from '../kit/Reveal';
import { Parallax } from '../kit/Parallax';
import { Container, Badge, Pill, Clouds, display } from './ui';
import { hero } from './content';

export function Hero() {
  return (
    <section id="top" className="overflow-hidden bg-gradient-to-b from-[var(--d-bg)] to-white">
      <Container>
        <div className="mx-auto max-w-3xl pt-16 text-center md:pt-24">
          <Reveal variant="up">
            <Badge>{hero.badge}</Badge>
          </Reveal>
          <Reveal variant="up" delay={0.08}>
            <h1 className={`${display} mt-6 text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-[color:var(--d-ink)]`}>
              {hero.headline}
            </h1>
          </Reveal>
          <Reveal variant="up" delay={0.16}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--d-body)]">{hero.sub}</p>
          </Reveal>
          <Reveal variant="up" delay={0.24}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Pill href={hero.secondary.href} variant="outline">{hero.secondary.label}</Pill>
              <Pill href={hero.primary.href}>{hero.primary.label}</Pill>
            </div>
          </Reveal>
          <Reveal variant="up" delay={0.32}>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm font-medium text-[color:var(--d-body)]">
              <span className="flex gap-0.5 text-[#f5b50a]">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} size={16} weight="fill" />
                ))}
              </span>
              {hero.proof}
            </div>
          </Reveal>
        </div>

        <Reveal variant="scale" delay={0.2}>
          <div className="relative mt-12 overflow-hidden rounded-[var(--d-radius-lg)] border border-[var(--d-line)] shadow-sm md:mt-16">
            <Parallax amount={8}>
              <div className="relative aspect-[16/10] w-full sm:aspect-[21/9]">
                <Image
                  src={`https://picsum.photos/seed/${hero.heroSeed}/2100/900`}
                  alt="A Houston roof restored after a storm, under a clearing sky"
                  fill
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="scale-105 object-cover"
                  priority
                />
              </div>
            </Parallax>
            <Clouds />
          </div>
        </Reveal>
      </Container>
      <div className="h-16 md:h-24" />
    </section>
  );
}
