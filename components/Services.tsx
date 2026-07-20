'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from '@phosphor-icons/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Container, Section, Heading } from './primitives';
import { Reveal } from './Reveal';
import { services, cta } from '@/lib/content';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const display = 'font-[family-name:var(--font-display)]';
const slides = services.slides;
const screen = (seed: string) => `https://picsum.photos/seed/${seed}/620/1280?grayscale`;
const num = (i: number) => String(i + 1).padStart(2, '0');

function Phone({ seed, keyed, className = '' }: { seed: string; keyed?: number; className?: string }) {
  return (
    <div className={`relative aspect-[300/620] rounded-[2.6rem] bg-[var(--color-ink)] p-2.5 shadow-[0_40px_90px_rgba(16,22,29,0.28)] ${className}`}>
      <div className="relative h-full w-full overflow-hidden rounded-[2.05rem] bg-[var(--color-surface-alt)]">
        <span className="absolute left-1/2 top-2.5 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-[var(--color-ink)]" />
        <Image
          key={keyed}
          src={screen(seed)}
          alt=""
          fill
          sizes="300px"
          data-svcfade
          className="object-cover [animation:svcFade_.5s_ease_both]"
        />
      </div>
    </div>
  );
}

// Desktop: sticky phone, scroll drives the active slide, staggered text + giant number.
function Showcase() {
  const track = useRef<HTMLDivElement>(null);
  const phone = useRef<HTMLDivElement>(null);
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
    if (reduce.current || !phone.current) return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    phone.current.style.transform = `perspective(1000px) rotateY(${px * 10}deg) rotateX(${-py * 8}deg)`;
  };
  const onLeave = () => {
    if (phone.current) phone.current.style.transform = 'perspective(1000px) rotateY(0) rotateX(0)';
  };

  const goTo = (i: number) => {
    const t = track.current;
    if (!t) return;
    const top = t.getBoundingClientRect().top + window.scrollY;
    const target = top + ((i + 0.5) / slides.length) * (t.offsetHeight - window.innerHeight);
    window.scrollTo({ top: target, behavior: reduce.current ? 'auto' : 'smooth' });
  };

  const slide = slides[active];

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
          className={`${display} pointer-events-none absolute bottom-[-5vh] right-[1vw] text-[23vw] font-extrabold leading-none tracking-tight text-[var(--color-ink)]/[0.045] [animation:svcFade_.5s_ease_both]`}
        >
          {num(active)}
        </span>

        <Container className="relative">
          <div className="grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-center gap-16">
            <div className="flex justify-center [perspective:1000px]">
              <div
                ref={phone}
                className="aspect-[300/620] h-[min(520px,64vh)] transition-transform duration-300 ease-out will-change-transform"
              >
                <Phone seed={slide.seed} keyed={active} className="h-full w-full" />
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

        </Container>

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
          <div className="grid gap-7 sm:grid-cols-2 sm:items-center sm:gap-10">
            <div className="relative flex justify-center">
              <span
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,var(--color-accent),transparent_62%)] opacity-[0.12] blur-3xl"
              />
              <Phone seed={s.seed} className="relative w-[230px]" />
            </div>
            <div>
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
