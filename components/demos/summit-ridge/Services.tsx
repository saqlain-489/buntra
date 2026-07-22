import { House, Wrench, CloudLightning, MagnifyingGlass, Drop } from '@phosphor-icons/react/dist/ssr';
import { DContainer, DSection, DHeading, DEyebrow } from '../kit/primitives';
import { Reveal } from '../kit/Reveal';
import { services } from './content';

const icons = { House, Wrench, CloudLightning, MagnifyingGlass, Drop } as const;
const display = 'font-[family-name:var(--d-font-display)]';

export function Services() {
  const [feature, ...rest] = services.items;
  const FeatureIcon = icons[feature.icon as keyof typeof icons];

  return (
    <DSection id="services">
      <DContainer>
        <Reveal>
          <div className="max-w-2xl">
            <DEyebrow>{services.eyebrow}</DEyebrow>
            <DHeading className="mt-4 text-3xl leading-tight sm:text-4xl md:text-[2.7rem]">{services.heading}</DHeading>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {/* feature cell */}
          <Reveal className="lg:col-span-2">
            <div className="group flex h-full flex-col justify-between rounded-[var(--d-radius-lg)] bg-[var(--d-primary)] p-8 text-[color:var(--d-on-primary)] transition-shadow duration-300 hover:shadow-[0_24px_60px_rgba(33,42,51,0.25)]">
              <span className="inline-grid h-12 w-12 place-items-center rounded-[var(--d-radius)] bg-white/10 text-[color:var(--d-accent)] ring-1 ring-white/15 transition-colors duration-300 group-hover:bg-[var(--d-accent)] group-hover:text-white">
                <FeatureIcon size={24} weight="duotone" />
              </span>
              <div className="mt-10">
                <h3 className={`${display} text-2xl font-bold`}>{feature.title}</h3>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/80">{feature.desc}</p>
              </div>
            </div>
          </Reveal>

          {rest.slice(0, 1).map((s) => {
            const Icon = icons[s.icon as keyof typeof icons];
            return (
              <Reveal key={s.title} delay={0.06}>
                <ServiceCard title={s.title} desc={s.desc} Icon={Icon} />
              </Reveal>
            );
          })}

          {rest.slice(1).map((s, i) => {
            const Icon = icons[s.icon as keyof typeof icons];
            return (
              <Reveal key={s.title} delay={i * 0.06}>
                <ServiceCard title={s.title} desc={s.desc} Icon={Icon} />
              </Reveal>
            );
          })}
        </div>
      </DContainer>
    </DSection>
  );
}

function ServiceCard({ title, desc, Icon }: { title: string; desc: string; Icon: typeof House }) {
  return (
    <div className="group flex h-full flex-col rounded-[var(--d-radius-lg)] bg-[var(--d-surface)] p-7 ring-1 ring-[var(--d-line)] transition-all duration-300 hover:-translate-y-1 hover:ring-[var(--d-accent)] hover:shadow-[0_20px_50px_rgba(33,42,51,0.1)]">
      <span className="inline-grid h-11 w-11 place-items-center rounded-[var(--d-radius)] bg-[var(--d-accent-soft)] text-[color:var(--d-accent)] transition-colors duration-300 group-hover:bg-[var(--d-accent)] group-hover:text-white">
        <Icon size={22} weight="duotone" />
      </span>
      <h3 className={`${display} mt-6 text-lg font-bold text-[color:var(--d-ink)]`}>{title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-[color:var(--d-body)]">{desc}</p>
    </div>
  );
}
