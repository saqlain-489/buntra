import { House, Wrench, CloudLightning, Drop } from '@phosphor-icons/react/dist/ssr';
import { DContainer, DSection } from '../kit/primitives';
import { Reveal } from '../kit/Reveal';
import { services } from './content';

const icons = { House, Wrench, CloudLightning, Drop } as const;

export function Services() {
  return (
    <DSection id="services">
      <DContainer>
        <Reveal>
          <h2 className="max-w-2xl text-3xl font-black leading-[1.1] tracking-tighter text-white sm:text-5xl">
            {services.heading}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {services.items.map((s, i) => {
            const Icon = icons[s.icon as keyof typeof icons];
            return (
              <Reveal key={s.title} delay={(i % 2) * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
                  {/* quarter-circle wash pinned to the card corner */}
                  <span
                    aria-hidden
                    className="absolute -left-12 -top-12 h-36 w-36 rounded-full bg-gradient-to-br from-blue-500/25 to-purple-500/25"
                  />
                  <span className="relative inline-grid h-11 w-11 place-items-center text-white">
                    <Icon size={30} weight="duotone" />
                  </span>
                  <h3 className="mt-12 text-xl font-bold tracking-tight text-white">{s.title}</h3>
                  <p className="mt-2.5 text-[15px] font-light leading-relaxed text-[color:var(--d-body)]">{s.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </DContainer>
    </DSection>
  );
}
