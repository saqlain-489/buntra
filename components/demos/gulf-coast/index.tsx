import { HonestyBanner } from '../kit/HonestyBanner';
import { ThemeScope } from '../kit/ThemeScope';
import { theme, fontClass } from './theme';
import { brand } from './content';
import { Nav } from './Nav';
import { Hero } from './Hero';
import { TrustBar } from './TrustBar';
import { ClaimStepper } from './ClaimStepper';
import { Services } from './Services';
import { WhyUs } from './WhyUs';
import { Work } from './Work';
import { Testimonials } from './Testimonials';
import { Faq } from './Faq';
import { Cta } from './Cta';
import { Footer } from './Footer';

export default function GulfCoast() {
  return (
    <>
      <HonestyBanner site={brand.full} />
      <ThemeScope theme={theme} fontClass={fontClass}>
        <Nav />
        <main>
          <Hero />
          <TrustBar />
          <ClaimStepper />
          <Services />
          <WhyUs />
          <Work />
          <Testimonials />
          <Faq />
          <Cta />
        </main>
        <Footer />
      </ThemeScope>
    </>
  );
}
