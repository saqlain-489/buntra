import { HonestyBanner } from '../kit/HonestyBanner';
import { ThemeScope } from '../kit/ThemeScope';
import { theme, fontClass } from './theme';
import { brand } from './content';
import { Nav } from './Nav';
import { Hero } from './Hero';
import { Work } from './Work';
import { About } from './About';
import { Testimonials } from './Testimonials';
import { Services } from './Services';
import { Values } from './Values';
import { Process } from './Process';
import { Faq } from './Faq';
import { Cta } from './Cta';
import { Footer } from './Footer';

export default function BayouCity() {
  return (
    <>
      <HonestyBanner site={brand.full} />
      <ThemeScope theme={theme} fontClass={fontClass}>
        <Nav />
        <main>
          <Hero />
          <Work />
          <About />
          <Testimonials />
          <Services />
          <Values />
          <Process />
          <Faq />
          <Cta />
        </main>
        <Footer />
      </ThemeScope>
    </>
  );
}
