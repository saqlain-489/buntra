'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from '@phosphor-icons/react';
import { DSection } from '../kit/primitives';
import { Reveal } from '../kit/Reveal';
import { work } from './content';

export function Work() {
  // null = resting state, all panels equal. Hover/focus expands one on md+.
  const [active, setActive] = useState<number | null>(null);

  return (
    <DSection id="work">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-black leading-[1.1] tracking-tighter text-white sm:text-5xl">{work.heading}</h2>
            <Link
              href="/work"
              className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-[color:var(--d-accent-strong)] transition-colors hover:text-white"
            >
              {work.linkLabel} <ArrowRight size={16} weight="bold" />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-12 flex flex-col gap-4 md:h-[400px] md:flex-row" onMouseLeave={() => setActive(null)}>
            {work.items.map((item, i) => {
              const isActive = active === i;
              return (
                <div
                  key={item.seed}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  tabIndex={0}
                  aria-label={item.title}
                  style={{ flexGrow: active === null ? 1 : isActive ? 4 : 0.8 }}
                  className="group relative h-60 overflow-hidden rounded-3xl border border-white/10 outline-none transition-[flex-grow] duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] md:h-auto md:min-w-0 md:basis-0"
                >
                  <Image
                    src={`https://picsum.photos/seed/${item.seed}/900/700`}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1128]/90 via-[#0c1128]/20 to-transparent" />
                  {/* caption always shown stacked on mobile; revealed on expand on md+ */}
                  <div
                    className={`absolute inset-x-0 bottom-0 p-5 transition-opacity duration-500 md:opacity-0 ${
                      isActive ? 'md:opacity-100' : ''
                    }`}
                  >
                    <span className="text-xs font-bold uppercase tracking-widest text-[color:var(--d-accent-strong)]">
                      {item.tag}
                    </span>
                    <h3 className="mt-1 text-lg font-bold tracking-tight text-white">{item.title}</h3>
                    <Link
                      href="#contact"
                      className="mt-2 inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-white/80 transition-colors hover:text-white"
                    >
                      Start yours <ArrowUpRight size={14} weight="bold" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </DSection>
  );
}
