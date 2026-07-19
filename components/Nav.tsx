'use client';

import { useState } from 'react';
import Link from 'next/link';
import { List, X, ArrowRight } from '@phosphor-icons/react';
import { brand, cta, navLinks } from '@/lib/content';

// Small roofline mark: an amber roof inside an ink tile. On-theme and geometric,
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
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[var(--color-surface)]/85 backdrop-blur-md">
      <div className="mx-auto flex h-[68px] max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-12">
        <Link href="#top" className="flex items-center gap-2.5 text-[var(--color-ink)]" aria-label={`${brand.full} home`}>
          <Mark />
          <span className="font-[family-name:var(--font-display)] text-[17px] font-extrabold tracking-[-0.03em]">
            {brand.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="link-underline text-sm font-medium text-[var(--color-body)] transition-colors hover:text-[var(--color-ink)]"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={cta.href}
            className="group hidden items-center gap-2 rounded-full bg-[var(--color-ink)] px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/15 md:inline-flex"
          >
            {cta.label}
            <ArrowRight size={15} weight="bold" className="transition-transform group-hover:translate-x-0.5" />
          </Link>

          <button
            className="grid h-10 w-10 place-items-center rounded-lg text-[var(--color-ink)] md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[var(--color-line)] bg-[var(--color-surface)] md:hidden">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-1 px-6 py-4 sm:px-10">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-[var(--color-body)] hover:bg-white hover:text-[var(--color-ink)]"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href={cta.href}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-[var(--color-ink)] px-4 py-3 text-center text-sm font-semibold text-white"
            >
              {cta.label}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
