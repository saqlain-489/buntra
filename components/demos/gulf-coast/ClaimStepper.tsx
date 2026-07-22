import {
  MagnifyingGlass,
  Camera,
  FileText,
  Handshake,
  CheckCircle,
  House,
  Check,
} from '@phosphor-icons/react/dist/ssr';
import { DContainer, DSection, DHeading, DEyebrow } from '../kit/primitives';
import { Reveal } from '../kit/Reveal';
import { claim } from './content';

const icons = { MagnifyingGlass, Camera, FileText, Handshake, CheckCircle, House } as const;
const display = 'font-[family-name:var(--d-font-display)]';

// Signature section: the insurance-claim journey. Horizontal stepper on desktop,
// vertical on mobile, each step reveals in staggered sequence with a green "covered" check.
export function ClaimStepper() {
  return (
    <DSection id="claim" alt>
      <DContainer>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <DEyebrow>{claim.eyebrow}</DEyebrow>
            <DHeading className="mt-4 text-3xl leading-tight sm:text-4xl">{claim.heading}</DHeading>
            <p className="mt-5 text-lg leading-relaxed text-[color:var(--d-body)]">{claim.sub}</p>
          </div>
        </Reveal>

        {/* Desktop: horizontal stepper */}
        <div className="relative mt-16 hidden lg:block">
          <span aria-hidden className="absolute left-[8.33%] right-[8.33%] top-8 h-0.5 bg-[var(--d-line)]" />
          <ol className="grid grid-cols-6 gap-4">
            {claim.steps.map((s, i) => {
              const Icon = icons[s.icon as keyof typeof icons];
              return (
                <Reveal key={s.title} variant="scale" delay={i * 0.09}>
                  <li className="flex flex-col items-center text-center">
                    <StepCircle Icon={Icon} />
                    <h3 className={`${display} mt-5 text-[15px] font-bold text-[color:var(--d-ink)]`}>
                      <span className="text-[color:var(--d-accent)]">{i + 1}.</span> {s.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-[color:var(--d-body)]">{s.desc}</p>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>

        {/* Mobile & tablet: vertical stepper */}
        <div className="relative mt-12 lg:hidden">
          <span aria-hidden className="absolute bottom-8 left-8 top-8 w-0.5 bg-[var(--d-line)]" />
          <ol className="space-y-8">
            {claim.steps.map((s, i) => {
              const Icon = icons[s.icon as keyof typeof icons];
              return (
                <Reveal key={s.title} variant="right" delay={i * 0.06}>
                  <li className="relative flex gap-5">
                    <StepCircle Icon={Icon} />
                    <div className="pt-2">
                      <h3 className={`${display} text-lg font-bold text-[color:var(--d-ink)]`}>
                        <span className="text-[color:var(--d-accent)]">{i + 1}.</span> {s.title}
                      </h3>
                      <p className="mt-1.5 max-w-md text-[15px] leading-relaxed text-[color:var(--d-body)]">{s.desc}</p>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </DContainer>
    </DSection>
  );
}

function StepCircle({ Icon }: { Icon: typeof House }) {
  return (
    <span className="relative z-10 grid h-16 w-16 shrink-0 place-items-center rounded-full bg-[var(--d-accent-soft)] text-[color:var(--d-accent-strong)] ring-4 ring-[var(--d-bg-alt)]">
      <Icon size={28} weight="duotone" />
      {/* green "covered" check confirms every stage is handled */}
      <span className="absolute -bottom-1 -right-1 grid h-6 w-6 place-items-center rounded-full bg-[var(--d-success)] text-white ring-2 ring-[var(--d-bg-alt)]">
        <Check size={13} weight="bold" />
      </span>
    </span>
  );
}
