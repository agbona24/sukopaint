import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Products from '@/components/Products';
import PaintCalculator from '@/components/PaintCalculator';
import WhyChoose from '@/components/WhyChoose';
import TrustBadges from '@/components/TrustBadges';
import Testimonials from '@/components/Testimonials';
import QuoteForm from '@/components/QuoteForm';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import WhatsAppChat from '@/components/WhatsAppChat';
import ScrollProgress from '@/components/ScrollProgress';
import PaintDrips from '@/components/PaintDrips';
import MagneticCursor from '@/components/MagneticCursor';
import InfiniteMarquee from '@/components/InfiniteMarquee';
import VirtualRoomPainter from '@/components/VirtualRoomPainter';
import ColorPaletteGenerator from '@/components/ColorPaletteGenerator';
import ColorMatcher from '@/components/ColorMatcher';
import PaintTypeComparison from '@/components/PaintTypeComparison';
import PaintQuiz from '@/components/PaintQuiz';
import ProjectPlanner from '@/components/ProjectPlanner';
import SurfaceGuide from '@/components/SurfaceGuide';
import LiveActivityFeed from '@/components/LiveActivityFeed';

export default function Home() {
  const marqueeItems = [
    'Premium Quality Paint',
    'Made in Nigeria',
    'Durable & Long-lasting',
    'Vibrant Colors',
    '100% Satisfaction Guaranteed',
    'Fast Delivery',
    'Expert Support',
  ];

  return (
    <>
      {/* Global Animation Components */}
      <ScrollProgress />
      <PaintDrips />
      <MagneticCursor />
      <LiveActivityFeed />

      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <main id="main-content" className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <Services />

        {/* Infinite Marquee Feature Highlight */}
        <InfiniteMarquee items={marqueeItems} speed={40} />

        <Products />
        <PaintCalculator />

        {/* Interactive Tools Section */}
        <VirtualRoomPainter />
        <ColorPaletteGenerator />
        <ColorMatcher />
        <PaintTypeComparison />

        {/* Engagement Tools */}
        <PaintQuiz />
        <ProjectPlanner />
        <SurfaceGuide />

        <WhyChoose />
        <TrustBadges />
        <Testimonials />
        <QuoteForm />
        <CTA />
        <Footer />
        <WhatsAppChat />
      </main>
    </>
  );
}
