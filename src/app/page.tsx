import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/PortFolio';
import Testimonials from '@/components/Testimonial';
import Contact from '@/components/Contact';
import Navbar from '@/components/NavBar';
import PortalPreview from '@/components/WritingSample';
import Comparison from '@/components/Comparison';
import Footer from '@/components/Footer';
import PricingSection from '@/components/Pricing';
import About from '@/components/About';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <PricingSection />
      <Comparison />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}