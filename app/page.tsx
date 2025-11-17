import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import WhatsAppChat from '@/components/WhatsAppChat';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Products />
      <Testimonials />
      <Footer />
      <WhatsAppChat />
    </main>
  );
}
