import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Problem } from '@/components/Problem';
import { Services } from '@/components/Services';
import { Concepts } from '@/components/Concepts';
import { Differentiators } from '@/components/Differentiators';
import { Process } from '@/components/Process';
import { Founder } from '@/components/Founder';
import { Faq } from '@/components/Faq';
import { FinalCta } from '@/components/FinalCta';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Services />
        <Concepts />
        <Differentiators />
        <Process />
        <Founder />
        <Faq />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
