import { DContainer } from '../kit/primitives';
import { Reveal } from '../kit/Reveal';
import { specsBand } from './content';

const display = 'font-[family-name:var(--d-font-display)]';
const mono = 'font-[family-name:var(--d-font-mono)]';

export function SpecsBand() {
  return (
    <section className="relative overflow-hidden bg-[var(--d-primary)] py-16 md:py-20">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <DContainer className="relative">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {specsBand.items.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.07} variant="right">
              <div className="border-l-2 border-[var(--d-accent)] pl-4">
                <div className={`${display} text-4xl font-bold leading-none text-white md:text-5xl`}>{s.value}</div>
                <div className={`${mono} mt-3 text-[12px] uppercase tracking-[0.08em] text-white/55`}>{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className={`${mono} mt-10 text-[11px] tracking-[0.06em] text-white/35`}>{specsBand.note}</p>
      </DContainer>
    </section>
  );
}
