import Link from 'next/link';
import { Phone, Lightning } from '@phosphor-icons/react/dist/ssr';
import { DContainer } from '../kit/primitives';
import { Reveal } from '../kit/Reveal';
import { cta, brand } from './content';

const display = 'font-[family-name:var(--d-font-display)]';

export function Cta() {
  const tel = `tel:${brand.phone.replace(/\D/g, '')}`;
  return (
    <section id="estimate" className="bg-[var(--d-bg)] py-20 md:py-28">
      <DContainer>
        <Reveal variant="scale">
          <div className="relative overflow-hidden rounded-[var(--d-radius-lg)] bg-[var(--d-primary)] px-8 py-14 text-center md:px-16 md:py-20">
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_-20%,rgba(244,165,43,0.5),transparent_55%)] opacity-30"
            />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-[var(--d-radius)] bg-[var(--d-accent-2)] px-3 py-1.5 text-[12px] font-bold uppercase tracking-[0.14em] text-[color:var(--d-primary)]">
                <Lightning size={14} weight="fill" /> {brand.city}
              </span>
              <h2 className={`${display} mx-auto mt-5 max-w-2xl text-3xl font-bold uppercase leading-[1.02] text-white sm:text-4xl md:text-5xl`}>
                {cta.heading}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/75">{cta.sub}</p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={tel}
                  className="inline-flex items-center justify-center gap-2 rounded-[var(--d-radius)] bg-[var(--d-accent-2)] px-7 py-4 text-[15px] font-bold uppercase tracking-wide text-[color:var(--d-primary)] transition hover:-translate-y-0.5 hover:brightness-105"
                >
                  <Phone size={17} weight="fill" /> Call {brand.phone}
                </a>
                <Link
                  href={cta.primaryHref}
                  className="inline-flex items-center justify-center gap-2 rounded-[var(--d-radius)] bg-white px-7 py-4 text-[15px] font-semibold text-[color:var(--d-primary)] transition hover:-translate-y-0.5 hover:brightness-95"
                >
                  {cta.primaryLabel}
                </Link>
              </div>
              <p className="mt-5 text-sm text-white/60">{cta.phoneLabel}. No pressure, no cost for the inspection.</p>
            </div>
          </div>
        </Reveal>
      </DContainer>
    </section>
  );
}
