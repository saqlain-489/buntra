import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ArrowRight } from '@phosphor-icons/react/dist/ssr';
import { Container, Section, Heading } from './primitives';
import { Reveal } from './Reveal';
import { concepts } from '@/lib/content';
import { demos, type DemoMeta } from '@/lib/demos';

const display = 'font-[family-name:var(--font-display)]';
const liveDemos = demos.filter((d) => d.live);
const [featured, ...rest] = liveDemos;

// Real portfolio: the live demo sites, same source as /work so it never drifts.
// A featured flagship over a supporting grid gives the section clear hierarchy.
export function Concepts() {
  return (
    <Section id="work" alt>
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">
              Our work
            </span>
            <Heading className="mt-3 text-3xl leading-[1.1] sm:text-4xl">{concepts.heading}</Heading>
            <p className="mt-4 text-lg text-[var(--color-body)]">{concepts.sub}</p>
          </div>
        </Reveal>

        {/* Featured flagship build */}
        <Reveal delay={0.08}>
          <Link
            href={`/work/${featured.slug}`}
            className="group mt-12 flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-[var(--color-line)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10 hover:ring-[var(--color-accent)]/40 lg:min-h-[26rem] lg:flex-row"
          >
            <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:w-[58%]">
              <Image
                src={`/work/${featured.slug}-desktop.jpeg`}
                alt={`${featured.name} website`}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-top"
              />
              <span
                className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold shadow-sm"
                style={{ color: featured.accent }}
              >
                {featured.persona}
              </span>
            </div>
            <div className="flex flex-col justify-center gap-3 p-6 lg:w-[42%] lg:p-8">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">
                Featured build
              </span>
              <h3 className={`${display} text-2xl font-bold leading-tight text-[var(--color-ink)] sm:text-[1.7rem]`}>
                {featured.name}
              </h3>
              <p className="text-[15px] leading-relaxed text-[var(--color-body)]">{featured.blurb}</p>
              <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-ink)]">
                Explore live site
                <ArrowUpRight
                  size={16}
                  weight="bold"
                  className="text-[var(--color-accent)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </div>
          </Link>
        </Reveal>

        {/* Supporting builds */}
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((d, i) => (
            <Reveal key={d.slug} delay={(i % 4) * 0.06}>
              <PortfolioCard d={d} />
            </Reveal>
          ))}
        </div>

        {/* Honest framing, stated plainly. */}
        <Reveal delay={0.05}>
          <p className="mt-8 border-l-2 border-[var(--color-accent)] pl-4 text-[14px] leading-relaxed text-[var(--color-muted)]">
            {concepts.honesty}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 flex justify-center">
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-[15px] font-semibold text-[var(--color-ink)] ring-1 ring-[var(--color-line)] transition hover:-translate-y-0.5 hover:shadow-md hover:ring-[var(--color-accent)]"
            >
              Open the full portfolio
              <ArrowRight size={16} weight="bold" className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

function PortfolioCard({ d }: { d: DemoMeta }) {
  return (
    <Link href={`/work/${d.slug}`} className="group block">
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-sm ring-1 ring-[var(--color-line)]">
        <Image
          src={`/work/${d.slug}-desktop.jpeg`}
          alt={`${d.name} website`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.05]"
        />
        <span className="absolute inset-0 bg-[var(--color-ink)]/0 transition-colors duration-300 group-hover:bg-[var(--color-ink)]/10" />
        <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white/90 text-[var(--color-ink)] opacity-0 shadow-md transition-all duration-300 group-hover:opacity-100">
          <ArrowUpRight size={15} weight="bold" />
        </span>
      </div>
      <div className="mt-3.5">
        <div className="flex items-center justify-between gap-2">
          <h3 className={`${display} text-[15px] font-bold text-[var(--color-ink)]`}>{d.name}</h3>
          <span
            className="shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold"
            style={{ backgroundColor: `${d.accent}1f`, color: d.accent }}
          >
            {d.persona}
          </span>
        </div>
        <p className="mt-1 text-[13px] leading-snug text-[var(--color-body)]">{d.tagline}</p>
      </div>
    </Link>
  );
}
