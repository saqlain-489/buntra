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

        <div className="mx-auto mt-10 max-w-3xl divide-y divide-[var(--d-line)] border-y border-[var(--d-line)]">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className={`${display} text-lg font-bold text-[color:var(--d-ink)]`}>{item.q}</span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors ${
                      isOpen ? 'bg-[var(--d-primary)] text-[color:var(--d-on-primary)]' : 'bg-[var(--d-bg)] text-[color:var(--d-ink)]'
                    }`}
                  >
                    {isOpen ? <Minus size={16} weight="bold" /> : <Plus size={16} weight="bold" />}
                  </span>
                </button>
                <div className="grid overflow-hidden transition-all duration-300 ease-out" style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
                  <div className="min-h-0">
                    <p className="pb-6 pr-10 text-[15px] leading-relaxed text-[color:var(--d-body)]">{item.a}</p>
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
