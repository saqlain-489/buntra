import { House, CloudRain, FileText, MagnifyingGlass, Drop, Wrench, ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
import { DContainer, DSection, DHeading, DEyebrow } from '../kit/primitives';
import { Reveal } from '../kit/Reveal';
import { services } from './content';

const icons = { House, CloudRain, FileText, MagnifyingGlass, Drop, Wrench } as const;
const display = 'font-[family-name:var(--d-font-display)]';

export function Services() {
  return (
    <DSection id="services">
      <DContainer>
        <Reveal>
          <div className="max-w-2xl">
            <DEyebrow>{services.eyebrow}</DEyebrow>
            <DHeading className="mt-4 text-3xl leading-tight sm:text-4xl md:text-[2.7rem]">{services.heading}</DHeading>
            <p className="mt-4 text-lg leading-relaxed text-[color:var(--d-body)]">{services.sub}</p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((s, i) => {
            const Icon = icons[s.icon as keyof typeof icons];
            return (
              <Reveal key={s.title} delay={(i % 3) * 0.06} variant="up">
                <div className="group relative flex h-full flex-col rounded-[var(--d-radius-lg)] bg-[var(--d-surface)] p-7 ring-1 ring-[var(--d-line)] transition-all duration-300 hover:-translate-y-1 hover:ring-[var(--d-primary)] hover:shadow-[0_24px_54px_rgba(31,45,71,0.1)]">
                  <ArrowUpRight
                    size={18}
                    weight="bold"
                    className="absolute right-6 top-7 text-[color:var(--d-muted)] opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[color:var(--d-accent)] group-hover:opacity-100"
                  />
                  <span className="inline-grid h-14 w-14 place-items-center rounded-full bg-[var(--d-accent-soft)] text-[color:var(--d-accent)] transition-transform duration-300 group-hover:scale-110">
                    <Icon size={26} weight="duotone" />
                  </span>
                  <h3 className={`${display} mt-6 text-xl font-bold text-[color:var(--d-ink)]`}>{s.title}</h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-[color:var(--d-body)]">{s.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </DContainer>
    </DSection>
  );
}
