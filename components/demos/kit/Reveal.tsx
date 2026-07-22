'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Variant = 'up' | 'clip' | 'right' | 'left' | 'scale' | 'blur';

const froms: Record<Variant, gsap.TweenVars> = {
  up: { opacity: 0, y: 40 },
  clip: { opacity: 0, clipPath: 'inset(0 0 100% 0)', y: 24 },
  right: { opacity: 0, x: -48 },
  left: { opacity: 0, x: 48 },
  scale: { opacity: 0, scale: 0.92 },
  blur: { opacity: 0, y: 28, filter: 'blur(12px)' },
};

// Scroll wrapper for demo sites. Plays on enter and REVERSES on scroll-back-up,
// so sections re-animate as you move through them (in + out). Pass once to lock it.
// Honors reduced motion (no-op).
export function Reveal({
  children,
  delay = 0,
  variant = 'up',
  once = false,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  variant?: Variant;
  once?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from(ref.current, {
          ...froms[variant],
          duration: 0.85,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 88%',
            ...(once ? { once: true } : { toggleActions: 'play none none reverse' }),
          },
        });
      });
      return () => mm.revert();
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
