'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { showcase, type Project } from '@/lib/showcase';

gsap.registerPlugin(useGSAP);

function Card({ p }: { p: Project }) {
  return (
    <div className="group/card overflow-hidden rounded-2xl bg-white ring-1 ring-[var(--color-line)] shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10 hover:ring-[var(--color-accent)]/30">
      <div className="relative aspect-[4/3] overflow-hidden">
        {/* TODO: replace with real finished-site screenshots */}
        <Image
          src={`https://picsum.photos/seed/${p.seed}/640/480`}
          alt={`${p.name} website`}
          fill
          sizes="320px"
          className="object-cover transition duration-700 ease-out group-hover/card:scale-[1.06]"
        />
      </div>
      <div className="flex items-center justify-between gap-2 px-4 py-3">
        <span className="truncate text-sm font-semibold text-[var(--color-ink)]">{p.name}</span>
        <span className="shrink-0 rounded-full bg-[var(--color-accent-soft)] px-2.5 py-1 text-[11px] font-semibold text-[var(--color-accent)]">
          {p.tag}
        </span>
      </div>
    </div>
  );
}

const colStyle =
  'flex flex-col gap-5 [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]';

export function HeroShowcase() {
  const scope = useRef<HTMLDivElement>(null);
  const colA = useRef<HTMLDivElement>(null);
  const colB = useRef<HTMLDivElement>(null);
  const tweens = useRef<gsap.core.Tween[]>([]);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const loop = (el: HTMLDivElement | null, up: boolean) => {
          if (!el) return null;
          const dist = el.scrollHeight / 2; // height of one (duplicated) set
          return gsap.fromTo(
            el,
            { y: up ? 0 : -dist },
            { y: up ? -dist : 0, duration: 30, ease: 'none', repeat: -1 }
          );
        };
        const tA = loop(colA.current, true);
        const tB = loop(colB.current, false);
        tweens.current = [tA, tB].filter(Boolean) as gsap.core.Tween[];
        return () => tweens.current.forEach((t) => t.kill());
      });
      return () => mm.revert();
    },
    { scope }
  );

  const pause = () => tweens.current.forEach((t) => t.timeScale(0.15));
  const resume = () => tweens.current.forEach((t) => t.timeScale(1));

  // Two visually distinct orderings so the columns don't mirror each other.
  const listA = [...showcase, ...showcase];
  const listB = [...showcase.slice(2), ...showcase.slice(0, 2)];
  const listBFull = [...listB, ...listB];

  return (
    <div
      ref={scope}
      onMouseEnter={pause}
      onMouseLeave={resume}
      className="relative hidden h-[560px] grid-cols-2 gap-5 overflow-hidden lg:grid"
      aria-hidden
    >
      <div ref={colA} className={colStyle}>
        {listA.map((p, i) => (
          <Card key={`a-${p.seed}-${i}`} p={p} />
        ))}
      </div>
      <div ref={colB} className={`${colStyle} mt-[-60px]`}>
        {listBFull.map((p, i) => (
          <Card key={`b-${p.seed}-${i}`} p={p} />
        ))}
      </div>
    </div>
  );
}
