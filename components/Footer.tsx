import Link from 'next/link';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr';
import { Container } from './primitives';
import { brand, cta, navLinks } from '@/lib/content';

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-white py-14">
      <Container className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--color-ink)]">
              <span className="h-0 w-0 border-x-[7px] border-b-[8px] border-x-transparent border-b-[var(--color-accent)]" />
            </span>
            <span className="font-[family-name:var(--font-display)] text-base font-extrabold tracking-[-0.03em] text-[var(--color-ink)]">
              {brand.full}
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--color-body)]">
            Websites that book jobs for roofing contractors across {brand.city} and beyond.
          </p>
          <Link
            href={cta.href}
            className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-[var(--color-ink)] px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/15"
          >
            {cta.label}
            <ArrowRight size={15} weight="bold" className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div>
          <p className="font-[family-name:var(--font-display)] text-sm font-bold text-[var(--color-ink)]">
            Explore
          </p>
          <ul className="mt-4 flex flex-col gap-2.5">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-[var(--color-body)] transition-colors hover:text-[var(--color-ink)]">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-[family-name:var(--font-display)] text-sm font-bold text-[var(--color-ink)]">
            Get in touch
          </p>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-[var(--color-body)]">
            <li>
              <a href={`mailto:${brand.email}`} className="transition-colors hover:text-[var(--color-ink)]">
                {brand.email}
              </a>
            </li>
            <li>
              <a href={`tel:${brand.phone.replace(/\D/g, '')}`} className="transition-colors hover:text-[var(--color-ink)]">
                {brand.phone}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <Container className="mt-12 flex flex-col gap-2 border-t border-[var(--color-line)] pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-[var(--color-muted)]">
          &copy; {2026} {brand.full}. {brand.city}, TX. All rights reserved.
        </p>
        <p className="text-xs text-[var(--color-muted)]">Roofing sites, live in 7 days.</p>
      </Container>
    </footer>
  );
}
