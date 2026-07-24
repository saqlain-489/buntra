import { HonestyBanner } from '../kit/HonestyBanner';
import { ThemeScope } from '../kit/ThemeScope';
import { theme, fontClass } from './theme';
import { brand } from './content';
import { Nav } from './Nav';
import { Hero } from './Hero';
import { TrustTicker } from './TrustTicker';
import { Services } from './Services';
import { Work } from './Work';
import { About } from './About';
import { Testimonials } from './Testimonials';
import { Process } from './Process';
import { Faq } from './Faq';
import { Cta } from './Cta';
import { Footer } from './Footer';

export default function SummitRidge() {
  return (
    <>
      <HonestyBanner site={brand.full} />
      <ThemeScope theme={theme} fontClass={fontClass} className="selection:bg-blue-500/30">
        <Nav />
        <main>
          <Hero />
          <TrustTicker />
          <Services />
          <Work />
          <About />
          <Testimonials />
          <Process />
          <Faq />
          <Cta />
        </main>
        <Footer />
      </ThemeScope>
    </>
  );
}
