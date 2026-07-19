'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from '@phosphor-icons/react';
import { brand, cta, hero } from '@/lib/content';
import { showcase } from '@/lib/showcase';

const display = 'font-[family-name:var(--font-display)]';

function MiniWindow({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-[18px] shadow-[0_20px_50px_rgba(27,24,20,0.13)] ${className}`}>
      {children}
    </div>
  );
}

function ShowcaseCard({ index }: { index: number }) {
  if (index === 0) {
    return (
      <MiniWindow className="aspect-[20/13] bg-[var(--color-surface)] p-5 text-[var(--color-ink)]">
        <div className="flex items-start justify-between">
          <span className="rounded-full border border-[var(--color-line)] bg-[var(--color-accent-soft)] px-2.5 py-1 text-[10px] font-semibold tracking-wide text-[var(--color-accent-strong)]">
            {showcase[0].tag}
          </span>
          <span className="text-[11px] text-[var(--color-muted)]">01 / 05</span>
        </div>
        <p className={`${display} mt-7 max-w-[13ch] text-[clamp(1.25rem,2.3vw,1.9rem)] font-extrabold leading-[0.96] tracking-[-0.03em]`}>
          Storm-ready,<br />booked in minutes.
        </p>
        <div className="mt-5 h-px bg-[var(--color-line)]" />
        <p className="mt-2 text-[9px] font-medium uppercase tracking-[0.16em] text-[var(--color-muted)]">{showcase[0].name}</p>
      </MiniWindow>
    );
  }

  if (index === 1) {
    return (
      <MiniWindow className="relative aspect-[20/13] bg-[var(--color-ink)] p-5 text-white">
        <div className="absolute right-[-5px] top-1/2 h-32 w-32 -translate-y-1/2 opacity-80 [background-image:radial-gradient(#0284c7_1.6px,transparent_1.7px)] [background-size:12px_12px]" />
        <span className="relative inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
          <i className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] shadow-[0_0_12px_var(--color-accent)]" /> Click-to-call ready
        </span>
        <p className="relative mt-6 max-w-[15ch] text-[clamp(1rem,1.8vw,1.5rem)] font-medium leading-[1.08] tracking-[-0.03em]">
          One tap and the phone rings.
        </p>
      </MiniWindow>
    );
  }

  if (index === 2) {
    return (
      <MiniWindow className="aspect-[20/13] bg-[var(--color-surface-alt)]">
        <div className="relative h-[62%] overflow-hidden bg-[var(--color-line)]">
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(15,15,15,.12),rgba(255,255,255,.18)),url('https://picsum.photos/seed/buntra-proj-ironclad/900/700')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
        <div className="p-3.5 text-[var(--color-ink)]">
          <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-[var(--color-accent-strong)]">{showcase[2].tag}</p>
          <p className={`${display} mt-1 text-[clamp(1.1rem,2vw,1.8rem)] font-extrabold leading-[.98] tracking-[-.03em]`}>Built to rank in your city.</p>
        </div>
      </MiniWindow>
    );
  }

  if (index === 3) {
    return (
      <MiniWindow className="aspect-[20/13] border border-[var(--color-ink)]/20 bg-[var(--color-ink)] font-mono text-[11px] leading-6 text-zinc-300">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
          <i className="h-2 w-2 rounded-full bg-[#ff6257]" /><i className="h-2 w-2 rounded-full bg-[#f7c84a]" /><i className="h-2 w-2 rounded-full bg-[#57c75a]" />
          <span className="ml-3 text-[10px] text-zinc-500">quote-form.tsx</span>
        </div>
        <pre className="overflow-hidden p-3.5 text-[9px] leading-[1.55]">{`1  `}<span className="text-[#c084fc]">export default</span>{` function `}<span className="text-[#60a5fa]">QuoteForm</span>{`() {\n2    `}<span className="text-[#c084fc]">return</span>{` (\n3      `}<span className="text-[#94d7a2]">&lt;form</span>{` action=`}<span className="text-[#f6c56b]">\"/lead\"</span><span className="text-[#94d7a2]">&gt;</span>{`\n4        `}<span className="text-[#94d7a2]">&lt;Input</span>{` name=`}<span className="text-[#f6c56b]">\"phone\"</span>{` /`}<span className="text-[#94d7a2]">&gt;</span>{`\n5        `}<span className="text-[#94d7a2]">&lt;Button&gt;</span>{`Get my free mockup`}<span className="text-[#94d7a2]">&lt;/Button&gt;</span>{`\n6      `}<span className="text-[#94d7a2]">&lt;/form&gt;</span>{`\n7    )\n8  }`}</pre>
      </MiniWindow>
    );
  }

  return (
      <MiniWindow className="aspect-[20/13] bg-white p-5 text-[var(--color-ink)]">
        <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--color-muted)]">
          <span>{brand.name}</span><span>2026</span>
        </div>
        <p className={`${display} mt-6 max-w-[13ch] text-[clamp(1.1rem,2vw,1.8rem)] font-extrabold leading-[0.98] tracking-[-0.03em]`}>
          Websites built to make the phone ring.
        </p>
        <div className="mt-5 flex items-center gap-2 text-[9px] font-semibold text-[var(--color-body)]"><span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" /> Storm / Insurance / Local SEO</div>
      </MiniWindow>
  );
}

const showcaseCount = 5;

function CurvedShowcase() {
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);
  const dragging = useRef(false);
  const reducedMotion = useRef(false);
  const lastPoint = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    let frame = 0;
    let last = performance.now();
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncMotionPreference = () => {
      reducedMotion.current = motionQuery.matches;
    };
    syncMotionPreference();
    motionQuery.addEventListener('change', syncMotionPreference);
    const tick = (now: number) => {
      const elapsed = now - last;
      last = now;
      if (!dragging.current && !reducedMotion.current) {
        progressRef.current = (progressRef.current + elapsed * 0.000045) % 1;
        setProgress(progressRef.current);
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      motionQuery.removeEventListener('change', syncMotionPreference);
    };
  }, []);

  const stopDrag = () => {
    lastPoint.current = null;
    dragging.current = false;
  };

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    lastPoint.current = { x: event.clientX, y: event.clientY };
    dragging.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!lastPoint.current) return;
    const deltaX = event.clientX - lastPoint.current.x;
    const deltaY = event.clientY - lastPoint.current.y;
    // The vertical component keeps the orbit feeling natural on touch devices;
    // the horizontal component is the primary next/previous scrub control.
    progressRef.current = (progressRef.current + 0.0008 * (deltaY + deltaX * 0.25) + 1) % 1;
    setProgress(progressRef.current);
    lastPoint.current = { x: event.clientX, y: event.clientY };
  };

  return (
    <aside aria-label="Examples of roofing websites built by Buntra" className="relative hidden h-[620px] select-none lg:block xl:h-[680px]">
      <div
        className="relative h-full w-full touch-pan-y cursor-grab [perspective:3400px] active:cursor-grabbing"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={stopDrag}
        onPointerCancel={stopDrag}
        role="region"
        aria-label="Draggable preview carousel. Drag or use the arrow keys to browse previews."
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
          const direction = event.key === 'ArrowLeft' ? -1 : 1;
          progressRef.current = (progressRef.current + direction / showcaseCount + 1) % 1;
          setProgress(progressRef.current);
        }}
      >
        <div className="absolute inset-0 [transform:rotateX(3deg)_rotateY(-4deg)] [transform-style:preserve-3d]">
          {Array.from({ length: showcaseCount }, (_, index) => {
            const loopPosition = (index / showcaseCount + progress) % 1;
            const isVisible = loopPosition > 0 && loopPosition < 0.72;
            const pathProgress = isVisible ? loopPosition / 0.72 : 0;
            const fade = Math.min(
              Math.min(1, Math.max(0, pathProgress / 0.06)),
              Math.min(1, Math.max(0, (1 - pathProgress) / 0.08))
            );
            const depth = isVisible
              ? Math.sin((pathProgress < 0.423 ? pathProgress / 0.846 : 0.5 + (pathProgress - 0.423) / 1.154) * Math.PI)
              : 0;
            let x = -10;
            let y = -300;
            if (pathProgress < 0.423) {
              y = -300 + (pathProgress / 0.423) * 280;
            } else if (pathProgress < 0.637) {
              const angle = (180 + ((pathProgress - 0.423) / 0.214) * 90) * (Math.PI / 180);
              x = 80 + 90 * Math.cos(angle);
              y = -20 - 90 * Math.sin(angle);
            } else {
              x = 80 + ((pathProgress - 0.637) / 0.363) * 240;
              y = 70;
            }

            return (
              <div
                key={index}
                className="absolute left-1/2 top-1/2 w-[47%]"
                suppressHydrationWarning
                style={{
                  zIndex: Math.round(20 + 80 * depth),
                  opacity: isVisible ? fade * (0.4 + 0.6 * depth) : 0,
                  pointerEvents: depth > 0.72 ? 'auto' : 'none',
                  transform: `translate3d(calc(-50% + ${x}%), calc(-50% + ${y}%), ${-1000 + 1280 * depth}px) rotateX(${4 - 2 * depth}deg) rotateY(${-3 + 6 * pathProgress}deg) scale(${0.44 + 0.74 * depth})`,
                }}
              >
                <ShowcaseCard index={index} />
              </div>
            );
          })}
        </div>
        <span className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-[var(--color-line)] bg-[var(--color-surface)]/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)] opacity-0 backdrop-blur transition-opacity duration-300 hover:opacity-100 focus-within:opacity-100 xl:bottom-8">
          Drag to explore
        </span>
      </div>
    </aside>
  );
}

export function Hero() {
  return (
    <section id="top" className="overflow-hidden bg-[var(--color-surface)]">
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-6 pb-16 pt-12 sm:px-10 md:pt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-12 lg:px-12 lg:pb-20">
        <div className="max-w-[700px]">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-line)] bg-[var(--color-accent-soft)] px-3 py-1.5 text-xs font-semibold text-[var(--color-accent-strong)]">
            {hero.eyebrow}
          </span>

          <h1 className={`${display} mt-8 max-w-[16ch] text-[clamp(2.6rem,5.5vw,4.6rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-[var(--color-ink)]`}>
            {hero.headline[0]}<br /><span className="accent-underline">{hero.headline[1]}</span>
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-7 text-[var(--color-body)] sm:text-base">
            {hero.sub}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href={cta.href} className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-ink)] px-6 py-3.5 text-[15px] font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/15">
              {cta.label} <ArrowRight size={16} weight="bold" className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link href="#process" className="group inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--color-line)] bg-white px-6 py-3.5 text-[15px] font-semibold text-[var(--color-ink)] transition hover:-translate-y-0.5 hover:border-[var(--color-ink)]/40 hover:shadow-md hover:shadow-stone-900/5">
              See how it works <ArrowRight size={16} weight="bold" className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
          <p className="mt-4 text-xs font-medium text-[var(--color-muted)]">Live in 7 days &middot; $0 due until you approve the design</p>
        </div>

        <CurvedShowcase />
      </div>
    </section>
  );
}
