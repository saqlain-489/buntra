import { ShieldCheck, Star, MagnifyingGlass, Certificate, Clock } from '@phosphor-icons/react/dist/ssr';
import { DContainer } from '../kit/primitives';
import { Reveal } from '../kit/Reveal';
import { trustBar } from './content';

const icons = { ShieldCheck, Star, MagnifyingGlass, Certificate, Clock } as const;

export function TrustBar() {
  return (
    <section className="border-y border-[var(--d-line)] bg-[var(--d-bg-alt)] py-6">
      <DContainer>
        <Reveal variant="up">
          <div className="flex flex-col items-center gap-5 md:flex-row md:justify-between md:gap-6">
            <div className="grid w-full grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-3 md:flex md:flex-1 md:flex-wrap md:justify-start md:gap-x-7">
              {trustBar.items.map((item) => {
                const Icon = icons[item.icon as keyof typeof icons];
                return (
                  <div key={item.label} className="flex items-center gap-2 text-sm font-semibold text-[color:var(--d-ink)]">
                    <Icon size={18} weight="duotone" className="shrink-0 text-[color:var(--d-accent)]" />
                    {item.label}
                  </div>
                );
              })}
            </div>
            <p className="shrink-0 text-center text-xs font-medium text-[color:var(--d-muted)] md:text-right">
              {trustBar.note}
            </p>
          </div>
        </Reveal>
      </DContainer>
    </section>
  );
}
