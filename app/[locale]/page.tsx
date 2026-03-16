import { getDictionary, Locale } from '@/lib/getDictionary';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Benefits from '@/components/sections/Benefits';
import Transformations from '@/components/sections/Transformations';
import Testimonials from '@/components/sections/Testimonials';
import Process from '@/components/sections/Process';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import CTABanner from '@/components/sections/CTABanner';
import ScrollToTop from '@/components/ui/ScrollToTop';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';

export default async function Home({ params }: { params: { locale: Locale } }) {
  const locale: Locale = params.locale === 'ro' ? 'ro' : 'en';
  const dict = getDictionary(locale);

  return (
    <>
      <Hero dict={dict} />
      <About dict={dict} />
      <Services dict={dict} />
      <Benefits dict={dict} />
      <Transformations dict={dict} />
      <Testimonials dict={dict} />
      <CTABanner dict={dict} />
      <Process dict={dict} />
      <Pricing dict={dict} />
      <FAQ dict={dict} />
      <Contact dict={dict} />
      <ScrollToTop />
      <FloatingWhatsApp />
    </>
  );
}
