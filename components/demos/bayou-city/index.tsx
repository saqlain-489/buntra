import { HonestyBanner } from '../kit/HonestyBanner';
import { ThemeScope } from '../kit/ThemeScope';
import { theme, fontClass } from './theme';
import { brand } from './content';
import { Nav } from './Nav';
import { Hero } from './Hero';
import { EmergencyMarquee } from './EmergencyMarquee';
import { Services } from './Services';
import { WhyUs } from './WhyUs';
import { Work } from './Work';
import { Process } from './Process';
import { Testimonials } from './Testimonials';
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
          <EmergencyMarquee />
          <Services />
          <WhyUs />
          <Work />
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
