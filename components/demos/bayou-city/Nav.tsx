'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { List, X, Phone } from '@phosphor-icons/react';
import { DButton, DContainer } from '../kit/primitives';
import { brand, nav, hero } from './content';

const display = 'font-[family-name:var(--d-font-display)]';

export function Nav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const sentinel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sentinel.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setSolid(!e.isIntersecting), { threshold: 0 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const tel = `tel:${brand.phone.replace(/\D/g, '')}`;

  return (
    <>
      <div ref={sentinel} aria-hidden className="pointer-events-none absolute left-0 top-0 h-12 w-px" />
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          solid ? 'border-b border-[var(--d-line)] bg-[var(--d-bg)]/90 backdrop-blur-md' : 'border-b border-transparent'
        }`}
      >
        <DContainer>
          <div className="flex h-[68px] items-center justify-between">
            <Link href="#top" className={`${display} text-[24px] font-bold uppercase tracking-tight text-[color:var(--d-ink)]`}>
              {brand.name}<span className="text-[color:var(--d-accent)]">.</span>
            </Link>

            <nav className="hidden items-center gap-7 lg:flex">
              {nav.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm font-semibold text-[color:var(--d-body)] transition-colors hover:text-[color:var(--d-ink)]"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={tel}
                className="hidden items-center gap-1.5 text-sm font-bold text-[color:var(--d-ink)] sm:inline-flex"
              >
                <Phone size={15} weight="fill" className="text-[color:var(--d-accent)]" />
                {brand.phone}
              </a>
              <DButton href={hero.secondary.href} className="hidden lg:inline-flex">
                Free inspection
              </DButton>
              <button
                className="grid h-11 w-11 place-items-center rounded-[var(--d-radius)] text-[color:var(--d-ink)] lg:hidden"
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
              >
                {open ? <X size={24} /> : <List size={24} />}
              </button>
            </div>
          </div>
        </DContainer>

        {open && (
          <div className="border-t border-[var(--d-line)] bg-[var(--d-bg)] lg:hidden">
            <DContainer>
              <div className="flex flex-col gap-1 py-4">
                {nav.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-[var(--d-radius)] px-3 py-3 text-base font-semibold text-[color:var(--d-body)] hover:bg-[var(--d-bg-alt)]"
                  >
                    {l.label}
                  </Link>
                ))}
                <a
                  href={tel}
                  onClick={() => setOpen(false)}
                  className="mt-1 inline-flex items-center gap-2 rounded-[var(--d-radius)] px-3 py-3 text-base font-bold text-[color:var(--d-ink)]"
                >
                  <Phone size={17} weight="fill" className="text-[color:var(--d-accent)]" />
                  {brand.phone}
                </a>
                <DButton href={hero.secondary.href} className="mt-1 w-full">Free inspection</DButton>
              </div>
            </DContainer>
          </div>
        )}
      </header>
    </>
  );
}
