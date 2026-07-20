import { Container, Section, Heading } from './primitives';
import { Reveal } from './Reveal';
import { problem } from '@/lib/content';

const display = 'font-[family-name:var(--font-display)]';
const edgeMask =
  '[mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)] [-webkit-mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]';

// CSS-only marquee. The track renders the words enough times to overflow, then a
// second identical half, so translating -50% loops seamlessly. Alternating words
// pop in azure; the rest sit as a ghost so the strip frames without shouting.
function MarqueeRow({
  items,
  reverse = false,
  duration = '32s',
}: {
  items: string[];
  reverse?: boolean;
  duration?: string;
}) {
  const half = Array.from({ length: 4 }).flatMap(() => items);
  const track = [...half, ...half];
  return (
    <div className={`relative flex overflow-hidden ${edgeMask}`} aria-hidden>
      <div
        data-marquee
        className="flex shrink-0 items-center whitespace-nowrap will-change-transform"
        style={{ animation: `marquee ${duration} linear infinite`, animationDirection: reverse ? 'reverse' : 'normal' }}
      >
        {track.map((word, i) => (
          <span
            key={i}
            className={`${display} px-[0.45em] text-[clamp(1.7rem,4.4vw,2.9rem)] font-extrabold leading-none tracking-tight ${
              i % 2 === 1 ? 'text-[var(--color-accent)]' : 'text-[var(--color-ink)]/[0.12]'
            }`}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Problem() {
  return (
    <Section id="problem" alt className="overflow-hidden">
      <div className="flex flex-col gap-12 md:gap-16">
        <MarqueeRow items={problem.lossTop} duration="36s" />

        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <Heading className="text-3xl leading-[1.06] tracking-tight sm:text-4xl md:text-[2.9rem]">
                {problem.heading.pre}
                <span className="accent-underline">{problem.heading.accent}</span>
              </Heading>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-[var(--color-body)]">
                {problem.sub}
              </p>
            </Reveal>
          </div>
        </Container>

        <MarqueeRow items={problem.lossBottom} reverse duration="44s" />
      </div>
    </Section>
  );
}
