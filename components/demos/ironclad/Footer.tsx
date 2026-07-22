import Link from 'next/link';
import { DContainer } from '../kit/primitives';
import { brand, footer } from './content';

const display = 'font-[family-name:var(--d-font-display)]';
const mono = 'font-[family-name:var(--d-font-mono)]';

export function Footer() {
  return (
    <footer className="bg-[var(--d-primary)] text-[color:var(--d-on-primary)]">
      <DContainer>
        <div className="grid gap-10 py-16 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <div className={`${display} flex items-center gap-2 text-2xl font-bold`}>
              <span aria-hidden className="inline-block h-4 w-4 rotate-45 border-2 border-[var(--d-accent)]" />
              {brand.name}
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">{footer.tagline}</p>
            <p className={`${mono} mt-4 text-[12px] tracking-[0.04em] text-white/50`}>{footer.serviceArea}</p>
            <p className={`${mono} mt-4 text-[13px] text-white/70`}>{brand.phone}</p>
          </div>
          {footer.columns.map((col) => (
            <div key={col.title}>
              <div className={`${mono} text-[12px] font-semibold uppercase tracking-[0.12em] text-[color:var(--d-accent)]`}>{col.title}</div>
              <ul className="mt-4 space-y-2.5 text-sm text-white/65">
                {col.links.map((l) => (
                  <li key={l} className="cursor-default transition-colors hover:text-white">{l}</li>
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
