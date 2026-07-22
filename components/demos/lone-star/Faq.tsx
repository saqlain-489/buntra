'use client';

import { useState } from 'react';
import { Plus, Minus } from '@phosphor-icons/react';
import { DContainer, DSection, DHeading, DEyebrow } from '../kit/primitives';
import { faq } from './content';

const display = 'font-[family-name:var(--d-font-display)]';

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <DSection id="faq" alt>
      <DContainer>
        <div className="max-w-2xl">
          <DEyebrow>{faq.eyebrow}</DEyebrow>
          <DHeading className="mt-4 text-3xl leading-tight sm:text-4xl">{faq.heading}</DHeading>
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={`overflow-hidden rounded-[var(--d-radius)] bg-[var(--d-surface)] ring-1 transition-colors ${
                  isOpen ? 'ring-[var(--d-primary)]' : 'ring-[var(--d-line)]'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className={`${display} text-lg font-bold text-[color:var(--d-ink)]`}>{item.q}</span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors ${
                      isOpen ? 'bg-[var(--d-primary)] text-[color:var(--d-on-primary)]' : 'bg-[var(--d-accent-soft)] text-[color:var(--d-accent)]'
                    }`}
                  >
                    {isOpen ? <Minus size={16} weight="bold" /> : <Plus size={16} weight="bold" />}
                  </span>
                </button>
                <div className="grid overflow-hidden transition-all duration-300 ease-out" style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
                  <div className="min-h-0">
                    <p className="px-6 pb-6 text-[15px] leading-relaxed text-[color:var(--d-body)]">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </DContainer>
    </DSection>
  );
}
