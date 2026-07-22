import Link from 'next/link';
import {
  CloudLightning,
  House,
  FileText,
  Warning,
  MagnifyingGlass,
  ArrowRight,
} from '@phosphor-icons/react/dist/ssr';
import { DContainer, DSection, DHeading, DEyebrow } from '../kit/primitives';
import { Reveal } from '../kit/Reveal';
import { services, hero } from './content';

const icons = { CloudLightning, House, FileText, Warning, MagnifyingGlass } as const;
const display = 'font-[family-name:var(--d-font-display)]';

export function Services() {
  return (
    <DSection id="services">
      <DContainer>
        <Reveal>
          <div className="max-w-2xl">
            <DEyebrow>{services.eyebrow}</DEyebrow>
            <DHeading className="mt-4 text-3xl leading-tight sm:text-4xl md:text-[2.6rem]">{services.heading}</DHeading>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((s, i) => {
            const Icon = icons[s.icon as keyof typeof icons];
            return (
              <Reveal key={s.title} variant="up" delay={(i % 3) * 0.06}>
                <div className="group flex h-full flex-col rounded-[var(--d-radius-lg)] bg-[var(--d-surface)] p-7 ring-1 ring-[var(--d-line)] transition-all duration-300 hover:-translate-y-1 hover:ring-[var(--d-accent)] hover:shadow-[0_22px_50px_rgba(15,41,51,0.10)]">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-[var(--d-radius)] bg-[var(--d-accent-soft)] text-[color:var(--d-accent-strong)] transition-transform duration-300 group-hover:-translate-y-0.5">
                    <Icon size={24} weight="duotone" />
                  </span>
                  <h3 className={`${display} mt-6 text-lg font-bold text-[color:var(--d-ink)]`}>{s.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[color:var(--d-body)]">{s.desc}</p>
                </div>
              </Reveal>
            );
          })}

          {/* primary CTA tile completes the grid and keeps the free-inspection ask close */}
          <Reveal variant="up" delay={0.12}>
            <Link
              href={hero.primary.href}
              className="group flex h-full flex-col justify-between rounded-[var(--d-radius-lg)] bg-[var(--d-primary)] p-7 text-[color:var(--d-on-primary)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(14,116,144,0.28)]"
            >
              <h3 className={`${display} text-xl font-bold`}>Not sure if you have a claim?</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/80">
                Get a free storm inspection. We tell you honestly, and you owe nothing to find out.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold">
                Book a free inspection
                <ArrowRight size={18} weight="bold" className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        </div>
      </DContainer>
    </DSection>
  );
}
