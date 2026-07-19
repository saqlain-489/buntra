'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Container, Section } from './primitives';
import { Reveal } from './Reveal';
import { process } from '@/lib/content';

const display = 'font-[family-name:var(--font-display)]';

export function Process() {
  // First panel open by default. Hovering (or focusing) another opens it and
  // collapses the rest; leaving the row returns to the first.
  const [active, setActive] = useState(0);

  return (
    <Section id="process">
      <Container>
        {/* Header: small label left, headline + sub right (matches the reference) */}
        <Reveal>
          <div className="grid gap-6 md:grid-cols-[0.7fr_1.3fr] md:items-start md:gap-12">
            <span className="inline-flex items-center gap-2.5 text-sm font-semibold text-[var(--color-ink)]">
              <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
              {process.eyebrow}
            </span>
            <div>
              <h2 className={`${display} text-4xl font-extrabold leading-[0.98] tracking-[-0.035em] text-[var(--color-ink)] sm:text-5xl lg:text-[3.6rem]`}>
                {process.heading}
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-[var(--color-body)]">
                {process.sub}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Expanding panels */}
        <Reveal delay={0.1}>
          <div
            className="mt-14 flex flex-col gap-4 md:h-[440px] md:flex-row"
            onMouseLeave={() => setActive(0)}
          >
            {process.steps.map((step, i) => {
              const isActive = active === i;
              return (
                <div
                  key={step.title}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  tabIndex={0}
                  aria-label={`Step ${i + 1}: ${step.title}`}
                  style={{ flexGrow: isActive ? 2.4 : 1 }}
                  className="group flex min-h-[280px] flex-col outline-none transition-[flex-grow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:min-h-0 md:basis-0"
                >
                  <div className="relative flex-1 overflow-hidden rounded-[22px] bg-white ring-1 ring-[var(--color-line)]">
                    {/* Photo layer: always shown on mobile, only on the active panel at md+ */}
                    <div
                      className={`absolute inset-0 opacity-100 transition-opacity duration-500 ${
                        isActive ? 'md:opacity-100' : 'md:opacity-0'
                      }`}
                    >
                      <Image
                        src={`https://picsum.photos/seed/${step.seed}/1100/950`}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 55vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/90 via-[var(--color-ink)]/30 to-transparent" />
                    </div>

                    {/* Giant number watermark */}
                    <span
                      aria-hidden
                      className={`${display} pointer-events-none absolute bottom-1 right-5 z-10 text-[5.5rem] font-extrabold leading-none tracking-[-0.04em] transition-colors duration-500 sm:text-[7rem] ${
                        isActive
                          ? 'text-[var(--color-accent)]'
                          : 'text-[var(--color-accent)] md:text-[#e8e2d7]'
                      }`}
                    >
                      .0{i + 1}
                    </span>

                    {/* Text: bottom on mobile + active, top on collapsed panels */}
                    <div
                      className={`relative z-20 flex h-full flex-col justify-end p-6 ${
                        isActive ? 'md:justify-end' : 'md:justify-start'
                      }`}
                    >
                      <p
                        className={`text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors duration-500 ${
                          isActive
                            ? 'text-white/70 md:text-white/70'
                            : 'text-white/70 md:text-[var(--color-muted)]'
                        }`}
                      >
                        {step.kicker}
                      </p>
                      <h3
                        className={`${display} mt-2 max-w-[16ch] text-2xl font-bold leading-[1.05] tracking-tight transition-colors duration-500 ${
                          isActive ? 'text-white md:text-white' : 'text-white md:text-[var(--color-ink)]'
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`mt-3 max-w-[34ch] text-[15px] leading-relaxed text-white/85 ${
                          isActive ? 'md:block' : 'md:hidden'
                        }`}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Progress line (desktop) */}
                  <div
                    className={`mt-4 hidden rounded-full transition-all duration-500 md:block ${
                      isActive ? 'h-[3px] bg-[var(--color-ink)]' : 'h-[2px] bg-[var(--color-line)]'
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
