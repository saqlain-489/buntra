'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { List, X, Phone } from '@phosphor-icons/react';
import { DButton, DContainer } from '../kit/primitives';
import { brand, nav, hero } from './content';

const display = 'font-[family-name:var(--d-font-display)]';
const mono = 'font-[family-name:var(--d-font-mono)]';

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
            <Link href="#top" className={`${display} flex items-center gap-2 text-[22px] font-bold tracking-tight text-[color:var(--d-ink)]`}>
              <span aria-hidden className="inline-block h-4 w-4 rotate-45 border-2 border-[var(--d-accent)]" />
              {brand.name}
            </Link>

            <nav className="hidden items-center gap-8 lg:flex">
              {nav.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`${mono} text-[13px] font-medium uppercase tracking-[0.08em] text-[color:var(--d-body)] transition-colors hover:text-[color:var(--d-ink)]`}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={`tel:${brand.phone.replace(/\D/g, '')}`}
                className={`${mono} hidden items-center gap-1.5 text-[13px] font-medium text-[color:var(--d-ink)] sm:inline-flex`}
              >
                <Phone size={15} weight="fill" className="text-[color:var(--d-accent)]" />
                {brand.phone}
              </a>
              <DButton href={hero.primary.href} className="hidden lg:inline-flex">
                Roof assessment
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
                    className={`${mono} rounded-[var(--d-radius)] px-3 py-3 text-[15px] font-medium uppercase tracking-[0.06em] text-[color:var(--d-body)] hover:bg-[var(--d-bg-alt)]`}
                  >
                    {l.label}
                  </Link>
                ))}
                <DButton href={hero.primary.href} className="mt-2 w-full">Roof assessment</DButton>
              </div>
            </DContainer>
          </div>
        )}
      </header>
    </>
  );
}
