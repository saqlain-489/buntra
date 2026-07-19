import Image from 'next/image';
import {
  DeviceMobile,
  Phone,
  CloudLightning,
  MapPin,
  MagnifyingGlass,
  Star,
} from '@phosphor-icons/react/dist/ssr';
import { Container, Section, Heading } from './primitives';
import { Reveal } from './Reveal';
import { services } from '@/lib/content';

const s = services.items;

function IconTile({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={`inline-grid h-11 w-11 place-items-center rounded-xl ${
        dark
          ? 'bg-white/10 text-[var(--color-accent)] ring-1 ring-white/15'
          : 'bg-white text-[var(--color-accent)] ring-1 ring-[var(--color-line)]'
      }`}
    >
      {children}
    </span>
  );
}

export function Services() {
  return (
    <Section id="services">
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <Heading className="text-3xl leading-[1.1] sm:text-4xl">{services.heading}</Heading>
            <p className="mt-4 text-lg text-[var(--color-body)]">{services.sub}</p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {/* Large feature cell */}
          <Reveal className="lg:col-span-2">
            <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-[var(--color-accent-soft)] p-8 ring-1 ring-[var(--color-line)]">
              <span
                aria-hidden
                className="pointer-events-none absolute right-[-30px] top-[-30px] h-40 w-40 opacity-70 [background-image:radial-gradient(var(--color-accent)_1.5px,transparent_1.6px)] [background-size:13px_13px]"
              />
              <IconTile>
                <DeviceMobile size={22} weight="duotone" />
              </IconTile>
              <h3 className="mt-6 max-w-[18ch] font-[family-name:var(--font-display)] text-2xl font-bold leading-tight text-[var(--color-ink)]">
                {s[0].title}
              </h3>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-[var(--color-body)]">
                {s[0].desc}
              </p>
            </div>
          </Reveal>

          {/* Dark cell, echoes the ink card in the hero */}
          <Reveal delay={0.06}>
            <div className="flex h-full flex-col rounded-2xl bg-[var(--color-ink)] p-7 text-white">
              <IconTile dark>
                <Phone size={22} weight="duotone" />
              </IconTile>
              <h3 className="mt-6 font-[family-name:var(--font-display)] text-lg font-bold">
                {s[1].title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[var(--color-ink-body)]">
                {s[1].desc}
              </p>
            </div>
          </Reveal>

          {/* Photo cell */}
          <Reveal delay={0.04}>
            <div className="relative flex min-h-[240px] flex-col justify-end overflow-hidden rounded-2xl ring-1 ring-[var(--color-line)]">
              <Image
                src="https://picsum.photos/seed/buntra-storm-roof/900/700"
                alt="Storm-damaged roof being inspected"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/90 via-[var(--color-ink)]/40 to-transparent" />
              <div className="relative p-6 text-white">
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                  <CloudLightning size={16} weight="fill" /> Storm ready
                </span>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-lg font-bold">
                  {s[2].title}
                </h3>
                <p className="mt-1 text-[14px] leading-relaxed text-white/85">{s[2].desc}</p>
              </div>
            </div>
          </Reveal>

          {/* Two standard cells */}
          <Reveal delay={0.06}>
            <div className="flex h-full flex-col rounded-2xl bg-white p-7 ring-1 ring-[var(--color-line)]">
              <IconTile>
                <MapPin size={22} weight="duotone" />
              </IconTile>
              <h3 className="mt-6 font-[family-name:var(--font-display)] text-lg font-bold text-[var(--color-ink)]">
                {s[3].title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[var(--color-body)]">{s[3].desc}</p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex h-full flex-col rounded-2xl bg-white p-7 ring-1 ring-[var(--color-line)]">
              <IconTile>
                <MagnifyingGlass size={22} weight="duotone" />
              </IconTile>
              <h3 className="mt-6 font-[family-name:var(--font-display)] text-lg font-bold text-[var(--color-ink)]">
                {s[4].title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[var(--color-body)]">{s[4].desc}</p>
            </div>
          </Reveal>

          {/* Wide reviews band */}
          <Reveal delay={0.05} className="lg:col-span-3">
            <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-white p-8 ring-1 ring-[var(--color-line)] sm:flex-row sm:items-center">
              <div className="max-w-xl">
                <IconTile>
                  <Star size={22} weight="duotone" />
                </IconTile>
                <h3 className="mt-6 font-[family-name:var(--font-display)] text-lg font-bold text-[var(--color-ink)]">
                  {s[5].title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[var(--color-body)]">{s[5].desc}</p>
              </div>
              <div className="flex shrink-0 flex-col items-start gap-2 sm:items-end">
                <div className="flex gap-1" aria-hidden>
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} size={26} weight="fill" className="text-[var(--color-accent)]" />
                  ))}
                </div>
                <span className="text-[13px] font-medium text-[var(--color-muted)]">
                  Your real Google reviews, on your own site
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
