import { DContainer, DSection } from '../kit/primitives';
import { Reveal } from '../kit/Reveal';
import { process } from './content';

export function Process() {
  return (
    <DSection id="process">
      <DContainer>
        <Reveal>
          <h2 className="max-w-2xl text-3xl font-black leading-[1.1] tracking-tighter text-white sm:text-5xl">
            {process.heading}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <div className="h-full rounded-3xl border border-transparent border-t-white/10 p-6 pt-8 transition-colors duration-300 hover:border-white/10 hover:bg-white/5">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-5xl font-black tracking-tight text-transparent">
                  0{i + 1}
                </span>
                <h3 className="mt-5 text-lg font-bold tracking-tight text-white">{s.title}</h3>
                <p className="mt-2 text-[15px] font-light leading-relaxed text-[color:var(--d-body)]">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </DContainer>
    </DSection>
  );
}
