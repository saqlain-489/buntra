import { HonestyBanner } from '../kit/HonestyBanner';
import { ThemeScope } from '../kit/ThemeScope';
import { theme, fontClass } from './theme';
import { brand } from './content';
import { Nav } from './Nav';
import { Hero } from './Hero';
import { Services } from './Services';
import { WhyUs } from './WhyUs';
import { Work } from './Work';
import { Testimonials } from './Testimonials';
import { Process } from './Process';
import { Faq } from './Faq';
import { Cta } from './Cta';
import { Footer } from './Footer';

export default function SummitRidge() {
  return (
    <>
      <HonestyBanner site={brand.full} />
      <ThemeScope theme={theme} fontClass={fontClass}>
        <Nav />
        <main>
          <Hero />
          <Services />
          <WhyUs />
          <Work />
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
