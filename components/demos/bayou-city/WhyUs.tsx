import { Phone, ShieldCheck, Clock } from '@phosphor-icons/react/dist/ssr';
import { DContainer } from '../kit/primitives';
import { Reveal } from '../kit/Reveal';
import { why } from './content';

const display = 'font-[family-name:var(--d-font-display)]';
const pointIcons = [Clock, ShieldCheck, Phone] as const;

// The site's one dark moment: a navy stat slab with a diagonal top edge (md+).
export function WhyUs() {
  return (
    <section id="why" className="relative bg-[var(--d-primary)] py-20 text-white md:py-28 md:[clip-path:polygon(0_3vw,100%_0,100%_100%,0_100%)]">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_70%_at_15%_0%,rgba(14,138,125,0.45),transparent_55%)]"
      />
      <DContainer className="relative">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal variant="right">
            <div>
              <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-[color:var(--d-accent-2)]">{why.eyebrow}</span>
              <h2 className={`${display} mt-4 text-3xl font-bold uppercase leading-[1.05] sm:text-4xl md:text-[2.7rem]`}>{why.heading}</h2>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/75">{why.sub}</p>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {why.points.map((p, i) => {
              const Icon = pointIcons[i] ?? ShieldCheck;
              return (
                <Reveal key={p.title} variant="left" delay={i * 0.08}>
                  <div className="group flex gap-4 rounded-[var(--d-radius-lg)] bg-white/5 p-6 ring-1 ring-white/10 transition-colors hover:bg-white/10">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[var(--d-radius)] bg-[var(--d-accent)] text-white">
                      <Icon size={22} weight="fill" />
                    </span>
                    <div>
                      <h3 className={`${display} text-lg font-bold uppercase`}>{p.title}</h3>
                      <p className="mt-1.5 text-[15px] leading-relaxed text-white/75">{p.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal variant="up" delay={0.1}>
          <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-[var(--d-radius-lg)] bg-white/10 ring-1 ring-white/10 sm:grid-cols-4">
            {why.stats.map((s) => (
              <div key={s.label} className="bg-[var(--d-primary)] px-6 py-8 text-center">
                <div className={`${display} text-4xl font-bold uppercase text-[color:var(--d-accent-2)]`}>{s.value}</div>
                <div className="mt-1.5 text-[13px] font-medium text-white/70">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </DContainer>
    </section>
  );
}
