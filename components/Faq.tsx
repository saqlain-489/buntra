'use client';

import { useState } from 'react';
import { Plus, Minus } from '@phosphor-icons/react';
import { Container, Section, Heading } from './primitives';
import { faq } from '@/lib/content';

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq">
      <Container>
        <Heading className="max-w-2xl text-3xl leading-[1.1] sm:text-4xl">{faq.heading}</Heading>
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-ink)]">
                    {item.q}
                  </span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors ${
                      isOpen
                        ? 'bg-[var(--color-ink)] text-white'
                        : 'bg-[var(--color-surface-alt)] text-[var(--color-ink)]'
                    }`}
                  >
                    {isOpen ? <Minus size={16} weight="bold" /> : <Plus size={16} weight="bold" />}
                  </span>
                </button>
                <div
                  className="grid overflow-hidden transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="min-h-0">
                    <p className="pb-6 pr-12 text-[15px] leading-relaxed text-[var(--color-body)]">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
