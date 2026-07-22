import Image from 'next/image';
import { CloudLightning, Wind, House, ClipboardText, Umbrella, ArrowRight } from '@phosphor-icons/react/dist/ssr';
import { DContainer, DSection, DHeading, DEyebrow } from '../kit/primitives';
import { Reveal } from '../kit/Reveal';
import { services } from './content';

const icons = { CloudLightning, Wind, House, ClipboardText, Umbrella } as const;
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
            <DHeading className="mt-4 text-3xl uppercase leading-[1.05] sm:text-4xl md:text-[2.7rem]">{services.heading}</DHeading>
            <p className="mt-4 text-lg leading-relaxed text-[color:var(--d-body)]">{services.sub}</p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {/* feature cell: photo + urgent dark overlay */}
          <Reveal variant="clip" className="lg:col-span-2">
            <div className="group relative h-full min-h-[320px] overflow-hidden rounded-[var(--d-radius-lg)] ring-1 ring-[var(--d-line)]">
              <Image
                src={`https://picsum.photos/seed/${feature.seed}/1100/720`}
                alt={feature.title}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--d-primary)] via-[var(--d-primary)]/55 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <span className="inline-grid h-12 w-12 place-items-center rounded-[var(--d-radius)] bg-[var(--d-accent-2)] text-[color:var(--d-primary)]">
                  <FeatureIcon size={24} weight="fill" />
                </span>
                <h3 className={`${display} mt-5 text-2xl font-bold uppercase text-white`}>{feature.title}</h3>
                <p className="mt-2 max-w-md text-[15px] leading-relaxed text-white/85">{feature.desc}</p>
              </div>
            </div>
          </Reveal>

          {rest.slice(0, 1).map((s) => {
            const Icon = icons[s.icon as keyof typeof icons];
            return (
              <Reveal key={s.title} variant="up" delay={0.06}>
                <ServiceCard title={s.title} desc={s.desc} Icon={Icon} />
              </Reveal>
            );
          })}

          {rest.slice(1).map((s, i) => {
            const Icon = icons[s.icon as keyof typeof icons];
            return (
              <Reveal key={s.title} variant="up" delay={i * 0.06}>
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
    <div className="group flex h-full flex-col rounded-[var(--d-radius-lg)] border-l-2 border-transparent bg-[var(--d-surface)] p-7 ring-1 ring-[var(--d-line)] transition-all duration-200 hover:-translate-y-1 hover:border-[var(--d-accent-2)] hover:shadow-[0_20px_50px_rgba(15,42,61,0.1)]">
      <span className="inline-grid h-11 w-11 place-items-center rounded-[var(--d-radius)] bg-[var(--d-accent-soft)] text-[color:var(--d-accent)] transition-colors group-hover:bg-[var(--d-accent)] group-hover:text-white">
        <Icon size={22} weight="fill" />
      </span>
      <h3 className={`${display} mt-6 text-lg font-bold uppercase text-[color:var(--d-ink)]`}>{title}</h3>
      <p className="mt-2 flex-1 text-[15px] leading-relaxed text-[color:var(--d-body)]">{desc}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-wide text-[color:var(--d-accent-strong)] opacity-0 transition-opacity group-hover:opacity-100">
        Get help <ArrowRight size={14} weight="bold" />
      </span>
    </div>
  );
}
