import Link from 'next/link';
import { DContainer } from '../kit/primitives';
import { brand, footer } from './content';

const display = 'font-[family-name:var(--d-font-display)]';

export function Footer() {
  return (
    <footer className="bg-[var(--d-ink-deep)] text-[color:var(--d-on-primary)]">
      <DContainer>
        <div className="grid gap-10 py-16 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className={`${display} grid h-10 w-10 place-items-center rounded-full bg-[var(--d-primary)] text-sm font-bold text-[color:var(--d-on-primary)]`}>
                LS
              </span>
              <span className={`${display} text-xl font-bold leading-none`}>
                Lone Star
                <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">Roofworks</span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">{footer.tagline}</p>
            <p className="mt-4 text-sm text-white/55">{footer.serviceArea}</p>
            <p className="mt-4 text-sm text-white/70">{brand.phone}</p>
          </div>
          {footer.columns.map((col) => (
            <div key={col.title}>
              <div className="text-sm font-semibold">{col.title}</div>
              <ul className="mt-4 space-y-2.5 text-sm text-white/65">
                {col.links.map((l) => (
                  <li key={l} className="cursor-pointer transition-colors hover:text-white">
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 border-t border-white/10 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; 2026 {brand.full}. {brand.city}.</span>
          <span>
            A Buntra concept build.{' '}
            <Link href="/work" className="underline underline-offset-2 hover:text-white/80">
              Back to work
            </Link>
          </span>
        </div>
      </DContainer>
    </footer>
  );
}
