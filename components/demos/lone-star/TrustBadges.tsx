import { HouseLine, ShieldCheck, MapPin, SealCheck } from '@phosphor-icons/react/dist/ssr';
import { DContainer } from '../kit/primitives';
import { Reveal } from '../kit/Reveal';
import { trustBadges } from './content';

const icons = { HouseLine, ShieldCheck, MapPin, SealCheck } as const;

export function TrustBadges() {
  return (
    <section className="border-y border-[var(--d-line)] bg-[var(--d-bg-alt)] py-6">
      <DContainer>
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {trustBadges.map((b, i) => {
            const Icon = icons[b.icon as keyof typeof icons];
            return (
              <Reveal key={b.label} delay={i * 0.06} variant="up">
                <span className="group inline-flex items-center gap-2.5 rounded-full bg-[var(--d-surface)] px-4 py-2.5 ring-1 ring-[var(--d-line)] transition-all hover:-translate-y-0.5 hover:ring-[var(--d-primary)] hover:shadow-[0_10px_26px_rgba(31,45,71,0.08)]">
                  <Icon size={20} weight="duotone" className="text-[color:var(--d-accent)]" />
                  <span className="text-[13px] font-bold text-[color:var(--d-ink)]">{b.label}</span>
                </span>
              </Reveal>
            );
          })}
        </div>
      </DContainer>
    </section>
  );
}
