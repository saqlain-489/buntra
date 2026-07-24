'use client';

import { useState } from 'react';
import Link from 'next/link';
import { List, X, Phone, Hexagon } from '@phosphor-icons/react';
import { Container, display, pillOutline } from './ui';
import { brand, nav } from './content';

export function Nav() {
  const [open, setOpen] = useState(false);
  const tel = `tel:${brand.phone.replace(/\D/g, '')}`;

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--d-line)] bg-white/90 backdrop-blur-md">
      <Container>
        <div className="flex h-[72px] items-center justify-between">
          <Link href="#top" className={`${display} inline-flex items-center gap-2 text-[20px] font-bold tracking-tight text-[color:var(--d-ink)]`}>
            <Hexagon size={26} weight="fill" className="text-[color:var(--d-accent)]" />
            {brand.name}
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="py-3 text-sm font-medium text-[color:var(--d-body)] transition-colors hover:text-[color:var(--d-ink)]"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href={tel} className="hidden items-center gap-1.5 py-3 text-sm font-semibold text-[color:var(--d-ink)] sm:inline-flex">
              <Phone size={15} weight="fill" className="text-[color:var(--d-accent)]" />
              {brand.phone}
            </a>
            <Link href="#contact" className={`${pillOutline} hidden px-6 lg:inline-flex`}>
              Get in touch
            </Link>
            <button
              className="grid h-11 w-11 place-items-center rounded-full text-[color:var(--d-ink)] lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X size={24} /> : <List size={24} />}
            </button>
          </div>
        </div>
      </Container>

      {open && (
        <div className="border-t border-[var(--d-line)] bg-white lg:hidden">
          <Container>
            <div className="flex flex-col gap-1 py-4">
              {nav.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-base font-semibold text-[color:var(--d-body)] hover:bg-[var(--d-accent-soft)]"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={tel}
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 rounded-xl px-3 py-3 text-base font-bold text-[color:var(--d-ink)]"
              >
                <Phone size={17} weight="fill" className="text-[color:var(--d-accent)]" />
                {brand.phone}
              </a>
              <Link href="#contact" onClick={() => setOpen(false)} className={`${pillOutline} mt-1 w-full`}>
                Get in touch
              </Link>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
