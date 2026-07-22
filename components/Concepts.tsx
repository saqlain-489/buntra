'use client';

import { useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowsHorizontal, ArrowUpRight, ArrowRight } from '@phosphor-icons/react';
import { Container, Section, Heading } from './primitives';
import { Reveal } from './Reveal';
import { concepts } from '@/lib/content';

// Pointer-driven comparison slider. Updates clip-path + handle position through
// refs (no React state) so dragging never re-renders the tree.
export function Concepts() {
  const wrap = useRef<HTMLDivElement>(null);
  const beforeClip = useRef<HTMLDivElement>(null);
  const handle = useRef<HTMLButtonElement>(null);

  const setPct = useCallback((pct: number) => {
    const p = Math.max(2, Math.min(98, pct));
    if (beforeClip.current) beforeClip.current.style.clipPath = `inset(0 ${100 - p}% 0 0)`;
    if (handle.current) handle.current.style.left = `${p}%`;
  }, []);

  const onDrag = useCallback(
    (clientX: number) => {
      const rect = wrap.current?.getBoundingClientRect();
      if (!rect) return;
      setPct(((clientX - rect.left) / rect.width) * 100);
    },
    [setPct]
  );

  const start = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      onDrag(e.clientX);
      const move = (ev: PointerEvent) => onDrag(ev.clientX);
      const up = () => {
        window.removeEventListener('pointermove', move);
        window.removeEventListener('pointerup', up);
      };
      window.addEventListener('pointermove', move);
      window.addEventListener('pointerup', up);
    },
    [onDrag]
  );

  return (
    <Section id="work" alt>
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <Heading className="text-3xl leading-[1.1] sm:text-4xl">{concepts.heading}</Heading>
            <p className="mt-4 text-lg text-[var(--color-body)]">{concepts.sub}</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            ref={wrap}
            onPointerDown={start}
            className="relative mt-12 aspect-[16/10] w-full cursor-ew-resize touch-none select-none overflow-hidden rounded-2xl shadow-xl shadow-stone-900/5 ring-1 ring-[var(--color-line)]"
          >
            {/* AFTER (base layer): a real screenshot of one of our concept builds. */}
            <Image
              src="/work/summit-ridge-desktop.jpeg"
              alt="Modern roofing website concept built by Buntra"
              fill
              sizes="(max-width: 1152px) 100vw, 1152px"
              className="object-cover object-top"
            />
            <span className="absolute right-4 top-4 rounded-lg bg-[var(--color-ink)]/85 px-3 py-1 text-xs font-semibold text-white">
              After
            </span>

            {/* BEFORE (clipped overlay). TODO: replace with the roofer's real old site. */}
            <div ref={beforeClip} className="absolute inset-0" style={{ clipPath: 'inset(0 50% 0 0)' }}>
              <Image
                src="https://picsum.photos/seed/buntra-before-dated/1600/1000?grayscale"
                alt="A dated roofing website before redesign"
                fill
                sizes="(max-width: 1152px) 100vw, 1152px"
                className="object-cover"
              />
              <span className="absolute left-4 top-4 rounded-lg bg-white/90 px-3 py-1 text-xs font-semibold text-[var(--color-ink)]">
                Before
              </span>
            </div>

            <button
              ref={handle}
              aria-label="Drag to compare before and after"
              className="absolute top-0 z-10 flex h-full -translate-x-1/2 items-center"
              style={{ left: '50%' }}
            >
              <span className="h-full w-0.5 bg-white shadow-[0_0_0_1px_rgba(15,23,42,0.12)]" />
              <span className="absolute left-1/2 grid h-11 w-11 -translate-x-1/2 place-items-center rounded-full bg-white text-[var(--color-ink)] shadow-lg ring-1 ring-[var(--color-line)]">
                <ArrowsHorizontal size={20} weight="bold" />
              </span>
            </button>
          </div>
        </Reveal>

        {/* Honest framing, stated plainly. */}
        <Reveal delay={0.05}>
          <p className="mt-5 border-l-2 border-[var(--color-accent)] pl-4 text-[14px] leading-relaxed text-[var(--color-muted)]">
            {concepts.honesty}
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {concepts.gallery.map((item, i) => (
            <Reveal key={item.slug} delay={i * 0.08}>
              <Link href={`/work/${item.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-[var(--color-line)]">
                  <Image
                    src={item.img}
                    alt={`${item.title} concept`}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <span className="absolute inset-0 bg-[var(--color-ink)]/0 transition-colors duration-300 group-hover:bg-[var(--color-ink)]/10" />
                  <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-[var(--color-ink)] opacity-0 shadow-md transition-all duration-300 group-hover:opacity-100">
                    <ArrowUpRight size={16} weight="bold" />
                  </span>
                </div>
                <figcaption className="mt-3 flex items-center justify-between gap-3">
                  <span className="font-[family-name:var(--font-display)] text-[15px] font-bold text-[var(--color-ink)]">
                    {item.title}
                  </span>
                  <span className="shrink-0 rounded-full bg-[var(--color-accent-soft)] px-2.5 py-1 text-[11px] font-semibold text-[var(--color-accent-strong)]">
                    {item.tag}
                  </span>
                </figcaption>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 flex justify-center">
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-[15px] font-semibold text-[var(--color-ink)] ring-1 ring-[var(--color-line)] transition hover:-translate-y-0.5 hover:ring-[var(--color-accent)] hover:shadow-md"
            >
              See all our work
              <ArrowRight size={16} weight="bold" className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
