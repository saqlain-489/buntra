'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from '@phosphor-icons/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Container, Section, Heading } from './primitives';
import { Reveal } from './Reveal';
import { services, cta } from '@/lib/content';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const display = 'font-[family-name:var(--font-display)]';
const slides = services.slides;
const num = (i: number) => String(i + 1).padStart(2, '0');

// macOS-style browser chrome: light bar with red/yellow/green traffic lights.
function BrowserBar({ compact = false }: { compact?: boolean }) {
  const bar = compact ? 'h-7 gap-1.5 px-3' : 'h-9 gap-2 px-4 sm:h-10';
  const dot = compact ? 'h-2 w-2' : 'h-2.5 w-2.5 sm:h-3 sm:w-3';
  return (
    <div className={`flex items-center border-b border-[var(--color-line)] bg-[var(--color-surface)] ${bar}`}>
      <span className={`${dot} rounded-full bg-[#ff5f57]`} />
      <span className={`${dot} rounded-full bg-[#febc2e]`} />
      <span className={`${dot} rounded-full bg-[#28c840]`} />
    </div>
  );
}

function Shot({ src, keyed, className = '' }: { src: string; keyed?: number; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-[var(--color-surface-alt)] shadow-[0_40px_90px_rgba(16,22,29,0.2)] ring-1 ring-[var(--color-line)] ${className}`}>
      <BrowserBar />
      {/* full image, natural aspect, original file (no crop, no recompression) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img key={keyed} src={src} alt="" data-svcfade className="block h-auto w-full [animation:svcFade_.5s_ease_both]" />
    </div>
  );
}

// Before/after: dated site (small, desaturated) → azure arrow → modern site (larger).
// Arrow + labels are drawn here so they stay crisp regardless of the source images.
function Compare({ before, after, keyed }: { before: string; after: string; keyed?: number }) {
  return (
    <div key={keyed} data-svcfade className="flex items-center gap-2 [animation:svcFade_.5s_ease_both] sm:gap-4">
      <figure className="relative w-[26%] shrink-0">
        <span className="absolute left-2 top-2 z-10 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[var(--color-muted)] shadow-sm">
          Before
        </span>
        <div className="overflow-hidden rounded-xl bg-[var(--color-surface-alt)] opacity-90 shadow-md ring-1 ring-[var(--color-line)] grayscale">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={before} alt="Dated website before redesign" className="block h-auto w-full" />
        </div>
      </figure>

      <span className="shrink-0 text-[var(--color-accent)]">
        <ArrowRight size={30} weight="bold" />
      </span>

      <figure className="relative flex-1">
        <span className="absolute bottom-2 left-2 z-10 rounded-full bg-[var(--color-accent)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm">
          After
        </span>
        <div className="overflow-hidden rounded-2xl bg-[var(--color-surface-alt)] shadow-[0_30px_70px_rgba(16,22,29,0.22)] ring-1 ring-[var(--color-line)]">
          <BrowserBar compact />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={after} alt="Modern website after redesign" className="block h-auto w-full" />
        </div>
      </figure>
    </div>
  );
}

// Desktop: sticky phone, scroll drives the active slide, staggered text + giant number.
function Showcase() {
  const track = useRef<HTMLDivElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const idxRef = useRef(0);
  const reduce = useRef(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    reduce.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  useGSAP(
    () => {
      const st = ScrollTrigger.create({
        trigger: track.current,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
          const i = Math.min(slides.length - 1, Math.floor(self.progress * slides.length));
          if (i !== idxRef.current) {
            idxRef.current = i;
            setActive(i);
          }
        },
      });
      return () => st.kill();
    },
    { scope: track }
  );

  // 3D tilt tied to cursor (no re-render; writes transform directly).
  const onMove = (e: React.PointerEvent) => {
    if (reduce.current || !panel.current) return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    panel.current.style.transform = `perspective(1200px) rotateY(${px * 6}deg) rotateX(${-py * 5}deg)`;
  };
  const onLeave = () => {
    if (panel.current) panel.current.style.transform = 'perspective(1200px) rotateY(0) rotateX(0)';
  };

  const goTo = (i: number) => {
    const t = track.current;
    if (!t) return;
    const top = t.getBoundingClientRect().top + window.scrollY;
    const target = top + ((i + 0.5) / slides.length) * (t.offsetHeight - window.innerHeight);
    window.scrollTo({ top: target, behavior: reduce.current ? 'auto' : 'smooth' });
  };

  const slide = slides[active];
  // The before/after slide needs more room than a single screenshot, so it gets a
  // wider preview and a slight left nudge; single-image slides keep their size.
  const isCompare = Boolean(slide.before && slide.after);

  return (
    <div ref={track} className="relative hidden lg:block" style={{ height: `${slides.length * 80}vh` }}>
      <div
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        className="sticky top-0 flex h-screen items-center overflow-hidden pt-[76px]"
      >
        {/* ambient azure glow behind the phone */}
        <span
          aria-hidden
          className="pointer-events-none absolute left-[6%] top-1/2 h-[460px] w-[460px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,var(--color-accent),transparent_60%)] opacity-[0.14] blur-3xl"
        />
        {/* giant number */}
        <span
          key={`n${active}`}
          aria-hidden
          data-svcfade
          className={`${display} pointer-events-none absolute bottom-[-5vh] right-[1vw] text-[18.4vw] font-extrabold leading-none tracking-tight text-[var(--color-ink)]/[0.045] [animation:svcFade_.5s_ease_both]`}
        >
          {num(active)}
        </span>

        <div className="relative mx-auto w-full max-w-[1340px] px-6 sm:px-10">
          <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] items-center gap-10 xl:gap-14">
            <div className="[perspective:1200px]">
              <div
                ref={panel}
                className={`w-full transition-transform duration-300 ease-out will-change-transform ${
                  isCompare ? 'max-w-[680px] lg:-ml-6' : 'max-w-[580px]'
                }`}
              >
                {isCompare ? (
                  <Compare before={slide.before!} after={slide.after!} keyed={active} />
                ) : (
                  <Shot src={slide.image} keyed={active} />
                )}
              </div>
            </div>

            <div key={`t${active}`} className="max-w-xl">
              <span
                data-svctext
                className="mb-6 block h-1 w-10 rounded-full bg-[var(--color-accent)] [animation:svcText_.6s_cubic-bezier(.16,1,.3,1)_both]"
              />
              <h3
                data-svctext
                style={{ animationDelay: '.06s' }}
                className={`${display} text-3xl font-bold leading-[1.08] tracking-tight text-[var(--color-ink)] [animation:svcText_.6s_cubic-bezier(.16,1,.3,1)_both] sm:text-4xl md:text-[2.6rem]`}
              >
                {slide.title}
              </h3>
              <p
                data-svctext
                style={{ animationDelay: '.16s' }}
                className="mt-5 max-w-md text-lg leading-relaxed text-[var(--color-body)] [animation:svcText_.6s_cubic-bezier(.16,1,.3,1)_both]"
              >
                {slide.desc}
              </p>
              <Link
                href={cta.href}
                data-svctext
                style={{ animationDelay: '.26s' }}
                className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-[var(--color-ink)] px-6 py-3.5 text-[15px] font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/15 [animation:svcText_.6s_cubic-bezier(.16,1,.3,1)_both]"
              >
                {cta.label}
                <ArrowUpRight size={16} weight="bold" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* pagination dots */}
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to ${slides[i].title}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? 'w-7 bg-[var(--color-accent)]' : 'w-2 bg-[var(--color-line)] hover:bg-[var(--color-muted)]'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Below lg: clean stacked slides (no pinning), each revealed on scroll.
function Stacked() {
  return (
    <div className="mt-12 space-y-16 lg:hidden">
      {slides.map((s, i) => (
        <Reveal key={s.title}>
          <div>
            {s.before && s.after ? (
              <Compare before={s.before} after={s.after} />
            ) : (
              <Shot src={s.image} />
            )}
            <div className="mt-6">
              <span className="mb-4 block h-1 w-10 rounded-full bg-[var(--color-accent)]" />
              <span className={`${display} text-sm font-bold text-[var(--color-accent-strong)]`}>{num(i)}</span>
              <h3 className={`${display} mt-2 text-3xl font-bold leading-[1.08] tracking-tight text-[var(--color-ink)]`}>
                {s.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-body)]">{s.desc}</p>
            </div>
          </div>
        </Reveal>
      ))}
      <div className="flex justify-center pt-2">
        <Link
          href={cta.href}
          className="group inline-flex items-center gap-2 rounded-xl bg-[var(--color-ink)] px-6 py-3.5 text-[15px] font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/15"
        >
          {cta.label}
          <ArrowUpRight size={16} weight="bold" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
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
      </Container>
      <Showcase />
      <Stacked />
    </Section>
  );
}
