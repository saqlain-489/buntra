import { DContainer } from '../kit/primitives';
import { Reveal } from '../kit/Reveal';
import { cta, brand } from './content';

const pillPrimary =
  'inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-bold text-[#0c1128] shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-transform duration-200 hover:scale-105 active:scale-95';
const pillGhost =
  'inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-sm font-bold text-white transition duration-200 hover:scale-105 hover:bg-white/10 active:scale-95';

export function Cta() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[var(--d-bg)] py-24 md:py-32">
      <span
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[420px] w-[640px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-[100px]"
      />
      <DContainer className="relative text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-4xl font-black leading-[1.05] tracking-tighter text-white sm:text-6xl md:text-7xl">
            {cta.heading[0]}{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {cta.heading[1]}
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-6 max-w-xl text-lg font-light leading-relaxed text-[color:var(--d-body)]">{cta.sub}</p>
        </Reveal>
        <Reveal delay={0.14}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={`tel:${brand.phone.replace(/\D/g, '')}`} className={pillPrimary}>
              {cta.primaryLabel}
            </a>
            <a href={`mailto:${brand.email}`} className={pillGhost}>
              {cta.secondaryLabel}
            </a>
          </div>
        </Reveal>
      </DContainer>
    </section>
  );
}
