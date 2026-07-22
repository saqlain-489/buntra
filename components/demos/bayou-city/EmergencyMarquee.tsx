import { Lightning } from '@phosphor-icons/react/dist/ssr';
import { Marquee } from '../kit/Marquee';
import { marquee } from './content';

// Signature band under the hero: alternating teal/amber pills scrolling on a navy slab.
export function EmergencyMarquee() {
  return (
    <div className="border-y border-[var(--d-line)] bg-[var(--d-primary)] py-3.5">
      <Marquee speed={30}>
        <div className="flex items-center">
          {marquee.map((item, i) => (
            <span key={item} className="flex items-center">
              <span
                className={`mx-2.5 inline-flex items-center gap-2 rounded-[var(--d-radius)] px-4 py-1.5 text-[13px] font-bold uppercase tracking-[0.12em] ${
                  i % 2 === 0
                    ? 'bg-[var(--d-accent)] text-white'
                    : 'bg-[var(--d-accent-2)] text-[color:var(--d-primary)]'
                }`}
              >
                <Lightning size={13} weight="fill" /> {item}
              </span>
            </span>
          ))}
        </div>
      </Marquee>
    </div>
  );
}
