import Link from 'next/link';
import { Phone } from '@phosphor-icons/react/dist/ssr';
import { DContainer } from '../kit/primitives';
import { Reveal } from '../kit/Reveal';
import { cta, brand } from './content';

const display = 'font-[family-name:var(--d-font-display)]';

export function Cta() {
  return (
    <section id="estimate" className="bg-[var(--d-bg)] py-20 md:py-28">
      <DContainer>
        <Reveal variant="scale">
          {/* navy slab, warm near-white text */}
          <div className="relative overflow-hidden rounded-[var(--d-radius-lg)] bg-[var(--d-ink-deep)] px-8 py-14 text-center md:px-16 md:py-20">
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_-20%,var(--d-primary),transparent_55%)] opacity-40"
            />
            <div className="relative">
              <h2 className={`${display} mx-auto max-w-2xl text-3xl font-bold leading-[1.1] text-[color:var(--d-on-primary)] sm:text-4xl md:text-5xl`}>
                {cta.heading}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/75">{cta.sub}</p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href={cta.primary.href}
                  className="inline-flex items-center justify-center gap-2 rounded-[var(--d-radius)] bg-[var(--d-primary)] px-7 py-4 text-[15px] font-semibold text-[color:var(--d-on-primary)] shadow-sm transition hover:-translate-y-0.5 hover:brightness-110 hover:shadow-lg"
                >
                  {cta.primary.label}
                </Link>
                <a
                  href={`tel:${brand.phone.replace(/\D/g, '')}`}
                  className="inline-flex items-center gap-2 text-[15px] font-semibold text-white/85 transition hover:text-white"
                >
                  <Phone size={16} weight="fill" className="text-[color:var(--d-on-primary)]" />
                  {cta.phoneLabel}: {brand.phone}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </DContainer>
    </section>
  );
}
