'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { List, X, Phone } from '@phosphor-icons/react';
import { brand, nav } from './content';

const pill =
  'inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#0c1128] shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-transform duration-200 hover:scale-105 active:scale-95';

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    // Sticky (not fixed) so it clears the honesty banner at the top, then pins 24px below the viewport edge.
    <header className="sticky top-6 z-50 px-4">
      <div
        className={`mx-auto max-w-5xl border border-white/10 backdrop-blur-xl transition-all duration-300 ${
          open ? 'rounded-3xl' : 'rounded-full'
        } ${scrolled ? 'bg-[#0c1128]/85' : 'bg-white/5'}`}
      >
        <div className="flex h-16 items-center justify-between pl-6 pr-3">
          <Link href="#top" className="text-lg font-extrabold tracking-tight text-white">
            {brand.name}<span className="text-[color:var(--d-accent)]">.</span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="py-3 text-sm font-medium text-[color:var(--d-body)] transition-colors hover:text-white"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${brand.phone.replace(/\D/g, '')}`}
              className="hidden items-center gap-1.5 px-2 py-3 text-sm font-semibold text-white md:inline-flex"
            >
              <Phone size={15} weight="fill" className="text-[color:var(--d-accent)]" />
              {brand.phone}
            </a>
            <Link href="#contact" className={`hidden lg:inline-flex ${pill}`}>
              Free estimate
            </Link>
            <button
              className="grid h-11 w-11 place-items-center rounded-full text-white lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X size={22} /> : <List size={22} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-white/10 px-4 pb-4 pt-2 lg:hidden">
            <div className="flex flex-col gap-1">
              {nav.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-3 py-3 text-base font-semibold text-white hover:bg-white/5"
                >
                  {l.label}
                </Link>
              ))}
              <Link href="#contact" onClick={() => setOpen(false)} className={`${pill} mt-2 w-full py-3.5`}>
                Free estimate
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
