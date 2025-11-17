import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Products from '@/components/Products';
import PaintCalculator from '@/components/PaintCalculator';
import WhyChoose from '@/components/WhyChoose';
import Testimonials from '@/components/Testimonials';
import QuoteForm from '@/components/QuoteForm';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import WhatsAppChat from '@/components/WhatsAppChat';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Products />
      <PaintCalculator />
      <WhyChoose />
      <Testimonials />
      <QuoteForm />
      <CTA />
      <Footer />
      <WhatsAppChat />
    </main>
  );
}
