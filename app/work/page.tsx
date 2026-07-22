import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ArrowUpRight, ArrowLeft } from '@phosphor-icons/react/dist/ssr';
import { Container, Section, Heading } from '@/components/primitives';
import { Reveal } from '@/components/Reveal';
import { brand, cta } from '@/lib/content';
import { demos } from '@/lib/demos';

export const metadata: Metadata = {
  title: 'Our work — Buntra Web Studio',
  description: 'Concept builds that show the kind of roofing website Buntra delivers. Explore each full live design.',
};

const display = 'font-[family-name:var(--font-display)]';

export default function WorkIndex() {
  return (
    <>
      {/* minimal Buntra chrome (homepage anchor nav would be dead links here) */}
      <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[var(--color-surface)]/85 backdrop-blur-md">
        <Container className="flex h-[68px] items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 text-[var(--color-ink)]">
            <Image src="/buntra-icon.png" alt="" width={34} height={34} className="h-[34px] w-[34px]" />
            <span className={`${display} text-[17px] font-extrabold tracking-[-0.03em]`}>{brand.name}</span>
          </Link>
          <Link
            href="/#mockup"
            className="inline-flex items-center gap-1.5 rounded-xl bg-[var(--color-ink)] px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/15"
          >
            {cta.label}
            <ArrowUpRight size={15} weight="bold" />
          </Link>
        </Container>
      </header>

      <main>
        <Section>
          <Container>
            <Reveal>
              <div className="max-w-2xl">
                <Link href="/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-accent-strong)] transition hover:gap-2.5">
                  <ArrowLeft size={14} weight="bold" /> Back to home
                </Link>
                <Heading className="mt-5 text-4xl leading-[1.05] sm:text-5xl">Roofing sites we design and build</Heading>
                <p className="mt-5 text-lg leading-relaxed text-[var(--color-body)]">
                  These are concept builds, the exact kind of site you get. Click any to explore the full live design,
                  animation and all. Real client sites replace them as they ship.
                </p>
              </div>
            </Reveal>

            <div className="mt-14 grid gap-8 sm:grid-cols-2">
              {demos.map((d, i) => {
                const thumb = (
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl ring-1 ring-[var(--color-line)]">
                    <Image
                      src={d.live ? `/work/${d.slug}-desktop.jpeg` : `https://picsum.photos/seed/${d.thumbSeed}/1000/625`}
                      alt={`${d.name} website`}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className={`object-cover object-top transition-transform duration-[600ms] ease-out ${d.live ? 'group-hover:scale-[1.04]' : 'opacity-60 grayscale'}`}
                    />
                    {!d.live && (
                      <span className="absolute left-4 top-4 rounded-full bg-[var(--color-ink)]/85 px-3 py-1 text-xs font-semibold text-white">
                        Coming soon
                      </span>
                    )}
                  </div>
                );
                const caption = (
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2.5">
                        <h3 className={`${display} text-xl font-bold text-[var(--color-ink)]`}>{d.name}</h3>
                        <span
                          className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
                          style={{ backgroundColor: `${d.accent}1f`, color: d.accent }}
                        >
                          {d.persona}
                        </span>
                      </div>
                      <p className="mt-1.5 text-[15px] text-[var(--color-body)]">{d.tagline}</p>
                    </div>
                    {d.live && (
                      <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent-strong)] transition group-hover:bg-[var(--color-ink)] group-hover:text-white">
                        <ArrowUpRight size={17} weight="bold" />
                      </span>
                    )}
                  </div>
                );

                return (
                  <Reveal key={d.slug} delay={(i % 2) * 0.08}>
                    {d.live ? (
                      <Link href={`/work/${d.slug}`} className="group block">
                        {thumb}
                        {caption}
                      </Link>
                    ) : (
                      <div className="cursor-default">
                        {thumb}
                        {caption}
                      </div>
                    )}
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </Section>
      </main>

      <footer className="border-t border-[var(--color-line)] bg-white py-10">
        <Container className="flex flex-col gap-2 text-sm text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {2026} {brand.full}. {brand.city}, TX.</span>
          <Link href="/" className="font-medium text-[var(--color-ink)] hover:underline">
            Back to buntra.com
          </Link>
        </Container>
      </footer>
    </>
  );
}
