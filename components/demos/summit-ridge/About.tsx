import { DContainer, DSection } from '../kit/primitives';
import { Reveal } from '../kit/Reveal';
import { about } from './content';

export function About() {
  return (
    <DSection id="about" className="relative overflow-hidden">
      <span
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/5 blur-[120px]"
      />
      <DContainer className="relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="text-4xl font-black leading-[1.1] tracking-tighter text-white sm:text-5xl">
              {about.heading}
            </h2>
          </Reveal>

          <div>
            {about.paragraphs.map((p, i) => (
              <Reveal key={p.slice(0, 24)} delay={i * 0.08} className={i > 0 ? 'mt-5' : ''}>
                <p className="text-base font-light leading-relaxed text-[color:var(--d-body)] sm:text-lg">{p}</p>
              </Reveal>
            ))}
            <Reveal delay={0.16}>
              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
                {about.stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-black tracking-tight text-white sm:text-4xl">{s.value}</div>
                    <div className="mt-1.5 text-xs font-medium text-[color:var(--d-muted)]">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </DContainer>
    </DSection>
  );
}
