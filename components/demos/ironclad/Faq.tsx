'use client';

import { useState } from 'react';
import { Plus, Minus } from '@phosphor-icons/react';
import { DContainer, DSection, DHeading } from '../kit/primitives';
import { faq } from './content';

const display = 'font-[family-name:var(--d-font-display)]';
const mono = 'font-[family-name:var(--d-font-mono)]';

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <DSection id="faq" alt>
      <DContainer>
        <div className="max-w-2xl">
          <span className={`${mono} text-[13px] font-medium uppercase tracking-[0.14em] text-[color:var(--d-accent-strong)]`}>
            {faq.eyebrow}
          </span>
          <DHeading className="mt-4 text-3xl leading-tight sm:text-4xl">{faq.heading}</DHeading>
        </div>

        <div className="mx-auto mt-10 max-w-3xl border-t border-[var(--d-line)]">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="border-b border-[var(--d-line)]">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className={`${mono} text-[13px] font-semibold tracking-[0.06em] text-[color:var(--d-accent-strong)]`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className={`${display} flex-1 text-lg font-bold text-[color:var(--d-ink)]`}>{item.q}</span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-[var(--d-radius)] transition-colors ${
                      isOpen ? 'bg-[var(--d-accent)] text-white' : 'bg-[var(--d-surface)] text-[color:var(--d-ink)] ring-1 ring-[var(--d-line)]'
                    }`}
                  >
                    {isOpen ? <Minus size={16} weight="bold" /> : <Plus size={16} weight="bold" />}
                  </span>
                </button>
                <div className="grid overflow-hidden transition-all duration-300 ease-out" style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
                  <div className="min-h-0">
                    <p className="pb-6 pl-9 pr-10 text-[15px] leading-relaxed text-[color:var(--d-body)]">{item.a}</p>
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
