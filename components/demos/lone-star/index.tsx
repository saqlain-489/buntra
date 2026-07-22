import { HonestyBanner } from '../kit/HonestyBanner';
import { ThemeScope } from '../kit/ThemeScope';
import { theme, fontClass } from './theme';
import { brand } from './content';
import { Nav } from './Nav';
import { Hero } from './Hero';
import { TrustBadges } from './TrustBadges';
import { Services } from './Services';
import { Story } from './Story';
import { Work } from './Work';
import { Testimonials } from './Testimonials';
import { Process } from './Process';
import { Faq } from './Faq';
import { Cta } from './Cta';
import { Footer } from './Footer';

export default function LoneStar() {
  return (
    <>
      <HonestyBanner site={brand.full} />
      <ThemeScope theme={theme} fontClass={fontClass}>
        <Nav />
        <main>
          <Hero />
          <TrustBadges />
          <Services />
          <Story />
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
