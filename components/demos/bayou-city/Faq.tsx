'use client';

import { useState } from 'react';
import { Plus, Minus } from '@phosphor-icons/react';
import { Container, SectionHead, display } from './ui';
import { faq } from './content';

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-white py-20 md:py-28">
      <Container>
        <SectionHead badge={faq.badge} heading={faq.heading} />

        <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-3">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="rounded-2xl border border-[var(--d-line)] bg-white shadow-sm">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex min-h-11 w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className={`${display} text-[16px] font-semibold leading-snug text-[color:var(--d-ink)]`}>{item.q}</span>
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition-colors ${
                      isOpen ? 'bg-[var(--d-primary)] text-white' : 'bg-[var(--d-accent-soft)] text-[color:var(--d-ink)]'
                    }`}
                  >
                    {isOpen ? <Minus size={15} weight="bold" /> : <Plus size={15} weight="bold" />}
                  </span>
                </button>
                <div className="grid overflow-hidden transition-all duration-300 ease-out" style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
                  <div className="min-h-0">
                    <p className="px-6 pb-6 pr-12 text-[15px] leading-relaxed text-[color:var(--d-body)]">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
