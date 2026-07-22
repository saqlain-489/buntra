import { HonestyBanner } from '../kit/HonestyBanner';
import { ThemeScope } from '../kit/ThemeScope';
import { theme, fontClass } from './theme';
import { brand } from './content';
import { Nav } from './Nav';
import { Hero } from './Hero';
import { Capabilities } from './Capabilities';
import { SpecsBand } from './SpecsBand';
import { WhyUs } from './WhyUs';
import { Projects } from './Projects';
import { Process } from './Process';
import { Testimonials } from './Testimonials';
import { Faq } from './Faq';
import { Cta } from './Cta';
import { Footer } from './Footer';

export default function Ironclad() {
  return (
    <>
      <HonestyBanner site={brand.full} />
      <ThemeScope theme={theme} fontClass={fontClass}>
        <Nav />
        <main>
          <Hero />
          <Capabilities />
          <SpecsBand />
          <WhyUs />
          <Projects />
          <Process />
          <Testimonials />
          <Faq />
          <Cta />
        </main>
        <Footer />
      </ThemeScope>
    </>
  );
}
