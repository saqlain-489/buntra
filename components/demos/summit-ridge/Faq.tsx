'use client';

import { useState } from 'react';
import { Plus, Minus } from '@phosphor-icons/react';
import { DContainer, DSection } from '../kit/primitives';
import { faq } from './content';

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <DSection id="faq" alt>
      <DContainer>
        <h2 className="max-w-2xl text-3xl font-black leading-[1.1] tracking-tighter text-white sm:text-5xl">
          {faq.heading}
        </h2>

        <div className="mx-auto mt-10 max-w-3xl divide-y divide-white/10 border-y border-white/10">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex min-h-[44px] w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold tracking-tight text-white sm:text-lg">{item.q}</span>
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-colors ${
                      isOpen ? 'border-white bg-white text-[#0c1128]' : 'border-white/20 text-white'
                    }`}
                  >
                    {isOpen ? <Minus size={15} weight="bold" /> : <Plus size={15} weight="bold" />}
                  </span>
                </button>
                <div
                  className="grid overflow-hidden transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="min-h-0">
                    <p className="pb-6 pr-10 text-[15px] font-light leading-relaxed text-[color:var(--d-body)]">
                      {item.a}
                    </p>
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
