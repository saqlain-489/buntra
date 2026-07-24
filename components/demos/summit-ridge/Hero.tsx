'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { CaretDown } from '@phosphor-icons/react';
import { hero } from './content';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const pillPrimary =
  'inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#0c1128] shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-transform duration-200 hover:scale-105 active:scale-95';
const pillGhost =
  'inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-sm font-bold text-white transition duration-200 hover:scale-105 hover:bg-white/10 active:scale-95';

export function Hero() {
  const outer = useRef<HTMLElement>(null);
  const reveal = useRef<HTMLDivElement>(null);
  const revealImg = useRef<HTMLImageElement>(null);
  const caret = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // Layer B ships unclipped (good static fallback); the mask is applied only when scrubbing is on.
        gsap.set(reveal.current, { clipPath: 'circle(0% at 50% 50%)' });
        const tl = gsap.timeline({
          scrollTrigger: { trigger: outer.current, start: 'top top', end: 'bottom bottom', scrub: true },
        });
        tl.to(reveal.current, { clipPath: 'circle(150% at 50% 50%)', ease: 'none', duration: 1 }, 0)
          .fromTo(revealImg.current, { scale: 1 }, { scale: 1.15, ease: 'none', duration: 1 }, 0)
          .to(caret.current, { autoAlpha: 0, duration: 0.2 }, 0);
      });
      mm.add('(prefers-reduced-motion: reduce)', () => {
        // No pin, no scrub: collapse the tall track and show the revealed layer statically.
        gsap.set(outer.current, { height: 'auto' });
        gsap.set(caret.current, { display: 'none' });
      });
      return () => mm.revert();
    },
    { scope: outer }
  );

  return (
    <section id="top" ref={outer} className="relative h-[220vh] md:h-[300vh]">
      <div className="sticky top-0 h-svh overflow-hidden">
        {/* Layer A: the sketch */}
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={hero.outline.img} alt="" className="h-full w-full object-cover opacity-40 grayscale" />
          <div className="absolute inset-0 bg-[#0c1128]/75" />
          <div className="absolute inset-0 flex items-center justify-center px-4 pt-20 sm:px-6">
            <h1 className="max-w-4xl text-center text-4xl font-black leading-[1.1] tracking-tighter text-white sm:text-6xl md:text-7xl">
              {hero.outline.headline}
            </h1>
          </div>
          <div ref={caret} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70">
            <CaretDown size={28} className="animate-bounce motion-reduce:animate-none" />
          </div>
        </div>

        {/* Layer B: the reality, revealed by a scroll-driven circle mask */}
        <div ref={reveal} className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={revealImg}
            src={hero.reveal.img}
            alt="A neighborhood of finished rooftops at dusk"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1128] via-[#0c1128]/55 to-[#0c1128]/35" />
          <div className="absolute inset-0 flex items-center justify-center px-4 pt-20 sm:px-6">
            <div className="max-w-3xl text-center">
              <h2 className="text-4xl font-black leading-[1.1] tracking-tighter text-white sm:text-6xl md:text-7xl">
                {hero.reveal.headline}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base font-light leading-relaxed text-[color:var(--d-body)] sm:text-lg">
                {hero.reveal.sub}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href={hero.reveal.primary.href} className={pillPrimary}>
                  {hero.reveal.primary.label}
                </Link>
                <Link href={hero.reveal.secondary.href} className={pillGhost}>
                  {hero.reveal.secondary.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
