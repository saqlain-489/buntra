'use client';

import { useState } from 'react';
import { Container, Section } from './primitives';
import { Reveal } from './Reveal';
import { ProcessArt } from './ProcessArt';
import { process } from '@/lib/content';

const display = 'font-[family-name:var(--font-display)]';
// Per-step custom illustration (recolored Storyset SVG). null = use ProcessArt.
const customArt: (string | null)[] = ['/process/see-it-first.svg', '/process/you-approve.svg', '/process/go-live.svg'];

export function Process() {
  // First panel open by default. Hovering (or focusing) another opens it and
  // collapses the rest; leaving the row returns to the first.
  const [active, setActive] = useState(0);

  return (
    <Section id="process">
      <Container>
        {/* Header: small label left, headline + sub right */}
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
                  className="group flex min-h-[320px] flex-col outline-none transition-[flex-grow] duration-[750ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:min-h-0 md:basis-0"
                >
                  <div
                    className={`relative flex h-full flex-col overflow-hidden rounded-[22px] bg-gradient-to-tr from-[var(--color-surface)] via-white to-[var(--color-accent-soft)] ring-1 transition-all duration-500 ${
                      isActive
                        ? 'shadow-[0_24px_60px_rgba(2,132,199,0.10)] ring-[var(--color-accent)]/40'
                        : 'ring-[var(--color-line)]'
                    }`}
                  >
                    {/* Illustration */}
                    <div className="flex flex-1 items-center justify-center px-6 pt-8">
                      {customArt[i] ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={customArt[i]!} alt="" className="max-h-[210px] w-auto max-w-full object-contain" />
                      ) : (
                        <ProcessArt step={i} className="max-h-[196px] max-w-[300px]" />
                      )}
                    </div>

                    {/* Text */}
                    <div className="p-6">
                      <div className="flex items-center gap-2.5">
                        <span className={`${display} grid h-6 w-6 place-items-center rounded-full bg-[var(--color-accent-soft)] text-[12px] font-bold text-[var(--color-accent-strong)]`}>
                          {i + 1}
                        </span>
                        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">
                          {step.kicker}
                        </span>
                      </div>
                      <h3 className={`${display} mt-3 max-w-[16ch] text-2xl font-bold leading-[1.05] tracking-tight text-[var(--color-ink)]`}>
                        {step.title}
                      </h3>
                      {/* Desc fades + expands smoothly instead of popping */}
                      <p
                        className={`mt-2 max-h-40 max-w-[34ch] overflow-hidden text-[15px] leading-relaxed text-[var(--color-body)] opacity-100 transition-all duration-[600ms] ease-out ${
                          isActive ? 'md:mt-2 md:max-h-40 md:opacity-100' : 'md:mt-0 md:max-h-0 md:opacity-0'
                        }`}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Progress line (desktop) */}
                  <div
                    className={`mt-4 hidden rounded-full transition-all duration-[750ms] md:block ${
                      isActive ? 'h-[3px] bg-[var(--color-accent)]' : 'h-[2px] bg-[var(--color-line)]'
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
