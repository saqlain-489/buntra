import Link from 'next/link';
import { ArrowLeft } from '@phosphor-icons/react/dist/ssr';

// Buntra chrome (fixed dark strip, not themed by the demo). Keeps the demo honest
// and gives a way back to the portfolio.
export function HonestyBanner({ site }: { site: string }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 bg-[#0f151c] px-4 py-2 text-center text-[12px] font-medium text-white/85">
      <Link href="/work" className="inline-flex items-center gap-1.5 text-white/70 transition hover:text-white">
        <ArrowLeft size={13} weight="bold" /> Buntra work
      </Link>
      <span className="text-white/25">/</span>
      <span>
        A concept build for <span className="font-semibold text-white">{site}</span>, made by Buntra.
      </span>
    </div>
  );
}
