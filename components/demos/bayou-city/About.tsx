import { Reveal } from '../kit/Reveal';
import { Container, Badge, Pill, display } from './ui';
import { about } from './content';

export function About() {
  return (
    <section id="about" className="bg-[var(--d-bg)] py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal variant="right">
            <div>
              <Badge onTint>{about.badge}</Badge>
              <h2 className={`${display} mt-5 text-3xl font-bold leading-[1.08] tracking-tight text-[color:var(--d-ink)] sm:text-4xl md:text-[2.6rem]`}>
                {about.heading}
              </h2>
              {about.paragraphs.map((p) => (
                <p key={p} className="mt-5 max-w-xl text-lg leading-relaxed text-[color:var(--d-body)]">{p}</p>
              ))}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Pill href="#work" variant="outline">See our work</Pill>
                <Pill href="#contact">Get in touch</Pill>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {about.metrics.map((m, i) => (
              <Reveal key={m.label} variant="left" delay={i * 0.08} className={i === 0 ? 'col-span-2' : ''}>
                <div className="flex h-full flex-col justify-center rounded-2xl border border-[var(--d-line)] bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:p-8">
                  <span className={`${display} text-4xl font-bold tracking-tight text-[color:var(--d-ink)] sm:text-5xl`}>{m.value}</span>
                  <span className="mt-2 text-sm font-medium text-[color:var(--d-body)]">{m.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
