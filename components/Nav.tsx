'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { List, X, ArrowUpRight } from '@phosphor-icons/react';
import { brand, cta, navLinks } from '@/lib/content';

// Small roofline mark: an accent roof inside an ink tile. On-theme and geometric,
// so it reads without a hand-drawn logo.
function Mark() {
  return (
    <span className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--color-ink)]">
      <span className="h-0 w-0 border-x-[7px] border-b-[8px] border-x-transparent border-b-[var(--color-accent)]" />
    </span>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const sentinel = useRef<HTMLDivElement>(null);

  // Toggle the "scrolled" (pill) state when a ~56px sentinel at the top of the
  // page leaves the viewport. IntersectionObserver instead of a scroll listener:
  // no per-frame work, and it self-corrects on load / hash jumps.
  useEffect(() => {
    const el = sentinel.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting), {
      threshold: 0,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Scroll-spy: highlight the nav link for whichever section sits in a thin band
  // just under the nav. Track the set of sections currently in the band and pick
  // the topmost one; when none are in the band (e.g. the hero) nothing is active.
  useEffect(() => {
    const order = navLinks.map((l) => l.href.slice(1));
    const sections = order
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;
    const visible = new Set<string>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) visible.add(e.target.id);
          else visible.delete(e.target.id);
        });
        const topmost = order.find((id) => visible.has(id));
        setActive(topmost ? '#' + topmost : null);
      },
      { rootMargin: '-80px 0px -70% 0px', threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinel} aria-hidden className="pointer-events-none absolute left-0 top-0 h-14 w-px" />

      <header
        className={`sticky top-0 z-50 transition-all duration-[400ms] ease-in-out ${
          scrolled ? 'px-4 pt-3' : 'px-0 pt-0'
        }`}
      >
        <div
          className={`mx-auto grid grid-cols-[1fr_auto_1fr] items-center transition-all duration-[400ms] ease-in-out ${
            scrolled
              ? 'h-[58px] max-w-[1160px] rounded-[20px] bg-white/90 px-5 shadow-[0_12px_34px_rgba(16,22,29,0.10)] ring-1 ring-white/50 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 sm:px-6'
              : 'h-[72px] max-w-[1440px] rounded-none bg-[var(--color-surface)] px-6 sm:px-10 lg:px-12'
          }`}
        >
          <Link
            href="#top"
            className="flex items-center gap-2.5 justify-self-start text-[var(--color-ink)]"
            aria-label={`${brand.full} home`}
          >
            <Mark />
            <span className="font-[family-name:var(--font-display)] text-[17px] font-extrabold tracking-[-0.03em]">
              {brand.name}
            </span>
          </Link>

          <nav className="hidden items-center gap-7 justify-self-center md:flex">
            {navLinks.map((l) => {
              const isActive = active === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={isActive ? 'true' : undefined}
                  style={isActive ? { backgroundSize: '100% 2px' } : undefined}
                  className={`link-underline text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-[var(--color-ink)]'
                      : 'text-[var(--color-body)] hover:text-[var(--color-ink)]'
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 justify-self-end">
            <Link
              href={cta.href}
              className="group hidden items-center gap-1.5 rounded-xl bg-[var(--color-ink)] px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/15 md:inline-flex"
            >
              {cta.label}
              <ArrowUpRight size={15} weight="bold" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <button
              className="grid h-10 w-10 place-items-center rounded-xl text-[var(--color-ink)] md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X size={24} /> : <List size={24} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="mx-4 mt-2 rounded-2xl border border-[var(--color-line)] bg-white p-2 shadow-[0_12px_34px_rgba(16,22,29,0.10)] md:hidden">
            {navLinks.map((l) => {
              const isActive = active === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`block rounded-xl px-4 py-3 text-base font-medium ${
                    isActive
                      ? 'bg-[var(--color-surface-alt)] text-[var(--color-ink)]'
                      : 'text-[var(--color-body)] hover:bg-[var(--color-surface-alt)] hover:text-[var(--color-ink)]'
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link
              href={cta.href}
              onClick={() => setOpen(false)}
              className="mt-1 block rounded-xl bg-[var(--color-ink)] px-4 py-3 text-center text-sm font-semibold text-white"
            >
              {cta.label}
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
