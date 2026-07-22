import Image from 'next/image';
import { Check } from '@phosphor-icons/react/dist/ssr';
import { DContainer, DSection, DHeading, DEyebrow } from '../kit/primitives';
import { Reveal } from '../kit/Reveal';
import { story } from './content';

const display = 'font-[family-name:var(--d-font-display)]';

export function Story() {
  return (
    <DSection id="story" alt>
      <DContainer>
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* portrait with overlapping circular emblem */}
          <Reveal variant="right" className="relative order-1">
            <div className="relative mx-auto max-w-md lg:mx-0">
              <div className="relative overflow-hidden rounded-[var(--d-radius-lg)] ring-1 ring-[var(--d-line)] shadow-[0_28px_64px_rgba(31,45,71,0.16)]">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={`https://picsum.photos/seed/${story.portraitSeed}/900/1125`}
                    alt="The Lone Star Roofworks family crew"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>
              </div>
              {/* circular "family owned since" emblem seal */}
              <div className="absolute -bottom-7 -right-4 grid h-32 w-32 place-items-center rounded-full bg-[var(--d-surface)] text-center shadow-[0_18px_40px_rgba(31,45,71,0.18)] ring-1 ring-[var(--d-line)] sm:-right-7 sm:h-36 sm:w-36">
                <span className="grid h-[86%] w-[86%] place-items-center rounded-full border-2 border-dashed border-[var(--d-accent)]/45">
                  <span className="leading-tight">
                    <span className={`${display} block text-[13px] font-semibold uppercase tracking-wide text-[color:var(--d-accent-strong)]`}>
                      {story.emblem.top}
                    </span>
                    <span className={`${display} mt-0.5 block text-xl font-bold text-[color:var(--d-ink)]`}>{story.emblem.bottom}</span>
                  </span>
                </span>
              </div>
            </div>
          </Reveal>

          <div className="order-2">
            <Reveal variant="left">
              <DEyebrow>{story.eyebrow}</DEyebrow>
              <DHeading className="mt-4 text-3xl leading-tight sm:text-4xl">{story.heading}</DHeading>
              {story.body.map((p) => (
                <p key={p} className="mt-5 text-[17px] leading-relaxed text-[color:var(--d-body)]">
                  {p}
                </p>
              ))}
            </Reveal>

            <div className="mt-8 space-y-4">
              {story.highlights.map((h, i) => (
                <Reveal key={h.title} delay={i * 0.08} variant="up">
                  <div className="flex gap-4">
                    <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--d-accent-soft)] text-[color:var(--d-accent)]">
                      <Check size={18} weight="bold" />
                    </span>
                    <div>
                      <h3 className={`${display} text-lg font-bold text-[color:var(--d-ink)]`}>{h.title}</h3>
                      <p className="mt-1 text-[15px] leading-relaxed text-[color:var(--d-body)]">{h.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </DContainer>
    </DSection>
  );
}
