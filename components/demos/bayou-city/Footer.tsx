import Link from 'next/link';
import { DContainer } from '../kit/primitives';
import { brand, footer } from './content';

const display = 'font-[family-name:var(--d-font-display)]';

export function Footer() {
  return (
    <footer className="bg-[var(--d-primary)] text-white">
      <DContainer>
        <div className="grid gap-10 py-16 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <div className={`${display} text-2xl font-bold uppercase`}>
              {brand.name}<span className="text-[color:var(--d-accent-2)]">.</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">{footer.tagline}</p>
            <p className="mt-4 text-sm text-white/55">{footer.serviceArea}</p>
            <p className="mt-4 text-sm font-semibold text-white/85">{brand.phone}</p>
          </div>
          {footer.columns.map((col) => (
            <div key={col.title}>
              <div className="text-sm font-semibold uppercase tracking-wide">{col.title}</div>
              <ul className="mt-4 space-y-2.5 text-sm text-white/65">
                {col.links.map((l) => (
                  <li key={l} className="transition-colors hover:text-white">{l}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 border-t border-white/10 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; 2026 {brand.full}. {brand.city}.</span>
          <span>
            A Buntra concept build.{' '}
            <Link href="/work" className="underline underline-offset-2 hover:text-white/80">Back to work</Link>
          </span>
        </div>
      </DContainer>
    </footer>
  );
}
