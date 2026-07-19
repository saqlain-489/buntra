'use client';

import { useRef, useCallback } from 'react';
import Image from 'next/image';
import { ArrowsHorizontal } from '@phosphor-icons/react';
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
            {/* AFTER (base layer). TODO: replace with a real finished-site screenshot. */}
            <Image
              src="https://picsum.photos/seed/buntra-after-modern/1600/1000"
              alt="Modern roofing website concept built by Buntra"
              fill
              sizes="(max-width: 1152px) 100vw, 1152px"
              className="object-cover"
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
            <Reveal key={item.seed} delay={i * 0.08}>
              <figure className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-[var(--color-line)]">
                  <Image
                    src={`https://picsum.photos/seed/${item.seed}/800/600`}
                    alt={`${item.title} concept`}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <figcaption className="mt-3 flex items-center justify-between gap-3">
                  <span className="font-[family-name:var(--font-display)] text-[15px] font-bold text-[var(--color-ink)]">
                    {item.title}
                  </span>
                  <span className="shrink-0 rounded-full bg-[var(--color-accent-soft)] px-2.5 py-1 text-[11px] font-semibold text-[var(--color-accent-strong)]">
                    {item.tag}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
