import { CloudLightning, Wind, House, ClipboardText, Umbrella, MagnifyingGlass } from '@phosphor-icons/react/dist/ssr';
import { Reveal } from '../kit/Reveal';
import { Container, SectionHead, display } from './ui';
import { services } from './content';

const icons = { CloudLightning, Wind, House, ClipboardText, Umbrella, MagnifyingGlass } as const;

export function Services() {
  return (
    <section id="services" className="bg-[var(--d-bg)] py-20 md:py-28">
      <Container>
        <SectionHead badge={services.badge} heading={services.heading} sub={services.sub} badgeOnTint />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((s, i) => {
            const Icon = icons[s.icon as keyof typeof icons];
            return (
              <Reveal key={s.title} variant="up" delay={(i % 3) * 0.07}>
                <div className="flex h-full flex-col rounded-2xl border border-[var(--d-line)] bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:p-8">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-[var(--d-accent-soft)] text-[color:var(--d-accent)]">
                    <Icon size={24} />
                  </span>
                  <h3 className={`${display} mt-6 text-lg font-semibold text-[color:var(--d-ink)]`}>{s.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[color:var(--d-body)]">{s.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
