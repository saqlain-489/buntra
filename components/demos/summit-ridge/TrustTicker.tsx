import { ShieldCheck, SealCheck, Medal, Star, Certificate, CloudLightning } from '@phosphor-icons/react/dist/ssr';
import { Marquee } from '../kit/Marquee';
import { ticker } from './content';

const icons = { ShieldCheck, SealCheck, Medal, Star, Certificate, CloudLightning } as const;

export function TrustTicker() {
  return (
    <section aria-label="Trust signals" className="bg-[var(--d-bg)] py-12">
      <p className="px-4 text-center text-xs font-bold uppercase tracking-widest text-[color:var(--d-muted)]">
        {ticker.heading}
      </p>
      <div className="relative mt-7">
        <span aria-hidden className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0c1128] to-transparent" />
        <span aria-hidden className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0c1128] to-transparent" />
        <Marquee speed={36}>
          {ticker.items.map((t) => {
            const Icon = icons[t.icon as keyof typeof icons];
            return (
              <span
                key={t.label}
                className="mx-7 inline-flex items-center gap-2.5 whitespace-nowrap text-sm font-medium text-[color:var(--d-body)]"
              >
                <Icon size={17} weight="duotone" className="text-[color:var(--d-accent)]" />
                {t.label}
              </span>
            );
          })}
        </Marquee>
      </div>
    </section>
  );
}
