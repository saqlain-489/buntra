import Link from 'next/link';
import { Hexagon, XLogo, InstagramLogo, FacebookLogo, LinkedinLogo } from '@phosphor-icons/react/dist/ssr';
import { Container, display } from './ui';
import { brand, nav, footer } from './content';

const socials = [
  { label: 'X', Icon: XLogo },
  { label: 'Instagram', Icon: InstagramLogo },
  { label: 'Facebook', Icon: FacebookLogo },
  { label: 'LinkedIn', Icon: LinkedinLogo },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--d-line)] bg-white">
      <Container>
        <div className="flex flex-col gap-6 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className={`${display} inline-flex items-center gap-2 text-xl font-bold tracking-tight text-[color:var(--d-ink)]`}>
              <Hexagon size={24} weight="fill" className="text-[color:var(--d-accent)]" />
              {brand.name}
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[color:var(--d-body)]">{footer.tagline}</p>
          </div>
          <div className="flex gap-2">
            {socials.map(({ label, Icon }) => (
              <a
                key={label}
                href="#top"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full border border-[var(--d-line)] text-[color:var(--d-ink)] transition-colors hover:border-[var(--d-ink)]"
              >
                <Icon size={19} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-7 gap-y-2 border-t border-[var(--d-line)] py-6">
          {nav.map((l) => (
            <Link key={l.href} href={l.href} className="py-2 text-sm font-medium text-[color:var(--d-body)] transition-colors hover:text-[color:var(--d-ink)]">
              {l.label}
            </Link>
          ))}
          <span className="text-sm text-[color:var(--d-muted)]">{footer.serviceArea}</span>
        </div>

        <div className="flex flex-col gap-2 border-t border-[var(--d-line)] py-6 text-xs text-[color:var(--d-muted)] sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; 2026 {brand.full}. {brand.city}.</span>
          <Link href="/work" className="underline underline-offset-2 transition-colors hover:text-[color:var(--d-ink)]">
            A concept build by Buntra
          </Link>
        </div>
      </Container>
    </footer>
  );
}
