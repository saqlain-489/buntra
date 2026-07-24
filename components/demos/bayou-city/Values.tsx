import { Handshake, UsersThree, Medal } from '@phosphor-icons/react/dist/ssr';
import { Reveal } from '../kit/Reveal';
import { Container, SectionHead, display } from './ui';
import { values } from './content';

const icons = { Handshake, UsersThree, Medal } as const;

export function Values() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <SectionHead badge={values.badge} heading={values.heading} />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {values.items.map((v, i) => {
            const Icon = icons[v.icon as keyof typeof icons];
            return (
              <Reveal key={v.title} variant="up" delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-2xl border border-[var(--d-line)] bg-white p-8 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:p-10">
                  <span className="inline-grid h-14 w-14 place-items-center rounded-xl bg-[var(--d-accent-soft)] text-[color:var(--d-accent)]">
                    <Icon size={28} />
                  </span>
                  <h3 className={`${display} mt-7 text-xl font-semibold text-[color:var(--d-ink)]`}>{v.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[color:var(--d-body)]">{v.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
