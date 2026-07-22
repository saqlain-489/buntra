import { Ruler, Stack, PaintRoller, Wrench, ClipboardText } from '@phosphor-icons/react/dist/ssr';
import { DContainer, DSection, DHeading } from '../kit/primitives';
import { Reveal } from '../kit/Reveal';
import { capabilities } from './content';

const icons = { Ruler, Stack, PaintRoller, Wrench, ClipboardText } as const;
const display = 'font-[family-name:var(--d-font-display)]';
const mono = 'font-[family-name:var(--d-font-mono)]';

export function Capabilities() {
  const [feature, ...rest] = capabilities.items;
  const FeatureIcon = icons[feature.icon as keyof typeof icons];

  return (
    <DSection id="capabilities">
      <DContainer>
        <Reveal>
          <div className="max-w-2xl">
            <span className={`${mono} text-[13px] font-medium uppercase tracking-[0.14em] text-[color:var(--d-accent-strong)]`}>
              {capabilities.eyebrow}
            </span>
            <DHeading className="mt-4 text-3xl leading-tight sm:text-4xl md:text-[2.6rem]">{capabilities.heading}</DHeading>
            <p className="mt-4 text-lg leading-relaxed text-[color:var(--d-body)]">{capabilities.sub}</p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {/* feature cell on charcoal */}
          <Reveal variant="clip" className="lg:col-span-2">
            <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[var(--d-radius-lg)] bg-[var(--d-primary)] p-8 text-[color:var(--d-on-primary)] ring-1 ring-white/10">
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.14]"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />
              <div className="relative flex items-center justify-between">
                <span className="inline-grid h-12 w-12 place-items-center rounded-[var(--d-radius)] bg-white/10 text-[color:var(--d-accent)] ring-1 ring-white/15">
                  <FeatureIcon size={24} weight="bold" />
                </span>
                <span className={`${mono} flex items-baseline gap-2 border border-white/15 px-3 py-1.5 text-[11px] tracking-[0.08em] rounded-[var(--d-radius)]`}>
                  <span className="text-white/50">{feature.spec.k}</span>
                  <span className="font-semibold text-[color:var(--d-accent)]">{feature.spec.v}</span>
                </span>
              </div>
              <div className="relative mt-14">
                <h3 className={`${display} text-2xl font-bold`}>{feature.title}</h3>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/75">{feature.desc}</p>
              </div>
            </div>
          </Reveal>

          {rest.map((s, i) => {
            const Icon = icons[s.icon as keyof typeof icons];
            return (
              <Reveal key={s.title} delay={(i % 2) * 0.07} variant={i % 2 === 0 ? 'up' : 'clip'}>
                <div className="group flex h-full flex-col rounded-[var(--d-radius-lg)] border border-[var(--d-line)] bg-[var(--d-surface)] p-7 transition-all duration-200 hover:-translate-y-1 hover:border-[var(--d-accent)] hover:shadow-[0_18px_44px_rgba(22,24,28,0.1)]">
                  <div className="flex items-center justify-between">
                    <span className="inline-grid h-11 w-11 place-items-center rounded-[var(--d-radius)] bg-[var(--d-accent-soft)] text-[color:var(--d-accent-strong)] transition-colors group-hover:bg-[var(--d-accent)] group-hover:text-white">
                      <Icon size={22} weight="bold" />
                    </span>
                    <span className={`${mono} flex items-baseline gap-1.5 text-[11px] tracking-[0.06em]`}>
                      <span className="text-[color:var(--d-muted)]">{s.spec.k}</span>
                      <span className="font-semibold text-[color:var(--d-accent-strong)]">{s.spec.v}</span>
                    </span>
                  </div>
                  <h3 className={`${display} mt-6 text-lg font-bold text-[color:var(--d-ink)]`}>{s.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[color:var(--d-body)]">{s.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </DContainer>
    </DSection>
  );
}
