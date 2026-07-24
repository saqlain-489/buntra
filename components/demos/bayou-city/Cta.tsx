import { Phone } from '@phosphor-icons/react/dist/ssr';
import { Reveal } from '../kit/Reveal';
import { Container, Badge, Pill, Clouds, display, pillPrimary } from './ui';
import { cta, brand } from './content';

export function Cta() {
  const tel = `tel:${brand.phone.replace(/\D/g, '')}`;
  return (
    <section id="contact" className="bg-white py-20 md:py-28">
      <Container>
        <Reveal variant="scale">
          <div className="relative overflow-hidden rounded-[var(--d-radius-lg)] bg-[var(--d-accent-soft)] px-6 py-16 text-center sm:px-12 md:py-24">
            <Clouds />
            <div className="relative">
              <Badge onTint>{cta.badge}</Badge>
              <h2 className={`${display} mx-auto mt-6 max-w-2xl text-3xl font-bold leading-[1.08] tracking-tight text-[color:var(--d-ink)] sm:text-4xl md:text-5xl`}>
                {cta.heading}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-[color:var(--d-body)]">{cta.sub}</p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Pill href="#work" variant="outline">{cta.secondaryLabel}</Pill>
                <a href={tel} className={pillPrimary}>
                  <Phone size={17} weight="fill" /> {cta.primaryLabel}
                </a>
              </div>
              <p className="mt-6 text-sm text-[color:var(--d-body)]">Or call {brand.phone}, any hour. The inspection is free.</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
