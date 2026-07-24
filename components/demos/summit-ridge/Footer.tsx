import Link from 'next/link';
import { DContainer } from '../kit/primitives';
import { brand, footer } from './content';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--d-bg)]">
      <DContainer>
        <div className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
          <div>
            <div className="text-xl font-extrabold tracking-tight text-white">
              {brand.name}<span className="text-[color:var(--d-accent)]">.</span>
            </div>
            <p className="mt-4 max-w-xs text-sm font-light leading-relaxed text-[color:var(--d-body)]">
              {footer.tagline}
            </p>
          </div>
          {footer.columns.map((col) => (
            <div key={col.title}>
              <div className="text-xs font-bold uppercase tracking-widest text-white">{col.title}</div>
              <ul className="mt-4 space-y-2.5 text-sm font-light text-[color:var(--d-body)]">
                {col.links.map((l) => (
                  <li key={l} className="transition-colors hover:text-white">{l}</li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-white">Contact</div>
            <ul className="mt-4 space-y-2.5 text-sm font-light text-[color:var(--d-body)]">
              <li>
                <a href={`tel:${brand.phone.replace(/\D/g, '')}`} className="transition-colors hover:text-white">
                  {brand.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${brand.email}`} className="transition-colors hover:text-white">
                  {brand.email}
                </a>
              </li>
              <li>{footer.serviceArea}</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-2 border-t border-white/10 py-6 text-xs text-[color:var(--d-muted)] sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; 2026 {brand.full}. {brand.city}.</span>
          <Link href="/work" className="underline underline-offset-2 transition-colors hover:text-white">
            A concept build by Buntra
          </Link>
        </div>
      </DContainer>
    </footer>
  );
}
