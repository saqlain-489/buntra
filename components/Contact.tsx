import { Container, Heading } from './primitives';
import { Reveal } from './Reveal';
import { MockupForm } from './MockupForm';
import { contact } from '@/lib/content';

export function Contact() {
  return (
    <section id="mockup" className="bg-[var(--color-accent-soft)] py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <Reveal>
            <div>
              <Heading className="text-3xl leading-[1.05] sm:text-4xl lg:text-5xl">
                {contact.heading}
              </Heading>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-[var(--color-body)]">
                {contact.sub}
              </p>

              <ol className="mt-9 space-y-5">
                {contact.steps.map((step, i) => (
                  <li key={step} className="flex items-start gap-4">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[var(--color-ink)] font-[family-name:var(--font-display)] text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="pt-0.5 text-[15px] leading-relaxed text-[var(--color-body)]">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <MockupForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
